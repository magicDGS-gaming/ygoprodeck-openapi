#!/bin/bash

# remove the previous file
rm -fr bundle/*.yaml
# linting
npx @redocly/cli@latest lint src/ygoprodeck-api.yaml
# if linting does not fail, bundle it
if [[ $? == 0 ]]; then
	npx @redocly/cli@latest bundle src/ygoprodeck-api.yaml -o bundle/ygoprodeck-api.yaml
else
	echo "ERROR: invalid OpenAPI definition" >&2
	exit 1
fi
