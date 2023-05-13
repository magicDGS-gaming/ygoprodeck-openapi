# YGOPRODeck OpenAPI
[![CI](https://github.com/magicDGS-gaming/ygoprodeck-openapi/actions/workflows/ci.yml/badge.svg?branch=main)](
https://github.com/magicDGS-gaming/ygoprodeck-openapi/actions/workflows/ci.yml?query=branch%3Amain)
[![Daily Test](https://github.com/magicDGS-gaming/ygoprodeck-openapi/actions/workflows/daily-test.yml/badge.svg?branch=main)](https://github.com/magicDGS-gaming/ygoprodeck-openapi/actions/workflows/daily-test.yml)
[![Release](https://img.shields.io/github/v/tag/magicDGS-gaming/ygoprodeck-openapi?label=release&logo=github&sort=semver)](https://github.com/magicDGS-gaming/ygoprodeck-openapi/releases)


[OpenAPI](https://www.openapis.org/) Description of the [YGOPRODeck API](https://ygoprodeck.com/api-guide/).

## Build

To bundle the API into a single file, run `make build`.
This script also performs the validation and if the definition is not valid it won't create the bundle.

The bundled YAML would be located under `dist/ygoprodeck-api.yaml`

## Test

To generate a postman collection and run the tests with newman, run `make test`.
The postman collection (also part of the distribution) YAML be located under `dist/ygoprodeck.postman.yaml`
