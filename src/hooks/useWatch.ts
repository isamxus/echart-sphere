import { watch } from "vue";
import { ChartContextType } from "../models/extendOptionModel";
import { RenderPropOptions } from "../models/propOptionModel";
import { normalLoadingConfig } from "../constants/loadingConfigConst";

export default function useWatch(props: RenderPropOptions, context: ChartContextType) {
  // 监听外部传入数据变化
  watch(
    () => props.dataOptions.data,
    (aata) => {
      context.renderChart();
    }
  );

  // 监听外部传入计量单位类型变化
  watch(
    () => props.dataOptions.measureType,
    () => {
      context.renderChart();
    }
  );
  // 监听name变化
  watch(
    () => props.dataOptions.name,
    () => {
      context.renderChart();
    }
  );
  // 监听loading状态
  watch(
    () => props.chartOptions.loading,
    (value) => {
      if (value) {
        return context.getInstance().showLoading("default", normalLoadingConfig);
      }
      context.getInstance().hideLoading();
    }
  );
}
