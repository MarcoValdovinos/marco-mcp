<!-- ═══════════════════════════════════════════════════════════════════════ -->
<!--  MARCO.MCP · data/decisions/2026-08-rfc-first-strategy.md              -->
<!--  Decisión arquitectónica: publicación de especificaciones              -->
<!--  Autor: Marco Antonio Rojas Valdovinos · Toluca, México · 2026         -->
<!-- ═══════════════════════════════════════════════════════════════════════ -->

<div align="center">

```
    ╔═══════════════════════════════════════════════════════════════╗
    ║                                                               ║
    ║       ██████╗ ███████╗ ██████╗    ███████╗██╗██████╗ ███████╗ ║
    ║       ██╔══██╗██╔════╝██╔════╝    ██╔════╝██║██╔══██╗██╔════╝ ║
    ║       ██████╔╝█████╗  ██║         █████╗  ██║██████╔╝███████╗ ║
    ║       ██╔══██╗██╔══╝  ██║         ██╔══╝  ██║██╔══██╗╚════██║ ║
    ║       ██║  ██║██║     ╚██████╗    ██║     ██║██║  ██║███████║ ║
    ║       ╚═╝  ╚═╝╚═╝      ╚═════╝    ╚═╝     ╚═╝╚═╝  ╚═╝╚══════╝ ║
    ║                                                               ║
    ╚═══════════════════════════════════════════════════════════════╝
```

# 📜 Decisión: Estrategia RFC-first

[![Date](https://img.shields.io/badge/date-2026--08-c9a44c?style=for-the-badge)](.)
[![Status](https://img.shields.io/badge/status-accepted-10b981?style=for-the-badge)](.)
[![Domain](https://img.shields.io/badge/domain-strategy-7c3aed?style=for-the-badge)](.)

**`○_●`** &nbsp;·&nbsp; **El estándar sobrevive a quien lo escribió**

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
| [📋 RFCs planificados](#-rfcs-planificados) | Roadmap |

---

## 🎯 Contexto

Definir la estrategia de publicación de la arquitectura **KRONOS** y
**KÓDICE**. ¿Publicar productos terminados o especificaciones primero?

---

## ✅ Decisión

Publicar **especificaciones (RFCs) antes que productos completos**.

> La especificación es el activo. La implementación es consecuencia.

---

## 🧠 Razón

<table>
<tr>
<td align="center" width="30px">1️⃣</td>
<td>Las especificaciones sobreviven a sus autores</td>
</tr>
<tr>
<td align="center">2️⃣</td>
<td>Los académicos citan RFCs, no productos</td>
</tr>
<tr>
<td align="center">3️⃣</td>
<td>Adopción por terceros valida el estándar</td>
</tr>
<tr>
<td align="center">4️⃣</td>
<td>No requiere código terminado para publicarse</td>
</tr>
<tr>
<td align="center">5️⃣</td>
<td>Genera autoridad técnica antes que comercial</td>
</tr>
<tr>
<td align="center">6️⃣</td>
<td>Permite construir sobre consenso, no sobre marketing</td>
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
<td><strong>Product-first</strong></td>
<td>Construir todo antes de publicar. Riesgo: competidor mejor financiado publica primero.</td>
</tr>
<tr>
<td><strong>Patent-first</strong></td>
<td>Patentar algoritmos. Riesgo: lento, costoso, y la mayoría de estos conceptos no son patentables (abstractos).</td>
</tr>
</table>

---

## 📊 Consecuencias

<table>
<tr>
<td align="center" width="30px">📅</td>
<td><strong>Prioridad de trabajo:</strong> 5 RFCs en 12 meses</td>
</tr>
<tr>
<td align="center">📐</td>
<td><strong>Formato:</strong> IETF (Abstract, Status, Motivation, Specification, Security)</td>
</tr>
<tr>
<td align="center">🔐</td>
<td><strong>Firma:</strong> Cada RFC firmado con Ed25519</td>
</tr>
<tr>
<td align="center">⛓️</td>
<td><strong>Anclaje:</strong> Hash a Ethereum</td>
</tr>
<tr>
<td align="center">📚</td>
<td><strong>Publicación:</strong> arXiv / IACR ePrint / SSRN</td>
</tr>
<tr>
<td align="center">💻</td>
<td><strong>Código:</strong> Como apéndice, no como producto principal</td>
</tr>
<tr>
<td align="center">⚖️</td>
<td><strong>Licencia:</strong> Modelo Kronos (implementación libre, atribución obligatoria)</td>
</tr>
</table>

---

## 📋 RFCs planificados

<table>
<tr>
<th width="15%" align="center">RFC</th>
<th width="55%">Título</th>
<th width="30%" align="center">Prioridad</th>
</tr>
<tr>
<td align="center"><code>001</code></td>
<td><strong>Contrato de Atribución de Agentes</strong></td>
<td align="center">🔴 Alta</td>
</tr>
<tr>
<td align="center"><code>002</code></td>
<td><strong>DID Kronos + método de resolución</strong></td>
<td align="center">🔴 Alta</td>
</tr>
<tr>
<td align="center"><code>003</code></td>
<td><strong>Log encadenado + anclaje multicadena</strong></td>
<td align="center">🔴 Alta</td>
</tr>
<tr>
<td align="center"><code>004</code></td>
<td><strong>Robot Personhood Framework</strong></td>
<td align="center">🟡 Media</td>
</tr>
<tr>
<td align="center"><code>005</code></td>
<td><strong>Prueba de Humanidad sin biometría</strong></td>
<td align="center">🟡 Media</td>
</tr>
</table>

---

## 📚 Referencias

<table>
<tr>
<td width="30%"><strong>📜 Modelo IETF</strong></td>
<td>RFC publication process</td>
</tr>
<tr>
<td><strong>🌐 W3C DID Core</strong></td>
<td>Estándar de identificadores descentralizados</td>
</tr>
<tr>
<td><strong>📄 RFC 6962</strong></td>
<td>Certificate Transparency</td>
</tr>
</table>

---

<div align="center">

### 📜

```
    ┌─────────────────────────────────────────────────┐
    │  El código se vuelve obsoleto.                  │
    │  La especificación se vuelve estándar.          │
    │                                                 │
    │  ── Escribe para la próxima década ──           │
    └─────────────────────────────────────────────────┘
```

**⬢ marco.mcp · data/decisions/2026-08-rfc-first-strategy.md**

*El estándar sobrevive a quien lo escribió.*

© 2026 Marco Antonio Rojas Valdovinos · `DMD-33 ●_○`

</div>