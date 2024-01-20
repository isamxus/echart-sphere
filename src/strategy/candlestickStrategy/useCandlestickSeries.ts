import { SeriesOption } from "echarts";
import { RenderPropOptions } from "../../models/propOptionModel";
import { handleDataItems } from "../../properties/useDataProperties";

// 默认K线图系列
export function buildNormalCandleStickSeries(props: RenderPropOptions) {
  const dataItems = handleDataItems(props);
  const { candlestick = {} } = props.chartOptions || {};
  const { data } = props.dataOptions;
  const { open, close, lowest, highest } = candlestick;
  const options = dataItems.map((item) => {
    return {
      type: "candlestick",
      data: data.map((e) => {
        const getValue = (field?: string) => e[field] || 0;
        return [
          getValue(open),
          getValue(close),
          getValue(lowest),
          getValue(highest),
        ];
      }),
    };
  });
  return options as SeriesOption;
}
