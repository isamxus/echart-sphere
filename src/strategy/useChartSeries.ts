import {
  DataItemWithStyleOptions,
  RenderPropOptions,
} from "../models/propOptionModel";
import { seriesConfig } from "../constants/seriesConfigConst";
import { SeriesOption } from "echarts/types/dist/shared";
import { handleSplitPoint } from "../properties/useChartProperties";
import { handleBarGap, handleBarStack } from "../properties/useBarProperties";
import { getNormalOptions } from "../hooks/useGetOptions";

// 默认的柱状图series配置
export function buildNormalSeries(props: RenderPropOptions) {
  const {
    labelY = seriesConfig.yAxisField,
    data = [],
    dataItems = [],
  } = props.dataOptions;
  function buildOptions(items: Array<DataItemWithStyleOptions>) {
    return items.map((item) => {
      const seriesData = data.map((e: any) => e[item.labelY!]);
      const opiton = {
        name: item.name,
        data: seriesData,
        yAxisIndex: item.yAxisIndex || seriesConfig.yAxisIndex,
        ...getNormalOptions(props, item),
      };
      return opiton;
    }) as Array<SeriesOption>;
  }

  const options = buildOptions(
    dataItems.length
      ? dataItems
      : [
          {
            labelY,
            name: props.dataOptions.name,
            labelX: props.dataOptions.labelX,
          },
        ]
  );
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
