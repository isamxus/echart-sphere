import { LegendOption } from "echarts/types/dist/shared";
import { RenderPropOptions } from "../../models/propOptionModel";
import { handleDataItems } from "../../properties/useDataProperties";
import { buildNormalLegend } from "../useChartLegend";
import { getIndexFormatStringByUnitType } from "../../hooks/useMeasureType";
import { DataFormatType } from "../../constants/dataFormatConst";

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

  Object.assign(options, {
    data: legendData,
    orient: "vertical",
    top: dataItem.legendTop || "center",
    left: dataItem.legendLeft || "50%",
    textStyle: {
      rich: {
        name: {
          fontSize: 14,
          fontWeight: 400,
          width: 60,
          padding: [0, 0, 0, 5],
          color: "rgba(0, 0, 0, 0.65)",
          fontFamily: "Source Han Sans CN-Regular",
        },
        value: {
          fontSize: 14,
          fontWeight: 500,
          width: 50,
          align: "right",
          color: "rgba(0, 0, 0, 0.85)",
          fontFamily: "Source Han Sans CN-Medium",
        },
        percent: {
          fontSize: 14,
          fontWeight: 500,
          width: 70,
          align: "right",
          color: "rgba(0, 0, 0, 0.85)",
          fontFamily: "Source Han Sans CN-Medium",
        },
      },
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
