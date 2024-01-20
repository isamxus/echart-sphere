import {
  xAxisTypeToStrategyMap,
  yAxisTypeToStrategyMap,
  legendTypeToStrategyMap,
  gridTypeToStrategyMap,
  tooltipTypeToStrategyMap,
  seriesTypeToStrategyMap,
  dataZoomTypeToStrategyMap,
  visualMapTypeToStrategyMap
} from "../constants/chartStrageConfig";

 // 获取内置X轴策略
export function getXAxisStrategy(type?: string) {
  return xAxisTypeToStrategyMap.get(type!);
}

// 获取内置Y轴策略
export function getYAxisStrategy(type?: string) {
  return yAxisTypeToStrategyMap.get(type!);
}

// 获取内置Legend图例策略
export function getLegendStrategy(type?: string) {
  return legendTypeToStrategyMap.get(type!);
}

// 获取内置grid策略
export function getGridStrategy(type?: string) {
  return gridTypeToStrategyMap.get(type!);
}

// 获取内置tooltip策略
export function getTooltipStrategy(type?: string) {
  return tooltipTypeToStrategyMap.get(type!);
}

// 获取内置series策略
export function getSeriesStrategy(type?: string) {
  return seriesTypeToStrategyMap.get(type!);
}
// 获取内置dataZoom策略
export function getDataZoomStrategy(type?: string) {
  return dataZoomTypeToStrategyMap.get(type!);
}
// 获取visualMap策略
export function getVisualMapStrategy(type?: string){
  return visualMapTypeToStrategyMap.get(type!);
}

