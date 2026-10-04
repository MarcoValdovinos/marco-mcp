/**
 * ═══════════════════════════════════════════════════════════════════════
 *  MARCO.MCP · lib/logger.js
 *  Logger minimalista con prefijo, emojis y niveles.
 *  Autor: Marco Antonio Rojas Valdovinos · Toluca, México · 2026
 * ═══════════════════════════════════════════════════════════════════════
 *
 * Usa console.error para no interferir con stdout (MCP usa stdio).
 * Activa modo debug con: MARCO_DEBUG=1
 */

const PREFIX = '[marco.mcp]';
const DEBUG = process.env.MARCO_DEBUG === '1';

export const log = {
  /** ℹ Información general */
  info: (...args) => console.error(`${PREFIX} ℹ`, ...args),

  /** ⚠ Advertencia no bloqueante */
  warn: (...args) => console.error(`${PREFIX} ⚠`, ...args),

  /** ✖ Error recuperable */
  error: (...args) => console.error(`${PREFIX} ✖`, ...args),

  /** ◇ Debug (solo si MARCO_DEBUG=1) */
  debug: (...args) => DEBUG && console.error(`${PREFIX} ◇`, ...args),

  /** ✅ Confirmación de éxito */
  ready: (...args) => console.error(`${PREFIX} ✅`, ...args),

  /** 🔐 Evento de seguridad */
  security: (...args) => console.error(`${PREFIX} 🔐`, ...args),

  /** 📊 Métricas */
  metric: (...args) => console.error(`${PREFIX} 📊`, ...args),
};

export const isDebug = () => DEBUG;