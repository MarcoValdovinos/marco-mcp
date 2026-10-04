<!-- ═══════════════════════════════════════════════════════════════════════ -->
<!--  MARCO.MCP · SECURITY.md                                               -->
<!--  Política de seguridad para repositorio privado                        -->
<!--  Autor: Marco Antonio Rojas Valdovinos · Toluca, México · 2026         -->
<!-- ═══════════════════════════════════════════════════════════════════════ -->

<div align="center">

```
    ╔═══════════════════════════════════════════════════════════════╗
    ║                                                               ║
    ║      ███████╗███████╗ ██████╗██╗   ██╗██████╗ ██╗████████╗    ║
    ║      ██╔════╝██╔════╝██╔════╝██║   ██║██╔══██╗██║╚══██╔══╝    ║
    ║      ███████╗█████╗  ██║     ██║   ██║██████╔╝██║   ██║       ║
    ║      ╚════██║██╔══╝  ██║     ██║   ██║██╔══██╗██║   ██║       ║
    ║      ███████║███████╗╚██████╗╚██████╔╝██║  ██║██║   ██║       ║
    ║      ╚══════╝╚══════╝ ╚═════╝ ╚═════╝ ╚═╝  ╚═╝╚═╝   ╚═╝       ║
    ║                                                               ║
    ╚═══════════════════════════════════════════════════════════════╝
```

# 🔒 Seguridad

### marco.mcp

*Política de manejo de datos, claves y respuesta a incidentes.*

