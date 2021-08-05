const withTM = require('next-transpile-modules')([
  '@shoppingcart/components',
  '@shoppingcart/utils',
]);

module.exports = withTM({
  trailingSlash: true,
});
