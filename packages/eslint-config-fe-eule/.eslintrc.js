module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: './',
    ecmaFeatures: {
      jsx: true,
    },
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      plugins: [
        'react',
        'jsx-a11y',
        'import',
        'prettier',
        '@typescript-eslint',
        'simple-import-sort',
        '@emotion',
      ],
      extends: [
        'airbnb',
        'prettier',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/typescript',
      ],
      rules: {
        // prettier
        'prettier/prettier': ['error'],

        // TypeScript
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/ban-ts-ignore': 'off',
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/explicit-member-accessibility': 'off',
        '@typescript-eslint/no-object-literal-type-assertion': 'off',
        '@typescript-eslint/no-shadow': 'warn',
        '@typescript-eslint/ban-types': 'warn',
        '@typescript-eslint/no-explicit-any': 'warn',
        /* 명시적인 return type 작성*/
        '@typescript-eslint/explicit-module-boundary-types': 'off',

        // js
        camelcase: 'off',
        'consistent-return': 'off',
        'no-console': ['warn', { allow: ['error', 'warn'] }],
        /* redux toolkit immer js를 위한 세팅 */
        'no-param-reassign': ['error', { props: true, ignorePropertyModificationsFor: ['state'] }],
        'no-underscore-dangle': 'warn',
        eqeqeq: 'warn',
        radix: 'warn',
        'no-plusplus': 'warn',
        'default-case': 'warn',
        'no-restricted-properties': 'warn',

        // v4 changes
        'no-use-before-define': 'off',
        'no-shadow': 'off',

        // jsx-a11y
        'jsx-a11y/click-events-have-key-events': 'warn',
        'jsx-a11y/no-noninteractive-element-interactions': 'warn',

        // React
        'react/react-in-jsx-scope': 'off',
        'react/jsx-uses-react': 'off',
        'react/require-default-props': 'off',
        'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
        'react/prop-types': 'off',
        'react-hooks/exhaustive-deps': 'error',
        'react/jsx-props-no-spreading': 'off',
        'react/no-array-index-key': 'warn',
        'react/button-has-type': 'warn',
        'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
        '@emotion/jsx-import': ['error', { runtime: 'automatic', importSource: '@emotion/react' }],
        '@emotion/no-vanilla': 'error',
        '@emotion/import-from-emotion': 'error',

        // import
        'import/no-cycle': 'warn',
        'import/prefer-default-export': 'off',
        'import/no-extraneous-dependencies': 'off',
        'import/extensions': [
          'error',
          'ignorePackages',
          {
            js: 'never',
            mjs: 'never',
            jsx: 'never',
            ts: 'never',
            tsx: 'never',
          },
        ],
        'no-restricted-imports': [
          'error',
          {
            patterns: [
              {
                group: ['@banksalad/idl/apis/*'],
                message: '@banksalad/idl/apis/* 대신에 @banksalad/idl/web/apis/* 를 사용해주세요. ',
              },
            ],
          },
        ],
        'import/no-default-export': 'error',

        // simple-import-sort
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',
      },
    },
    // Next.js 는 pages와 API 들에서는 default export를 필요로 합니다.
    {
      files: ['pages/**/*', 'pages/api/**/*', '*.d.ts'],
      rules: {
        'import/no-default-export': 'off',
      },
    },
  ],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts', '.jsx', '.tsx', '.json'],
      },
      typescript: {
        alwaysTryTypes: true,
        project: './tsconfig.json',
      },
    },
    'import/extensions': ['.js', '.ts', '.mjs', '.jsx', '.tsx'],
  },
};
//
