const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    print: './src/print.js',
  },
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
      title: 'Development'
    }),
  ],
  output: {
    // filename base on entry point
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    // clean dist folder before each build
    clean: true,
    publicPath: '/',
  }
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
