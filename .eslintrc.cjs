/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    '@vue/eslint-config-prettier/skip-formatting',
    '@vue/eslint-config-prettier',
    '@vue/eslint-config-typescript', // 이걸 넣어줘야 vue3 + Typescript + eslint 적용됨
  ],
  env: {
    'vue/setup-compiler-macros': true,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: true,
        useTabs: false,
        tabWidth: 2,
        trailingComma: 'all',
        printWidth: 80,
        bracketSpacing: true,
        arrowParens: 'avoid',
        endOfLine: 'auto',
      },
    ],
  },
  parserOptions: {
    ecmaVersion: 'latest',
  },
  // parser: '@typescript-eslint/parser',
  parser: 'vue-eslint-parser',
};
