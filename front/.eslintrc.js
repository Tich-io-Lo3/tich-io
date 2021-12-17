module.exports = {
  env: {
    node: true,
    commonjs: true
  },
  extends: [
    "eslint:recommended", "plugin:react/recommended"
  ],
  rules: {
    indent: [
      "warn", 2
    ],
    "linebreak-style": [
      "error", "unix"
    ],
    quotes: [
      "warn", "single"
    ],
    semi: [
      "warn", "always"
    ],
    "no-unused-vars": "warn"
  }
};