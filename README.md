# YGOPRODeck OpenAPI

[OpenAPI](https://www.openapis.org/) Description of the [YGOPRODeck API](https://ygoprodeck.com/api-guide/).

## Validate
 
To validate the API:
 
 
```bash
npx @redocly/cli@latest lint src/ygoprodeck-api.yaml
```

## Bundle

To bundle the API into a single file:

```
npx @redocly/cli@latest bundle src/ygoprodeck-api.yaml -o bundle/ygoprodeck-api.yaml
```
