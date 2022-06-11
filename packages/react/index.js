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
    // React
    {
      extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:jsx-a11y/recommended",
      ],
      files: ["**/*.{tsx,jsx}"],
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
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
}
