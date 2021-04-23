const withCss = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');

module.exports = {
  ...withCss(withSass()),
  async redirects () {
    return [
      {
        source: '/profile',
        destination: '/profile/account',
        permanent: true
      }
    ]
  }
}
