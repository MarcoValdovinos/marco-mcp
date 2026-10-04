#!/usr/bin/env node
/**
 * ═══════════════════════════════════════════════════════════════════════
 *  MARCO.MCP · snapshot.js
 *  Script standalone para generar snapshot firmado del substrato.
 *  Autor: Marco Antonio Rojas Valdovinos · Toluca, México · 2026
 * ═══════════════════════════════════════════════════════════════════════
 *
 * Uso:
 *   npm run snapshot
 *   node src/snapshot.js
 *
 * Output:
 *   snapshots/snapshot-YYYY-MM-DDTHH-MM-SS.json
 *
 * Estructura del snapshot:
 *   {
 *     "date": "ISO 8601",
 *     "sha256": "hash del substrato completo",
 *     "signature": "firma Ed25519 (o null)",
 *     "version": "0.1.0"
 *   }
 */

import { readAll, countMD } from './lib/fs-utils.js';
import { sha256, signEd25519 } from './lib/crypto.js';
import { log } from './lib/logger.js';
import { writeFile, mkdir } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SNAPSHOT_DIR = join(__dirname, '..', 'snapshots');

async function main() {
  log.info('Generando snapshot del substrato...');

  // 1. Leer todo el substrato
  const all = await readAll();

  if (all.length < 100) {
    log.error('Substrato vacío o incompleto. Abortando.');
    process.exit(1);
  }

  // 2. Calcular hash
  const hash = sha256(all);

  // 3. Firmar con Ed25519 (si hay clave)
  const signature = signEd25519(hash);

  // 4. Metadatos
  const date = new Date().toISOString();
  const projectsCount = await countMD('projects');
  const decisionsCount = await countMD('decisions');

  const snapshot = {
    date,
    sha256: hash,
    signature: signature || null,
    version: '0.1.0',
    stats: {
      projects: projectsCount,
      decisions: decisionsCount,
      bytes: all.length,
    },
  };

  // 5. Guardar
  await mkdir(SNAPSHOT_DIR, { recursive: true });
  const filename = `snapshot-${date.replace(/[:.]/g, '-')}.json`;
  const filepath = join(SNAPSHOT_DIR, filename);

  await writeFile(filepath, JSON.stringify(snapshot, null, 2), 'utf8');

  // 6. Reportar
  console.log('');
  console.log('🔐 Snapshot generado');
  console.log(`   Archivo:     snapshots/${filename}`);
  console.log(`   SHA-256:     ${hash}`);
  console.log(`   Firma:       ${signature ? signature.slice(0, 32) + '...' : '(sin clave Ed25519)'}`);
  console.log(`   Fecha:       ${date}`);
  console.log(`   Proyectos:   ${projectsCount}`);
  console.log(`   Decisiones:  ${decisionsCount}`);
  console.log('');

  log.ready('Snapshot completo');
}

main().catch((err) => {
  log.error('Error en snapshot:', err.message);
  process.exit(1);
});