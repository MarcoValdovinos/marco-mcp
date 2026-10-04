/**
 * ═══════════════════════════════════════════════════════════════════════
 *  MARCO.MCP · resources/voice.js
 *  Resource: marco://voice
 *  Autor: Marco Antonio Rojas Valdovinos · Toluca, México · 2026
 * ═══════════════════════════════════════════════════════════════════════
 */

import { readMD } from '../lib/fs-utils.js';

export const VOICE_RESOURCE = {
  uri: 'marco://voice',
  name: 'Estilo de escritura',
  description: 'Tono, frases características, anti-patrones, ejemplos',
  mimeType: 'text/markdown',
};

/**
 * Lee el estilo de escritura del titular.
 * @returns {Promise<string>}
 */
export async function readVoice() {
  return readMD('voice.md');
}