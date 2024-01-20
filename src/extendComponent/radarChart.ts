import { LegendTypeEnum, SeriesTypeEnum } from "../constants/chartStrageConfig";
import { ChartContextType } from "../models/extendOptionModel";
import { RenderPropOptions } from "../models/propOptionModel";

export default function radarComponent(
  props: RenderPropOptions,
  chartContext: ChartContextType
) {
  const { data } = props.dataOptions;
  console.log(props.chartOptions, "props.dataOptions")
  const { radar = {} } = props.chartOptions || {};
  const { max = "maxf" } = radar;
  console.log(radar)
  const { setStrategyType, getOption } = chartContext;
  setStrategyType({
    legendType: LegendTypeEnum.NORMAL,
    seriesType: SeriesTypeEnum.RADAR,
  });
  const options = getOption();
  Object.assign(options, {
    tooltip: {},
    radar: {
      indicator: data.map((item, index) => {
        return {
          name: item.label || `label${index + 1}`,
          max: item[max] || 50000,
        };
      }),
    },
  });
  return options;
}
