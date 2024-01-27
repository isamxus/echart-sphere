// Vue版本
export const enum VueVersionEnum {
  VUE_2 = "2.x",
  VUE_3 = "3.x",
}

export const vueConfig = {
  version: VueVersionEnum.VUE_3,
  context: null,
};

// 柱图配置 - 极简单色主题
export const barConfig = {
  barWidth: 20,
  barColor: "#737373", // 灰色
  barBorderType: "solid",
  barBorderColor: "#D1D1D1", // 浅灰色
  barBorderWidth: 1, // 设置边框宽度，使其更加细腻
  barGap: "20%", // 减小柱子之间的间隙，以适应极简风格
  barSymbol: "rect",
  barSymbolRepeat: "fixed",
  barSymbolMargin: 2,
  barSymbolOffset: [0, 0],
  barSymbolSize: [20, 6],
  barSymbolPosition: "start",
  barSymbolClip: true,
};
// 高亮配置 - 极简单色主题
export const hightlightConfig = {
  colorHl: "#737373", // 灰色
  borderColorHl: "#D1D1D1", // 浅灰色
  borderWidthHl: 1, // 设置边框宽度以保持细腻
  borderTypeHl: "solid",
  borderRadiusHl: 2, // 设置较小的边框圆角
  shadowBlurHl: 5,
  shadowColorHl: "rgba(0, 0, 0, 0.2)", // 黑色的阴影，更低的透明度
  shadowOffsetXHl: 0,
  shadowOffsetYHl: 2, // 设置较小的阴影Y偏移
  opacityHl: 0.9, // 设置较高的不透明度以突出高亮
};

// 折线图配置 - 极简单色主题
export const lineConfig = {
  lineColor: "#737373", // 灰色
  lineSmooth: false,
  lineType: "solid",
  showSymbol: false,
};

// 散点图配置
export const scatterConfig = {};

// K线图配置
export const candlestickConfig = {};

// 地图配置 - 极简单色主题
export const mapConfig = {
  mapZoom: 1,
  mapColor: "#737373", // 灰色
  mapLabelShow: false,
  mapLabelSize: 10,
  mapColorHL: "#D1D1D1", // 浅灰色
  mapLableColorHL: "#fff",
  mapSelectedColor: "#A9A9A9", // 暗灰色
  mapSelectedLabelColor: "#fff",
};

// 缩放组件配置
export const dataZoomConfig = {
  dataZoomType: "inside",
  dataZoomXAxisIndex: 0,
};

// 坐标轴网格配置
export const gridConfig = {
  // 上偏移
  gridTop: 22,
  // 左偏移
  gridLeft: 3,
  // 右偏移
  gridRight: 5,
  // 下偏移
  gridBottom: 30,
  // 包含label
  isContainLabel: true,
};

// 图例配置
export const legendConfig = {
  legendWidth: 10,
  legendHeight: 4,
  legendBottom: 0,
  legendTop: "auto",
  legendSize: 12,
  legendOrient: "horizontal",
  legendType: "plain",
  legendLeft: "auto",
  legendRight: "auto",
};

// 图例富文本配置
export const legendRichConfig = {
  legendRichSize: 14,
  legendRichWeight: 500,
  legendRichWidth: 70,
  legendRichAlign: "right",
  legendRichColor: "rgba(0, 0, 0, 0.85)",
  legendRichPadding: [0, 0, 0, 5],
  legendRichFamily: "Source Han Sans CN-Medium",
};

// 系列配置
export const seriesConfig = {
  // 默认的取值字段
  yAxisField: "value",
  // 指定是哪一条Y坐标轴
  yAxisIndex: 0,
};

// tooltip配置 - 极简单色主题
export const tooltipConfig = {
  tooltipShow: true,
  isTooltipConfine: true,
  tooltipBgColor: "#737373", // 灰色背景
  tooltipTextColor: "#fff",
  tooltipTextSize: 10,
  tooltipBorderColor: "#D1D1D1", // 浅灰色边框
  tooltipPadding: 5,
  tooltipTriggerType: "axis",
  tooltipAxisPointer: "shadow",
  tooltipShadowColor: "rgba(0, 0, 0, 0.2)", // 黑色的阴影，更低的透明度
  tooltipFormatter: null,
};

// X轴配置
export const xAxisConfig = {
  // 默认的取值字段
  xAxisField: "label",
  // 默认的X轴字体大小,
  xAxisLabelSize: 14,
  // 是否显示X轴刻度
  xAxisTickShow: false,
};

// Y轴配置
export const yAxisConfig = {
  // 默认的y轴字体大小,
  yAxisLabelSize: 14,
};

// 饼图配置
export const pieConfig = {
  pieLeft: 0,
  pieTop: 0,
  pieRight: 0,
  pieBottom: 0,
  pieWidth: "auto",
  pieHeight: "auto",
  pieLabelshow: false,
};
// 自适应配置
export const chartSelfAdaptionConfig = {
  // 设计稿默认宽度
  designWidth: 375,
  // 基准值
  baseSize: 14,
  // 是否自适应
  flexible: false,
};
// 需要进行自适应的字段集合
export const flexibleFieldsSet = new Set([
  "fontSize",
  "lineHeight",
  "fontWeight",
  "width",
  "height",
  "textBorderWidth",
  "textBorderDashOffset",
  "textShadowBlur",
  "textShadowOffsetX",
  "textShadowOffsetY",
  "padding",
  "itemGap",
  "left",
  "top",
  "right",
  "bottom",
  "borderWidth",
  "borderRadius",
  "shadowBlur",
  "shadowOffsetX",
  "shadowOffsetY",
  "itemWidth",
  "itemHeight",
  "dashOffset",
  "shadowBlur",
  "inactiveWidth",
  "inactiveBorderWidth",
  "pageButtonItemGap",
  "pageButtonGap",
  "pageIconSize",
  "distance",
  "offset",
  "selectorItemGap",
  "selectorButtonGap",
  "margin",
  "position",
  "nameGap",
  "nameRotate",
  "maxWidth",
  "symbolSize",
  "symbolOffset",
]);
// loading配置
export const normalLoadingConfig = {
  loadingText: "正在加载图表",
  loadingColor: "#009C84",
  loadingTextColor: "#009C84",
  loadingMaskColor: "rgba(255, 255, 255, 0.8)",
  loadingZlevel: 0,
  loadingFontSize: 12,
  loadingShowSpinner: true,
  loadingSpinnerRadius: 10,
  loadingLineWidth: 2,
  loadingFontWeight: "normal",
  loadingFontStyle: "normal",
  loadingFontFamily: "sans-serif",
};

// 树型配置
export const treeConfig = {
  idKey: "id",
  parentKey: "parentId",
};

// 仪表盘图表配置
export const gaugeConfig = {};

export default {
  ...barConfig,
  ...hightlightConfig,
  ...lineConfig,
  ...scatterConfig,
  ...dataZoomConfig,
  ...gridConfig,
  ...legendConfig,
  ...seriesConfig,
  ...tooltipConfig,
  ...xAxisConfig,
  ...yAxisConfig,
  ...pieConfig,
  ...mapConfig,
  ...legendRichConfig,
  ...candlestickConfig,
  ...gaugeConfig,
};
