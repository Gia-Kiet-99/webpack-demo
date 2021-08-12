const path = require("path");

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

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      }
    ]
  }
}
