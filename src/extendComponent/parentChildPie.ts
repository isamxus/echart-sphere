import {
  LegendTypeEnum,
  SeriesTypeEnum,
  TooltipTypeEnum,
} from "../constants/chartStrageConfig";
import { treeConfig } from "../constants/globalConfig";
import {
  ChartContextType,
  ParentChildPieChartClickContext,
} from "../models/extendOptionModel";
import { RenderPropOptions } from "../models/propOptionModel";
import { listToTree } from "../utils/dataUtils";

export function handleChartClick(
  data: any,
  context: ParentChildPieChartClickContext
) {
  const { treeData, idKey, props, renderChart } = context;
  const findItem = treeData.find((item) => item[idKey] === data.data.id);
  if (findItem) {
    props.extendOptions.currentChildData = findItem.children;
    renderChart();
  }
}

// 子母图扩展组件
export default function parentChildPieComponent(
  props: RenderPropOptions,
  chartContext: ChartContextType
) {
  const { data = [] } = props.dataOptions;
  const { idKey } = props.dataOptions.treeConfig || treeConfig;
  const { setStrategyType, getInstance, renderChart } = chartContext;
  const treeData = listToTree(data);
  props.extendOptions = {
    treeData,
    currentChildData: treeData.length ? treeData[0].children : [],
  };
  const chartInstance = getInstance();

  chartInstance.on("click", (data: any) => {
    const context = {
      treeData,
      idKey,
      props,
      renderChart,
    };
    handleChartClick(data, context);
  });

  setStrategyType({
    legendType: LegendTypeEnum.PARENT_CHILD_PIE,
    seriesType: SeriesTypeEnum.PARENT_CHILD_PIE,
    tooltipType: TooltipTypeEnum.PIE,
  });
}
