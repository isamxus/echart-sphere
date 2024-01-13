import {
  chartSelfAdaptionConfig,
  flexibleFieldsSet,
} from "../constants/globalConfig";
import { RenderPropOptions } from "../models/propOptionModel";

export default function useFlexible(props: RenderPropOptions) {
  const { designWidth, flexible } = chartSelfAdaptionConfig;
  function transOptionFlexible(options: echarts.EChartsCoreOption) {
    if (flexible) {
      // 浏览器可视宽
      const clientWidth =
        document.documentElement.clientWidth || document.body.clientWidth;
      changeFieldsToValue(options, clientWidth);
    }
  }
  // 递归遍历options，修改自适应值
  function changeFieldsToValue(opitons: any, clientWidth: number) {
    if (typeof opitons !== "object") return;
    for (let key of Object.keys(opitons)) {
      if (flexibleFieldsSet.has(key) && typeof opitons[key] === "number") {
        opitons[key] = (opitons[key] * clientWidth) / designWidth;
      }
      changeFieldsToValue(opitons[key], clientWidth);
    }
  }

  return {
    transOptionFlexible,
  };
}
