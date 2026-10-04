<!-- ═══════════════════════════════════════════════════════════════════════ -->
<!--  MARCO.MCP · data/decisions/2026-09-dual-license-model.md              -->
<!--  Decisión arquitectónica: modelo de licencias                          -->
<!--  Autor: Marco Antonio Rojas Valdovinos · Toluca, México · 2026         -->
<!-- ═══════════════════════════════════════════════════════════════════════ -->

<div align="center">

```
    ╔═══════════════════════════════════════════════════════════════╗
    ║                                                               ║
    ║      ██████╗ ██╗   ██╗ █████╗ ██╗         ██╗                 ║
    ║      ██╔══██╗██║   ██║██╔══██╗██║         ██║                 ║
    ║      ██║  ██║██║   ██║███████║██║         ██║                 ║
    ║      ██║  ██║██║   ██║██╔══██║██║         ██║                 ║
    ║      ██████╔╝╚██████╔╝██║  ██║███████╗    ███████╗            ║
    ║      ╚═════╝  ╚═════╝ ╚═╝  ╚═╝╚══════╝    ╚══════╝            ║
    ║                                                               ║
    ╚═══════════════════════════════════════════════════════════════╝
```

# ⚖️ Decisión: Modelo de licencia dual

[![Date](https://img.shields.io/badge/date-2026--09-c9a44c?style=for-the-badge)](.)
[![Status](https://img.shields.io/badge/status-accepted-10b981?style=for-the-badge)](.)
[![Domain](https://img.shields.io/badge/domain-legal-7c3aed?style=for-the-badge)](.)

**`○_●`** &nbsp;·&nbsp; **Regalar el código, proteger la marca**

</div>

---

## 📑 Índice

| Sección | Contenido |
|:--------|:----------|
| [🎯 Contexto](#-contexto) | Por qué surgió |
| [✅ Decisión](#-decisión) | Qué se decidió |
| [🧠 Razón](#-razón) | Por qué |
| [❌ Alternativa](#-alternativa-descartada) | Qué se descartó |
| [📊 Consecuencias](#-consecuencias) | Impacto |
| [💰 Modelo comercial](#-modelo-comercial) | Precios |

---

## 🎯 Contexto

Definir cómo proteger el trabajo sin cerrarlo. ¿Todo open source?
¿Todo propietario? ¿Híbrido?

---

## ✅ Decisión

Aplicar **licencias diferenciadas por tipo de activo**:

<table>
<tr>
<th width="40%">Activo</th>
<th width="60%">Licencia</th>
</tr>
<tr>
<td><strong>💻 Código fuente</strong></td>
<td>Apache 2.0</td>
</tr>
<tr>
<td><strong>📚 Documentación</strong></td>
<td>CC BY-NC-ND 4.0</td>
</tr>
<tr>
<td><strong>📜 Especificaciones (RFCs)</strong></td>
<td>Modelo Kronos RFC</td>
</tr>
<tr>
<td><strong>🏷️ Marcas y logos</strong></td>
<td>Todos los derechos reservados</td>
</tr>
</table>

---

## 🧠 Razón

<table>
<tr>
<td align="center" width="30px">📖</td>
<td>El código abierto genera <strong>adopción técnica</strong></td>
</tr>
<tr>
<td align="center">🛡️</td>
<td>La documentación protegida evita <strong>plagio</strong></td>
</tr>
<tr>
<td align="center">📜</td>
<td>Las especificaciones abiertas generan <strong>estándar</strong></td>
</tr>
<tr>
<td align="center">🏷️</td>
<td>Las marcas protegidas generan <strong>valor comercial</strong></td>
</tr>
<tr>
<td align="center">💰</td>
<td>Permite modelo de <strong>licencia comercial dual</strong> (open + enterprise)</td>
</tr>
</table>

---

## ❌ Alternativa descartada

<table>
<tr>
<th width="25%">Alternativa</th>
<th width="75%">Razón de descarte</th>
</tr>
<tr>
<td><strong>Todo propietario</strong></td>
<td>Bloquea adopción, no genera estándar</td>
</tr>
<tr>
<td><strong>Todo open source</strong></td>
<td>Regala el valor comercial sin retorno</td>
</tr>
<tr>
<td><strong>Todo CC BY-NC</strong></td>
<td>No permite implementación en productos comerciales</td>
</tr>
<tr>
<td><strong>Todo GPL</strong></td>
<td>Algunas empresas la evitan por miedo legal</td>
</tr>
</table>

---

## 📊 Consecuencias

<table>
<tr>
<td align="center" width="30px">📄</td>
<td>Archivo <code>LICENSING.md</code> que explica el modelo completo</td>
</tr>
<tr>
<td align="center">📁</td>
<td>Cada repo tiene: LICENSE, LICENSE-DOCS, LICENSE-SPECS, LICENSE-BRAND</td>
</tr>
<tr>
<td align="center">🏷️</td>
<td>La marca es el activo más defendido</td>
</tr>
<tr>
<td align="center">💻</td>
<td>El código es el gancho de adopción</td>
</tr>
<tr>
<td align="center">📜</td>
<td>Las specs son el legado</td>
</tr>
<tr>
<td align="center">💰</td>
<td>Se puede vender licencia comercial sin perder proyecto open source</td>
</tr>
</table>

---

## 💰 Modelo comercial

<table>
<tr>
<th width="30%">Modalidad</th>
<th width="40%">Alcance</th>
<th width="30%" align="right">Precio</th>
</tr>
<tr>
<td><strong>Startup</strong></td>
<td>1 producto, &lt;$1M ingresos</td>
<td align="right"><code>$3,000 USD/año</code></td>
</tr>
<tr>
<td><strong>Business</strong></td>
<td>Múltiples productos</td>
<td align="right"><code>$12,000 USD/año</code></td>
</tr>
<tr>
<td><strong>Enterprise</strong></td>
<td>Ilimitado + soporte</td>
<td align="right"><code>A consultar</code></td>
</tr>
<tr>
<td><strong>OEM / White label</strong></td>
<td>Redistribución</td>
<td align="right"><code>A consultar</code></td>
</tr>
</table>

---

## 📚 Referencias

<table>
<tr>
<td width="30%"><strong>🐬 Modelo MySQL</strong></td>
<td>GPL + comercial</td>
</tr>
<tr>
<td><strong>🔴 Modelo Redis</strong></td>
<td>BSD + comercial después</td>
</tr>
<tr>
<td><strong>📜 Modelo IETF</strong></td>
<td>Specs abiertas, implementaciones libres</td>
</tr>
</table>

---

<div align="center">

### ⚖️

```
    ┌─────────────────────────────────────────────────┐
    │  Si regalas todo, no queda valor.               │
    │  Si cierras todo, no hay adopción.              │
    │                                                 │
    │  ── Regalar el código, proteger la marca ──     │
    └─────────────────────────────────────────────────┘
```

**⬢ marco.mcp · data/decisions/2026-09-dual-license-model.md**

*Regalar el código, proteger la marca.*

© 2026 Marco Antonio Rojas Valdovinos · `DMD-33 ●_○`

</div>