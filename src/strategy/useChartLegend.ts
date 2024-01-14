import { LegendOption } from "echarts/types/dist/shared";
import { GlobalConfigkeys, RenderPropOptions } from "../models/propOptionModel";
import globalConfig from "../constants/globalConfig";
import { handleDataItems } from "../properties/useDataProperties";

// 默认legend配置
export function buildNormalLegend(props: RenderPropOptions) {
  const { styleOptions } = props;
  const dataItems = handleDataItems(props);
  const getProperties = (key: GlobalConfigkeys) => {
    return styleOptions?.[key] || globalConfig[key];
  };
  return {
    type: getProperties("legendType"),
    orient: getProperties("legendOrient"),
    itemWidth: getProperties("legendWidth"),
    itemHeight: getProperties("legendHeight"),
    bottom: getProperties("legendBottom"),
    top: getProperties("legendTop"),
    /* left: getProperties("legendLeft"),
    right: getProperties("legendRight"), */
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