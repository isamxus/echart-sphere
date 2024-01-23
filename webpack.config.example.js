const { VueLoaderPlugin } = require("vue-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: "./examples/main.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.ts$/,
        loader: "ts-loader",
        options: {
          appendTsSuffixTo: [/\.vue$/],
          transpileOnly: true,
        },
      },
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"],
      },
      // 添加其他规则以处理不同类型的文件，如图片、字体等
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: "./examples/index.html",
    }),
    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(true),
    }),
  ],
  devServer: {
    static: "./dist",
    hot: true,
  },
  resolve: {
    alias: {
      vue: "@vue/runtime-dom",
      "@": path.resolve(__dirname, "src/"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@strategy": path.resolve(__dirname, "src/strategy"),
      "@models": path.resolve(__dirname, "src/models"),
      "@properties": path.resolve(__dirname, "src/properties"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@extendComponent": path.resolve(__dirname, "src/extendComponent"),
      "@constants": path.resolve(__dirname, "src/constants"),
    },
    extensions: [".ts", ".js", ".vue", ".json"],
  },
};
