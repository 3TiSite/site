#!/usr/bin/env bash

DIR=$(dirname $(realpath "$0"))
cd $DIR
set -ex
export WEBDIR=$(dirname $(dirname $DIR))
exec openresty -c $DIR/site.conf
