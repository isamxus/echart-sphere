import { RenderPropOptions } from "../../models/propOptionModel";
import { handleDataItems } from "../../properties/useDataProperties";

// 默认雷达图系列
export function buildNormalRadarSeries(props: RenderPropOptions) {
  const { data } = props.dataOptions;
  const dataItems = handleDataItems(props);
  return dataItems.map((dataItem) => {
    return {
      type: "radar",
      data: [
        {
          value: data.map((item) => item[dataItem.labelY]),
          name: dataItem.name,
        },
      ],
    };
  });
}
