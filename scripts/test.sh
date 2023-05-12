#!/bin/bash

rm -fr dist/*.postman.json

npx @apideck/portman@latest --cliOptionsFile portman/portman-cli.yaml --runNewman