module.exports = {
  root: true,
  env: {
    node: true,
    jquery: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'indent': 0,
    'destructuring': true,
    'prefer-destructuring': 'off',
    'prefer-template': 'off',
    'object-curly-spacing': [0, 'never'],
    'quote-props': 'off',
    'max-len': ['error', {'code': 300}],
    'quotes': ['error', 'single'],
    'no-param-reassign': 'off',
    'no-unused-expressions': 'off',
    'linebreak-style': [0, 'error', 'windows'],
    'import/prefer-default-export': false,
    'import/order': false,
    'no-plusplus': 'off',
    'consistent-return': 'off',
    'no-useless-escape': 'off',
    'no-nested-ternary': 'off',
    'import/extensions': 0,
    'arrow-parens': 0,
    'no-return-assign': 0,
    'prefer-spread': 0,
    'class-methods-use-this': 0,
    'arrow-body-style': ['error', 'as-needed'],
    'comma-dangle': 0,
    'import/no-named-as-default-member': 0,
    'vue/no-use-v-if-with-v-for': 0,
    'curly': 0,
    'no-continue': 0,
    'no-underscore-dangle': 0,
    'no-eval': 0,
    'no-shadow': 0,
    'global-require': 0,
    'import/no-dynamic-require': 0,
    'no-case-declarations': 0,
    'no-restricted-syntax': 0,
    'guard-for-in': 0,
    'func-names': 0,
    'vue/no-parsing-error': 0,
    'camelcase': 0
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
};
