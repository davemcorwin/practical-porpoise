const tailwind = require('tailwindcss')('./tailwind.config.js');
const purgecss = require('@fullhuman/postcss-purgecss');
const autoprefixer = require('autoprefixer');

const plugins = [tailwind];

if (process.env.NODE_ENV === 'production') {
  plugins.push(purgeCssPlugin());
}

plugins.push(autoprefixer);

function purgeCssPlugin() {
  class TailwindExtractor {
    static extract(content) {
      return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
    }
  }

  return purgecss({
    content: ['./index.html'],
    extractors: [
      {
        extractor: TailwindExtractor,
        extensions: ['html'],
      },
    ],
  });
}

module.exports = {
  plugins,
};
