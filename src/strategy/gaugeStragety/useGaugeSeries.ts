import { RenderPropOptions } from "../../models/propOptionModel";
import { handleDataItems } from "../../properties/useDataProperties";
import { SeriesOption } from "echarts";

export function buildNormalGaugeSeries(props: RenderPropOptions) {
  const dataItems = handleDataItems(props);
  const { data } = props.dataOptions;
  return dataItems.map((item) => {
    return {
      name: item.name,
      type: "gauge",
      data: data.map((e) => {
        return {
          value: e[item.labelY],
          name: e[item.labelX],
        };
      }),
    };
  }) as SeriesOption;
}
