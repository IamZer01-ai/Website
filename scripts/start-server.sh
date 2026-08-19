#!/usr/bin/env bash
set -eu

PORT="${PORT:-8000}"
LOG_FILE="${PORTFOLIO_SERVER_LOG:-/tmp/jai-portfolio-server.log}"

if command -v lsof >/dev/null 2>&1 && lsof -ti:"$PORT" >/dev/null 2>&1; then
  echo "Portfolio server already running on port $PORT."
  exit 0
fi

nohup python3 -m http.server "$PORT" --bind 0.0.0.0 >"$LOG_FILE" 2>&1 &
echo "Portfolio server started at http://localhost:$PORT"

for attempt in $(seq 1 20); do
  if curl --silent --fail "http://127.0.0.1:$PORT/" >/dev/null 2>&1; then
    echo "Server log: $LOG_FILE"
    exit 0
  fi
done

echo "Portfolio server failed to respond on port $PORT. See $LOG_FILE" >&2
exit 1
