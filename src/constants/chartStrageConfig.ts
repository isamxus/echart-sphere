import { buildNormalGrid } from "../strategy/useChartGrid";
import { buildNormalLegend } from "../strategy/useChartLegend";
import {
  buildNormalSeries,
  buildTrendSeries,
} from "../strategy/useChartSeries";
import {
  buildNormalTooltip,
  buildPieTooltip,
} from "../strategy/useChartTooltip";
import { buildNormalCategoryXAxis } from "../strategy/useChartXAxis";
import { buildNormalYAxis } from "../strategy/useChartYAxis";
import { buildNormalDataZoom } from "../strategy/useChartDataZoom";
import {
  buildNormalPieSeries,
  buildParentChildPieSeries,
  buildPieWithDetailSeries,
} from "../strategy/pieStrategy/usePieSeries";
import {
  buildParentChildPieLegend,
  buildPieNormalLegend,
  buildPieWithDetailLegend,
} from "../strategy/pieStrategy/usePieLegend";
import { buildNormalRadarSeries } from "../strategy/radarStrategy/useRadarSeries";
import { buildNormalMapSeries } from "../strategy/mapStrategy/useMapSeries";
import { buildMapVisualMap } from "../strategy/mapStrategy/useVisualMap";
import { buildMapTooltip } from "../strategy/mapStrategy/useMapTooltip";
import { buildNormalCandleStickSeries } from "../strategy/candlestickStrategy/useCandlestickSeries";

export const chartComponentMap = new Map<string, any>([]);

// X轴类型枚举&X轴类型映射
export const enum XAxisTypeEnum {
  NORMAL = "normal",
}
export const xAxisTypeToStrategyMap = new Map<string, any>([
  [XAxisTypeEnum.NORMAL, buildNormalCategoryXAxis],
]);

// y轴类型枚举&Y轴类型映射
export const enum YAxisTypeEnum {
  NORMAL = "normal",
}
export const yAxisTypeToStrategyMap = new Map<string, any>([
  [YAxisTypeEnum.NORMAL, buildNormalYAxis],
]);

// legend图例类型枚举&类型映射
export const enum LegendTypeEnum {
  NORMAL = "normal",
  PIE = "pie",
  DETAIL_PIE = "detail-pie",
  PARENT_CHILD_PIE = "parent-child-pie",
}
export const legendTypeToStrategyMap = new Map<string, any>([
  [LegendTypeEnum.NORMAL, buildNormalLegend],
  [LegendTypeEnum.PIE, buildPieNormalLegend],
  [LegendTypeEnum.DETAIL_PIE, buildPieWithDetailLegend],
  [LegendTypeEnum.PARENT_CHILD_PIE, buildParentChildPieLegend],
]);

// grid类型枚举&映射
export const enum GridTypeEnum {
  NORMAL = "normal",
}
export const gridTypeToStrategyMap = new Map<string, any>([
  [GridTypeEnum.NORMAL, buildNormalGrid],
]);

// tooltip类型枚举&映射
export const enum TooltipTypeEnum {
  NORMAL = "normal",
  PIE = "pie",
  MAP = "map",
}
export const tooltipTypeToStrategyMap = new Map<string, any>([
  [TooltipTypeEnum.NORMAL, buildNormalTooltip],
  [TooltipTypeEnum.PIE, buildPieTooltip],
  [TooltipTypeEnum.MAP, buildMapTooltip],
]);

// series类型枚举&映射
export const enum SeriesTypeEnum {
  NORMAL = "normal",
  TREND = "trend",
  PIE = "pie",
  DETAIL_PIE = "detail-pie",
  PARENT_CHILD_PIE = "parent-child-pie",
  RADAR = "radar",
  MAP = "map",
  CANDLESTICK = "candlestick",
}
export const seriesTypeToStrategyMap = new Map<string, any>([
  [SeriesTypeEnum.NORMAL, buildNormalSeries],
  [SeriesTypeEnum.TREND, buildTrendSeries],
  [SeriesTypeEnum.PIE, buildNormalPieSeries],
  [SeriesTypeEnum.DETAIL_PIE, buildPieWithDetailSeries],
  [SeriesTypeEnum.PARENT_CHILD_PIE, buildParentChildPieSeries],
  [SeriesTypeEnum.RADAR, buildNormalRadarSeries],
  [SeriesTypeEnum.MAP, buildNormalMapSeries],
  [SeriesTypeEnum.CANDLESTICK, buildNormalCandleStickSeries],
]);

// series类型枚举&映射
export const enum DataZoomTypeEnum {
  NORMAL = "normal",
}
export const dataZoomTypeToStrategyMap = new Map<string, any>([
  [DataZoomTypeEnum.NORMAL, buildNormalDataZoom],
]);

// visualMap类型&映射
export const enum visualMapTypeEnum {
  MAP = "map",
}
export const visualMapTypeToStrategyMap = new Map<string, any>([
  [visualMapTypeEnum.MAP, buildMapVisualMap],
]);
