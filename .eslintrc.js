// filepath: /Users/sunab/Documents/TestFrameworks/PlaywrightTypescript/.eslintrc.js
module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    rules: {
        // Add custom rules here
        '@typescript-eslint/no-explicit-any': 'off',
    },
    env: {
        node: true,
        browser: true,
        es6: true,
    },
};