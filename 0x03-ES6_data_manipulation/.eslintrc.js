module.exports = {
    env: {
      browser: true,
      es6: true,
      jest: true
    },
    extends: [
      'eslint:recommended',
      'plugin:import/errors',
      'plugin:import/warnings',
      'plugin:jest/recommended',
      'airbnb-base'
    ],
    parserOptions: {
      ecmaVersion: 2018,
      sourceType: 'module'
    },
    plugins: [
      'import',
      'jest'
    ],
    rules: {
      // Add your custom rules here
    }
  };