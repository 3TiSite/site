#!/usr/bin/env bash
DIR=$(realpath $0) && DIR=${DIR%/*}

set -ex

plugin=plugin.js

CONF=$(dirname $(dirname $DIR))
site_plugin=$CONF/conf/site/$plugin

if [ -f "$site_plugin" ]; then
  echo -e "// DON'T EDIT THIS FILE\n// EDIT $site_plugin \n" | cat - "$site_plugin" >src/$plugin
fi
