import eslintPlugin from 'eslint-plugin-import';

export default [
  {
    files: ['**/*.js', '**/*.mjs'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module'
    },
    plugins: {
      import: eslintPlugin
    },
    rules: {
      'semi': ['error', 'always'],
      'quotes': ['error', 'single'],
      'no-unused-vars': ['warn'],
      'no-console': 'off',
      'import/no-unresolved': 'error',
      'import/order': ['warn', { 'alphabetize': { 'order': 'asc' } }],
      'indent': ['error', 2],
      'object-curly-spacing': ['error', 'always'],
      'comma-dangle': ['error', 'never'],
      'eol-last': ['error', 'always']
    }
  }
];
