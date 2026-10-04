<!-- ═══════════════════════════════════════════════════════════════════════ -->
<!--  MARCO.MCP · data/prompts/handoff.md                                   -->
<!--  Prompt para cerrar sesión y dejar contexto listo para la próxima       -->
<!--  Autor: Marco Antonio Rojas Valdovinos · Toluca, México · 2026         -->
<!-- ═══════════════════════════════════════════════════════════════════════ -->

<div align="center">

```
    ╔═══════════════════════════════════════════════════════════════╗
    ║                                                               ║
    ║      ██╗  ██╗ █████╗ ███╗   ██╗██████╗  ██████╗ ███████╗███████╗║
    ║      ██║  ██║██╔══██╗████╗  ██║██╔══██╗██╔═══██╗██╔════╝██╔════╝║
    ║      ███████║███████║██╔██╗ ██║██║  ██║██║   ██║█████╗  █████╗  ║
    ║      ██╔══██║██╔══██║██║╚██╗██║██║  ██║██║   ██║██╔══╝  ██╔══╝  ║
    ║      ██║  ██║██║  ██║██║ ╚████║██████╔╝╚██████╔╝██║     ██║     ║
    ║      ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═════╝  ╚═════╝ ╚═╝     ╚═╝     ║
    ║                                                               ║
    ╚═══════════════════════════════════════════════════════════════╝
```

# 🤝 Prompt: Handoff

### Cierre limpio de sesión

*Deja todo listo para la próxima IA, la próxima sesión, el próximo yo.*

[![Type](https://img.shields.io/badge/type-prompt-7c3aed?style=for-the-badge)](.)
[![Use](https://img.shields.io/badge/use-session%20close-c9a44c?style=for-the-badge)](.)

**`○_●`** &nbsp;·&nbsp; **El relevo limpio es arte**

</div>

---

## 📑 Índice

| Sección | Contenido |
|:--------|:----------|
| [📋 Prompt](#-prompt-para-pegar) | Texto listo |
| [🎯 Por qué funciona](#-por-qué-funciona) | Explicación |
| [⏰ Cuándo usarlo](#-cuándo-usarlo) | Contextos |

---

## 📋 Prompt para pegar

```text
Vas a hacer handoff de esta sesión. Ejecuta:

1. Resume en 3 bullets qué se hizo hoy
2. Lista todas las decisiones tomadas hoy
3. Para cada decisión, usa el tool log_decision si no la registré
4. Actualiza marco://current usando update_current con:
   - Fecha actual
   - Foco de la próxima sesión
   - Próximos pasos concretos (máximo 3)
   - Bloqueadores nuevos (si hay)
5. Genera un snapshot con el tool snapshot
6. Confirma que todo quedó guardado

Al final, dime solo:

"Sesión cerrada. Todo guardado. Próxima sesión: [foco]."
```

---

## 🎯 Por qué funciona

<table>
<tr>
<td align="center" width="30px">💾</td>
<td>Garantiza que nada se pierda entre sesiones</td>
</tr>
<tr>
<td align="center">📝</td>
<td>Fuerza registro de decisiones</td>
</tr>
<tr>
<td align="center">🔄</td>
<td>Actualiza el estado actual automáticamente</td>
</tr>
<tr>
<td align="center">🔐</td>
<td>Genera snapshot firmable</td>
</tr>
</table>

---

## ⏰ Cuándo usarlo

<table>
<tr><td width="25%" align="center">⏱️</td><td>Al final de cada sesión larga (&gt;1h)</td></tr>
<tr><td align="center">🤖</td><td>Antes de cambiar de IA</td></tr>
<tr><td align="center">🌙</td><td>Al final del día si trabajaste mucho</td></tr>
<tr><td align="center">✈️</td><td>Antes de viajar o cortar acceso</td></tr>
</table>

---

<div align="center">

### 🤝

```
    ┌─────────────────────────────────────────────────┐
    │  El relevo limpio distingue al profesional.     │
    │  Deja el contexto mejor de como lo encontraste. │
    │                                                 │
    │  ── El relevo limpio es arte ──                 │
    └─────────────────────────────────────────────────┘
```

**⬢ marco.mcp · data/prompts/handoff.md**

*El relevo limpio es arte.*

© 2026 Marco Antonio Rojas Valdovinos · `DMD-33 ●_○`

</div>