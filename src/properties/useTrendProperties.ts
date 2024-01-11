import { getNormalLineOptions, getNormalPictorialOptions } from "../hooks/useGetOptions";
import { DataItemWithStyleOptions, RenderPropOptions } from "../models/propOptionModel";
// 趋势类型映射
const typeToTrendMap = new Map([
  ["pictorial", getNormalPictorialOptions],
  ["line", getNormalLineOptions]
]);

// 获取趋势类型
export function getTrendOptionsByType(
  type: string,
  props: RenderPropOptions,
  item?: DataItemWithStyleOptions
) {
  const fn = typeToTrendMap.get(type) || getNormalPictorialOptions;
  return fn(props, item);
}
