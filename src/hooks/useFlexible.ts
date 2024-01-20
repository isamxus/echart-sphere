import {
  chartSelfAdaptionConfig,
  flexibleFieldsSet,
} from "../constants/globalConfig";
import { RenderPropOptions } from "../models/propOptionModel";

export default function useFlexible(props: RenderPropOptions) {
  const flexible = getPropertie("flexible");
  const designWidth = getPropertie("designWidth") as number;

  function getPropertie(key: keyof typeof chartSelfAdaptionConfig) {
    const { flexibleConfig } = props.chartOptions || {};
    return flexibleConfig?.[key] || chartSelfAdaptionConfig[key];
  }

  function transOptionFlexible(options: echarts.EChartsCoreOption) {
    if (flexible) {
      // 浏览器可视宽
      const clientWidth =
        document.documentElement.clientWidth || document.body.clientWidth;
      changeFieldsToValue(options, clientWidth);
    }
  }

  function getPx(num: number, clientWidth: number) {
    return (num * clientWidth) / designWidth;
  }

  // 递归遍历options，修改自适应值
  function changeFieldsToValue(opitons: any, clientWidth: number) {
    if (typeof opitons !== "object") return;
    for (let key of Object.keys(opitons)) {
      if (flexibleFieldsSet.has(key)) {
        if (typeof opitons[key] === "number") {
          opitons[key] = getPx(opitons[key], clientWidth);
        } else if (Array.isArray(opitons[key])) {
          opitons[key] = opitons[key].map((item) => {
            if (typeof item === "number") {
              return getPx(opitons[key], clientWidth);
            }
            return item;
          });
        }
      }

      changeFieldsToValue(opitons[key], clientWidth);
    }
  }

  return {
    transOptionFlexible,
  };
}
