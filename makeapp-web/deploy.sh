#!/usr/bin/env bash

HOST=$1

if [[ $# -eq 0 ]] ; then
    echo 'ERROR: No host for deployment provided'
    exit 1
fi

cp clear_build_products.sh dist/

echo "Deploy to $HOST"
scp -r dist/* $HOST:~/html/