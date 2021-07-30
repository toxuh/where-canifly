const errorOnProduction =
  process.env.NODE_ENV === 'production' ? 'error' : 'warn';

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    createDefaultProgram: true,
  },
  extends: [
    'react-app',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
  ],

  plugins: ['jsx-a11y', 'prettier', '@typescript-eslint'],

  rules: {
    'prettier/prettier': 'error',

    'import/namespace': 'error',
    'import/default': 'error',
    'sort-imports': ['error', { ignoreDeclarationSort: true }],

    'react/boolean-prop-naming': 'error',
    'react/prop-types': 0,
    'react/require-default-props': 0,
    'react/jsx-props-no-spreading': 0,

    'react-hooks/exhaustive-deps': 'off',

    'react/sort-prop-types': [
      'error',
      {
        requiredFirst: true,
        callbacksLast: true,
        sortShapeProp: true,
        noSortAlphabetically: true,
      },
    ],
    'react/jsx-sort-props': [
      'error',
      {
        reservedFirst: true,
        shorthandLast: true,
        callbacksLast: true,
        noSortAlphabetically: true,
      },
    ],
    'react/no-danger': 0,

    'jsx-a11y/label-has-associated-control': 0,
    'jsx-a11y/no-onchange': 0,

    'no-nested-ternary': 0,

    'no-console': 0,
    'no-alert': errorOnProduction,
    'no-debugger': errorOnProduction,
  },

  overrides: [
    {
      // conceptually constants, action types, actions,
      // selectors, typedefs, utils and components
      // are collections of exports
      // so it is ok to don't prefer default export here
      files: [
        '**/constants.ts',
        '**/types.ts',
        '**/utils/index.ts',
        '**/components/index.ts',
        '**/containers/index.ts',
      ],
      rules: {
        'import/prefer-default-export': 'off',
      },
    },
  ],

  ignorePatterns: ['serviceWorker.js'],
};
