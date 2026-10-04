<!-- ═══════════════════════════════════════════════════════════════════════ -->
<!--  MARCO.MCP · docs/ARCHITECTURE.md                                      -->
<!--  Arquitectura técnica del servidor MCP                                 -->
<!--  Autor: Marco Antonio Rojas Valdovinos · Toluca, México · 2026         -->
<!-- ═══════════════════════════════════════════════════════════════════════ -->

<div align="center">

```
    ╔═══════════════════════════════════════════════════════════════╗
    ║                                                               ║
    ║   █████╗ ██████╗  ██████╗██╗  ██╗██╗████████╗███████╗ ██████╗  ║
    ║  ██╔══██╗██╔══██╗██╔════╝██║  ██║██║╚══██╔══╝██╔════╝██╔════╝  ║
    ║  ███████║██████╔╝██║     ███████║██║   ██║   █████╗  ██║       ║
    ║  ██╔══██║██╔══██╗██║     ██╔══██║██║   ██║   ██╔══╝  ██║       ║
    ║  ██║  ██║██║  ██║╚██████╗██║  ██║██║   ██║   ███████╗╚██████╗  ║
    ║  ╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝╚═╝   ╚═╝   ╚══════╝ ╚═════╝  ║
    ║                                                               ║
    ╚═══════════════════════════════════════════════════════════════╝
```

# 🏗️ Arquitectura

### marco.mcp

*Servidor MCP · stdio transport · local-first*

