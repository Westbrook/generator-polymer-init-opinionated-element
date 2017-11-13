module.exports = {
  "env": {
    "es6": true
  },
  "parser": "babel-eslint",
  "extends": "google",
  "parserOptions": {
    "sourceType": "module",
  },
  "rules": {
    "brace-style": ["error", "stroustrup", { "allowSingleLine": true }],
    "block-spacing": ["error", "always"]
  }
};
