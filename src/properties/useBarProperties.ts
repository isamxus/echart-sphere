import { SeriesOption } from "echarts/types/dist/shared";
import { RenderPropOptions } from "../models/propOptionModel";

// 柱状图堆叠属性处理
export function handleBarStack(props: RenderPropOptions, options: Array<SeriesOption>) {
  const { stack } = props.chartOptions || {};
  const { dataItems = [] } = props.dataOptions;
  options.forEach((item, index) => {
    const stackStr = dataItems.length ? dataItems[index].stack : stack;
    if (stackStr) {
      Object.assign(item, {
        stack: stackStr
      });
    }
  });
}

// 柱状图重合属性处理
export function handleBarGap(props: RenderPropOptions, options: Array<SeriesOption>) {
  const { overlap } = props.chartOptions || {};
  const { dataItems = [] } = props.dataOptions;
  options.forEach((item, index) => {
    const overlapStr = dataItems.length ? dataItems[index].overlap : overlap;
    if (overlapStr) {
      Object.assign(item, {
        barGap: overlapStr
      });
    }
  });
}