[![Transport](https://img.shields.io/badge/transport-stdio-7c3aed?style=for-the-badge)](.)
[![Resources](https://img.shields.io/badge/resources-6-c9a44c?style=for-the-badge)](.)
[![Tools](https://img.shields.io/badge/tools-4-00EAFF?style=for-the-badge)](.)

**`○_●`** &nbsp;·&nbsp; **La estructura es el argumento**

</div>

---

## 📑 Índice

| Sección | Contenido |
|:--------|:----------|
| [🧱 Capas](#-capas) | Vista general |
| [🔀 Flujo de consulta](#-flujo-de-una-consulta) | Cómo se resuelve un resource |
| [🔧 Flujo de tool](#-flujo-de-una-tool) | Cómo se ejecuta una tool |
| [📂 Estructura](#-estructura-de-datos) | Cómo se organiza data/ |
| [🔐 Criptografía](#-criptografía) | Firma y hash |
| [🚀 Extensiones](#-extensiones-futuras) | Roadmap técnico |

---

## 🧱 Capas

```mermaid
graph TB
    subgraph CLIENTE["🖥️ Cliente MCP"]
        C[Claude · Cursor · Continue]
    end

    subgraph SERVIDOR["⬢ Servidor marco.mcp"]
        RH[📦 Resources Handler]
        TH[🔧 Tools Handler]
    end

    subgraph LIB["🧰 Librerías"]
        FS[fs-utils]
        CR[crypto]
        LG[logger]
    end

    subgraph DATA["💾 data/"]

    end

    C -->|JSON-RPC stdio| SERVIDOR
    RH --> LIB
    TH --> LIB
    LIB --> DATA

    style CLIENTE fill:#0a0014,stroke:#7c3aed,color:#e9d5ff
    style SERVIDOR fill:#001a1a,stroke:#00EAFF,color:#7DF9FF
    style LIB fill:#1a0800,stroke:#ff8c42,color:#FFB88A
    style DATA fill:#001a10,stroke:#00cc88,color:#7BFFD4
```

---

## 🔀 Flujo de una consulta

```mermaid
sequenceDiagram
    participant C as Cliente MCP
    participant S as server.js
    participant R as Resource Handler
    participant F as fs-utils
    participant D as data/

    C->>S: ReadResourceRequest(marco://current)
    S->>S: Busca handler en mapa
    S->>R: readCurrent()
    R->>F: readMD('current.md')
    F->>D: Lee archivo
    D-->>F: Contenido
    F-->>R: Contenido
    R-->>S: Contenido
    S-->>C: { contents: [{ uri, mimeType, text }] }
```

---

## 🔧 Flujo de una tool

```mermaid
sequenceDiagram
    participant C as Cliente MCP
    participant S as server.js
    participant T as Tool Handler
    participant F as fs-utils
    participant D as data/

    C->>S: CallToolRequest(log_decision)
    S->>S: Valida args
    S->>T: Ejecuta lógica
    T->>F: writeMD('decisions/...')
    F->>D: Escribe archivo
    D-->>F: OK
    F-->>T: OK
    T-->>S: Resultado
    S-->>C: { content: [{ type: 'text', text }] }
```

---

## 📂 Estructura de datos

```text
data/
├── 🪪 profile.md           ← identidad del titular
├── 🎙️ voice.md             ← estilo de escritura
├── 📍 current.md           ← estado actual
├── ⚓ anchors.json         ← anclajes criptográficos
│
├── 📦 projects/            ← proyectos documentados
│   ├── _index.md
│   ├── kronos-api.md
│   ├── kodice.md
│   ├── yejida.md
│   ├── md33.md
│   ├── vault.md
│   └── cortex.md
│
├── 🧭 decisions/           ← decisiones arquitectónicas
│   ├── _index.md
│   └── 2026-*.md
│
├── 📋 sessions/            ← plantillas de sesión
│   └── _template.md
│
└── 🚪 prompts/             ← prompts reutilizables
    ├── onboarding.md
    ├── review.md
    └── handoff.md
```

**Todo es markdown + JSON. Sin base de datos. Sin cloud.**

### Ventajas

<table>
<tr><td align="center" width="30px">✅</td><td>Legible por humanos</td></tr>
<tr><td align="center">✅</td><td>Versionable con git</td></tr>
<tr><td align="center">✅</td><td>Editable con cualquier editor</td></tr>
<tr><td align="center">✅</td><td>Portable (sin vendor lock-in)</td></tr>
<tr><td align="center">✅</td><td>Compatible con Obsidian</td></tr>
</table>

### Desventajas

<table>
<tr><td align="center" width="30px">⚠️</td><td>Sin queries complejas</td></tr>
<tr><td align="center">⚠️</td><td>Performance limitada en substratos grandes (&gt;10 MB)</td></tr>
</table>

---

## 🔐 Criptografía

<table>
<tr>
<th width="30%">Componente</th>
<th width="30%">Estándar</th>
<th width="40%">Uso</th>
</tr>
<tr>
<td><strong>Hash</strong></td>
<td>SHA-256</td>
<td>Huella del substrato completo</td>
</tr>
<tr>
<td><strong>Firma</strong></td>
<td>Ed25519</td>
<td>Firma de snapshots (RFC 8032)</td>
</tr>
<tr>
<td><strong>Aleatoriedad</strong></td>
<td>CSPRNG</td>
<td><code>crypto.randomBytes</code></td>
</tr>
</table>

### Firma de snapshots

El script `src/snapshot.js` puede firmar el hash del substrato con la
clave privada Ed25519 configurada en `ED25519_PRIVATE_KEY`. La firma se
guarda en `snapshots/` junto con el hash.

**Sin la clave, sigue funcionando en modo degradado** (solo hash, sin firma).

---

## 🚀 Extensiones futuras

<table>
<tr>
<td align="center" width="30px">⛓️</td>
<td><strong>Anclaje Ethereum:</strong> publicar hash a mainnet una vez al mes</td>
</tr>
<tr>
<td align="center">🌐</td>
<td><strong>Multi-cliente:</strong> soporte para WebSocket además de stdio</td>
</tr>
<tr>
<td align="center">☁️</td>
<td><strong>Sync cifrado:</strong> replicar a IPFS/Arweave</td>
</tr>
<tr>
<td align="center">👥</td>
<td><strong>Multi-usuario:</strong> soporte para equipos</td>
</tr>
<tr>
<td align="center">🧩</td>
<td><strong>Framework genérico:</strong> publicar como <code>personal-mcp</code></td>
</tr>
</table>

---

<div align="center">

### 🏗️

```
    ┌─────────────────────────────────────────────────┐
    │  La arquitectura no es decoración.              │
    │  Es el argumento principal.                     │
    │                                                 │
    │  ── La estructura es el argumento ──            │
    └─────────────────────────────────────────────────┘
```

**⬢ marco.mcp · docs/ARCHITECTURE.md**

*La estructura es el argumento.*

© 2026 Marco Antonio Rojas Valdovinos · `DMD-33 ●_○`

</div>