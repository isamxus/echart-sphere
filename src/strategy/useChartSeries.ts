import {
  DataItemWithStyleOptions,
  RenderPropOptions,
} from "../models/propOptionModel";
import { SeriesOption } from "echarts/types/dist/shared";
import { handleSplitPoint } from "../properties/useChartProperties";
import { handleBarGap, handleBarStack } from "../properties/useBarProperties";
import { getNormalOptions, getNormalPieOptions } from "../hooks/useGetOptions";
import { handleDataItems } from "../properties/useDataProperties";
import globalConfig from "../constants/globalConfig";
// 默认的柱状图series配置
export function buildNormalSeries(props: RenderPropOptions) {
  const { data = [] } = props.dataOptions;
  const dataItems = handleDataItems(props);

  const options = dataItems.map((item) => {
    const seriesData = data.map((e: any) => e[item.labelY!]);
    const opiton = {
      name: item.name,
      data: seriesData,
      yAxisIndex: item.yAxisIndex || globalConfig.yAxisIndex,
      ...getNormalOptions(props, item),
    };
    return opiton;
  }) as Array<SeriesOption>;

  // 处理堆叠属性
  handleBarStack(props, options);
  // 重叠属性处理
  handleBarGap(props, options);

  return options;
}

// 趋势预测系列
export function buildTrendSeries(
  props: RenderPropOptions
): Array<SeriesOption> {
  const normalOptions = buildNormalSeries(props);
  // 处理分割点属性
  const opitons = handleSplitPoint(props, normalOptions);

  return opitons;
}

// 默认饼图系列
export function buildNormalPieSeries(props: RenderPropOptions) {
  const { data = [] } = props.dataOptions;
  const dataItems = handleDataItems(props);
  const pieItem = dataItems[0];
  const options = {
    ...getNormalPieOptions(props, pieItem),
    name: pieItem.name,
    data: data.map((item) => {
      return {
        value: item[pieItem.labelY],
        name: item[pieItem.labelX]
      };
    }),
  } as SeriesOption;

  return options;
}
