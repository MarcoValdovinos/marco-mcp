# Política de Seguridad · marco.mcp

## Naturaleza del repositorio

Este repositorio es **privado** y contiene:

- Información personal del titular
- Decisiones arquitectónicas
- Estado de proyectos y presupuesto
- Anclajes criptográficos (públicos por diseño)

## Reglas obligatorias

### ✅ Permitido en el repo

- Archivos markdown de identidad y proyectos
- Hashes SHA-256 y links públicos (Etherscan, Safe Creative)
- Código fuente del servidor MCP
- Documentación técnica

### ❌ Prohibido en el repo

- Claves privadas (Ed25519, HMAC, JWT secrets)
- Tokens de API (Supabase, Vercel, GitHub)
- Contraseñas en texto plano
- Archivos `.env` o `.env.local`
- Datos bancarios o financieros sensibles
- PII de terceros sin consentimiento

## Manejo de claves

### Almacenamiento local

Claves privadas van en `~/.marco-keys/` **fuera del repo**:
