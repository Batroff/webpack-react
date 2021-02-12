const webpack = require('webpack');
const {merge} = require('webpack-merge');
const baseConfig = require('./webpack.base.conf');

const devConfig = {
  mode: 'development',

  target: 'web',
  watch: true,
  watchOptions: {
    aggregateTimeout: 100,
    poll: true,
    ignored: '/node_modules/'
  },

  devServer: {
    contentBase: baseConfig.externals.paths.src,
    watchContentBase: true,
    historyApiFallback: true,
    port: 8080,
    inline: true,
    hot: true,
    open: true
  },

  devtool: 'eval-cheap-module-source-map',

  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: "[file].map"
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],

  module: {
    rules: [
      {
        test: /\.(c|sc|sa)ss$/,
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
    console.log(outConfig)
  }
}));