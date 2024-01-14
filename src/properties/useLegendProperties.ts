import { getNormalLegendRichOptions } from "../hooks/useGetOptions";
import { RenderPropOptions } from "../models/propOptionModel";

// 处理饼图图例富文本属性
export function handlePieLegendRich(props: RenderPropOptions) {
  const { chartOptions } = props;
  const baseRichOptions = {
    name: {
      legendRichAlign: "center",
    },
    value: {
      legendRichPadding: [0, 0, 0, 0],
    },
    percent: {
      legendRichPadding: [0, 0, 0, 0],
    },
  };
  if (chartOptions) {
    let { legendRichOptions } = chartOptions;
    if (legendRichOptions) {
      legendRichOptions = Array.isArray(legendRichOptions)
        ? legendRichOptions
        : [legendRichOptions];
      legendRichOptions.forEach((item) => {
        if (baseRichOptions[item.field]) {
          const option = baseRichOptions[item.field];
          Object.assign(option, item.styles);
        }
      });
    }
  }
  for (let key of Object.keys(baseRichOptions)) {
    baseRichOptions[key] = getNormalLegendRichOptions(baseRichOptions[key]);
  }
  return baseRichOptions;
}
