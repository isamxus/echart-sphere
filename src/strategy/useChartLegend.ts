import { LegendOption } from "echarts/types/dist/shared";
import { legendConfig } from "../constants/legendConfigConst";
import { DataItemWithStyleOptions, RenderPropOptions } from "../models/propOptionModel";

export function buildNormalLegend(props: RenderPropOptions) {
  const { name, dataItems = [] } = props.dataOptions;
  const { styleOptions } = props;
  const getProperties = (key: keyof typeof legendConfig) => {
    return styleOptions?.[key] || legendConfig[key];
  };
  function buildOptions(dataItems: Array<DataItemWithStyleOptions>) {
    return {
      itemWidth: getProperties("legendWidth"),
      itemHeight: getProperties("legendHeight"),
      bottom: getProperties("legendBottom"),
      textStyle: {
        fontSize: getProperties("legendSize")
      },
      data: dataItems.map((item) => {
        return {
          name: item.name || name
        };
      })
    } as LegendOption;
  }
  if (dataItems.length) {
    return buildOptions(dataItems);
  }
  return buildOptions([{}]);
}
