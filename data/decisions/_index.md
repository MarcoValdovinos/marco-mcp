<!-- ═══════════════════════════════════════════════════════════════════════ -->
<!--  MARCO.MCP · data/decisions/_index.md                                  -->
<!--  Índice maestro del log de decisiones arquitectónicas                  -->
<!--  Autor: Marco Antonio Rojas Valdovinos · Toluca, México · 2026         -->
<!-- ═══════════════════════════════════════════════════════════════════════ -->

<div align="center">

```
    ╔═══════════════════════════════════════════════════════════════╗
    ║                                                               ║
    ║   ██████╗ ███████╗ ██████╗██╗███████╗██╗ ██████╗ ███╗   ██╗    ║
    ║   ██╔══██╗██╔════╝██╔════╝██║██╔════╝██║██╔═══██╗████╗  ██║    ║
    ║   ██║  ██║█████╗  ██║     ██║███████╗██║██║   ██║██╔██╗ ██║    ║
    ║   ██║  ██║██╔══╝  ██║     ██║╚════██║██║██║   ██║██║╚██╗██║    ║
    ║   ██████╔╝███████╗╚██████╗██║███████║██║╚██████╔╝██║ ╚████║    ║
    ║   ╚═════╝ ╚══════╝ ╚═════╝╚═╝╚══════╝╚═╝ ╚═════╝ ╚═╝  ╚═══╝    ║
    ║                                                               ║
    ╚═══════════════════════════════════════════════════════════════╝
```

# 🧭 Decisiones

### Log arquitectónico

*Cada decisión queda registrada con razón y alternativa descartada.*

[![Format](https://img.shields.io/badge/format-ADR-7c3aed?style=for-the-badge)](.)
[![Entries](https://img.shields.io/badge/entries-3-c9a44c?style=for-the-badge)](.)
[![Status](https://img.shields.io/badge/status-active-10b981?style=for-the-badge)](.)

**`○_●`** &nbsp;·&nbsp; **Decidir es eliminar futuros**

</div>

---

## 📑 Índice

| Sección | Contenido |
|:--------|:----------|
| [📐 Formato](#-formato) | Estructura de cada decisión |
| [📋 Registradas](#-decisiones-registradas) | Tabla de decisiones |
| [🔄 Cómo agregar](#-cómo-agregar-una-decisión) | Proceso |

---

## 📐 Formato

Cada decisión sigue esta estructura:

```markdown
# Decisión: [título]

**Fecha:** YYYY-MM-DD
**Estado:** aceptada | revisada | descartada

## Contexto
[por qué surgió la decisión]

## Decisión
[qué se decidió]

## Razón
[por qué se decidió esto]

## Alternativa descartada
[qué se consideró y por qué se descartó]
```

---

## 📋 Decisiones registradas

<table>
<tr>
<th width="15%" align="center">Fecha</th>
<th width="45%">Decisión</th>
<th width="20%" align="center">Estado</th>
<th width="20%" align="center">Documento</th>
</tr>
<tr>
<td align="center"><code>2026-07</code></td>
<td><strong>🔐 Ed25519 sobre RSA</strong></td>
<td align="center">✅ Aceptada</td>
<td align="center"><a href="./2026-07-ed25519-over-rsa.md">ver</a></td>
</tr>
<tr>
<td align="center"><code>2026-08</code></td>
<td><strong>📜 Estrategia RFC-first</strong></td>
<td align="center">✅ Aceptada</td>
<td align="center"><a href="./2026-08-rfc-first-strategy.md">ver</a></td>
</tr>
<tr>
<td align="center"><code>2026-09</code></td>
<td><strong>⚖️ Modelo de licencia dual</strong></td>
<td align="center">✅ Aceptada</td>
<td align="center"><a href="./2026-09-dual-license-model.md">ver</a></td>
</tr>
</table>

---

## 🔄 Cómo agregar una decisión

Desde Claude (con `marco.mcp` conectado):

```text
Registra esta decisión: usar X en lugar de Y porque Z
```

El tool `log_decision` la guarda automáticamente en este directorio con el formato correcto.

### Parámetros del tool

<table>
<tr>
<td width="25%"><code>title</code></td>
<td>Título corto de la decisión</td>
</tr>
<tr>
<td><code>context</code></td>
<td>Contexto de por qué surgió</td>
</tr>
<tr>
<td><code>decision</code></td>
<td>Qué se decidió</td>
</tr>
<tr>
<td><code>reason</code></td>
<td>Por qué se decidió esto</td>
</tr>
<tr>
<td><code>alternative</code></td>
<td>Alternativa descartada</td>
</tr>
</table>

---

<div align="center">

### 🧭

```
    ┌─────────────────────────────────────────────────┐
    │  Cada decisión elimina futuros posibles.        │
    │  Documentarla es respetar los que dejaste ir.   │
    │                                                 │
    │  ── Decidir es eliminar futuros ──              │
    └─────────────────────────────────────────────────┘
```

**⬢ marco.mcp · data/decisions/_index.md**

*Decidir es eliminar futuros.*

© 2026 Marco Antonio Rojas Valdovinos · `DMD-33 ●_○`

</div>