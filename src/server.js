#!/usr/bin/env node
/**
 * ═══════════════════════════════════════════════════════════════════════
 *  MARCO.MCP · server.js
 *  Servidor MCP principal · stdio transport
 *  Autor: Marco Antonio Rojas Valdovinos · Toluca, México · 2026
 *  Licencia: Apache 2.0
 * ═══════════════════════════════════════════════════════════════════════
 *
 * Resources (6):
 *   marco://profile     · identidad
 *   marco://current     · estado actual
 *   marco://voice       · estilo de escritura
 *   marco://projects    · proyectos activos
 *   marco://decisions   · log de decisiones
 *   marco://anchors     · anclajes criptográficos
 *
 * Tools (4):
 *   search              · busca texto en el substrato
 *   log_decision        · registra decisión nueva
 *   update_current      · actualiza current.md
 *   snapshot            · calcula hash SHA-256
 */

import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
  CallToolRequestSchema,
  ListResourcesRequestSchema,
  ListToolsRequestSchema,
  ReadResourceRequestSchema,
} from '@modelcontextprotocol/sdk/types.js';

import { DATA_PATH, readMD, readAll, writeMD, listMD, countMD } from './lib/fs-utils.js';
import { sha256, signEd25519 } from './lib/crypto.js';
import { log } from './lib/logger.js';

import { PROFILE_RESOURCE, readProfile } from './resources/profile.js';
import { CURRENT_RESOURCE, readCurrent } from './resources/current.js';
import { VOICE_RESOURCE, readVoice } from './resources/voice.js';
import { PROJECTS_RESOURCE, readProjects } from './resources/projects.js';
import { DECISIONS_RESOURCE, readDecisions } from './resources/decisions.js';
import { ANCHORS_RESOURCE, readAnchors } from './resources/anchors.js';

// ─────────────────────────────────────────────────────────────────────
// Servidor
// ─────────────────────────────────────────────────────────────────────

const server = new Server(
  {
    name: 'marco.mcp',
    version: '0.1.0',
  },
  {
    capabilities: {
      resources: {},
      tools: {},
    },
  }
);

// ─────────────────────────────────────────────────────────────────────
// Resources
// ─────────────────────────────────────────────────────────────────────

const RESOURCES = [
  PROFILE_RESOURCE,
  CURRENT_RESOURCE,
  VOICE_RESOURCE,
  PROJECTS_RESOURCE,
  DECISIONS_RESOURCE,
  ANCHORS_RESOURCE,
];

server.setRequestHandler(ListResourcesRequestSchema, async () => ({
  resources: RESOURCES,
}));

server.setRequestHandler(ReadResourceRequestSchema, async ({ params }) => {
  const { uri } = params;
  const meta = RESOURCES.find((r) => r.uri === uri);
  const mimeType = meta?.mimeType || 'text/plain';

  const handlers = {
    'marco://profile': readProfile,
    'marco://current': readCurrent,
    'marco://voice': readVoice,
    'marco://projects': readProjects,
    'marco://decisions': readDecisions,
    'marco://anchors': readAnchors,
  };

  const handler = handlers[uri];
  if (!handler) {
    throw new Error(`URI desconocida: ${uri}`);
  }

  log.debug(`Read resource: ${uri}`);
  const text = await handler();

  return {
    contents: [
      {
        uri,
        mimeType,
        text,
      },
    ],
  };
});

// ─────────────────────────────────────────────────────────────────────
// Tools
// ─────────────────────────────────────────────────────────────────────

server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [
    {
      name: 'search',
      description: 'Busca texto en todo el substrato (perfil, proyectos, decisiones)',
      inputSchema: {
        type: 'object',
        properties: {
          query: {
            type: 'string',
            description: 'Texto a buscar (case-insensitive)',
          },
        },
        required: ['query'],
      },
    },
    {
      name: 'log_decision',
      description: 'Registra una decisión arquitectónica nueva como archivo markdown',
      inputSchema: {
        type: 'object',
        properties: {
          title: { type: 'string', description: 'Título corto de la decisión' },
          context: { type: 'string', description: 'Contexto de por qué surgió' },
          decision: { type: 'string', description: 'Qué se decidió' },
          reason: { type: 'string', description: 'Por qué se decidió esto' },
          alternative: { type: 'string', description: 'Alternativa descartada' },
        },
        required: ['title', 'decision', 'reason'],
      },
    },
    {
      name: 'update_current',
      description: 'Sobrescribe current.md con nuevo contenido',
      inputSchema: {
        type: 'object',
        properties: {
          content: {
            type: 'string',
            description: 'Contenido markdown completo del nuevo current.md',
          },
        },
        required: ['content'],
      },
    },
    {
      name: 'snapshot',
      description: 'Calcula hash SHA-256 del estado actual del substrato',
      inputSchema: {
        type: 'object',
        properties: {},
      },
    },
  ],
}));

