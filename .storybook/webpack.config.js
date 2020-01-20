const path = require("path")

module.exports = ({ config }) => {
  config.resolve.extensions = [...config.resolve.extensions, ".ts", ".tsx"]
  return config
}
