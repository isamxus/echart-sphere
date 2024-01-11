export type Arrayable<T> = Array<T> | T;

export interface StrategyOptions {
  // xAxis策略
  xAxisType?: string;
  // yAxis策略
  yAxisType?: string;
  // legend策略
  tooltipType?: string;
  // grid策略
  gridType?: string;
  // tooltip策略
  legendType?: string;
  // series策略
  seriesType?: string;
  // dataZoom策略
  dataZoomType?: string;
}
