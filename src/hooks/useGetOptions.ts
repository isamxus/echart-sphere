import { SeriesOption } from "echarts/types/dist/shared";
import { barConfig } from "../constants/barConfigConst";
import { lineConfig } from "../constants/lineConfigConst";
import { DataItemWithStyleOptions, RenderPropOptions } from "../models/propOptionModel";

const itemTypeToOptionsMap = new Map<string, any>([
  ["bar", getNormalBarOptions],
  ["line", getNormalLineOptions]
]);

// 公共柱状图options
export function getNormalBarOptions(props: RenderPropOptions, item?: DataItemWithStyleOptions) {
  const { styleOptions } = props;
  const getProperties = (key: keyof typeof barConfig) => {
    return item?.[key] || styleOptions?.[key] || barConfig[key];
  };
  return {
    barWidth: getProperties("barWidth"),
    barGap: getProperties("barGap"),
    type: "bar",
    itemStyle: {
      color: getProperties("barColor"),
      borderWidth: getProperties("barBorderWidth"),
      borderColor: getProperties("barBorderColor"),
      borderType: getProperties("barBorderType")
    }
  } as SeriesOption;
}

// 公共折线图样式
export function getNormalLineOptions(props: RenderPropOptions, item?: DataItemWithStyleOptions) {
  const { styleOptions } = props;
  const getProperties = (key: keyof typeof lineConfig) => {
    return item?.[key] || styleOptions?.[key] || lineConfig[key];
  };
  return {
    type: "line",
    smooth: getProperties("lineSmooth"),
    showSymbol: getProperties("showSymbol"),
    itemStyle: {
      color: getProperties("lineColor")
    },
    lineStyle: {
      color: getProperties("lineColor"),
      type: getProperties("lineType")
    }
  } as SeriesOption;
}

// 公共pictorialBar样式
export function getNormalPictorialOptions(
  props: RenderPropOptions,
  item?: DataItemWithStyleOptions
) {
  const { styleOptions } = props;
  const getProperties = (key: keyof typeof barConfig) => {
    return item?.[key] || styleOptions?.[key] || barConfig[key];
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
    symbolPosition: getProperties("barSymbolPosition")
  } as SeriesOption;
}

// 根据传入的itemType获取公共样式
export function getNormalOptions(props: RenderPropOptions, item: DataItemWithStyleOptions) {
  const { dataOptions } = props;
  const optionFn = itemTypeToOptionsMap.get(item.itemType || dataOptions.itemType || "bar");
  return optionFn(props, item);
}
