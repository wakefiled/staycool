// Import dependencies
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/**
 * Entry point for the bundle.
 */
const entry = {
  home: path.join(__dirname, '../src/home/index.js'),
  member: path.join(__dirname, '../src/member/index.js'),
  position: path.join(__dirname, '../src/position/index.js'),
  profile: path.join(__dirname, '../src/profile/index.js'),
  ranking: path.join(__dirname, '../src/ranking/index.js'),
};

const output = {
  path: path.resolve(__dirname, '../../static/build'),
  filename: 'airgg-[name].js',
  publicPath: 'static/build',
};


/**
 * Array of resolve modules entry and file extension to prevent ESLint errors.
 */
const resolve = {
  extensions: ['.ts', '.tsx', '.es6', '.js', '.json', '.svg'],
};

/**
 * Default modules loaders.
 */
const modules = {
  rules: [
    {
      test: /\.jsx$/,
      use: {
        loader: 'babel-loader',
      },
    },
  ],
};

/*
const optimization = {
  splitChunks: {
    cacheGroups: {
      commons: {
        test: /[\\/]node_modules[\\/].*[jt]sx?$/,
        name: 'vendor',
        chunks: 'all',
      },
    },
  },
};
*/

/**
 * Shared plugins.
 *
 * CleanWebpackPlugin()
 * A webpack plugin to remove/clean your build folder(s) before building.
 *
 * ExtractTextPlugin()
 * A webpack plugin to extract text from a bundle, or bundles, into a separate file.
 *
 * HtmlWebpackPlugin()
 * A webpack plugin that simplifies creation of HTML files to serve your webpack bundles.
 */
const plugins = [
  new CleanWebpackPlugin(),
  new HtmlWebpackPlugin({
    inject: false,
    chunks: ['home'],
    filename: '../../templates/v1/home.html',
    template: 'v1/src/home/home.template.html',
  }),
  new HtmlWebpackPlugin({
    inject: false,
    chunks: ['member'],
    filename: '../../templates/v1/member.html',
    template: 'v1/src/member/member.template.html',
  }),
  new HtmlWebpackPlugin({
    inject: false,
    chunks: ['position'],
    filename: '../../templates/v1/position.html',
    template: 'v1/src/position/position.template.html',
  }),
  new HtmlWebpackPlugin({
    inject: false,
    chunks: ['profile'],
    filename: '../../templates/v1/profile.html',
    template: 'v1/src/profile/profile.template.html',
  }),
  new HtmlWebpackPlugin({
    inject: false,
    chunks: ['ranking'],
    filename: '../../templates/v1/ranking.html',
    template: 'v1/src/ranking/ranking.template.html',
  }),
];


/**
 * Webpack configuration.
 */
const WebpackConfig = {
  mode: 'production',
  entry,
  output,
  resolve,
  module: modules,
  // optimization,
  plugins,
};

// Export WebpackConfig module
module.exports = WebpackConfig;
