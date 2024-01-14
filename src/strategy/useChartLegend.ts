import { LegendOption } from "echarts/types/dist/shared";
import {
  DataItemWithStyleOptions,
  GlobalConfigkeys,
  RenderPropOptions,
} from "../models/propOptionModel";
import globalConfig from "../constants/globalConfig";
import { handleDataItems } from "../properties/useDataProperties";

export function buildNormalLegend(props: RenderPropOptions) {
  const { styleOptions } = props;
  const dataItems = handleDataItems(props);
  const getProperties = (key: GlobalConfigkeys) => {
    return styleOptions?.[key] || globalConfig[key];
  };
  return {
    itemWidth: getProperties("legendWidth"),
    itemHeight: getProperties("legendHeight"),
    bottom: getProperties("legendBottom"),
    textStyle: {
      fontSize: getProperties("legendSize"),
    },
    data: dataItems.map((item) => {
      return {
        name: item.name || name,
      };
    }),
  } as LegendOption;
}
