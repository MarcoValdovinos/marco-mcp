/**
 * ═══════════════════════════════════════════════════════════════════════
 *  MARCO.MCP · resources/anchors.js
 *  Resource: marco://anchors
 *  Autor: Marco Antonio Rojas Valdovinos · Toluca, México · 2026
 * ═══════════════════════════════════════════════════════════════════════
 */

import { readMD } from '../lib/fs-utils.js';

export const ANCHORS_RESOURCE = {
  uri: 'marco://anchors',
  name: 'Anclajes criptográficos',
  description: 'Safe Creative, Ethereum, hashes SHA-256 verificables',
  mimeType: 'application/json',
};

/**
 * Lee y valida los anclajes criptográficos.
 * Si el JSON está malformado, devuelve el contenido crudo.
 *
 * @returns {Promise<string>}
 */
export async function readAnchors() {
  const raw = await readMD('anchors.json');

  try {
    const parsed = JSON.parse(raw);
    return JSON.stringify(parsed, null, 2);
  } catch {
    return raw;
  }
}