const withTM = require("next-transpile-modules")([
    "@boticario/components"
])

module.exports = withTM({
    trailingSlash: true
})