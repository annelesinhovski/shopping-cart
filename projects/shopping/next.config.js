const withTM = require("next-transpile-modules")([
  "@boticario/components",
  "@boticario/utils",
]);

module.exports = withTM({
  trailingSlash: true,
});
