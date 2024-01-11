import { onBeforeUnmount, onMounted, ref, toRaw } from "vue";
import { RenderPropOptions } from "../../models/propOptionModel";
import { chartComponentMap } from "../../constants/chartTypeConst";
import { chartTypeConfigMap } from "../../constants/chartTypeConfigConst";
import useWatch from "../../hooks/useWatch";
import useBuildChart from "../../hooks/useBuildChart";

export default function useNormalChart(props: RenderPropOptions) {
  const chartRef = ref();
  const { chartType = "normal", componentType } = props.chartOptions || {};

  // 如果使用组件渲染
  let renderComponent: any;
  if (componentType) {
    const component = chartComponentMap.get(componentType);
    if (component) return (renderComponent = component);
  }

  const context = useBuildChart(toRaw(props));
  const { initChart, chartDispose, setStrategyType } = context;
  const chartConfig = chartTypeConfigMap.get(chartType);
  setStrategyType(chartConfig);
  // 启用监听
  useWatch(props, context);

  onMounted(() => {
    initChart(chartRef.value);
  });
  onBeforeUnmount(() => {
    chartDispose();
  });
  return {
    chartRef,
    renderComponent,
  };
}
