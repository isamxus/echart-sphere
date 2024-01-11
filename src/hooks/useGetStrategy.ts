import {
  XAxisTypeToStrategyMap,
  YAxisTypeToStrategyMap,
  LegendTypeToStrategyMap,
  GridTypeToStrategyMap,
  TooltipTypeToStrategyMap,
  SeriesTypeToStrategyMap,
  DataZoomTypeToStrategyMap
} from "../constants/chartTypeConst";

export default function useGetStrategy() {
  // 获取内置X轴策略
  function getXAxisStrategy(type?: string) {
    return XAxisTypeToStrategyMap.get(type!);
  }

  // 获取内置Y轴策略
  function getYAxisStrategy(type?: string) {
    return YAxisTypeToStrategyMap.get(type!);
  }

  // 获取内置Legend图例策略
  function getLegendStrategy(type?: string) {
    return LegendTypeToStrategyMap.get(type!);
  }

  // 获取内置grid策略
  function getGridStrategy(type?: string) {
    return GridTypeToStrategyMap.get(type!);
  }

  // 获取内置tooltip策略
  function getTooltipStrategy(type?: string) {
    return TooltipTypeToStrategyMap.get(type!);
  }

  // 获取内置series策略
  function getSeriesStrategy(type?: string) {
    return SeriesTypeToStrategyMap.get(type!);
  }
  // 获取内置dataZoom策略
  function getDataZoomStrategy(type?: string) {
    return DataZoomTypeToStrategyMap.get(type!);
  }

  return {
    getXAxisStrategy,
    getYAxisStrategy,
    getLegendStrategy,
    getGridStrategy,
    getTooltipStrategy,
    getSeriesStrategy,
    getDataZoomStrategy
  };
}
