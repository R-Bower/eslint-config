module.exports = {
  env: {
    browser: true,
    es6: true,
    es2020: true,
    jest: true,
    node: true,
  },
  globals: {
    JSX: true,
    RequestInit: true,
  },
  ignorePatterns: ["node_modules", "dist"],
  overrides: [
    {
      // General TypeScript/JavaScript
      extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
      ],
      files: ["**/*.{tsx,ts,jsx,js,json}"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 2020,
        sourceType: "module",
      },
      plugins: [
        "@typescript-eslint",
        "import",
        "prettier",
        "sort-destructure-keys",
        "sort-keys-fix",
        "typescript-sort-keys",
        "unused-imports"
      ],
      rules: {
        "@typescript-eslint/ban-ts-comment": "off",
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
         * the interface will auto fix to type <name> = <extended interface>.  This is undesirable.
         */
        "@typescript-eslint/no-empty-interface": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "@typescript-eslint/no-var-requires": "off",
        curly: "error",
        eqeqeq: ["error", "always"],
        "import/no-cycle": ["error"],
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
              ["parent", "sibling", "index"],
              ["unknown"],
            ],
            "newlines-between": "always",
            pathGroups: [
              {
                group: "internal",
                pattern: "~*/**",
              },
            ],
            pathGroupsExcludedImportTypes: ["react"],
          },
        ],
        "multiline-comment-style": ["off"],
        "no-const-assign": "error",
        "no-duplicate-imports": "error",
        "no-inner-declarations": "off",
        "no-invalid-this": "error",
        "no-restricted-imports": [
          "error",
          // awaiting https://github.com/eslint/eslint/pull/14580 to provide suggestion
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
        "no-undef": "error",
        "no-unused-vars": "off",
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
    },
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
}
