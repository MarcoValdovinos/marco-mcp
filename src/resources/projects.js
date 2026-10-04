/**
 * ═══════════════════════════════════════════════════════════════════════
 *  MARCO.MCP · resources/projects.js
 *  Resource: marco://projects
 *  Autor: Marco Antonio Rojas Valdovinos · Toluca, México · 2026
 * ═══════════════════════════════════════════════════════════════════════
 */

import { readMD, listMD } from '../lib/fs-utils.js';

export const PROJECTS_RESOURCE = {
  uri: 'marco://projects',
  name: 'Proyectos activos',
  description: '7 proyectos documentados: KRONOS API, KÓDICE, YEJIDÁ, MD-33, VAULT, CORTEX',
  mimeType: 'text/markdown',
};

/**
 * Lee y concatena todos los proyectos activos.
 * @returns {Promise<string>}
 */
export async function readProjects() {
  const files = await listMD('projects');

  if (files.length === 0) {
    return '_[no hay proyectos registrados]_';
  }

  const blocks = await Promise.all(
    files.map(async (f) => {
      const name = f.replace('.md', '');
      const content = await readMD(`projects/${f}`);
      return `# 📦 ${name}\n\n${content}`;
    })
  );

  return blocks.join('\n\n---\n\n');
}