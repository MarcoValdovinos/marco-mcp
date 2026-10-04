/**
 * ═══════════════════════════════════════════════════════════════════════
 *  MARCO.MCP · lib/crypto.js
 *  Utilidades criptográficas para hashing y firma.
 *  Autor: Marco Antonio Rojas Valdovinos · Toluca, México · 2026
 * ═══════════════════════════════════════════════════════════════════════
 *
 * Estándares usados:
 *   - SHA-256: NIST FIPS 180-4
 *   - Ed25519: RFC 8032
 */

import {
  createHash,
  sign,
  verify,
  createPrivateKey,
  createPublicKey,
} from 'node:crypto';

/**
 * Calcula SHA-256 de un texto.
 * @param {string} text
 * @returns {string} hash en hexadecimal (64 chars)
 */
export function sha256(text) {
  return createHash('sha256').update(text, 'utf8').digest('hex');
}

/**
 * Firma un texto con Ed25519 usando la clave privada del entorno.
 * Retorna null si no hay clave configurada (modo degradado).
 *
 * @param {string} text - Texto a firmar
 * @returns {string|null} firma en hexadecimal, o null
 */
export function signEd25519(text) {
  const pem = process.env.ED25519_PRIVATE_KEY;
  if (!pem) return null;

  try {
    const privateKey = createPrivateKey({
      key: pem.replace(/\\n/g, '\n'),
      format: 'pem',
      type: 'pkcs8',
    });
    const signature = sign(null, Buffer.from(text, 'utf8'), privateKey);
    return signature.toString('hex');
  } catch {
    return null;
  }
}

/**
 * Verifica una firma Ed25519.
 * Retorna false si no hay clave pública configurada.
 *
 * @param {string} text - Texto original
 * @param {string} signatureHex - Firma en hexadecimal
 * @param {string} [publicKeyPem] - Clave pública opcional (usa env si no se pasa)
 * @returns {boolean}
 */
export function verifyEd25519(text, signatureHex, publicKeyPem) {
  const pem = publicKeyPem || process.env.ED25519_PUBLIC_KEY;
  if (!pem) return false;

  try {
    const publicKey = createPublicKey({
      key: pem.replace(/\\n/g, '\n'),
      format: 'pem',
      type: 'spki',
    });
    return verify(
      null,
      Buffer.from(text, 'utf8'),
      publicKey,
      Buffer.from(signatureHex, 'hex')
    );
  } catch {
    return false;
  }
}

/**
 * Genera un par de llaves Ed25519 nuevo.
 * Útil para setup inicial.
 *
 * @returns {{ privateKey: string, publicKey: string }}
 */
export function generateKeyPair() {
  const { privateKey, publicKey } = require('node:crypto').generateKeyPairSync('ed25519');
  return {
    privateKey: privateKey.export({ type: 'pkcs8', format: 'pem' }).toString(),
    publicKey: publicKey.export({ type: 'spki', format: 'pem' }).toString(),
  };
}