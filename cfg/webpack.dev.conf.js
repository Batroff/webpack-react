const webpack = require('webpack');
const {merge} = require('webpack-merge');
const baseConfig = require('../webpack.base.conf');

const devConfig = {
  mode: 'development',

  devServer: {
    historyApiFallback: true,
    port: 8080,
    hot: true,
    inline: true,
    open: true
  },

  devtool: 'eval-cheap-module-source-map',

  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: "[file].map"
    })
  ],

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          }
        ],
      },
      {
        test: /\.(sc|sa)ss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ],
      }
    ]
  }
};

module.exports = new Promise(((resolve, reject) => {
  let outConfig;
  try {
    outConfig = merge([baseConfig, devConfig]);
  } catch (e) {
    reject(e)
  } finally {
    resolve(outConfig);
  }
}));