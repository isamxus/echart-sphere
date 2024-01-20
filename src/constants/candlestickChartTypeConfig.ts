import {
  SeriesTypeEnum,
  XAxisTypeEnum,
  YAxisTypeEnum,
} from "./chartStrageConfig";

// 默认K线图组件策略配置
export const normalCandlestickChartTypeConfig = {
  xAxisType: XAxisTypeEnum.NORMAL,
  yAxisType: YAxisTypeEnum.NORMAL,
  seriesType: SeriesTypeEnum.CANDLESTICK,
};
