const path = require('path');
const withCss = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');

module.exports = {
  ...withCss(withSass({
    sassOptions: {
      includePaths: [path.join(__dirname, 'styles')],
    },
    async redirects() {
      return [
        {
          source: '/profile',
          destination: '/profile/account',
          permanent: true,
        },
      ];
    },
    future: {
      webpack5: true,
    },
  })),
};
