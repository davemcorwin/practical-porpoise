const purgecss = require('@fullhuman/postcss-purgecss')

const plugins = [
  require('tailwindcss')
];

if (process.env.NODE_ENV === 'production') {
  plugins.push(require('autoprefixer'));
  plugins.push(purgecss({ content: ['./index.html'] }));
}

module.exports = {
  plugins
}