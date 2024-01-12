import { GlobalConfigkeys, RenderPropOptions } from "../models/propOptionModel";
import { XAXisOption } from "echarts/types/dist/shared";
import { Arrayable } from "../models/buildChartModel";
import globalConfig from "../constants/globalConfig";
// 普通类目轴
export function buildNormalCategoryXAxis(props: RenderPropOptions) {
  const {
    labelX = globalConfig.xAxisField,
    xAxisData = [],
    data = [],
  } = props.dataOptions;
  const { styleOptions } = props;
  const getProperties = (key: GlobalConfigkeys) => {
    return styleOptions?.[key] || globalConfig[key];
  };
  const xAxisRenderData = xAxisData.length
    ? xAxisData
    : data.map((e) => e[labelX!]);
  return {
    type: "category",
    data: xAxisRenderData,
    axisLabel: {
      fontSize: getProperties("xAxisLabelSize"),
    },
    axisTick: {
      show: getProperties("xAxisTickShow"),
    },
  } as Arrayable<XAXisOption>;
}
