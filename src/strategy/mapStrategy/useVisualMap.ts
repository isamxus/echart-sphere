import { RenderPropOptions } from "../../models/propOptionModel";

// 地图默认visualMap配置
export function buildMapVisualMap(props: RenderPropOptions) {
  return {
    type: "continuous",
    min: 0,
    max: 10000,
    showLabel: true,
    inRange: {
      color: ["#edfbfb", "#b7d6f3", "#40a9ed", "#3598c1", "#215096"],
    },
  } ;
}
