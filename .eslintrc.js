module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-typescript'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.eslint.json',
    files: ['*.ts', '*.tsx'],
  },
  plugins: ['react', '@typescript-eslint', 'import'],
  rules: {
    'no-use-before-define': 'off',
  },
};
