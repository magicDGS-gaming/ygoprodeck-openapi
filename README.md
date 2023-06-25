[![CI](https://github.com/magicDGS-gaming/ygoprodeck-openapi/actions/workflows/ci.yml/badge.svg?branch=main)](
https://github.com/magicDGS-gaming/ygoprodeck-openapi/actions/workflows/ci.yml?query=branch%3Amain)
[![Daily Test](https://github.com/magicDGS-gaming/ygoprodeck-openapi/actions/workflows/daily-test.yml/badge.svg?branch=main)](https://github.com/magicDGS-gaming/ygoprodeck-openapi/actions/workflows/daily-test.yml)
[![Release](https://img.shields.io/github/v/tag/magicDGS-gaming/ygoprodeck-openapi?label=release&logo=github&sort=semver)](https://github.com/magicDGS-gaming/ygoprodeck-openapi/releases)

# YGOPRODeck OpenAPI

:exclamation: **DISCLAIMER: This is a third-party project based on the [YGOPRODeck API] by [YGOPRODeck](https://ygoprodeck.com/) and does not have any affiliation with it** :exclamation:

This project contains the [OpenAPI](https://www.openapis.org/) description of the [YGOPRODeck API].
We aim to provide a documentation-as-code describing the API to allow developers to:

* Test the API through the [live-document](https://magicdgs-gaming.github.io/ygoprodeck-openapi/index.html)
* Use the unbundled OpenAPI file directly from GitHub through the [ygoprodeck-api.yaml](src/ygoprodeck-api.yaml) file.
* Use the released artifacts (see the [Releases](https://github.com/magicDGS-gaming/ygoprodeck-openapi/releases) on GitHub) directly:
  - `ygoprodeck-api.yaml` provides a bundled OpenAPI description to be used for code generation.
  - `ygoprodeck.postman.json` to test and interact with the API through Postman.

_Note that as a third-party project without affiliation to the [YGOPRODeck API] the interoperability might be broken. We rely on your help to keep it in sync through pull-requests and/or issues._

## Contributing

Please read [CONTRIBUTING.md](https://github.com/magicDGS-gaming/ygoprodeck-api/blob/main/CONTRIBUTING.md).
for details on our code of conduct, and the process for collaborating on the project.

### Bug reports

Before submitting a new bug report, please search for keywords in our [Issue Tracker][issue_tracker].
If you cannot find your problem, fill in a new [issue][issue_tracker].

## Getting started

### Pre-requisites

The project only requires `npm` to be installed, relying on the `npx` command to run redocly and portman.

We recommend to use an IDE with support for OpenAPI to edit the YAML files.

Postman can also be used to open both artifacts (OpenAPI and postman collection).

## Build & Test

To build and test the description and postman collection run `make`.
This will create the following artifacts:

* `dist/ygoprodeck-api.yaml` - bundled OpenAPI YAML
* `dist/ygoprodeck.postman.json` - postman collection JSON

### Bundle only

To bundle the API into a single file, run `make build`.
This script also performs the validation and if the definition is not valid it won't create the bundle.

To create the postman collection without tests, run `make postman-collection`

### Test only

To only run the tests with newman, run `make test` (as it is run with portman, the postman collection would be also created). This requires that a build for the bubdled OpenAPI description is alredy in place.

## LICENSE

This project is provided with the the [The Unlicense](https://unlicense.org) license.

The [YGOPRODeck API] is not affiliated with this project and it is provided as a public API by its author.

<!-- references -->
[YGOPRODeck]: https://ygoprodeck.com/
[YGOPRODeck API]: https://ygoprodeck.com/api-guide/
[issue_tracker]: https://github.com/magicDGS-gaming/ygoprodeck-openapi/issues
[pull_requests]: https://github.com/magicDGS-gaming/ygoprodeck-openapi/pulls