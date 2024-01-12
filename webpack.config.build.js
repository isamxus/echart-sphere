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
  externals: {
    vue: "Vue",
    echarts: 'echarts'
  }
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
    }
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
  }
};

module.exports = [umdConfig, esmConfig];
