/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  plugins: ['prettier'],
  extends: [
    // 'airbnb',
    '@vue/eslint-config-prettier/skip-formatting',
    '@vue/eslint-config-prettier',
    '@vue/eslint-config-typescript', // 이걸 넣어줘야 vue3 + Typescript + eslint 적용됨
    'plugin:vue/vue3-essential',
    // 'plugin:prettier/recommended',
    'eslint:recommended',
  ],
  env: {
    node: true,
    // <script setup>에서 defineProps, defineEmits, defineExpose를 사용할 수 있게 하는 옵션
    'vue/setup-compiler-macros': true,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unused-vars': 'off', // 사용하지 않는 변수 경고 끄기
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
        indent: ['none', 0],
      },
    ],
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaVersion: 'latest',
  },
  // parser: '@typescript-eslint/parser',
  parser: 'vue-eslint-parser',
  // parser: 'babel-eslint',
};
