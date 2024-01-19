import {
  SeriesTypeEnum,
  TooltipTypeEnum,
  visualMapTypeEnum,
} from "../constants/chartTypeConst";
import { ChartContextType } from "../models/extendOptionModel";
import { RenderPropOptions } from "../models/propOptionModel";
import * as echarts from "echarts";
export default function mapComponent(
  props: RenderPropOptions,
  chartContext: ChartContextType
) {
  const { dataOptions } = props;
  const { setStrategyType } = chartContext;
  const { mapConfig } = dataOptions;
  const { mapJson, name, isBuiltIn = false, code = 100000 } = mapConfig;
  function setStrategy() {
    setStrategyType({
      seriesType: SeriesTypeEnum.MAP,
      visualMapType: visualMapTypeEnum.MAP,
      tooltipType: TooltipTypeEnum.MAP,
    });
  }

  if (!isBuiltIn) {
    if (!mapJson)
      return console.warn(
        'Warning: You must provide "mapJson" data when "isBuiltIn" is not set to true.'
      );
    echarts.registerMap(name, mapJson);
    setStrategy();
  } else {
    if (!(window as any).chinaMapData) {
      return console.warn(
        'Warning: When "isBuiltIn" is set to true, please ensure that the "china-map-echarts" package is installed and that the administrative code "code" you have provided is correct.'
      );
    }
    const chinaMapData = (window as any).chinaMapData;
    const mapData = chinaMapData[`map_${code}`];
    echarts.registerMap(name, mapData);
    setStrategy();
  }
}
