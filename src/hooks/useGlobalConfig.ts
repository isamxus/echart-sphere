import { StyleConfigType } from "../models/propOptionModel";
import globalConfig, {
  VueVersionEnum,
  normalLoadingConfig,
  vueConfig,
} from "../constants/globalConfig";

// 设置全局配置
export function setConfig(config: Partial<StyleConfigType>) {
  Object.assign(globalConfig, config);
}

// 设置图表loading配置
export function setLoadingConfig(config: Partial<typeof normalLoadingConfig>) {
  Object.assign(normalLoadingConfig, config);
}

// 设置Vue的版本
export function setVueVersion(version: VueVersionEnum, context?: any) {
  vueConfig.version = version;
  vueConfig.context = context;
}
