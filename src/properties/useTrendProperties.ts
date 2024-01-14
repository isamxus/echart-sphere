import {
  getNormalLineOptions,
  getNormalPictorialOptions,
} from "../hooks/useGetOptions";
import {
  DataItemWithStyleOptions,
  RenderPropOptions,
} from "../models/propOptionModel";
// 趋势类型映射
const typeToTrendMap = new Map<string, any>([
  ["pictorial", getNormalPictorialOptions],
  ["line", getNormalTrendLineOptions],
]);

// 折线图默认趋势样式
export function getNormalTrendLineOptions(
  props: RenderPropOptions,
  item?: DataItemWithStyleOptions
) {
  const options = getNormalLineOptions(props, item);
  Object.assign(options.lineStyle, {
    type: item.lineType || "dashed",
  });
  return options;
}

// 获取趋势类型
export function getTrendOptionsByType(
  type: string,
  props: RenderPropOptions,
  item?: DataItemWithStyleOptions
) {
  const fn = typeToTrendMap.get(type) || getNormalPictorialOptions;
  return fn(props, item);
}
