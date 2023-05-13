clean-yaml:
	rm -f dist/*.yaml

clean-json:
	rm -f dist/*.json

clean-all: clean-yaml clean-json

lint:
	npx @redocly/cli@latest lint src/ygoprodeck-api.yaml

build: clean-all lint
	npx @redocly/cli@latest bundle src/ygoprodeck-api.yaml -o dist/ygoprodeck-api.yaml

test: clean-json
	npx @apideck/portman@latest --cliOptionsFile portman/portman-cli.yaml --runNewman

all: build test