// module.exports = {
//   parser: '@typescript-eslint/parser',
//   ignorePatterns: ['.eslintrc.js'],
//   parserOptions: {
//     tsconfigRootDir: __dirname,
//     ecmaFeatures: {
//       jsx: true,
//     },
//     ecmaVersion: 2018,
//     sourceType: 'module',
//     project: './tsconfig.json',
//   },
//   extends: [
//     'airbnb-typescript',
//     'airbnb/hooks',
//     'plugin:react/recommended',
//     'plugin:@typescript-eslint/recommended',
//     'plugin:@typescript-eslint/recommended-requiring-type-checking',
//     'prettier',
//     'plugin:import/recommended',
//     'next/core-web-vitals',
//   ],
//   plugins: [
//     'react',
//     'react-hooks',
//     '@typescript-eslint',
//     'prettier',
//     'unused-imports',
//     'simple-import-sort',
//   ],
//   env: {
//     browser: true,
//     es6: true,
//     jest: true,
//   },
//   rules: {
//     'no-console': 'error',
//     'no-unused-vars': 'off',
//     'react/display-name': 'off',
//     '@typescript-eslint/no-unsafe-assignment': 'off',
//     '@typescript-eslint/no-unsafe-call': 'off',
//     'unused-imports/no-unused-imports': 'error',
//     'unused-imports/no-unused-vars': [
//       'warn',
//       {
//         vars: 'all',
//         varsIgnorePattern: '^_',
//         args: 'after-used',
//         argsIgnorePattern: '^_',
//       },
//     ],
//     '@typescript-eslint/no-unused-vars': ['error'],
//     'react/jsx-props-no-spreading': 'off',
//     'react/react-in-jsx-scope': 'off',
//     'react/jsx-pascal-case': 'off',
//     'react/require-default-props': 'off',
//     'react-hooks/rules-of-hooks': 'error',
//     'react-hooks/exhaustive-deps': 'warn',
//     'react/jsx-filename-extension': [
//       1,
//       {
//         extensions: ['.tsx'],
//       },
//     ],
//     'import/extensions': ['error', 'never', { json: 'always' }],
//     'import/prefer-default-export': 'off',
//     'prettier/prettier': [
//       'error',
//       {
//         semi: false,
//       },
//     ],
//     '@typescript-eslint/explicit-module-boundary-types': 'off',
//     'react/jsx-one-expression-per-line': 'off',
//     'no-use-before-define': 'off',
//     '@typescript-eslint/no-use-before-define': 'off',
//     'import/no-named-as-default': 'off',
//     '@typescript-eslint/naming-convention': 'off',
//     'react/prop-types': 'off',
//     '@typescript-eslint/no-shadow': 'off',
//     'no-restricted-imports': [
//       'error',
//       {
//         patterns: ['@mui/*/*/*', '!@mui/material/test-utils/*'],
//       },
//     ],
//     'eol-last': ['error', 'always'],
//     'simple-import-sort/imports': 'error',
//     'simple-import-sort/exports': 'error',
//   },
//   overrides: [
//     {
//       files: ['**/*.js', '**/*.ts', '**/*.tsx'],
//       rules: {
//         'simple-import-sort/imports': [
//           'error',
//           {
//             groups: [
//               // `react` first, `next` second, then packages starting with a character
//               [
//                 '^react$',
//                 '^next',
//                 '^@apollo',
//                 '^@auth0',
//                 '@emotion',
//                 '^@hookform',
//                 '^@sentry',
//                 '^[a-z]',
//               ],
//               // mui package
//               ['^@mui'],
//               [
//                 // Packages starting with `@` first
//                 '^@',

//                 // starting with `~` second
//                 '^~',

//                 // `../` third
//                 '^\\.\\.(?!/?$)',
//                 '^\\.\\./?$',

//                 // './' fourth
//                 '^\\./(?=.*/)(?!/?$)',
//                 '^\\.(?!/?$)',
//                 '^\\./?$',
//               ],
//               // Style imports
//               ['^.+\\.s?css$'],
//               // Side effect imports
//               ['^\\u0000'],
//             ],
//           },
//         ],
//       },
//     },
//   ],

//   settings: {
//     'import/resolver': {
//       typescript: {},
//     },
//     react: {
//       version: 'detect',
//     },
//   },
// }
