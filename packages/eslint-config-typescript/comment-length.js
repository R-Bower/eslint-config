/** @type {import("eslint").ESLint.ConfigData} */
module.exports = {
  env: {
    browser: true,
    es6: true,
    es2022: true,
    node: true,
  },
  extends: ["plugin:comment-length/recommended"],
  rules: {
    "comment-length/limit-multi-line-comments": [
      "warn",
      {
        ignoreUrls: true,
        maxLength: 85,
      },
    ],
    "comment-length/limit-single-line-comments": [
      "warn",
      {
        ignoreUrls: true,
        maxLength: 85,
      },
    ],
  },
}
