import { defineConfig } from 'eslint/config';
import i18next from 'eslint-plugin-i18next';
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended';
import pluginReact from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';
import tseslint from 'typescript-eslint';

import pluginJs from '@eslint/js';

export default defineConfig([
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { ignores: ['node_modules/', 'build/', 'storybook-static/', 'json-server/'] },
  { plugins: { 'simple-import-sort': simpleImportSort } },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.jest,
        __IS__DEV__: true,
        __API__: true,
        __PROJECT__: true,
      },
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  eslintPluginPrettier,
  i18next.configs['flat/recommended'],
  reactHooks.configs['recommended-latest'],
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      'prettier/prettier': [
        'error',
        { singleQuote: true, semi: true, endOfLine: 'auto' },
      ],
      'react/react-in-jsx-scope': 'off',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      'react/jsx-closing-bracket-location': [1, 'tag-aligned'],
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'error',
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            ['^react$', '^next', '^[a-z]'],
            // Packages starting with `@`
            ['^@'],
            // Packages starting with `~`
            ['^~'],
            // Imports starting with `../`
            ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
            // Imports starting with `./`
            ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
            // Style imports
            ['^.+\\.s?css$'],
            // Side effect imports
            ['^\\u0000'],
          ],
        },
      ],
      'simple-import-sort/exports': 'error',
    },
  },
]);
