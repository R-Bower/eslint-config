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
        "no-restricted-imports": [
          "error",
          {
            paths: [
              {
                importNames: ["default"],
                message:
                  "the React default import is no longer required since v17. You may need to update your tsconfig.compileOptions.jsx setting to 'react-jsx' to allow this",
                name: "react",
              },
            ],
          },
        ],
        "react/jsx-boolean-value": ["error", "never"],
        "react/jsx-curly-brace-presence": [
          "error",
          {children: "never", propElementValues: "always", props: "never"},
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
        "react/self-closing-comp": ["error", {component: true, html: false}],
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
