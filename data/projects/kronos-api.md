<!-- ═══════════════════════════════════════════════════════════════════════ -->
<!--  MARCO.MCP · data/projects/kronos-api.md                               -->
<!--  Certificación de productos · Folios + QR + Blockchain                 -->
<!--  Autor: Marco Antonio Rojas Valdovinos · Toluca, México · 2026         -->
<!-- ═══════════════════════════════════════════════════════════════════════ -->

<div align="center">

```
    ╔═══════════════════════════════════════════════════════════════╗
    ║                                                               ║
    ║      ██╗  ██╗██████╗  ██████╗ ███╗   ██╗ ██████╗ ███████╗      ║
    ║      ██║ ██╔╝██╔══██╗██╔═══██╗████╗  ██║██╔═══██╗██╔════╝      ║
    ║      █████╔╝ ██████╔╝██║   ██║██╔██╗ ██║██║   ██║███████╗      ║
    ║      ██╔═██╗ ██╔══██╗██║   ██║██║╚██╗██║██║   ██║╚════██║      ║
    ║      ██║  ██╗██║  ██║╚██████╔╝██║ ╚████║╚██████╔╝███████║      ║
    ║      ╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═══╝ ╚═════╝ ╚══════╝      ║
    ║                                                               ║
    ╚═══════════════════════════════════════════════════════════════╝
```

# 🛰️ KRONOS API

### Certificación criptográfica de productos físicos

*Folios únicos + QR + Revocación + Honeypot*

[![Status](https://img.shields.io/badge/status-prototype-orange?style=for-the-badge)](#)
[![Stack](https://img.shields.io/badge/stack-Node%20%C2%B7%20Supabase%20%C2%B7%20Vercel-7c3aed?style=for-the-badge)](.)
[![Priority](https://img.shields.io/badge/priority-high-ff4d6a?style=for-the-badge)](.)

**`○_●`** &nbsp;·&nbsp; **Lo que no se puede verificar, no existe**

</div>

---

## 📑 Índice

| Sección | Contenido |
|:--------|:----------|
| [🎯 Qué hace](#-qué-hace) | Función principal |
| [🛠️ Stack](#%EF%B8%8F-stack) | Tecnologías |
| [📂 Archivos](#-archivos-clave) | Estructura del código |
| [🎯 Mercado](#-mercado) | Cliente objetivo |
| [💰 Modelo](#-modelo-comercial) | Precios |
| [🚧 Pendientes](#-pendientes) | Trabajo por hacer |
| [🔗 Decisiones](#-decisiones-relacionadas) | Contexto arquitectónico |

---

## 🎯 Qué hace

Certificación de productos físicos mediante folios únicos con:

<table>
<tr><td width="15%" align="center">📋</td><td><strong>Folios únicos</strong> por producto o lote</td></tr>
<tr><td align="center">📱</td><td><strong>QR</strong> que apunta a verificador público</td></tr>
<tr><td align="center">🚫</td><td><strong>Revocación</strong> con token admin</td></tr>
<tr><td align="center">🍯</td><td><strong>Honeypot</strong> con alertas Telegram</td></tr>
<tr><td align="center">⛓️</td><td><strong>Anclaje</strong> opcional a Ethereum</td></tr>
</table>

---

## 🛠️ Stack

<table>
<tr>
<th width="30%">Componente</th>
<th width="70%">Tecnología</th>
</tr>
<tr><td><strong>Backend</strong></td><td>Node.js ESM</td></tr>
<tr><td><strong>Datos</strong></td><td>Supabase (PostgreSQL)</td></tr>
<tr><td><strong>Deploy</strong></td><td>Vercel serverless</td></tr>
<tr><td><strong>Firma</strong></td><td>HMAC / Ed25519</td></tr>
<tr><td><strong>Alertas</strong></td><td>Telegram Bot API</td></tr>
</table>

---

## 📂 Archivos clave

<table>
<tr>
<th width="40%">Archivo</th>
<th width="60%">Función</th>
</tr>
<tr><td><code>api/verify.js</code></td><td>Verificación pública de folios</td></tr>
<tr><td><code>api/revoke.js</code></td><td>Revocación admin</td></tr>
<tr><td><code>api/trap.js</code></td><td>Honeypot perimetral</td></tr>
<tr><td><code>api/generate-pdf.js</code></td><td>Certificado HTML (renombrar)</td></tr>
<tr><td><code>scripts/bulk-insert.js</code></td><td>Carga masiva</td></tr>
<tr><td><code>scripts/generate-qr.js</code></td><td>Generación de QRs</td></tr>
<tr><td><code>lib/supabase.js</code></td><td>Cliente DB compartido</td></tr>
<tr><td><code>lib/utils.js</code></td><td>Utilidades compartidas</td></tr>
</table>

---

## 🎯 Mercado

<table>
<tr><td width="20%" align="center">🏷️</td><td>Marcas medianas</td></tr>
<tr><td align="center">🏭</td><td>Manufactura</td></tr>
<tr><td align="center">🛒</td><td>Retail con problema de falsificación</td></tr>
<tr><td align="center">💊</td><td>Farmacéuticas (trazabilidad)</td></tr>
</table>

---

## 💰 Modelo comercial

<table>
<tr>
<th width="50%">Concepto</th>
<th width="50%" align="right">Precio</th>
</tr>
<tr>
<td><strong>Setup</strong></td>
<td align="right"><code>$3,000 - $8,000 USD</code></td>
</tr>
<tr>
<td><strong>Recurrente</strong></td>
<td align="right"><code>$0.03 - $0.08 USD / folio</code></td>
</tr>
</table>

---

## 🚧 Pendientes

<table>
<tr><td align="center" width="30px">⬜</td><td>Aplicar parches de seguridad</td></tr>
<tr><td align="center">⬜</td><td>Migrar a HMAC determinista con columna <code>lote</code></td></tr>
<tr><td align="center">⬜</td><td>Rate limit en verify y trap</td></tr>
<tr><td align="center">⬜</td><td>Aviso de privacidad</td></tr>
<tr><td align="center">⬜</td><td>RLS en Supabase</td></tr>
<tr><td align="center">⬜</td><td>Renombrar <code>generate-pdf</code> a <code>generate-certificate</code></td></tr>
</table>

---

## 🔗 Decisiones relacionadas

<table>
<tr>
<td width="40%">📝 <strong>Dual License Model</strong></td>
<td><a href="../decisions/2026-09-dual-license-model.md"><code>2026-09-dual-license-model.md</code></a></td>
</tr>
</table>

---

<div align="center">

### 🛰️

```
    ┌─────────────────────────────────────────────────┐
    │  Un folio sin verificación es solo un número.   │
    │  Un folio verificable es prueba.                │
    │                                                 │
    │  ── Sin permiso de terceros ──                  │
    └─────────────────────────────────────────────────┘
```

**⬢ marco.mcp · data/projects/kronos-api.md**

*Lo que no se puede verificar, no existe.*

© 2026 Marco Antonio Rojas Valdovinos · `DMD-33 ●_○`

</div>