server.setRequestHandler(CallToolRequestSchema, async ({ params }) => {
  const { name, arguments: args = {} } = params;

  log.debug(`Tool call: ${name}`);

  // ─── Tool: search ─────────────────────────────────────────────────
  if (name === 'search') {
    const { query } = args;

    if (!query || query.length < 2) {
      return {
        content: [{ type: 'text', text: '⚠ El query debe tener al menos 2 caracteres.' }],
      };
    }

    const results = [];
    const flat = ['profile.md', 'current.md', 'voice.md'];

    for (const f of flat) {
      const content = await readMD(f);
      if (content.toLowerCase().includes(query.toLowerCase())) {
        results.push(`📄 **${f}**\n\n${excerpt(content, query)}`);
      }
    }

    for (const dir of ['projects', 'decisions']) {
      for (const f of await listMD(dir)) {
        const content = await readMD(`${dir}/${f}`);
        if (content.toLowerCase().includes(query.toLowerCase())) {
          results.push(`📄 **${dir}/${f}**\n\n${excerpt(content, query)}`);
        }
      }
    }

    const text = results.length
      ? `🔍 **${results.length} resultado(s) para** \`${query}\`\n\n${results.join('\n\n---\n\n')}`
      : `🔍 Sin resultados para: \`${query}\``;

    return { content: [{ type: 'text', text }] };
  }

  // ─── Tool: log_decision ───────────────────────────────────────────
  if (name === 'log_decision') {
    const { title, context = '', decision, reason, alternative = '' } = args;

    const date = new Date().toISOString().slice(0, 10);
    const slug = title
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');

    const filename = `${date}-${slug}.md`;

    const body = `# Decisión: ${title}

**Fecha:** ${date}
**Estado:** aceptada

---

## Contexto

${context || '_(no especificado)_'}

## Decisión

${decision}

## Razón

${reason}

## Alternativa descartada

${alternative || '_(no especificada)_'}

---

© 2026 Marco Antonio Rojas Valdovinos
`;

    await writeMD(`decisions/${filename}`, body);
    log.info(`Decisión guardada: ${filename}`);

    return {
      content: [
        {
          type: 'text',
          text: `✅ Decisión guardada en \`decisions/${filename}\``,
        },
      ],
    };
  }

  // ─── Tool: update_current ─────────────────────────────────────────
  if (name === 'update_current') {
    const { content } = args;

    if (!content || content.length < 10) {
      return {
        content: [{ type: 'text', text: '⚠ El contenido es demasiado corto.' }],
      };
    }

    await writeMD('current.md', content);
    log.info('current.md actualizado');

    return {
      content: [{ type: 'text', text: '✅ `current.md` actualizado correctamente.' }],
    };
  }

  // ─── Tool: snapshot ───────────────────────────────────────────────
  if (name === 'snapshot') {
    const all = await readAll();
    const hash = sha256(all);
    const signature = signEd25519(hash);
    const date = new Date().toISOString();

    const projectsCount = await countMD('projects');
    const decisionsCount = await countMD('decisions');

    const lines = [
      '🔐 **Snapshot del substrato**',
      '',
      `\`\`\``,
      `SHA-256:     ${hash}`,
      signature ? `Firma:       ${signature.slice(0, 32)}...` : 'Firma:       (sin clave Ed25519)',
      `Fecha:       ${date}`,
      `Proyectos:   ${projectsCount}`,
      `Decisiones:  ${decisionsCount}`,
      `\`\`\``,
    ];

    return { content: [{ type: 'text', text: lines.join('\n') }] };
  }

  throw new Error(`Tool desconocida: ${name}`);
});

// ─────────────────────────────────────────────────────────────────────
// Utilidades
// ─────────────────────────────────────────────────────────────────────

/**
 * Extrae un fragmento de contexto alrededor de una coincidencia.
 * @param {string} content
 * @param {string} query
 * @returns {string}
 */
function excerpt(content, query) {
  const idx = content.toLowerCase().indexOf(query.toLowerCase());
  if (idx === -1) return '';

  const start = Math.max(0, idx - 100);
  const end = Math.min(content.length, idx + query.length + 100);
  const fragment = content.slice(start, end);

  return `> ...${fragment.replace(/\n/g, ' ')}...`;
}

// ─────────────────────────────────────────────────────────────────────
// Arranque
// ─────────────────────────────────────────────────────────────────────

const transport = new StdioServerTransport();

try {
  await server.connect(transport);
  log.ready(`Servidor iniciado · data: ${DATA_PATH}`);
  log.info(`Resources: ${RESOURCES.length} · Tools: 4`);
} catch (err) {
  log.error('Fallo al arrancar:', err.message);
  process.exit(1);
}