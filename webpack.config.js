const path = require("path");
var webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: process.env.NODE_ENV || "production",

  entry: {
    bundle: path.join(__dirname, "src", "index.js"),
  },

  output: {
    path: path.join(__dirname, "build"),
    filename: "index.bundle.js",
    clean: true,
    assetModuleFilename: "[name][ext]",
  },

  resolve: {
    extensions: [".js", ".jsx"],
  },

  devServer: {
    port: 3000,
    static: path.join(__dirname, "src", "build"),
    hot: true,
    open: true,
    compress: true,
    historyApiFallback: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
    }),
    new webpack.ProvidePlugin({
      React: "react",
    }),
  ],

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(png|svg|jpeg|jpg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};
