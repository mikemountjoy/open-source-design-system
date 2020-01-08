const path = require("path")
var DeclarationBundlerPlugin = require("declaration-bundler-webpack-plugin")

module.exports = {
  mode: "none",
  entry: {
    index: "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, "lib"),
    filename: "[name].js",
    libraryTarget: "umd",
    library: "designSystem",
    umdNamedDefine: true,
  },
  resolve: {
    modules: ["node_modules"],
    extensions: [".ts", ".tsx", ".js"],
    alias: {
      brandColours: path.resolve(__dirname, "dist/brandColours.ts"),
    },
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(eot|svg|otf|ttf|woff|woff2)$/,
        use: "file-loader",
      },
    ],
  },
  plugins: [
    new DeclarationBundlerPlugin({
      moduleName: "designSystem",
      out: "./bundle.d.ts",
    }),
  ],
}
