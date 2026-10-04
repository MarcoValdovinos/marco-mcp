/**
 * ═══════════════════════════════════════════════════════════════════════
 *  MARCO.MCP · resources/profile.js
 *  Resource: marco://profile
 *  Autor: Marco Antonio Rojas Valdovinos · Toluca, México · 2026
 * ═══════════════════════════════════════════════════════════════════════
 */

import { readMD } from '../lib/fs-utils.js';

export const PROFILE_RESOURCE = {
  uri: 'marco://profile',
  name: 'Perfil del autor',
  description: 'Identidad, bio, stack y principios operativos',
  mimeType: 'text/markdown',
};

/**
 * Lee el perfil del titular.
 * @returns {Promise<string>}
 */
export async function readProfile() {
  return readMD('profile.md');
}