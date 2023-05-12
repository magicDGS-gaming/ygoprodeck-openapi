# YGOPRODeck OpenAPI
[![Build](https://github.com/magicDGS-gaming/ygoprodeck-openapi/actions/workflows/build.yml/badge.svg?branch=main)](
https://github.com/magicDGS-gaming/ygoprodeck-openapi/actions/workflows/build.yml?query=branch%3Amain)
[![Release](https://img.shields.io/github/v/tag/magicDGS-gaming/ygoprodeck-openapi?label=release&logo=github&sort=semver)](https://github.com/magicDGS-gaming/ygoprodeck-openapi/releases)


[OpenAPI](https://www.openapis.org/) Description of the [YGOPRODeck API](https://ygoprodeck.com/api-guide/).

## Build

To bundle the API into a single file, run `./scripts/build.sh`.
This script also performs the validation and if the definition is not valid it won't create the bundle.

The bundled YAML would be located under `dist/ygoprodeck-api.yaml`
