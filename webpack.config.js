const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  entry: {
    index: "./src/index.js",
    print: "./src/print.js",
  },
  plugins: [
    new HtmlWebpackPlugin({ // generate index.html automatically
      title: "Output Management"
    }),
  ],
  output: {
    filename: "[name].bundle.js", // filename base on entry point
    path: path.resolve(__dirname, "dist"),
    clean: true // clean dist folder before each build
  }
}

/**
 * Configuration type: function
 */
// module.exports = (env) => {
//   console.log(env);
//   return {
//     mode: env.production ? "production" : "development",
//     entry: "./src/index.js",
//     output: {
//       filename: "bundle.js",
//       path: path.resolve(__dirname, "dist")
//     },
//     module: {
//       rules: [
//         {
//           test: /\.css$/i,
//           use: ["style-loader", "css-loader"]
//         }
//       ]
//     }
//   }
// }
