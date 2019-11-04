const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = mode => ({
  target: 'web',
  devtool: 'cheap-eval-source-map',
  mode: 'development',
  entry: {
    src: ['@babel/polyfill', path.join(__dirname, 'src/index.js')],
  },
  output: {
    chunkFilename: '[name].js',
    filename: '[name].js',
    path: path.join(__dirname, '/dist/'),
  },
  optimization: {
    occurrenceOrder: true,
    splitChunks: {
      name: false,
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true,
        },
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          chunks: chunk => chunk.name === 'src',
          name: 'vendor',
        },
      },
    },
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx'],
    modules: ['node_modules', 'src']
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: 'body',
      hash: true,
      filename: 'index.html',
      // favicon: 'src/favicon.png',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx*?$/,
        exclude: /node_modules/,
        use: [
          'cache-loader',
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    targets: {
                      browsers: ['> 1%', 'not chrome < 59'],
                    },
                  },
                ],
                '@babel/preset-react',
              ],
              plugins: [
                '@babel/plugin-syntax-dynamic-import',
                '@babel/plugin-proposal-class-properties',
                '@babel/plugin-proposal-export-namespace-from',
              ],
              babelrc: false,
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        include: path.resolve(__dirname, 'src/assets/icons/'),
        loader: 'svg-inline-loader',
      },
      {
        test: /\.(jpg|ttf|eot|png|gif|svg)(\?[a-z0-9#=&.]+)?$/,
        exclude: path.resolve(__dirname, 'src/assets/icons/'),
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'assets/',
        },
      },
      {
        test: /\.woff(2)?(\?[a-z0-9#=&.]+)?$/,
        loader: 'url-loader',
        options: {
          fallback: 'file-loader',
          limit: 10000,
          mimetype: 'application/font-woff',
          outputPath: 'assets/',
        },
      },
    ],
  },
});