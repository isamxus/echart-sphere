import { RegisteredSeriesOption } from "echarts/types/dist/shared";
import globalConfig, {
  chartSelfAdaptionConfig,
  legendRichConfig,
  treeConfig,
  yAxisConfig,
} from "../constants/globalConfig";
import * as echarts from "echarts";
import { Arrayable } from "./buildChartModel";
// 图表自适应选项
export interface ChartSelfAdaptionOptions {
  // 自适应选项
  flexible?: boolean;
  // 设计稿宽度
  designWidth?: number;
  // 基准值
  baseSize?: number;
}

// 数据项配置接口
export interface DataItemOptions {
  // 名称
  name?: string;
  // 指定数据中作为X轴值的字段
  labelX?: string;
  // 指定数据中作为Y轴值的字段
  labelY?: string;
  // 值计量单位类型
  measureType?: string;
  // 值格式化函数
  formatter?: (value: any) => any;
  // 是否负数
  isNegative?: boolean;
  // 系列类型
  itemType?: keyof RegisteredSeriesOption;
}

// 地图配置接口
export interface MapOptions {
  // 是否使用内置地图
  isBuiltIn?: boolean;
  // 地图json数据
  mapJson?: any;
  // 地图名字
  name?: string;
  // 行政编码
  code?: string | number;
}

// 树型数据类型
export type TreeConfigType = Partial<typeof treeConfig>;

export type DataItemWithStyleOptions = DataItemOptions &
  ChartPropertiesOptions &
  Partial<StyleOptionsType>;
// 源数据配置接口
export interface DataPropOptions extends DataItemOptions {
  dataItems?: Array<DataItemWithStyleOptions>;
  // 如果不指定xAxisField，则使用xAxisData作为X轴数据
  xAxisData?: Array<any>;
  // 源数据
  data?: Array<any>;
  // 是否开启数据格式化
  isFormatter?: boolean;
  // 树型数据配置
  treeConfig?: TreeConfigType;
  // 地图数据配置
  mapConfig?: MapOptions;
}
// 图表分割点配置接口
export interface ChartSplitPointOptions {
  // 分割点X轴位置
  splitX?: number;
  // 分割点前面的图形样式
  styleBefore?: Partial<StyleOptionsType>;
  // 分割点后面的图形样式
  styleAfter?: Partial<StyleOptionsType>;
  // 趋势类型
  trend?: "pictorial" | "line";
  // 趋势作用部分
  trendPart?: "before" | "after";
  // 趋势部分样式
  trendStyle?: Partial<StyleOptionsType>;
  // 趋势偏移
  trendOffset?: number;
}

// 第二个Y轴配置
export type SecondYAxisType = typeof yAxisConfig;

// 图例富文本配置接口
export interface LegendRichOptions {
  // 指定字段
  field: string;
  // 样式
  styles?: Partial<typeof legendRichConfig>;
}
// 雷达图配置接口
export interface RadarOptions {
  // 最大值字段
  max?: string;
  // 最小值字段
  min?: string;
}
// K线图配置接口
export interface CandlestickOptions {
  // 开盘值字段,
  open?: string;
  // 收盘值字段
  close?: string;
  // 最低值字段
  lowest?: string;
  // 最高值字段
  highest?: string;
}
// 图表自定义属性接口
export interface ChartPropertiesOptions {
  // 是否堆叠
  stack?: string;
  // 是否重叠
  overlap?: boolean | string;
  // 图表分割点
  split?: ChartSplitPointOptions;
  // 第二个Y轴配置
  secondYAxis?: SecondYAxisType | boolean;
  // 图例富文本配置
  legendRichOptions?: Arrayable<LegendRichOptions>;
  // 是否启用高亮
  isHightlight?: boolean;
}

// 图表配置接口
export interface ChartPropOptions extends ChartPropertiesOptions {
  // 图表类型
  chartType?: string;
  // 自定义option
  optionFormatter?: (
    option: echarts.EChartsCoreOption
  ) => echarts.EChartsCoreOption;
  // 是否加载图表
  loading?: boolean;
  // X轴类型
  xAxisType?: string;
  // Y轴类型
  yAxisType?: string;
  // Legend图例类型
  legendType?: string;
  // grid类型
  gridType?: string;
  // tooltip类型
  tooltipType?: string;
  // series类型
  seriesType?: string;
  // dataZoom类型
  dataZoomType?: string;
  // visualMap类型
  visualMapType?: string;
  // 使用组件直接渲染
  componentType?: string;
  // 自适应配置
  flexibleConfig?: Partial<typeof chartSelfAdaptionConfig>;
  // K线图配置
  candlestick?: CandlestickOptions;
  // 雷达图配置
  radar?: RadarOptions;
}

export type ThemeType = "modern" | "tech" | "nature" | "fashion" | "youth";

export type StyleConfigType = typeof globalConfig & {
  [key: string]: any;
};

export type GlobalConfigkeys = keyof typeof globalConfig;

// 样式配置接口类型
export type StyleOptionsType = {
  [T in keyof StyleConfigType]: StyleConfigType[T];
};
export interface StyleOptions {}
// 组件Props接口
export interface RenderPropOptions {
  // 源数据配置选项
  dataOptions: DataPropOptions;
  // 图表配置选项
  chartOptions?: ChartPropOptions;
  // 样式配置
  styleOptions?: Partial<StyleOptionsType>;
  // 扩展属性，用于上下文在各种系列中传递数据
  extendOptions?: any;
}
