/**
 * ═══════════════════════════════════════════════════════════════════════
 *  MARCO.MCP · resources/decisions.js
 *  Resource: marco://decisions
 *  Autor: Marco Antonio Rojas Valdovinos · Toluca, México · 2026
 * ═══════════════════════════════════════════════════════════════════════
 */

import { readMD, listMD } from '../lib/fs-utils.js';

export const DECISIONS_RESOURCE = {
  uri: 'marco://decisions',
  name: 'Log de decisiones',
  description: 'Decisiones arquitectónicas con razón y alternativa descartada',
  mimeType: 'text/markdown',
};

/**
 * Lee y concatena todas las decisiones, ordenadas por fecha.
 * @returns {Promise<string>}
 */
export async function readDecisions() {
  const files = await listMD('decisions');

  if (files.length === 0) {
    return '_[no hay decisiones registradas]_';
  }

  const blocks = await Promise.all(
    files.map(async (f) => {
      const name = f.replace('.md', '');
      const content = await readMD(`decisions/${f}`);
      return `# 🧭 ${name}\n\n${content}`;
    })
  );

  return blocks.join('\n\n---\n\n');
}