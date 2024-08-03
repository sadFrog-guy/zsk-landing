module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    react: {
      version: '18.2',
    },
  },
  plugins: ['react-refresh'],
  rules: {
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'no-unused-vars': 'off', // Отключаем правило no-unused-vars
    'react/prop-types': 'off', // Отключаем проверку типов пропсов
    'react/react-in-jsx-scope': 'off', // Отключаем требование React в области видимости (для новых версий React)
    'no-console': 'warn', // Предупреждение при использовании console.log
    'no-debugger': 'warn', // Предупреждение при использовании debugger
  },
};