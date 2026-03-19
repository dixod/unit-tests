const js = require('@eslint/js');
const globals = require('globals');

const commonRules = {
  quotes: ['error', 'single'],
  semi: ['error', 'always'],
  indent: ['error', 2, { SwitchCase: 1 }],
  'comma-dangle': ['error', 'always-multiline'],
  'object-curly-spacing': ['error', 'always'],
  'no-trailing-spaces': 'error',
  'eol-last': ['error', 'always'],
};

module.exports = [
  {
    ignores: ['node_modules/**', 'coverage/**', 'mochawesome-report/**'],
  },
  js.configs.recommended,
  {
    files: ['utils/**/*.js', 'test/**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.node,
        ...globals.mocha,
      },
    },
    rules: {
      ...commonRules,
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'prefer-const': 'error',
    },
  },
  {
    files: ['eslint.config.js', 'babel.config.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'commonjs',
      globals: globals.node,
    },
    rules: commonRules,
  },
];
