import { SeriesOption } from "echarts/types/dist/shared";
import { RenderPropOptions } from "../models/propOptionModel";
import { getValueOptionsByType } from "../hooks/useGetValueOptions";
import { getTrendOptionsByType } from "./useTrendProperties";

// 分割点属性处理
export function handleSplitPoint(
  props: RenderPropOptions,
  options: Array<SeriesOption>
): Array<any> {
  const { split } = props.chartOptions || {};
  const { dataItems = [] } = props.dataOptions;
  const autoOffsetMap = new Map([["line", -1]]);
  return options
    .map((item, index) => {
      let splitOptions =
        dataItems.length && dataItems[index].split
          ? dataItems[index].split
          : split;
      if (splitOptions) {
        let {
          styleAfter,
          styleBefore,
          trend,
          trendPart = "after",
          trendStyle,
          trendOffset = 0,
        } = splitOptions;
        let splitX = splitOptions.splitX || split?.splitX || -1;
        // 如果不指定趋势类型
        if (!trend) {
          item.data = (item.data as Array<any>).map((da, daIndex) => {
            return {
              value: da,
              ...getValueOptionsByType(
                item.type,
                daIndex > splitX ? styleAfter : styleBefore
              ),
            };
          });
          return item;
        }
        // 如果使用趋势类型
        const data = item.data as Array<any>;
        if (splitX < 0) splitX = 0;

        if (autoOffsetMap.has(trend)) {
          trendOffset = autoOffsetMap.get(trend);
        }
        const beforeData = data.slice(0, splitX + 1);
        const afterData = [
          ...new Array(splitX + 1 + trendOffset).fill("--"),
          ...data.slice(splitX + 1 + trendOffset),
        ];
        if (["before", "after"].includes(trendPart)) {
          const trendOptions = getTrendOptionsByType(
            trend,
            props,
            trendStyle || dataItems[index]
          );
          if (trendPart === "before") {
            return [
              { ...trendOptions, ...item, data: beforeData },
              { ...item, data: afterData },
            ];
          }
          return [
            { ...item, data: beforeData },
            { ...item, ...trendOptions, data: afterData },
          ];
        }
        return [
          { ...item, data: beforeData },
          { ...item, data: afterData },
        ];
      }
      return item;
    })
    .flat();
}
