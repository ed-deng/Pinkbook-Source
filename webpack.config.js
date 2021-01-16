const path = require("path");

module.exports = {
  // Mode will be set when running script
  mode: process.env.NODE_ENV,

  // An entry point indicates which module webpack should use to begin building out its internal dependency graph.
  entry: path.join(__dirname, './client/index.js'),

  output: {
    path: path.join(__dirname, "build"),
    filename: "bundle.js",
  },
  devServer: {
    publicPath: "/build/", // tells webpack where to put bundle.js
    // proxy: {
    //   "/": "http://localhost:5000",
    //   '/api': 'http://localhost:3000',
    // },
    hot: true,
  },
  
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },

      {
        test: /\.(scss|css)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};
