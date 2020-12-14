const path = require('path');

module.exports = {
  // generate source maps
  devtool: 'source-map',

  // bundling mode
  mode: 'production',
  target: 'web',
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  },

  // entry files
  entry: {
    zilliqa: path.resolve(__dirname, 'packages/zilliqa/src/index.ts'),
  },

  // output bundles (location)
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'zilliqa.js',
  },

  // file resolutions
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      '@zilliqa-js/core': path.resolve(
        __dirname,
        'packages/zilliqa-js-core/src/index.ts',
      ),
      '@zilliqa-js/account': path.resolve(
        __dirname,
        'packages/zilliqa-js-account/src/index.ts',
      ),
      '@zilliqa-js/blockchain': path.resolve(
        __dirname,
        'packages/zilliqa-js-blockchain/src/index.ts',
      ),
      '@zilliqa-js/contract': path.resolve(
        __dirname,
        'packages/zilliqa-js-contract/src/index.ts',
      ),
      '@zilliqa-js/subscriptions': path.resolve(
        __dirname,
        'packages/zilliqa-js-subscriptions/src/index.ts',
      ),
      '@zilliqa-js/crypto': path.resolve(
        __dirname,
        'packages/zilliqa-js-crypto/src/index.ts',
      ),
    },
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
