import { SeriesOption } from "echarts/types/dist/shared";
import {
  DataItemWithStyleOptions,
  GlobalConfigkeys,
  RenderPropOptions,
} from "../models/propOptionModel";
import globalConfig from "../constants/globalConfig";
const itemTypeToOptionsMap = new Map<string, any>([
  ["bar", getNormalBarOptions],
  ["line", getNormalLineOptions],
  ["pie", getNormalPieOptions],
]);

// 公共柱状图options
export function getNormalBarOptions(
  props: RenderPropOptions,
  item?: DataItemWithStyleOptions
) {
  const { styleOptions } = props;
  const getProperties = (key: GlobalConfigkeys) => {
    return item?.[key] || styleOptions?.[key] || globalConfig[key];
  };
  return {
    barWidth: getProperties("barWidth"),
    barGap: getProperties("barGap"),
    type: "bar",
    itemStyle: {
      color: getProperties("barColor"),
      borderWidth: getProperties("barBorderWidth"),
      borderColor: getProperties("barBorderColor"),
      borderType: getProperties("barBorderType"),
    },
  } as SeriesOption;
}

// 公共折线图样式
export function getNormalLineOptions(
  props: RenderPropOptions,
  item?: DataItemWithStyleOptions
) {
  const { styleOptions } = props;
  const getProperties = (key: GlobalConfigkeys) => {
    return item?.[key] || styleOptions?.[key] || globalConfig[key];
  };
  return {
    type: "line",
    smooth: getProperties("lineSmooth"),
    showSymbol: getProperties("showSymbol"),
    itemStyle: {
      color: getProperties("lineColor"),
    },
    lineStyle: {
      color: getProperties("lineColor"),
      type: getProperties("lineType"),
    },
  } as SeriesOption;
}

// 公共pictorialBar样式
export function getNormalPictorialOptions(
  props: RenderPropOptions,
  item?: DataItemWithStyleOptions
) {
  const { styleOptions } = props;
  const getProperties = (key: GlobalConfigkeys) => {
    return item?.[key] || styleOptions?.[key] || globalConfig[key];
  };
  return {
    ...getNormalBarOptions(props, item),
    type: "pictorialBar",
    symbolClip: getProperties("barSymbolClip"),
    symbolRepeat: getProperties("barSymbolRepeat"),
    symbolMargin: getProperties("barSymbolMargin"),
    symbol: getProperties("barSymbol"),
    symbolOffset: getProperties("barSymbolOffset"),
    symbolSize: getProperties("barSymbolSize"),
    symbolPosition: getProperties("barSymbolPosition"),
  } as SeriesOption;
}

// 公共饼图样式
export function getNormalPieOptions(
  props: RenderPropOptions,
  item?: DataItemWithStyleOptions
) {
  return {
    type: "pie",
  } as SeriesOption;
}

// 根据传入的itemType获取公共样式
export function getNormalOptions(
  props: RenderPropOptions,
  item: DataItemWithStyleOptions
) {
  const { dataOptions } = props;
  const optionFn = itemTypeToOptionsMap.get(
    item.itemType || dataOptions.itemType || "bar"
  );
  return optionFn(props, item);
}
