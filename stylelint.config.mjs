/** @type {import('stylelint').Config} */
export default {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-standard',
    'stylelint-config-recess-order',
    'stylelint-config-prettier-scss'
  ],
  plugins: [
    '@stylistic/stylelint-plugin'
  ],
  rules: {
    'color-hex-length': 'short',
    'declaration-no-important': true,
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'apply', 'variants', 'responsive', 'screen']
      }
    ],
    'selector-max-id': 0,
  },
  ignoreFiles: ['dist/**/*.css', 'node_modules/**/*.css']
};