[![Status](https://img.shields.io/badge/status-active-10b981?style=for-the-badge)](#)
[![Privacy](https://img.shields.io/badge/repository-private-ff4d6a?style=for-the-badge)](#)
[![Contact](https://img.shields.io/badge/contact-marco.a.rojas.v%40hotmail.com-c9a44c?style=for-the-badge)](mailto:marco.a.rojas.v@hotmail.com)

**`○_●`** &nbsp;·&nbsp; **La confianza se gana en capas**

</div>

---

## 📑 Índice

| Sección | Contenido |
|:--------|:----------|
| [🎯 Naturaleza](#-naturaleza-del-repositorio) | Qué contiene este repo |
| [📋 Reglas](#-reglas-obligatorias) | Permitido / Prohibido |
| [🔐 Manejo de claves](#-manejo-de-claves) | Dónde viven las llaves |
| [🚨 Incidentes](#-si-se-filtra-información) | Plan de respuesta |
| [🔎 Auditoría](#-auditoría-periódica) | Revisión mensual |
| [📬 Contacto](#-contacto-de-seguridad) | Reportar vulnerabilidades |

---

## 🎯 Naturaleza del repositorio

<table>
<tr>
<td width="25%" align="center">

### 🔒

**Privado**

</td>
<td width="75%">

Este repositorio es **privado** y contiene información sensible del titular. No se comparte sin autorización escrita.

</td>
</tr>
</table>

### 📦 Qué contiene

<table>
<tr>
<td width="15%" align="center">🪪</td>
<td>Información personal del titular</td>
</tr>
<tr>
<td align="center">🧭</td>
<td>Decisiones arquitectónicas</td>
</tr>
<tr>
<td align="center">📍</td>
<td>Estado de proyectos y presupuesto</td>
</tr>
<tr>
<td align="center">⚓</td>
<td>Anclajes criptográficos (públicos por diseño)</td>
</tr>
</table>

---

## 📋 Reglas obligatorias

<table>
<tr>
<th width="50%" align="center">✅ Permitido en el repo</th>
<th width="50%" align="center">❌ Prohibido en el repo</th>
</tr>
<tr>
<td valign="top">

- 📝 Archivos markdown de identidad y proyectos
- 🔐 Hashes SHA-256 y links públicos
- 💻 Código fuente del servidor MCP
- 📚 Documentación técnica

</td>
<td valign="top">

- 🔑 Claves privadas (Ed25519, HMAC, JWT)
- 🎫 Tokens de API (Supabase, Vercel, GitHub)
- 🔓 Contraseñas en texto plano
- 📄 Archivos `.env` o `.env.local`
- 💰 Datos bancarios o financieros
- 👤 PII de terceros sin consentimiento

</td>
</tr>
</table>

---

## 🔐 Manejo de claves

### 📁 Almacenamiento local

Las claves privadas viven **fuera del repo**, en `~/.marco-keys/`:

```text
~/.marco-keys/
├── 🔑 ed25519-private.pem   ← 600 permissions
├── 🔓 ed25519-public.pem    ← 644 permissions
└── 🔒 .env                  ← 600 permissions
```

### ⚙️ Variables de entorno

El servidor MCP lee de `process.env`. Configura en tu shell:

```bash
# Ruta del substrato
export MARCO_CORE_PATH="$HOME/marco-mcp/data"

# Clave privada Ed25519 (para firmar snapshots)
export ED25519_PRIVATE_KEY="$(cat ~/.marco-keys/ed25519-private.pem)"

# Debug opcional
export MARCO_DEBUG="0"
```

### 🚫 Nunca hacer

<table>
<tr>
<td align="center" width="30px">❌</td>
<td>Commitear archivos <code>.env</code></td>
</tr>
<tr>
<td align="center">❌</td>
<td>Pegar claves privadas en el código fuente</td>
</tr>
<tr>
<td align="center">❌</td>
<td>Compartir tokens por chat o email sin cifrar</td>
</tr>
<tr>
<td align="center">❌</td>
<td>Reutilizar la misma clave en varios servicios</td>
</tr>
<tr>
<td align="center">❌</td>
<td>Guardar claves en notas sin cifrar</td>
</tr>
</table>

---

## 🚨 Si se filtra información

### 🛑 Paso 1 · Contención (0-1h)

<table>
<tr>
<td align="center" width="30px">1️⃣</td>
<td>Rotar todas las claves expuestas</td>
</tr>
<tr>
<td align="center">2️⃣</td>
<td>Revocar tokens en Supabase / Vercel / GitHub</td>
</tr>
<tr>
<td align="center">3️⃣</td>
<td>Cambiar contraseñas asociadas</td>
</tr>
</table>

### 🔍 Paso 2 · Evaluación (1-24h)

<table>
<tr>
<td align="center" width="30px">1️⃣</td>
<td>Identificar qué se filtró exactamente</td>
</tr>
<tr>
<td align="center">2️⃣</td>
<td>Determinar el vector (git, Discord, backup, otro)</td>
</tr>
<tr>
<td align="center">3️⃣</td>
<td>Documentar el incidente en <code>docs/JOURNAL.md</code></td>
</tr>
</table>

### 🛠️ Paso 3 · Remediación (24-72h)

**Purgar del historial de git** si fue commit accidental:

```bash
# Instalar git-filter-repo primero
pip install git-filter-repo

# Purgar el archivo filtrado
git filter-repo --path archivo-filtrado --invert-paths

# Forzar push al remoto
git push origin main --force
```

<table>
<tr>
<td align="center" width="30px">1️⃣</td>
<td>Rotar todas las claves de nuevo</td>
</tr>
<tr>
<td align="center">2️⃣</td>
<td>Si el repo era público, hacerlo privado inmediatamente</td>
</tr>
<tr>
<td align="center">3️⃣</td>
<td>Notificar a colaboradores si aplica</td>
</tr>
</table>

### 📢 Paso 4 · Notificación (72h-7d)

<table>
<tr>
<td align="center" width="30px">👥</td>
<td>Si afecta a terceros, notificar</td>
</tr>
<tr>
<td align="center">📣</td>
<td>Si afecta a usuarios finales, aviso público</td>
</tr>
<tr>
<td align="center">🏦</td>
<td>Si hay datos financieros comprometidos, contactar banco</td>
</tr>
</table>

---

## 🔎 Auditoría periódica

Ejecuta cada mes:

```bash
# 🔍 Buscar claves accidentales en el repo
grep -rE "(BEGIN.*PRIVATE KEY|sk-[A-Za-z0-9]{20,}|ghp_[A-Za-z0-9]{20,})" .

# 📜 Verificar que nunca hubo .env en git
git log --all --full-history -- "*.env*"

# 🔐 Revisar permisos de archivos sensibles
ls -la ~/.marco-keys/

# 🔒 Verificar que el repo sigue privado
gh repo view Marcorojas17/marco-mcp --json visibility
```

### 📋 Checklist mensual

<table>
<tr>
<td align="center" width="30px">☐</td>
<td>No hay claves privadas en el repo</td>
</tr>
<tr>
<td align="center">☐</td>
<td>No hay <code>.env</code> en el historial de git</td>
</tr>
<tr>
<td align="center">☐</td>
<td>Permisos de <code>~/.marco-keys/</code> correctos (600/644)</td>
</tr>
<tr>
<td align="center">☐</td>
<td>El repo sigue privado en GitHub</td>
</tr>
<tr>
<td align="center">☐</td>
<td>No hay dependencias con vulnerabilidades (<code>npm audit</code>)</td>
</tr>
<tr>
<td align="center">☐</td>
<td>No hay tokens expuestos en issues/PRs</td>
</tr>
</table>

---

## 📬 Contacto de seguridad

**Reportes privados:** [marco.a.rojas.v@hotmail.com](mailto:marco.a.rojas.v@hotmail.com)

### ⏱️ Tiempos de respuesta objetivo

<table>
<tr>
<th width="30%" align="center">Severidad</th>
<th width="70%" align="center">Tiempo de respuesta</th>
</tr>
<tr>
<td align="center">🔴 <strong>Crítico</strong></td>
<td align="center">24 horas</td>
</tr>
<tr>
<td align="center">🟠 <strong>Alto</strong></td>
<td align="center">72 horas</td>
</tr>
<tr>
<td align="center">🟡 <strong>Medio</strong></td>
<td align="center">7 días</td>
</tr>
<tr>
<td align="center">🟢 <strong>Bajo</strong></td>
<td align="center">30 días</td>
</tr>
</table>

### 🛡️ Política de divulgación responsable

<table>
<tr>
<td width="25%"><strong>0-72h</strong></td>
<td>Acuse de recibo</td>
</tr>
<tr>
<td><strong>3-7 días</strong></td>
<td>Evaluación inicial y clasificación</td>
</tr>
<tr>
<td><strong>7-30 días</strong></td>
<td>Remediación objetivo</td>
</tr>
<tr>
<td><strong>30-90 días</strong></td>
<td>Divulgación coordinada</td>
</tr>
</table>

---

<div align="center">

### 🔒

```
    ┌─────────────────────────────────────────────────┐
    │  La seguridad no es un producto.                │
    │  Es una disciplina.                             │
    │                                                 │
    │  ── No se compra. Se practica. ──               │
    └─────────────────────────────────────────────────┘
```

**⬢ marco.mcp · SECURITY.md**

*La confianza se gana en capas.*

© 2026 Marco Antonio Rojas Valdovinos · `DMD-33 ●_○`

</div>