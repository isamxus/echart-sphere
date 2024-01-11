import { barConfig } from "../constants/barConfigConst";
import { chartSelfAdaptionConfig } from "../constants/flexibleConst";
import { gridConfig } from "../constants/gridConfigConst";
import { legendConfig } from "../constants/legendConfigConst";
import { lineConfig } from "../constants/lineConfigConst";
import { normalLoadingConfig } from "../constants/loadingConfigConst";
import { seriesConfig } from "../constants/seriesConfigConst";
import { tooltipConfig } from "../constants/tooltipConfigConst";
import { xAxisConfig } from "../constants/xAxisConfigConst";
import { yAxisConfig } from "../constants/yAxisConfigConst";
import { dataZoomConfig } from "../constants/dataZoomConfigConst";
import { styleConfigType } from "../models/propOptionModel";

const configItems = [
  barConfig,
  gridConfig,
  legendConfig,
  seriesConfig,
  tooltipConfig,
  xAxisConfig,
  yAxisConfig,
  lineConfig,
  dataZoomConfig
];

// 设置全局样式配置
export function setConfig(config: Partial<styleConfigType>) {
  const configKeys = Object.keys(config);
  configKeys.forEach((key) => {
    const configItem = configItems.find((item) => item.hasOwnProperty(key)) as any;
    if (configItem) {
      configItem[key] = config[key];
    }
  });
}

// 设置Loading样式配置
export function setLoadingConfig(config: typeof normalLoadingConfig) {
  Object.assign(normalLoadingConfig, config);
}

// 设置是否自适应
export function setFlexibleConfig(config: typeof chartSelfAdaptionConfig) {
  Object.assign(chartSelfAdaptionConfig, config);
}
