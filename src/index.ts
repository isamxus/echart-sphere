import { extendOptions } from "./hooks/useExtend";
import { chartResizeSet } from "./constants/chartEventConst";
import { debounce } from "lodash";
import NormalChart from "./components/NormalChart.vue";
import { registerExtendComponents } from "./extendComponent";
export { setConfig } from "./hooks/useGlobalConfig";
registerExtendComponents();
export default {
  ...extendOptions,
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
