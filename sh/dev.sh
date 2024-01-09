#!/usr/bin/env bash
DIR=$(dirname $(realpath "$0"))

cd $DIR/..

set -ex
kill -9 $(lsof -i:$VITE_PORT -t) 2>/dev/null | true

bash -c "sleep 1 && open https://localhost:$VITE_PORT" &

bunx concurrently --kill-others \
  -r "bun x vite"
