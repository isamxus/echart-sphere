import { StrategyOptions } from "../models/buildChartModel";
import {
  DataZoomTypeEnum,
  GridTypeEnum,
  LegendTypeEnum,
  SeriesTypeEnum,
  TooltipTypeEnum,
  XAxisTypeEnum,
  YAxisTypeEnum
} from "./chartTypeConst";
export const enum ChartTypeEnum {
  NORMAL_CHART = "normal"
}
export const normalChartTypeConfig = {
  xAxisType: XAxisTypeEnum.NORMAL,
  yAxisType: YAxisTypeEnum.NORMAL,
  tooltipType: TooltipTypeEnum.NORMAL,
  gridType: GridTypeEnum.NORMAL,
  legendType: LegendTypeEnum.NORMAL,
  seriesType: SeriesTypeEnum.NORMAL,
  dataZoomType: DataZoomTypeEnum.NORMAL
};

export const chartTypeConfigMap = new Map<string, StrategyOptions>([
  [ChartTypeEnum.NORMAL_CHART, normalChartTypeConfig]
]);
