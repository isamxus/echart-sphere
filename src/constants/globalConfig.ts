// 柱图配置
export const barConfig = {
  barWidth: 20,
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

// 树型配置
export const treeConfig = {
  idKey: "id",
  parentKey: "parentId"
}

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
  ...pieConfig,
  ...legendRichConfig,
  ...chartSelfAdaptionConfig,
  ...normalLoadingConfig
};
