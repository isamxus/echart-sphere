import { chartTypeConfigMap } from "../constants/chartTypeConfigConst";
import { ChartContextType } from "../models/extendOptionModel";
import { RenderPropOptions } from "../models/propOptionModel";

// 默认组件
export default function normalComponent(
  props: RenderPropOptions,
  chartContext: ChartContextType
) {
  const { chartType = "normal" } = props.chartOptions || {};
  const { setStrategyType } = chartContext;
  const chartConfig = chartTypeConfigMap.get(chartType);
  setStrategyType(chartConfig);
}
