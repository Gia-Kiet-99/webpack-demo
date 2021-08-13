const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: {
      import: './src/index.js',
      dependOn: 'shared',
    },
    another: {
      import: './src/another-module.js',
      dependOn: 'shared',
    },
    shared: 'lodash',
  },
  // using source map in order to map compiled code back to original source code 
  // to tracking errors, warnings
  // devtool: 'inline-source-map',

  // using webpack-dev-server which provides a rudimentary server and live reloading
  // devServer: {
  //   contentBase: './dist',
  // },

  plugins: [
    // generate index.html automatically
    new HtmlWebpackPlugin({
      title: 'Code Splitting'
    }),
  ],

  output: {
    filename: '[name].bundle.js', // filename base on entry point
    path: path.resolve(__dirname, 'dist'),
    clean: true, // clean dist folder before each build
    // publicPath: '/',
  },
  optimization: {
    runtimeChunk: 'single',
  },
}







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
