import { SeriesOption } from "echarts/types/dist/shared";
import { RenderPropOptions } from "../models/propOptionModel";

// 柱状图堆叠属性处理
export function handleBarStack(
  props: RenderPropOptions,
  options: Array<SeriesOption>
) {
  const { stack } = props.chartOptions || {};
  const { dataItems = [] } = props.dataOptions;
  options.forEach((item, index) => {
    const stackStr = dataItems[index]?.stack || stack;
    if (stackStr) {
      Object.assign(item, {
        stack: stackStr,
      });
    }
  });
}

// 柱状图重合属性处理
export function handleBarGap(
  props: RenderPropOptions,
  options: Array<SeriesOption>
) {
  let { overlap } = props.chartOptions || {};
  const { dataItems = [] } = props.dataOptions;
  if (overlap) {
    if (typeof overlap === "boolean") overlap = "-100%";
    options.forEach((item, index) => {
      Object.assign(item, {
        barGap: dataItems[index]?.overlap || overlap,
      });
    });
  }
}
