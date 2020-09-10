const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');
const path = require("path");

module.exports = {
  mode: "production",
  entry: [
    path.join(__dirname, "src/index.js"),
  ],
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index.js"
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        },
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "fonts/[name].[ext]",
          },
        },
      },
      {
        test: /\.(jpe?g|png|gif|svg|ico)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "assets/"
            }
          }
        ]
      }
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({
      template: "./index.html",
      filename: "index.html"
    }),
  ],
};
