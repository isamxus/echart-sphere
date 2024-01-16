import { watch } from "vue";
import { ChartContextType } from "../models/extendOptionModel";
import { RenderPropOptions } from "../models/propOptionModel";
import { normalLoadingConfig } from "../constants/globalConfig";

export default function useWatch(
  props: RenderPropOptions,
  context: ChartContextType
) {
  if (props.chartOptions) {
    // 监听loading状态
    watch(
      () => props.chartOptions.loading,
      (value) => {
        if (value) {
          return context
            .getInstance()
            .showLoading("default", normalLoadingConfig);
        }
        context.getInstance().hideLoading();
      }
    );
  }
}
