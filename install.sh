#!/usr/bin/env bash
# ═══════════════════════════════════════════════════════════════════════════
#  MARCO.MCP · Instalador
#  Autor: Marco Antonio Rojas Valdovinos · Toluca, México · 2026
# ═══════════════════════════════════════════════════════════════════════════

set -e

# ─── Colores ────────────────────────────────────────────────────
GOLD='\033[38;5;220m'
CYAN='\033[38;5;51m'
GREEN='\033[38;5;46m'
RED='\033[38;5;196m'
DIM='\033[2m'
BOLD='\033[1m'
NC='\033[0m'

# ─── Banner ─────────────────────────────────────────────────────
echo ""
echo -e "${GOLD}"
cat <<'EOF'
    ╔═══════════════════════════════════════════════════════════════╗
    ║                                                               ║
    ║      ███╗   ███╗ █████╗ ██████╗  ██████╗ ██████╗              ║
    ║      ████╗ ████║██╔══██╗██╔══██╗██╔════╝██╔═══██╗             ║
    ║      ██╔████╔██║███████║██████╔╝██║     ██║   ██║             ║
    ║      ██║╚██╔╝██║██╔══██║██╔══██╗██║     ██║   ██║             ║
    ║      ██║ ╚═╝ ██║██║  ██║██║  ██║╚██████╗╚██████╔╝             ║
    ║      ╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝ ╚═════╝              ║
    ║                                                               ║
    ║                 ⬢  Substrato Cognitivo Personal               ║
    ║                     Instalación · v0.1.0                      ║
    ║                                                               ║
    ╚═══════════════════════════════════════════════════════════════╝
EOF
echo -e "${NC}"

# ─── 1. Verificar Node.js ────────────────────────────────────────
echo -e "${CYAN}[1/6]${NC} Verificando Node.js..."

if ! command -v node &> /dev/null; then
  echo -e "${RED}  ✖ Node.js no encontrado.${NC}"
  echo -e "${DIM}     Instala Node 20+: https://nodejs.org${NC}"
  exit 1
fi

NODE_VERSION=$(node -v | sed 's/v//' | cut -d. -f1)
if [ "$NODE_VERSION" -lt 20 ]; then
  echo -e "${RED}  ✖ Node 20+ requerido. Tienes: v$NODE_VERSION${NC}"
  exit 1
fi
echo -e "${GREEN}  ✓${NC} Node $(node -v)"

# ─── 2. Verificar npm ────────────────────────────────────────────
echo -e "${CYAN}[2/6]${NC} Verificando npm..."

if ! command -v npm &> /dev/null; then
  echo -e "${RED}  ✖ npm no encontrado.${NC}"
  exit 1
fi
echo -e "${GREEN}  ✓${NC} npm $(npm -v)"

# ─── 3. Verificar estructura ─────────────────────────────────────
echo -e "${CYAN}[3/6]${NC} Verificando estructura..."

REQUIRED_DIRS=("src" "src/lib" "src/resources" "data" "data/projects" "data/decisions")
for dir in "${REQUIRED_DIRS[@]}"; do
  if [ ! -d "$dir" ]; then
    echo -e "${RED}  ✖ Falta directorio: $dir${NC}"
    exit 1
  fi
done
echo -e "${GREEN}  ✓${NC} Estructura correcta"

# ─── 4. Instalar dependencias ────────────────────────────────────
echo -e "${CYAN}[4/6]${NC} Instalando dependencias..."
npm install --silent
echo -e "${GREEN}  ✓${NC} Dependencias instaladas"

# ─── 5. Crear carpetas necesarias ────────────────────────────────
echo -e "${CYAN}[5/6]${NC} Preparando directorios..."
mkdir -p snapshots
touch snapshots/.gitkeep
echo -e "${GREEN}  ✓${NC} Directorio snapshots preparado"

# ─── 6. Detectar ruta absoluta ───────────────────────────────────
ABS_PATH="$(cd "$(dirname "$0")" && pwd)"
echo -e "${CYAN}[6/6]${NC} Detectando ruta absoluta..."
echo -e "${GREEN}  ✓${NC} $ABS_PATH"

# ─── Resumen ─────────────────────────────────────────────────────
echo ""
echo -e "${GOLD}"
cat <<'EOF'
    ╔═══════════════════════════════════════════════════════════════╗
    ║   ✅  Instalación completa                                    ║
    ╚═══════════════════════════════════════════════════════════════╝
EOF
echo -e "${NC}"

echo -e "${BOLD}→ Pega esto en tu claude_desktop_config.json:${NC}"
echo ""
cat <<EOF
{
  "mcpServers": {
    "marco": {
      "command": "node",
      "args": ["$ABS_PATH/src/server.js"],
      "env": {
        "MARCO_CORE_PATH": "$ABS_PATH/data"
      }
    }
  }
}
EOF
echo ""

echo -e "${BOLD}→ Ubicaciones del archivo de config:${NC}"
echo -e "  ${DIM}macOS:${NC}   ~/Library/Application Support/Claude/claude_desktop_config.json"
echo -e "  ${DIM}Linux:${NC}   ~/.config/Claude/claude_desktop_config.json"
echo -e "  ${DIM}Windows:${NC} %APPDATA%\\Claude\\claude_desktop_config.json"
echo ""

echo -e "${BOLD}→ Próximo paso:${NC}"
echo -e "  Corre ${CYAN}./test.sh${NC} para verificar la instalación"
echo ""

echo -e "${GOLD}═══════════════════════════════════════════════════════════════${NC}"
echo -e "${GOLD}  El legado no se hereda. Se firma.${NC}"
echo -e "${DIM}  ── Marco Antonio Rojas Valdovinos · Toluca · 2026 ──${NC}"
echo -e "${GOLD}═══════════════════════════════════════════════════════════════${NC}"
echo ""