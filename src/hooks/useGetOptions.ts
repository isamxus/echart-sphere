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

export function getPropertieMethod(
  props: RenderPropOptions,
  item?: DataItemWithStyleOptions
) {
  return (key: GlobalConfigkeys) => {
    const { styleOptions } = props;
    return item?.[key] || styleOptions?.[key] || globalConfig[key];
  };
}

// 公共柱状图options
export function getNormalBarOptions(
  props: RenderPropOptions,
  item?: DataItemWithStyleOptions
) {
  const getPropertie = getPropertieMethod(props, item);
  return {
    barWidth: getPropertie("barWidth"),
    barGap: getPropertie("barGap"),
    type: "bar",
    itemStyle: {
      color: getPropertie("barColor"),
      borderWidth: getPropertie("barBorderWidth"),
      borderColor: getPropertie("barBorderColor"),
      borderType: getPropertie("barBorderType"),
    },
  } as SeriesOption;
}

// 公共折线图样式
export function getNormalLineOptions(
  props: RenderPropOptions,
  item?: DataItemWithStyleOptions
) {
  const getPropertie = getPropertieMethod(props, item);

  return {
    type: "line",
    smooth: getPropertie("lineSmooth"),
    showSymbol: getPropertie("showSymbol"),
    itemStyle: {
      color: getPropertie("lineColor"),
    },
    lineStyle: {
      color: getPropertie("lineColor"),
      type: getPropertie("lineType"),
    },
  };
}

// 公共pictorialBar样式
export function getNormalPictorialOptions(
  props: RenderPropOptions,
  item?: DataItemWithStyleOptions
) {
  const getPropertie = getPropertieMethod(props, item);
  return {
    ...getNormalBarOptions(props, item),
    type: "pictorialBar",
    symbolClip: getPropertie("barSymbolClip"),
    symbolRepeat: getPropertie("barSymbolRepeat"),
    symbolMargin: getPropertie("barSymbolMargin"),
    symbol: getPropertie("barSymbol"),
    symbolOffset: getPropertie("barSymbolOffset"),
    symbolSize: getPropertie("barSymbolSize"),
    symbolPosition: getPropertie("barSymbolPosition"),
  } as SeriesOption;
}

// 公共饼图样式
export function getNormalPieOptions(
  props: RenderPropOptions,
  item?: DataItemWithStyleOptions
) {
  const getPropertie = getPropertieMethod(props, item);
  return {
    type: "pie",
    left: getPropertie("pieLeft"),
    top: getPropertie("pieTop"),
    right: getPropertie("pieRight"),
    bottom: getPropertie("pieBottom"),
    width: getPropertie("pieWidth"),
    height: getPropertie("pieHeight"),
    label: {
      show: getPropertie("pieLabelshow"),
    },
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
