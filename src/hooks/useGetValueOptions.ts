import { StyleOptionsType } from "../models/propOptionModel";

export const typeToValueOptionMap = new Map([["bar", getBarValueOptions]]);

// 获取柱状图value配置
export function getBarValueOptions(styles?: Partial<StyleOptionsType>) {
  if (!styles) return {};
  return {
    itemStyle: {
      color: styles?.barColor,
      borderColor: styles?.barBorderColor,
      borderWidth: styles?.barBorderWidth,
      borderType: styles?.barBorderType
    }
  };
}

export function getValueOptionsByType(type: string = "bar", styles?: Partial<StyleOptionsType>) {
  const optionFn = typeToValueOptionMap.get(type) || getBarValueOptions;
  return optionFn(styles);
}
