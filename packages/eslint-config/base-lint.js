module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'turbo',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  plugins: ['@typescript-eslint'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
  },
  overrides: [
    {
      files: ['*.ts', '*.vue', '*.tsx', '*.jsx'],
      rules: {
        'no-undef': 'off',
      },
    },
  ],
  rules: {
    '@typescript-eslint/no-empty-function': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-explicit-any': 'off',
    'prefer-const': 'warn',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    'no-async-promise-executor': 'off',
    'no-var': 'error',
  },
}
