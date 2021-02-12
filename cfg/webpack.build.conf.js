const {merge} = require('webpack-merge');
const baseConfig = require('./webpack.base.conf');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

const buildConfig = {
  mode: 'production',

  optimization: {
    minimizer: [
      new TerserPlugin({
        test: /\.js(\?.*)?$/i,
        exclude: /\/node_modules/
      }),
    ],
  },

  plugins: [
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    })
  ],

  module: {
    rules: [
      {
        test: /\.(c|sc|sa)ss?$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  }
};

module.exports = new Promise(((resolve, reject) => {
  let outConfig;
  try {
    outConfig = merge([baseConfig, buildConfig]);
  } catch (e) {
    reject(e)
  } finally {
    resolve(outConfig);
  }
}));