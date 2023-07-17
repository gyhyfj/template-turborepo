/** @type {import("prettier").Options} */
module.exports = {
  printWidth: 80,
  singleQuote: true,
  semi: false,
  trailingComma: 'es5',
  arrowParens: 'avoid',
  htmlWhitespaceSensitivity: 'ignore',
  endOfLine: 'auto',
  plugins: ['prettier-plugin-tailwindcss'],
  tabWidth: 2,
  useTabs: false,
}
