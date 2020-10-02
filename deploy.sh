#!/usr/bin/env bash

HOST=$1
CLEAR_SCRIPT="clear_build_products.sh"

if [[ $# -eq 0 ]]; then
	echo 'ERROR: No host for deployment provided'
	exit 1
fi

cp $CLEAR_SCRIPT dist/
chmod +x dist/$CLEAR_SCRIPT

echo "Clearing old version on $HOST"
scp dist/$CLEAR_SCRIPT "$HOST":~/html/
ssh $HOST "cd ~/html/ && ./$CLEAR_SCRIPT"

echo "Deploy to $HOST"
scp -r dist/* "$HOST":~/html/
