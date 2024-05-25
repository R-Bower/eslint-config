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
  plugins: ["@typescript-eslint", "import", "prettier", "unused-imports"],
  rules: {
    // TypeScript/JavaScript
    "@typescript-eslint/explicit-member-accessibility": [
      "error",
      {
        accessibility: "explicit",
        overrides: {
          accessors: "no-public",
          constructors: "off",
          methods: "no-public",
          parameterProperties: "off",
          properties: "no-public",
        },
      },
    ],
    curly: "error",
    eqeqeq: [
      "error",
      "always",
      {
        null: "ignore",
      },
    ],
    "no-array-constructor": "error",
    "no-const-assign": "error",
    "no-duplicate-imports": "error",
    "no-inner-declarations": "off",
    "no-invalid-this": "off",
    "no-prototype-builtins": "off",
    "no-restricted-syntax": [
      // ban # modifier
      "error",
      {
        message: "Use `private` instead",
        selector:
          ":matches(PropertyDefinition, MethodDefinition) > PrivateIdentifier.key",
      },
    ],
    "no-undef": "off",
    "no-unused-vars": "off",
    "no-useless-concat": "error",
    "no-useless-escape": "warn",
    "no-var": "error",
    "object-shorthand": "error",
    "prefer-template": ["error"],
    "prettier/prettier": "error",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "error",
      {
        args: "after-used",
        argsIgnorePattern: "^_",
        vars: "all",
        varsIgnorePattern: "^_",
      },
    ],
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
      typescript: {},
    },
  },
}
