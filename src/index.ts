import { extendOptions } from "./hooks/useExtend";
import { chartResizeSet } from "./constants/chartEventConfig";
import { debounce } from "lodash";
import { registerExtendComponents } from "./extendComponent";
import { VueVersionEnum } from "./constants/globalConfig";
import { setVueVersion } from "./hooks/useGlobalConfig";
import { chartComponentMap } from "./constants/chartStrageConfig";
export { setConfig, setLoadingConfig } from "./hooks/useGlobalConfig";
export { setTheme } from "./theme/index";
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
      Vue.component(
        "normal-chart",
        require("./components/NormalChart.vue").default
      );
    }

    // 注册定制组件
    registerExtendComponents(Vue);
  },
};
