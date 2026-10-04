/**
 * ═══════════════════════════════════════════════════════════════════════
 *  MARCO.MCP · resources/current.js
 *  Resource: marco://current
 *  Autor: Marco Antonio Rojas Valdovinos · Toluca, México · 2026
 * ═══════════════════════════════════════════════════════════════════════
 */

import { readMD } from '../lib/fs-utils.js';

export const CURRENT_RESOURCE = {
  uri: 'marco://current',
  name: 'Estado actual',
  description: 'Foco del día, próximos 7/30/90 días, bloqueadores',
  mimeType: 'text/markdown',
};

/**
 * Lee el estado actual del titular.
 * @returns {Promise<string>}
 */
export async function readCurrent() {
  return readMD('current.md');
}