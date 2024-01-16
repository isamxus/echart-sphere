import { extendOptions } from "./hooks/useExtend";
import { chartResizeSet } from "./constants/chartEventConst";
import { debounce } from "lodash";
import NormalChart from "./components/NormalChart.vue";
import { registerExtendComponents } from "./extendComponent";
import { VueVersionEnum } from "./constants/globalConfig";
import { setVueVersion } from "./hooks/useGlobalConfig";
import { PropType } from "vue";
import {
  ChartPropOptions,
  DataPropOptions,
  StyleOptionsType,
} from "./models/propOptionModel";
import { chartComponentMap } from "./constants/chartTypeConst";
export { setConfig } from "./hooks/useGlobalConfig";

export default {
  ...extendOptions,
  install(Vue) {
    const resizeEvent = debounce(() => {
      [...chartResizeSet.values()].forEach((instance) => {
        instance.resize();
      });
    }, 100);
    window.addEventListener("resize", resizeEvent);

    // 判断vue版本
    if (Vue.version.startsWith("2")) {
      setVueVersion(VueVersionEnum.VUE_2, Vue);
      Vue.component("normal-chart", {
        template: `<component 
          style="width: 100%; height: 100%"
          v-if="renderComponent" 
          :is="renderComponent"
          :dataOptions="dataOptions"
          :chartOptions="chartOptions"
          :styleOptions="styleOptions"
          ref="chartComponentRef">
        </component>`,
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
        data() {
          return {
            renderComponent: null,
          };
        },
        mounted() {
          const { componentType = "normal" } = this.chartOptions || {};
          if (componentType) {
            const component = chartComponentMap.get(componentType);
            if (component) this.renderComponent = component;
          }
        },
      });
    } else {
      Vue.component("normal-chart", NormalChart);
    }

    // 注册定制组件
    registerExtendComponents(Vue);
  },
};

export { NormalChart };
