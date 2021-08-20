const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// require('@babel/polyfill');

module.exports = {
  mode: 'development',
  entry: [
    // '@babel/polyfill', // config polyfill
    './src/index.js'
  ],
  // using source map in order to map compiled code back to original source code
  // to tracking errors, warnings
  devtool: 'inline-source-map',

  // using webpack-dev-server which provides a rudimentary server and live reloading
  devServer: {
    contentBase: './dist',
  },

  plugins: [
    // generate index.html automatically
    new HtmlWebpackPlugin({
      title: 'Caching',
    }),
  ],

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },

  output: {
    filename: '[name].[contenthash].js', // filename base on entry point
    path: path.resolve(__dirname, 'dist'),
    clean: true, // clean dist folder before each build
    // publicPath: '/',
  },
  optimization: {
    moduleIds: 'deterministic',
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
};

/**
 * Configuration type: function
 */
// module.exports = (env) => {
//   console.log(env);
//   return {
//     mode: env.production ? 'production' : 'development',
//     entry: './src/index.js',
//     output: {
//       filename: 'bundle.js',
//       path: path.resolve(__dirname, 'dist')
//     },
//     module: {
//       rules: [
//         {
//           test: /\.css$/i,
//           use: ['style-loader', 'css-loader']
//         }
//       ]
//     }
//   }
// }
