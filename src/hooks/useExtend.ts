import {
  GridOption,
  LegendOption,
  SeriesOption,
  TooltipOption,
  XAXisOption,
  YAXisOption,
} from "echarts/types/dist/shared";
import { Arrayable } from "../models/buildChartModel";
import {
  ChartPropOptions,
  DataPropOptions,
  RenderPropOptions,
  StyleOptionsType,
} from "../models/propOptionModel";
import {
  GridTypeToStrategyMap,
  LegendTypeToStrategyMap,
  SeriesTypeToStrategyMap,
  TooltipTypeToStrategyMap,
  XAxisTypeToStrategyMap,
  YAxisTypeToStrategyMap,
  chartComponentMap,
} from "../constants/chartTypeConst";
import { ChartExtendFn } from "../models/extendOptionModel";
import useBuildChart from "./useBuildChart";
import { usePropsValidate } from "./useValidate";
import { ChartEventEnum, chartEvents } from "../constants/chartEventConst";
import {
  VueVersionEnum,
  normalLoadingConfig,
  vueConfig,
} from "../constants/globalConfig";

export default function useExtend<T>(map: Map<string, any>) {
  // 扩展类型函数
  function extend(
    type: string,
    fn: (props: RenderPropOptions) => Arrayable<T>
  ) {
    map.set(type, fn);
  }
  // 类型钩子-在类型初始化之前
  function beforeHook(type: string, fn: (props: RenderPropOptions) => void) {
    const strategy = map.get(type);
    if (strategy) {
      map.set(type, (props: RenderPropOptions) => {
        fn(props);
        return strategy(props);
      });
    }
  }
  // 类型钩子-在类型完成初始化后
  function afterHook(
    type: string,
    fn: (props: RenderPropOptions) => Arrayable<T>
  ) {
    const strategy = map.get(type);
    if (strategy) {
      map.set(type, (props: RenderPropOptions) => {
        const result = strategy(props);
        return fn(result);
      });
    }
  }
  return {
    extend,
    beforeHook,
    afterHook,
  };
}

export const extendOptions = {
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
      // vue2版本
      if (vueConfig.version === VueVersionEnum.VUE_2) {
        const Vue2 = vueConfig.context;
        if (Vue2) {
          const chartComponent = Vue2.extend({
            template: `<div ref="chartRef"></div>`,
            props: {
              dataOptions: {
                type: Object,
                required: true,
              },
              chartOptions: {
                type: Object,
              },
              styleOptions: {
                type: Object,
              },
            },
            data() {
              return {
                chartContext: null,
                rawProps: null,
              };
            },
            methods: {
              render() {
                const result = callback(this.rawProps, this.chartContext);
                result
                  ? this.chartContext.handleRender(result)
                  : this.chartContext.renderChart();
              },
            },
            watch: {
              dataOptions: {
                handler() {
                  this.render();
                },
                deep: true,
              },
              "chartOptions.loading": {
                handler(value) {
                  if (value) {
                    return this.chartContext
                      .getInstance()
                      .showLoading("default", normalLoadingConfig);
                  }
                  this.chartContext.getInstance().hideLoading();
                },
              },
            },
            mounted() {
              if (!usePropsValidate(this.$props)) return;
              this.rawProps = { ...this.$props };
              this.chartContext = useBuildChart(this.rawProps);
              const { initChart, getInstance } = this.chartContext;
              initChart(this.$refs.chartRef);
              this.render();
              const instance = getInstance();
              instance &&
                instance.on("click", (data) => {
                  this.$emit(ChartEventEnum.CHART_CLICK, data);
                });
            },
            beforeDestroy() {
              this.chartContext.chartDispose();
            },
          });
          chartComponentMap.set(type, chartComponent);
        }
        return;
      }
      
      // vue3版本
      const {
        defineComponent,
        ref,
        onMounted,
        h,
        toRaw,
        onBeforeUnmount,
        watch,
      } = require("vue");

      const chartComponent = defineComponent({
        props: {
          dataOptions: {
            type: Object,
            required: true,
          },
          chartOptions: {
            type: Object,
          },
          styleOptions: {
            type: Object,
          },
        },
        emits: [...chartEvents],
        setup(props: RenderPropOptions, context) {
          if (!usePropsValidate(props)) return;
          const chartRef = ref();
          const rawProps = toRaw(props);
          const chartContext = useBuildChart(rawProps);
          const {
            initChart,
            handleRender,
            renderChart,
            getInstance,
            chartDispose,
          } = chartContext;
          function render() {
            const result = callback(rawProps, chartContext);
            result ? handleRender(result) : renderChart();
          }
          watch(
            () => props.dataOptions,
            () => {
              render();
            },
            { deep: true }
          );

          if (props.chartOptions) {
            // 监听loading状态
            watch(
              () => props.chartOptions.loading,
              (value) => {
                if (value) {
                  return getInstance().showLoading(
                    "default",
                    normalLoadingConfig
                  );
                }
                getInstance().hideLoading();
              }
            );
          }
          onMounted(() => {
            initChart(chartRef.value);
            render();
            const instance = getInstance();
            instance &&
              instance.on("click", (data) => {
                context.emit(ChartEventEnum.CHART_CLICK, data);
              });
          });
          onBeforeUnmount(() => {
            chartDispose();
          });
          context.expose({
            ...chartContext,
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
};
