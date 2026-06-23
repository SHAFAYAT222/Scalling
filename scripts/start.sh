#!/usr/bin/env bash
# ─────────────────────────────────────────────────────────────
#  blog-mvp starter
#  Kills any old dev server, frees port 3000, starts fresh.
#  Run with:  npm start    or    npm run dev
# ─────────────────────────────────────────────────────────────

set -e

PORT=3000
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

echo "› Cleaning up any old process on port $PORT..."
fuser -k ${PORT}/tcp 2>/dev/null || true
pkill -f "next dev"     2>/dev/null || true
pkill -f "next-server"  2>/dev/null || true
sleep 1

echo "› Starting Next.js dev server..."
exec npx next dev -p $PORT
