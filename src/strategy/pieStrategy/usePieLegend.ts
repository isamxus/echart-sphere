import { LegendOption } from "echarts/types/dist/shared";
import { RenderPropOptions } from "../../models/propOptionModel";
import { handleDataItems } from "../../properties/useDataProperties";
import { buildNormalLegend } from "../useChartLegend";
import { getIndexFormatStringByUnitType } from "../../hooks/useMeasureType";
import { DataFormatType } from "../../constants/dataFormatConfig";
import { handlePieLegendRich } from "../../properties/useLegendProperties";

// 默认饼图图例
export function buildPieNormalLegend(props: RenderPropOptions) {
  const { data } = props.dataOptions;
  const options = buildNormalLegend(props);
  const dataItems = handleDataItems(props);
  const dataItem = dataItems[0];
  Object.assign(options, {
    data: data.map((item) => {
      return {
        name: item[dataItem.labelX],
        value: item[dataItem.labelY],
      };
    }),
  });
  return options as LegendOption;
}

// 带详细信息的饼图图例
export function buildPieWithDetailLegend(props: RenderPropOptions) {
  const { data } = props.dataOptions;
  const options = buildNormalLegend(props);
  const dataItems = handleDataItems(props);
  const dataItem = dataItems[0];
  const total = data.reduce((prev, cur) => cur[dataItem.labelY] + prev, 0);
  const legendData = data.map((item) => {
    const value = item[dataItem.labelY];
    return {
      name: item[dataItem.labelX],
      value,
      percent: value / total,
    };
  });
  const richOptions = handlePieLegendRich(props);
  Object.assign(options, {
    data: legendData,
    orient: "vertical",
    top: dataItem.legendTop || "center",
    left: dataItem.legendLeft || "50%",
    textStyle: {
      rich: richOptions,
    },
    formatter: function (params) {
      const legendItem = legendData.find((item) => item.name === params);
      if (legendItem)
        return `{name|${params}}{value|${
          legendItem.value
        }}{percent|${getIndexFormatStringByUnitType(
          legendItem.percent,
          DataFormatType.PERCENT
        )}}`;
    },
  });
  return options as LegendOption;
}

// 子母饼图图例
export function buildParentChildPieLegend(props: RenderPropOptions) {
  const options = buildNormalLegend(props);
  delete options.data;
  return options;
}
