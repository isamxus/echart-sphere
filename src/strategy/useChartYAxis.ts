import { YAXisOption } from "echarts/types/dist/shared";
import { yAxisConfig } from "../constants/yAxisConfigConst";
import { Arrayable } from "../models/buildChartModel";
import { RenderPropOptions, StyleOptionsType } from "../models/propOptionModel";

export function buildNormalYAxis(props: RenderPropOptions) {
  const { chartOptions, styleOptions } = props;
  const { secondYAxis } = chartOptions || {};
  const yAxisLabelSize = yAxisConfig.yAxisLabelSize;
  // 公共配置
  function getCommonOptions(item?: Partial<StyleOptionsType>) {
    return {
      type: "value",
      axisLabel: {
        fontSize: item?.yAxisLabelSize || yAxisLabelSize
      }
    };
  }
  let options = [getCommonOptions(styleOptions)];
  if (secondYAxis) {
    options.push(getCommonOptions(typeof secondYAxis === "boolean" ? styleOptions : secondYAxis));
  }
  return options as Arrayable<YAXisOption>;
}
