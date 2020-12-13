const path = require('path');

module.exports = {
  // generate source maps
  devtool: 'source-map',

  // bundling mode
  mode: 'production',

  // entry files
  entry: './scripts/build-dist',

  // output bundles (location)
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },

  // file resolutions
  resolve: {
    extensions: ['.ts', '.js'],
  },

  // loaders
  module: {
    rules: [
      {
        test: /\.ts?/,
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
          },
        },
        exclude: /node_modules/,
      },
    ],
  },

  // plugins
  plugins: [],

  // set watch mode to `true`
  watch: false,
};
