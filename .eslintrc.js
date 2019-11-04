module.exports = {
  extends: ["./node_modules/poetic/config/eslint/eslint-config.js"],
  rules: {
    'jsx-a11y/href-no-hash': ['off'],
    'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx'] }],
    'react/no-array-index-key': 0,
    'react/prop-types': 0,
    'max-len': [
      'warn',
      {
        code: 100,
        tabWidth: 2,
        comments: 100,
        ignoreComments: false,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    'import/no-extraneous-dependencies': 0,
    'no-shadow': 0,
    'no-underscore-dangle': 0,
    'no-console': 0,
    'global-require': 0,
    'import/prefer-default-export': 0,
  }
  env: {
    browser: false,
    node: true,
    jest: false,
  },
};
