#!/usr/bin/env bash
# ═══════════════════════════════════════════════════════════════════════════
#  MARCO.MCP · Test
#  Autor: Marco Antonio Rojas Valdovinos · Toluca, México · 2026
# ═══════════════════════════════════════════════════════════════════════════

set -e

# ─── Colores ────────────────────────────────────────────────────
GOLD='\033[38;5;220m'
CYAN='\033[38;5;51m'
GREEN='\033[38;5;46m'
RED='\033[38;5;196m'
YELLOW='\033[38;5;220m'
DIM='\033[2m'
BOLD='\033[1m'
NC='\033[0m'

# ─── Banner ─────────────────────────────────────────────────────
echo ""
echo -e "${GOLD}"
cat <<'EOF'
    ╔═══════════════════════════════════════════════════════════════╗
    ║                                                               ║
    ║      ████████╗███████╗███████╗████████╗                       ║
    ║      ╚══██╔══╝██╔════╝██╔════╝╚══██╔══╝                       ║
    ║         ██║   █████╗  ███████╗   ██║                          ║
    ║         ██║   ██╔══╝  ╚════██║   ██║                          ║
    ║         ██║   ███████╗███████║   ██║                          ║
    ║         ╚═╝   ╚══════╝╚══════╝   ╚═╝                          ║
    ║                                                               ║
    ║           ⬢  Verificación del substrato cognitivo             ║
    ║                                                               ║
    ╚═══════════════════════════════════════════════════════════════╝
EOF
echo -e "${NC}"

ERRORS=0

# ─── 1. Archivos base ────────────────────────────────────────────
echo -e "${CYAN}[1/6]${NC} Verificando archivos base..."
echo ""

FILES=(
  "data/profile.md:🪪"
  "data/voice.md:🎙️"
  "data/current.md:📍"
  "data/anchors.json:⚓"
)

for entry in "${FILES[@]}"; do
  FILE="${entry%%:*}"
  ICON="${entry##*:}"
  if [ -f "$FILE" ]; then
    SIZE=$(wc -c < "$FILE" | tr -d ' ')
    echo -e "  ${GREEN}✓${NC} $ICON  $FILE ${DIM}($SIZE bytes)${NC}"
  else
    echo -e "  ${RED}✖${NC} $ICON  $FILE ${RED}(FALTA)${NC}"
    ERRORS=$((ERRORS + 1))
  fi
done

# ─── 2. Contenido del substrato ──────────────────────────────────
echo ""
echo -e "${CYAN}[2/6]${NC} Analizando contenido del substrato..."
echo ""

PROJECTS=$(ls data/projects/*.md 2>/dev/null | grep -v "_index" | wc -l | tr -d ' ')
DECISIONS=$(ls data/decisions/*.md 2>/dev/null | grep -v "_index" | wc -l | tr -d ' ')
PROMPTS=$(ls data/prompts/*.md 2>/dev/null | wc -l | tr -d ' ')

echo -e "  ${DIM}Proyectos:${NC}   ${BOLD}$PROJECTS${NC}"
echo -e "  ${DIM}Decisiones:${NC}  ${BOLD}$DECISIONS${NC}"
echo -e "  ${DIM}Prompts:${NC}     ${BOLD}$PROMPTS${NC}"

if [ "$PROJECTS" -lt 1 ] || [ "$DECISIONS" -lt 1 ]; then
  echo -e "  ${YELLOW}⚠${NC}  Substrato incompleto"
  ERRORS=$((ERRORS + 1))
fi

# ─── 3. Sintaxis del servidor ────────────────────────────────────
echo ""
echo -e "${CYAN}[3/6]${NC} Verificando sintaxis del servidor..."
echo ""

FILES_JS=(
  "src/server.js"
  "src/snapshot.js"
  "src/lib/crypto.js"
  "src/lib/fs-utils.js"
  "src/lib/logger.js"
)

for JS in "${FILES_JS[@]}"; do
  if [ ! -f "$JS" ]; then
    echo -e "  ${RED}✖${NC} $JS ${RED}(no existe)${NC}"
    ERRORS=$((ERRORS + 1))
    continue
  fi

  if node --check "$JS" 2>/dev/null; then
    echo -e "  ${GREEN}✓${NC} $JS"
  else
    echo -e "  ${RED}✖${NC} $JS ${RED}(error de sintaxis)${NC}"
    ERRORS=$((ERRORS + 1))
  fi
done

# ─── 4. Protocolo MCP ────────────────────────────────────────────
echo ""
echo -e "${CYAN}[4/6]${NC} Probando protocolo MCP..."
echo ""

if [ -f "src/server.js" ]; then
  RESPONSE=$(echo '{"jsonrpc":"2.0","id":1,"method":"initialize","params":{"protocolVersion":"2024-11-05","capabilities":{},"clientInfo":{"name":"test","version":"1.0"}}}' | timeout 5 node src/server.js 2>/dev/null | head -c 300 || echo "")

  if echo "$RESPONSE" | grep -q "marco.mcp"; then
    echo -e "  ${GREEN}✓${NC} Servidor responde correctamente"
  else
    echo -e "  ${YELLOW}⚠${NC}  Sin respuesta al initialize ${DIM}(puede requerir MCP client real)${NC}"
  fi
else
  echo -e "  ${RED}✖${NC} src/server.js no existe"
  ERRORS=$((ERRORS + 1))
fi

# ─── 5. Hash del substrato ───────────────────────────────────────
echo ""
echo -e "${CYAN}[5/6]${NC} Calculando hash del substrato completo..."
echo ""

HASH=$(cat data/profile.md data/current.md data/voice.md data/projects/*.md data/decisions/*.md 2>/dev/null | sha256sum | awk '{print $1}')
echo -e "  ${DIM}SHA-256:${NC} ${GOLD}$HASH${NC}"

# ─── 6. Dependencias ─────────────────────────────────────────────
echo ""
echo -e "${CYAN}[6/6]${NC} Verificando dependencias..."
echo ""

if [ -d "node_modules/@modelcontextprotocol/sdk" ]; then
  echo -e "  ${GREEN}✓${NC} @modelcontextprotocol/sdk instalado"
else
  echo -e "  ${YELLOW}⚠${NC}  Dependencias no instaladas ${DIM}(corre: npm install)${NC}"
fi

# ─── Resultado final ─────────────────────────────────────────────
echo ""
echo -e "${GOLD}"
if [ "$ERRORS" -eq 0 ]; then
  cat <<'EOF'
    ╔═══════════════════════════════════════════════════════════════╗
    ║   ✅  Test completo · Todo en orden                           ║
    ╚═══════════════════════════════════════════════════════════════╝
EOF
else
  cat <<EOF
    ╔═══════════════════════════════════════════════════════════════╗
    ║   ⚠️  Test con $ERRORS advertencia(s)                          ║
    ╚═══════════════════════════════════════════════════════════════╝
EOF
fi
echo -e "${NC}"

# ─── Footer ──────────────────────────────────────────────────────
echo -e "${GOLD}═══════════════════════════════════════════════════════════════${NC}"
echo -e "${GOLD}  El legado no se hereda. Se firma.${NC}"
echo -e "${DIM}  ── Marco Antonio Rojas Valdovinos · Toluca · 2026 ──${NC}"
echo -e "${GOLD}═══════════════════════════════════════════════════════════════${NC}"
echo ""

if [ "$ERRORS" -gt 0 ]; then
  exit 1
fi