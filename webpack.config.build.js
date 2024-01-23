const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const TerserPlugin = require("terser-webpack-plugin");
const webpack = require("webpack");
// const CopyPlugin = require("copy-webpack-plugin");
// 定义公共配置
const commonConfig = {
  mode: "production",
  entry: "./src/index.ts",
  resolve: {
    extensions: [".ts", ".js", ".vue", ".json"],
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
  },
  optimization: {
    minimize: true,
    /* minimizer: [
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: /webpackIgnore/,
          },
        },
        extractComments: false,
      }),
    ], */
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
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(false),
    }),
    /* new CopyPlugin({
      patterns: [{ from: "src", to: "src" }],
    }) */
  ],
  externals: {
    vue: "Vue",
    echarts: "echarts"
  },
};

// 定义UMD配置
const umdConfig = {
  ...commonConfig,
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "echart-sphere.umd.js",
    library: {
      name: "echart-sphere",
      type: "umd",
    },
  },
};

// 定义ES6模块配置
const esmConfig = {
  ...commonConfig,
  experiments: {
    outputModule: true,
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "echart-sphere.esm.js",
    library: {
      type: "module",
    },
  },
};

module.exports = [umdConfig, esmConfig];
