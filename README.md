# AutostubAngular


## About
This project is intended to showcase a small demo of how the package Autostub may be used together with the Angular Framework for unit testing.

For more info please visit the npm documentation of [Autostub](https://www.npmjs.com/package/autostub).

## Usage
1. Run `npm i`
2. Run `npm run test` to run the jasmine unit test.

## Project Notes:

- Updated **tsconfig.app.json**

Added `"**/*.stub.ts"` and `"**/*.unit.ts"` to tsconfig.app.json so that stub files and unit-test modules are ignored when running `ng build --prod`.

```json
  "exclude": [
    "src/test.ts",
    "**/*.spec.ts",
    "**/*.stub.ts"
    "**/*.unit.ts"
  ]
```

- Added a file called **app.module.unit.ts**, which contains a stub App to unit test.


