import { StrategyOptions } from "../models/buildChartModel";
import {
  DataZoomTypeEnum,
  GridTypeEnum,
  LegendTypeEnum,
  SeriesTypeEnum,
  TooltipTypeEnum,
  XAxisTypeEnum,
  YAxisTypeEnum,
} from "./chartTypeConst";
import {
  normalPieChartTypeConfig,
  pieWithDetailChartTypeConfig,
} from "./pieChartTypeConfigConst";
export const enum ChartTypeEnum {
  NORMAL_CHART = "normal",
  PIE = "pie",
  DETAIL_PIE = "detail-ple",
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
]);
