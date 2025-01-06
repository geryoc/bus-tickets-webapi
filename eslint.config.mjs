import js from "@eslint/js";
import prettier from 'eslint-plugin-prettier';
import globals from "globals";

export default [
  js.configs.recommended,
  {
    rules: {
    },
    plugins: {
      prettier
    },
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      globals: globals.node
    },
  },
];