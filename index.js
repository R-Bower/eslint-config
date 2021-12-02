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
    // Playwright
    {
      extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:playwright/playwright-test",
      ],
      files: ["**/*.pw.ts"],
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
        "jsx-a11y",
        "jest",
        "jest-dom",
        "prettier",
        "react",
        "react-hooks",
        "sort-destructure-keys",
        "sort-keys-fix",
        "testing-library",
        "typescript-sort-keys",
      ],
      rules: {
        "jest/no-disabled-tests": "warn",
        "jest/no-focused-tests": "error",
        "jest/no-identical-title": "error",
        "jest/prefer-to-have-length": "warn",
        "jest/valid-expect": "error",
        "playwright/missing-playwright-await": [
          "error",
          {customMatchers: ["toBeCustomThing"]},
        ],
      },
    },
    // Unit tests
    {
      files: ["**/*.{spec,unit}.{tsx,ts}"],
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
        "jsx-a11y",
        "jest-dom",
        "prettier",
        "react",
        "react-hooks",
        "sort-destructure-keys",
        "sort-keys-fix",
        "testing-library",
        "typescript-sort-keys",
      ],
    },
    // React
    {
      extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:jsx-a11y/recommended",
      ],
      files: [
        "**/*.{tsx,jsx}",
        "packages/libs/react-*/**/*.{ts,js,json}",
        "packages/apps/**/*.{ts,js,json}",
      ],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 2021,
        sourceType: "module",
      },
      rules: {
        "jsx-a11y/no-autofocus": "off",
        "no-prototype-builtins": "off",
        "react/jsx-curly-brace-presence": [
          "error",
          {
            props: "always",
          },
        ],
        "react/jsx-key": "error",
        "react/jsx-sort-props": [
          "error",
          {
            reservedFirst: ["key", "ref"],
          },
        ],
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
        "react/no-array-index-key": "off",
        "react-hooks/exhaustive-deps": [
          "error",
          {
            enableDangerousAutofixThisMayCauseInfiniteLoops: true,
          },
        ],
        "react-hooks/rules-of-hooks": "error",
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
    {
      // General TypeScript/JavaScript
      extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:jsx-a11y/recommended",
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
        "jsx-a11y",
        "prettier",
        "react",
        "react-hooks",
        "sort-destructure-keys",
        "sort-keys-fix",
        "testing-library",
        "typescript-sort-keys",
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
        // When defining a new interface, it's sometimes to keep it empty initially,
        // particularly if it extends another interface.  When this rule is enabled,
        // the interface will auto fix to type <name> = <extended interface>.  This is undesirable.
        "@typescript-eslint/no-empty-interface": "off",

        "@typescript-eslint/no-unused-vars": [
          "error",
          {
            args: "after-used",
            argsIgnorePattern: "^_",
            vars: "all",
            varsIgnorePattern: "^_",
          },
        ],
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
                group: "external",
                pattern: "react",
                position: "before",
              },
              {
                group: "internal",
                pattern: "~*/**",
              },
            ],
            pathGroupsExcludedImportTypes: ["react"],
          },
        ],
        "jsx-a11y/no-autofocus": "off",
        "no-const-assign": "error",
        "no-duplicate-imports": "error",
        "no-invalid-this": "error",
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
