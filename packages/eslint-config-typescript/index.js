/** @type {import("eslint").ESLint.ConfigData} */
module.exports = {
  env: {
    browser: true,
    es6: true,
    es2022: true,
    node: true,
  },
  globals: {
    JSX: true,
    ParentNode: true,
    RequestInit: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2022,
    sourceType: "module",
  },
  plugins: [
    "@typescript-eslint",
    "import",
    "prettier",
    "sort-destructure-keys",
    "sort-keys-fix",
    "typescript-sort-keys",
    "unused-imports",
  ],
  rules: {
    // TypeScript/JavaScript
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/ban-types": [
      "error",
      {
        types: {
          Function: false,
        },
      },
    ],

    "@typescript-eslint/naming-convention": [
      "error",
      {
        custom: {
          match: false,
          regex: "^I[A-Z]",
        },
        format: ["PascalCase"],
        selector: "interface",
      },
    ],
    /*
     * When defining a new interface, it's sometimes to keep it empty initially,
     * particularly if it extends another interface.  When this rule is enabled,
     * the interface will auto fix to type <name> = <extended interface>.  This
     * is undesirable.
     */
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-extra-semi": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-var-requires": "off",
    curly: "error",
    eqeqeq: ["error", "always"],
    "import/no-cycle": [0],
    "import/order": [
      "error",
      {
        alphabetize: {
          caseInsensitive: true,
          order: "asc",
        },
        groups: [
          ["builtin", "external"],
          ["internal"],
          ["parent"],
          ["sibling", "index"],
          ["unknown"],
        ],
        "newlines-between": "always",
        pathGroups: [
          {
            group: "external",
            pattern: "react",
            position: "before",
          },
          {
            group: "internal",
            pattern: "~**",
          },
          {
            group: "internal",
            pattern: "~**/*",
          },
        ],
        pathGroupsExcludedImportTypes: ["react"],
      },
    ],
    "multiline-comment-style": ["off"],
    "no-case-declarations": "off",
    "no-const-assign": "error",
    "no-duplicate-imports": "error",
    "no-inner-declarations": "off",
    "no-invalid-this": "off",
    "no-prototype-builtins": "off",
    "no-undef": "error",
    "no-unused-vars": "off",
    "no-useless-escape": "warn",
    "object-shorthand": "error",
    "prefer-template": ["error"],
    "prettier/prettier": "error",
    "sort-destructure-keys/sort-destructure-keys": "error",
    "sort-imports": [
      "error",
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
      },
    ],
    "sort-keys-fix/sort-keys-fix": ["error", "asc", {natural: true}],
    "spaced-comment": [
      "error",
      "always",
      {
        exceptions: ["*"],
        markers: ["/"],
      },
    ],
    "typescript-sort-keys/interface": "error",
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
