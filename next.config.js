const path = require('path');
const withCss = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');

module.exports = withCss(withSass({
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  future: {
    webpack5: true,
  },
}));
