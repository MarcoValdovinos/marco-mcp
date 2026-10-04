<div align="center">

# ⬢ marco.mcp

### Substrato cognitivo personal de Marco Antonio Rojas Valdovinos

*Un servidor MCP que da memoria continua a cualquier IA.*

[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](LICENSE)
[![Node](https://img.shields.io/badge/Node-%E2%89%A520-339933?logo=node.js)](https://nodejs.org)
[![MCP](https://img.shields.io/badge/Protocol-MCP-7c3aed)](https://modelcontextprotocol.io)
[![Status](https://img.shields.io/badge/Status-Active-10b981)](#)

**🔒 Repositorio privado · © 2026 Marco Antonio Rojas Valdovinos**

---

*"La IA es brillante pero amnésica. Este servidor resuelve eso."*

</div>

---

## ¿Qué es esto?

`marco.mcp` es un **servidor local** que expone tu identidad, proyectos,
decisiones y voz a cualquier IA compatible con **Model Context Protocol**.

Cuando abres Claude, Cursor, Continue o cualquier cliente MCP, esta IA
puede consultar tu substrato antes de responder. Ya no empieza de cero.

## El problema

| Sin `marco.mcp` | Con `marco.mcp` |
|---|---|
| 30 min explicando quién eres | 2 min de contexto |
| Cambias de IA, pierdes todo | Cambias de IA, no pierdes nada |
| Decisiones sin memoria | Decisiones con razón y alternativa |
| Contexto disperso en 20 chats | Contexto centralizado y versionado |
| Cada IA conoce una versión distinta de ti | Todas las IAs ven la misma fuente |

## Arquitectura

```

┌─────────────────────────────────────────────────────────┐
│  IA (Claude · Cursor · Continue · cualquier MCP client) │
└───────────────────────┬─────────────────────────────────┘
│ stdio
▼
┌─────────────────────────────────────────────────────────┐
│                    marco.mcp                            │
│                                                         │
│  Resources:  profile · current · voice · projects       │
│              decisions · anchors                        │
│                                                         │
│  Tools:      search · log_decision · update_current     │
│              snapshot                                   │
└───────────────────────┬─────────────────────────────────┘
│
▼
┌─────────────────────────────────────────────────────────┐
│                  data/ (local-first)                    │
│                                                         │
│  profile.md   voice.md   current.md   anchors.json      │
│  projects/    decisions/ sessions/    prompts/          │
└─────────────────────────────────────────────────────────┘

```

## Instalación rápida

```bash
git clone git@github.com:Marcorojas17/marco-mcp.git
cd marco-mcp
./install.sh
./test.sh

install.sh detecta la ruta absoluta y te da el bloque exacto para
pegar en tu claude_desktop_config.json.

Uso

Una vez configurado, prueba en Claude:

```
Tú:      ¿Qué debía hacer hoy?
Claude:  [consulta marco://current]  → responde con contexto real

Tú:      ¿Por qué elegí Ed25519 sobre RSA?
Claude:  [consulta marco://decisions] → recuerda la decisión

Tú:      Registra: usar HMAC en lugar de firma asimétrica para verify
Claude:  [usa log_decision] → guarda la decisión en decisions/
```

Resources

URI Contenido
marco://profile Quién eres, bio, principios, stack
marco://current En qué trabajas hoy, próximos 7/30 días
marco://voice Tu estilo de escritura, tono, frases
marco://projects Todos tus proyectos activos
marco://decisions Log de decisiones arquitectónicas
marco://anchors Safe Creative, Ethereum, hashes

Tools

Tool Descripción
search Busca texto en todo el substrato
log_decision Registra una decisión nueva
update_current Actualiza el estado actual
snapshot Genera hash SHA-256 del estado

Estructura del substrato

```
data/
├── profile.md           ← identidad
├── voice.md             ← estilo de escritura
├── current.md           ← estado actual
├── anchors.json         ← anclajes criptográficos
├── projects/            ← proyectos documentados
├── decisions/           ← decisiones arquitectónicas
├── sessions/            ← plantillas de sesión
└── prompts/             ← prompts reutilizables
```

Principios

1. Local-first. Los datos viven en tu máquina.
2. Soberanía. Cambias de IA sin perder tu contexto.
3. Transparencia. Todo es markdown legible.
4. Criptografía. Firmable con Ed25519, anclable a Ethereum.
5. Simplicidad. Sin base de datos. Sin cloud. Solo archivos.

Roadmap

☑ Servidor MCP con 6 resources y 4 tools
☑ Estructura de datos en markdown + JSON
☑ Instalador y tester automáticos
☐ Firma Ed25519 de snapshots
☐ Anclaje Ethereum automático
☐ Multi-cliente (Cursor, Continue, otros)
☐ Publicar como framework genérico personal-mcp

Ver docs/ROADMAP.md para el detalle.

Privacidad

Este repositorio es privado. Contiene información personal del titular.
No compartir sin autorización escrita.

Si vas a colaborar, ver SECURITY.md para las reglas de
manejo de datos.

Licencia

Apache 2.0 · Ver LICENSE

---

<div align="center">

⬢ marco.mcp

El legado no se hereda. Se firma.

© 2026 Marco Antonio Rojas Valdovinos

</div>
```