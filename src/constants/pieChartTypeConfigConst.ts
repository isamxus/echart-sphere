import {
  LegendTypeEnum,
  SeriesTypeEnum,
  TooltipTypeEnum,
} from "./chartTypeConst";

// 默认饼图组件策略配置
export const normalPieChartTypeConfig = {
  legendType: LegendTypeEnum.PIE,
  tooltipType: TooltipTypeEnum.PIE,
  seriesType: SeriesTypeEnum.PIE,
};

// 带详细信息的饼图组件策略配置
export const pieWithDetailChartTypeConfig = {
  legendType: LegendTypeEnum.DETAIL_PIE,
  tooltipType: TooltipTypeEnum.PIE,
  seriesType: SeriesTypeEnum.DETAIL_PIE
};
