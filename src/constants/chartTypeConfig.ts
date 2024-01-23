import { StrategyOptions } from "../models/buildChartModel";
import { normalCandlestickChartTypeConfig } from "./candlestickChartTypeConfig";
import {
  DataZoomTypeEnum,
  GridTypeEnum,
  LegendTypeEnum,
  SeriesTypeEnum,
  TooltipTypeEnum,
  XAxisTypeEnum,
  YAxisTypeEnum,
} from "./chartStrageConfig";
import { normalGaugeChartTypeConfig } from "./gaugeChartTypeConfig";
import {
  normalPieChartTypeConfig,
  pieWithDetailChartTypeConfig,
} from "./pieChartTypeConfigConst";
export const enum ChartTypeEnum {
  NORMAL_CHART = "normal",
  PIE = "pie",
  DETAIL_PIE = "detail-ple",
  CANDLESTICK = "candlestick",
  GAUGE = "gauge",
}

// 默认图表组件策略配置
export const normalChartTypeConfig = {
  xAxisType: XAxisTypeEnum.NORMAL,
  yAxisType: YAxisTypeEnum.NORMAL,
  tooltipType: TooltipTypeEnum.NORMAL,
  gridType: GridTypeEnum.NORMAL,
  legendType: LegendTypeEnum.NORMAL,
  seriesType: SeriesTypeEnum.NORMAL,
  dataZoomType: DataZoomTypeEnum.NORMAL,
};

export const chartTypeConfigMap = new Map<string, StrategyOptions>([
  [ChartTypeEnum.NORMAL_CHART, normalChartTypeConfig],
  [ChartTypeEnum.PIE, normalPieChartTypeConfig],
  [ChartTypeEnum.DETAIL_PIE, pieWithDetailChartTypeConfig],
  [ChartTypeEnum.CANDLESTICK, normalCandlestickChartTypeConfig],
  [ChartTypeEnum.GAUGE, normalGaugeChartTypeConfig],
]);
