const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./js/script.js",
  output: {
    filename: "bundle.js",
    path: __dirname + "/js",
  },
  optimization: {
    minimizer: [new TerserPlugin()],
  },
};
