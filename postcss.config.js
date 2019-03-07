const tailwind = require('tailwindcss');

const plugins = [
  tailwind('./tailwind.js')
];

if (process.env.NODE_ENV === 'production') {
  const purgecss = require('@fullhuman/postcss-purgecss')

  class TailwindExtractor {
    static extract(content) {
      return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
    }
  }

  plugins.push(require('autoprefixer'));
  plugins.push(purgecss({
    content: ['./index.html'],
    extractors: [
      {
        extractor: TailwindExtractor,
        extensions: ['html']
      }
    ]
  }));
}

module.exports = {
  plugins
}