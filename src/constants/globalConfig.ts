// 柱图配置
export const barConfig = {
  barWidth: 5,
  barColor: "rgba(132, 212, 232, 1)",
  barBorderType: "#fff",
  barBorderColor: "solid",
  barBorderWidth: 0,
  barGap: "30%",
  barSymbol: "rect",
  barSymbolRepeat: "fixed",
  barSymbolMargin: 2,
  barSymbolOffset: [0, 0],
  barSymbolSize: [6, 2],
  barSymbolPosition: "start",
  barSymbolClip: true,
};

// 折线图配置
export const lineConfig = {
  lineColor: "rgba(45, 174, 194, 1)",
  lineSmooth: false,
  lineType: "solid",
  showSymbol: false,
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
  // 图例宽度
  legendWidth: 10,
  // 图例高度
  legendHeight: 4,
  // 图例距离底部的距离
  legendBottom: 0,
  // 图例字体大小
  legendSize: 12,
};

// 系列配置
export const seriesConfig = {
  // 默认的取值字段
  yAxisField: "value",
  // 指定是哪一条Y坐标轴
  yAxisIndex: 0,
};

// tooltip配置
export const tooltipConfig = {
  tooltipShow: true,
  isTooltipConfine: true,
  tooltipBgColor: "rgba(50,50,50,0.7)",
  tooltipTextColor: "#fff",
  tooltipTextSize: 10,
  tooltipBorderColor: "rgba(50,50,50,0)",
  tooltipPadding: 5,
  tooltipTriggerType: "axis",
  tooltipAxisPointer: "shadow",
  tooltipShadowColor: "rgba(153, 153, 153, 0.4)",
};

// X轴配置
export const xAxisConfig = {
  // 默认的取值字段
  xAxisField: "label",
  // 默认的X轴字体大小,
  xAxisLabelSize: 8,
  // 是否显示X轴刻度
  xAxisTickShow: false,
};

// Y轴配置
export const yAxisConfig = {
  // 默认的y轴字体大小,
  yAxisLabelSize: 10,
};

// 自适应配置
export const chartSelfAdaptionConfig = {
  // 设计稿默认宽度
  designWidth: 375,
  // 基准值
  baseSize: 14,
  // 是否自适应
  flexible: true,
};
// 需要进行自适应的字段集合
export const flexibleFieldsSet = new Set([
  "bottom",
  "left",
  "right",
  "top",
  "itemHeight",
  "itemWidth",
  "fontSize",
  "barWidth",
  "borderWidth",
  "symbolMargin",
]);
// loading配置
export const normalLoadingConfig = {
  text: "正在加载图表",
  color: "#009C84",
  textColor: "#009C84",
  maskColor: "rgba(255, 255, 255, 0.8)",
  zlevel: 0,
  fontSize: 12,
  showSpinner: true,
  spinnerRadius: 10,
  lineWidth: 2,
  fontWeight: "normal",
  fontStyle: "normal",
  fontFamily: "sans-serif",
};

export default {
  ...barConfig,
  ...lineConfig,
  ...dataZoomConfig,
  ...gridConfig,
  ...legendConfig,
  ...seriesConfig,
  ...tooltipConfig,
  ...xAxisConfig,
  ...yAxisConfig,
  ...chartSelfAdaptionConfig,
  ...normalLoadingConfig,
};
