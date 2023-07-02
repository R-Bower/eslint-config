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
  overrides: [
    {
      extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
      files: ["**/*.{tsx,jsx}"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 2022,
        sourceType: "module",
      },
      plugins: ["@typescript-eslint", "prettier", "react", "react-hooks"],
      rules: {
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
    },
  ],
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
      typescript: {},
    },
  },
}
