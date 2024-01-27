import { RenderPropOptions } from "../../models/propOptionModel";

// 地图默认visualMap配置
export function buildMapVisualMap(props: RenderPropOptions) {
  return {
    type: "continuous",
    min: 0,
    max: 10000,
    showLabel: true,
    inRange: {
      color: ["#e0e0e0", "#bdbdbd", "#9e9e9e", "#757575", "#616161"], // 从浅灰到深灰的渐变
    },
  } ;
}
