import { RenderPropOptions } from "../models/propOptionModel";
import { xAxisConfig } from "../constants/xAxisConfigConst";
import { XAXisOption } from "echarts/types/dist/shared";
import { Arrayable } from "../models/buildChartModel";
// 普通类目轴
export function buildNormalCategoryXAxis(props: RenderPropOptions) {
  const { labelX = xAxisConfig.xAxisField, xAxisData = [], data = [] } = props.dataOptions;
  const { styleOptions } = props;
  const getProperties = (key: keyof typeof xAxisConfig) => {
    return styleOptions?.[key] || xAxisConfig[key];
  };
  const xAxisRenderData = xAxisData.length ? xAxisData : data.map((e) => e[labelX!]);
  return {
    type: "category",
    data: xAxisRenderData,
    axisLabel: {
      fontSize: getProperties("xAxisLabelSize")
    },
    axisTick: {
      show: getProperties("xAxisTickShow")
    }
  } as Arrayable<XAXisOption>;
}
