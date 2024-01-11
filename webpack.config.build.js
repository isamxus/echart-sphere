const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
// const CopyPlugin = require("copy-webpack-plugin");
// 定义公共配置
const commonConfig = {
  mode: "production",
  entry: "./src/index.ts",
  resolve: {
    extensions: [".ts", ".js", ".vue", ".json"],
    alias: {
      vue: "@vue/runtime-dom",
    },
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
  externals: {
    vue: "Vue",
  },
  plugins: [
    new VueLoaderPlugin(),
    /* new CopyPlugin({
      patterns: [{ from: "src", to: "src" }],
    }) */
  ],
  optimization: {
    minimize: true,
  },
};

// 定义UMD配置
const umdConfig = {
  ...commonConfig,
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "vue3-chart.umd.js",
    library: {
      name: "Vue3Chart",
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
    filename: "vue3-chart.esm.js",
    library: {
      type: "module",
    },
  },
  externals: {
    vue: "Vue",
  },
};

module.exports = [umdConfig, esmConfig];
