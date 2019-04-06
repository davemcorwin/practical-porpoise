const tailwind = require('tailwindcss');
const purgecss = require('@fullhuman/postcss-purgecss')

class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
  }
}

const plugins = [
  tailwind('./tailwind.js'),
  // purgecss({
  //   content: ['./index.html'],
  //   extractors: [
  //     {
  //       extractor: TailwindExtractor,
  //       extensions: ['html']
  //     }
  //   ]
  // }),
  require('autoprefixer')
];

module.exports = {
  plugins
}