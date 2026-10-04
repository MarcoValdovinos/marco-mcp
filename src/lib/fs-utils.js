/**
 * ═══════════════════════════════════════════════════════════════════════
 *  MARCO.MCP · lib/fs-utils.js
 *  Utilidades para leer, listar y escribir el substrato.
 *  Autor: Marco Antonio Rojas Valdovinos · Toluca, México · 2026
 * ═══════════════════════════════════════════════════════════════════════
 */

import { readFile, readdir, writeFile, mkdir, stat } from 'node:fs/promises';
import { join, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

/**
 * Ruta raíz del substrato.
 * Configurable via MARCO_CORE_PATH.
 * Default: ./data en la raíz del repo.
 */
export const DATA_PATH = process.env.MARCO_CORE_PATH
  ? resolve(process.env.MARCO_CORE_PATH)
  : resolve(__dirname, '..', '..', 'data');

/**
 * Lee un archivo del substrato.
 * @param {string} relPath - Ruta relativa dentro de data/
 * @returns {Promise<string>} contenido o mensaje de error
 */
export async function readMD(relPath) {
  try {
    return await readFile(join(DATA_PATH, relPath), 'utf8');
  } catch {
    return `_[archivo no encontrado: ${relPath}]_`;
  }
}

/**
 * Lista archivos .md en un directorio del substrato.
 * Excluye archivos que empiezan con `_` (índices/templates).
 * @param {string} dir - Directorio relativo dentro de data/
 * @returns {Promise<string[]>} nombres de archivo ordenados
 */
export async function listMD(dir) {
  try {
    const files = await readdir(join(DATA_PATH, dir));
    return files
      .filter((f) => f.endsWith('.md') && !f.startsWith('_'))
      .sort();
  } catch {
    return [];
  }
}

/**
 * Escribe contenido en un archivo del substrato.
 * Crea directorios si no existen.
 * @param {string} relPath - Ruta relativa dentro de data/
 * @param {string} content - Contenido a escribir
 */
export async function writeMD(relPath, content) {
  const fullPath = join(DATA_PATH, relPath);
  await mkdir(dirname(fullPath), { recursive: true });
  await writeFile(fullPath, content, 'utf8');
}

/**
 * Verifica si un archivo existe.
 * @param {string} relPath - Ruta relativa dentro de data/
 * @returns {Promise<boolean>}
 */
export async function exists(relPath) {
  try {
    await stat(join(DATA_PATH, relPath));
    return true;
  } catch {
    return false;
  }
}

/**
 * Concatena todos los markdown del substrato en un solo string.
 * Útil para hashing y snapshots.
 * @returns {Promise<string>}
 */
export async function readAll() {
  const blocks = [];
  const flat = ['profile.md', 'current.md', 'voice.md', 'anchors.json'];

  for (const f of flat) {
    blocks.push(`# ${f}\n\n${await readMD(f)}`);
  }

  for (const dir of ['projects', 'decisions']) {
    for (const f of await listMD(dir)) {
      blocks.push(`# ${dir}/${f}\n\n${await readMD(`${dir}/${f}`)}`);
    }
  }

  return blocks.join('\n\n---\n\n');
}

/**
 * Cuenta archivos de un tipo en un directorio.
 * @param {string} dir
 * @returns {Promise<number>}
 */
export async function countMD(dir) {
  return (await listMD(dir)).length;
}