const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

const PATHS = {
  src: path.join(__dirname, '../src'),
  dist: path.join(__dirname, '../dist'),
  assets: 'assets/'
}

module.exports = {
  entry: {
    app: path.resolve(PATHS.src, 'app.jsx')
  },
  output: {
    path: PATHS.dist,
    filename: '[name].[contenthash].js',

    // ** CREATES [name] library ** //
    // library: '[name]'
    // **************************** //
  },

  externals: {
    paths: PATHS
  },

  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"]
        }
      },
      {
        test: /\.(gif|webp|svg|jpg|png)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]'
        }
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new webpack.NoEmitOnErrorsPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {from: `${PATHS.src}\\static`, to: `${PATHS.dist}`}
      ]
    }),
    new HtmlWebpackPlugin({
      hash: true,
      template: `${PATHS.src}\\index.html`,
      filename: "index.html"
    }),
  ]
}
