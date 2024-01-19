import { SeriesOption } from "echarts";
import { getNormalMapOptions } from "../../hooks/useGetOptions";
import { RenderPropOptions } from "../../models/propOptionModel";
import { handleDataItems } from "../../properties/useDataProperties";

// 默认地图系列
export function buildNormalMapSeries(props: RenderPropOptions) {
  const { mapConfig, data = [] } = props.dataOptions;
  let dataItem = handleDataItems(props);
  const options = {
    ...getNormalMapOptions(props, dataItem),
    name: dataItem[0].name,
    map: mapConfig.name,
    type: "map",
    data: data.map((item) => {
      return {
        name: item[dataItem[0].labelX],
        value: item[dataItem[0].labelY],
      };
    }),
  } as SeriesOption;
  return options;
}
