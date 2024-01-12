import { RegisteredSeriesOption } from "echarts/types/dist/shared";
import globalConfig, { yAxisConfig } from "../constants/globalConfig";
import * as echarts from "echarts";
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
export interface DataItemOptions extends ChartPropertiesOptions {
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

export type DataItemWithStyleOptions = DataItemOptions &
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

// 图表自定义属性接口
export interface ChartPropertiesOptions {
  // 是否堆叠
  stack?: string;
  // 是否重叠
  overlap?: string;
  // 图表分割点
  split?: ChartSplitPointOptions;
  // 第二个Y轴配置
  secondYAxis?: SecondYAxisType | boolean;
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
  // 使用组件直接渲染
  componentType?: string;
}

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
}
