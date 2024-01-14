import { SeriesOption } from "echarts";
import { getNormalPieOptions } from "../../hooks/useGetOptions";
import { RenderPropOptions } from "../../models/propOptionModel";
import { handleDataItems } from "../../properties/useDataProperties";

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
        name: item[pieItem.labelX],
      };
    }),
  } as SeriesOption;
  return options;
}

// 饼图带详细信息
export function buildPieWithDetailSeries(props: RenderPropOptions) {
  const { data = [] } = props.dataOptions;
  const dataItems = handleDataItems(props);
  const pieItem = dataItems[0];
  const options = {
    ...getNormalPieOptions(props, pieItem),
    name: pieItem.name,
    width: pieItem.pieWidth || "45%",
    data: data.map((item) => {
      return {
        value: item[pieItem.labelY],
        name: item[pieItem.labelX],
      };
    }),
  } as SeriesOption;
  return options;
}
