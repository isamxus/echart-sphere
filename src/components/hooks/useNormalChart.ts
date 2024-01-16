import { markRaw, ref } from "vue";
import { RenderPropOptions } from "../../models/propOptionModel";
import { chartComponentMap } from "../../constants/chartTypeConst";

export default function useNormalChart(props: RenderPropOptions) {
  const { componentType = "normal" } = props.chartOptions || {};
  const chartComponentRef = ref();
  const exposeMethods = {};
  // 如果使用组件渲染
  let renderComponent: any;

  if (componentType) {
    const component = chartComponentMap.get(componentType);
    if (component) renderComponent = markRaw(component);
  }
  return {
    renderComponent,
    exposeMethods,
    chartComponentRef,
  };
}
