const ArcGISPlugin = require("@arcgis/webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  chunksSortMode: "none",
  // inject: 'body',
  inject: true
})

module.exports = {
  entry: {
    index: "./src/index.js"
  },
  output: {
    path: __dirname + '/dist',
    filename: "[name].bundle.js",
    publicPath: ""
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, "src"),
        use: [
          "cache-loader",
          {
            loader: "babel-loader",
            options: {
              cacheDirectory: true
            }
          }
        ]
      },
      {
        test: /\.(jpe?g|png|gif|webp)$/,
        use: [
          "cache-loader",
          {
            loader: "url-loader",
            options: {
              // Inline files smaller than 10 kB (10240 bytes)
              limit: 10 * 1024,
            }
          }
        ]
      },
      {
        test: /\.(wsv|ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        use: [
          "cache-loader",
          {
            loader: "file-loader",
            options: {
              name: "build/[name].[ext]"
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: ["cache-loader", MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      }
    ]
  },

  plugins: [
    HtmlWebpackPluginConfig,
    new ArcGISPlugin({
      useDefaultAssetLoaders: false
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
      // filename: __dirname + "/dist/[name].css",
    })
  ],

  resolve: {
    modules: [path.resolve(__dirname, "/src"), "node_modules/"],
    extensions: [".js", ".scss"]
  },

  externals: [
    (context, request, callback) => {
      if (/pe-wasm$/.test(request)) {
        return callback(null, "amd " + request);
      }
      callback();
    }
  ],

  node: {
    process: false,
    global: false
  }
};