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
    /*
     * When defining a new interface, it's initially empty. When this rule is
     * enabled, the interface will auto fix to type <name> = <interface>.
     * This is undesirable.
     */
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-extra-semi": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-var-requires": "off",
    curly: "error",
    eqeqeq: [
      "error",
      "always",
      {
        null: "ignore",
      },
    ],
    "import/newline-after-import": ["error", {count: 1}],
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
            group: "external",
            pattern: "solid-js",
            position: "before",
          },
          {
            group: "external",
            pattern: "@qui/**",
            position: "after",
          },
          {
            group: "internal",
            pattern: "~**",
          },
          {
            group: "internal",
            pattern: "~**/*",
          },
          {
            group: "internal",
            pattern: "~**/**",
          },
        ],
        pathGroupsExcludedImportTypes: ["react"],
      },
    ],
    "multiline-comment-style": ["off"],
    "no-case-declarations": "off",
    "no-inner-declarations": "off",
    "no-invalid-this": "off",
    "no-prototype-builtins": "off",
    "no-restricted-imports": [
      "error",
      {
        patterns: [
          {
            group: ["@qui/*/src/**/*"],
            message:
              "Relative imports from src directories are not allowed.  Please ensure that the targeted dependency is exported properly from its module",
          },
          {
            group: ["@qui/*/src"],
            message: 'Remove "src" (import directly)',
          },
        ],
      },
    ],
    "no-undef": "off",
    "no-unused-vars": "off",
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
