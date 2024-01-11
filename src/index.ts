import {
  GridOption,
  LegendOption,
  TooltipOption,
  XAXisOption,
  YAXisOption,
} from "echarts/types/dist/shared";
import {
  ChartPropOptions,
  DataPropOptions,
  StyleOptionsType,
} from "./models/propOptionModel";
import {
  GridTypeToStrategyMap,
  LegendTypeToStrategyMap,
  SeriesTypeToStrategyMap,
  TooltipTypeToStrategyMap,
  XAxisTypeToStrategyMap,
  YAxisTypeToStrategyMap,
  chartComponentMap,
} from "./constants/chartTypeConst";
import { PropType, defineComponent, h, onMounted, ref } from "vue";
import useBuildChart from "./hooks/useBuildChart";
import { ChartExtendFn } from "./models/extendOptionModel";
import { SeriesOption } from "echarts";
import useExtend from "./hooks/useExtend";
import { chartResizeSet } from "./constants/chartEventConst";
import { debounce } from "lodash";
import useWatch from "./hooks/useWatch";
import NormalChart from "./components/NormalChart.vue";
export {
  setConfig,
  setLoadingConfig,
  setFlexibleConfig,
} from "./hooks/useGlobalConfig";
export default {
  // X轴类型扩展
  xAxisExtend: useExtend<XAXisOption>(XAxisTypeToStrategyMap),
  // y轴类型扩展
  yAxisExtend: useExtend<YAXisOption>(YAxisTypeToStrategyMap),
  // grid类型扩展
  gridExtend: useExtend<GridOption>(GridTypeToStrategyMap),
  // tooltip类型扩展
  tooltipExtend: useExtend<TooltipOption>(TooltipTypeToStrategyMap),
  // legend图例类型扩展
  legendExtend: useExtend<LegendOption>(LegendTypeToStrategyMap),
  // series类型扩展
  seriesExtend: useExtend<SeriesOption>(SeriesTypeToStrategyMap),
  // 图表类型扩展
  chartExtend: {
    extend(type: string, callback: ChartExtendFn) {
      const chartComponent = defineComponent({
        props: {
          dataOptions: {
            type: Object as PropType<DataPropOptions>,
            required: true,
          },
          chartOptions: {
            type: Object as PropType<ChartPropOptions>,
          },
          styleOptions: {
            type: Object as PropType<Partial<StyleOptionsType>>,
          },
        },
        setup(props, context) {
          const chartRef = ref();
          const chartContext = useBuildChart(props);
          const { initChart, handleRender } = chartContext;
          useWatch(props, chartContext);
          const result = callback(props, chartContext);
          onMounted(() => {
            initChart(chartRef.value, result ? false : true);
            result && handleRender(result);
          });
          return () =>
            h("div", {
              ref: (ref) => (chartRef.value = ref),
            });
        },
      });
      chartComponentMap.set(type, chartComponent);
    },
  },
  install() {
    const resizeEvent = debounce(() => {
      [...chartResizeSet.values()].forEach((instance) => {
        instance.resize();
      });
    }, 100);
    window.addEventListener("resize", resizeEvent);
  },
};

export { NormalChart };
