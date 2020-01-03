const path = require("path")

module.exports = ({ config }) => {
  config.resolve.alias = {
    ...config.resolve.alias,
    index: path.resolve(__dirname, "../src"),
    atoms: path.resolve(__dirname, "../src/components/atoms"),
    molecules: path.resolve(__dirname, "../src/components/molecules"),
    organism: path.resolve(__dirname, "../src/components/organism"),
    brandColours: path.resolve(__dirname, "../src/brandColours"),
    zIndexes: path.resolve(__dirname, "../src/zIndexes"),
    mediaQueries: path.resolve(__dirname, "../src/mediaQueries"),
    assets: path.resolve(__dirname, "../src/assets"),
  }
  config.resolve.extensions = [...config.resolve.extensions, ".ts", ".tsx"]
  return config
}
