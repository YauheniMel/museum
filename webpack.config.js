const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve('./dist'),
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
    new HTMLWebpackPlugin({
      template: './src/tour1.html',
      filename: './tour1.html',
    }),
    new HTMLWebpackPlugin({
      template: './src/tour2.html',
      filename: './tour2.html',
    }),
    new HTMLWebpackPlugin({
      template: './src/tour3.html',
      filename: './tour3.html',
    }),
    new HTMLWebpackPlugin({
      template: './src/tour4.html',
      filename: './tour4.html',
    }),
    new HTMLWebpackPlugin({
      template: './src/tour5.html',
      filename: './tour5.html',
    }),
    new HTMLWebpackPlugin({
      template: './src/tour6.html',
      filename: './tour6.html',
    }),
    new HTMLWebpackPlugin({
      template: './src/tour7.html',
      filename: './tour7.html',
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.html$/,
        use: 'html-loader',
      },
      {
        test: /\.ttf$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[hash][ext]',
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'img/[hash][ext]',
        },
      },
    ],
  },
};
