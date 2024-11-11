import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended';
import i18next from 'eslint-plugin-i18next';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { ignores: ['node_modules/', 'build/'] },
  { languageOptions: { globals: { ...globals.browser, ...globals.jest } } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  eslintPluginPrettier,
  i18next.configs['flat/recommended'],
  {
    rules: {
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
      'react/react-in-jsx-scope': 'off',
      'no-unused-vars': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
      'react/jsx-closing-bracket-location': [1, 'tag-aligned'],
    },
  },
];
