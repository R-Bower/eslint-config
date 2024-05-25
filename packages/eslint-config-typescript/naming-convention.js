/** @type {import("eslint").ESLint.ConfigData} */
module.exports = {
  env: {
    browser: true,
    es6: true,
    es2022: true,
    node: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2022,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  rules: {
    "@typescript-eslint/naming-convention": [
      "error",
      {
        format: ["PascalCase"],
        selector: ["class", "enum", "interface", "typeAlias"],
      },
      {
        format: ["PascalCase"],
        leadingUnderscore: "allow",
        selector: ["typeParameter"],
      },
      {
        format: ["PascalCase"],
        selector: "class",
      },
      {
        filter: {
          match: false,
          regex: "^((ngAcceptInputType))",
        },
        format: ["camelCase"],
        leadingUnderscore: "allow",
        selector: ["classMethod", "classProperty"],
      },
      {
        filter: {
          match: false,
          regex: "^((ngAcceptInputType))",
        },
        format: ["camelCase", "PascalCase"],
        leadingUnderscore: "allow",
        modifiers: ["protected", "readonly"],
        selector: ["classMethod", "classProperty", "parameterProperty"],
      },
    ],
  },
}
