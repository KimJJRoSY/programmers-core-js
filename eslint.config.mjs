import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';

const types = {
  isArray: true,
  isNull: true,
  isObject: true,
  isString: true,
  isUndefined: true,
};

const lib = {
  getNode: true,
  insertLast: true,
  css: true,
  attr: true,
};

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { js },
    extends: ['js/recommended'],
  },
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...types,
        ...lib,
        gsap: true,
      },
    },
    rules: {
      'no-unused-vars': 'off',
    },
  },
]);
