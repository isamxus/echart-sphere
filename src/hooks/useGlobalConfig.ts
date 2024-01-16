import { StyleConfigType } from "../models/propOptionModel";
import globalConfig, {
  VueVersionEnum,
  vueConfig,
} from "../constants/globalConfig";

// 设置全局配置
export function setConfig(config: Partial<StyleConfigType>) {
  Object.assign(globalConfig, config);
}

// 设置Vue的版本
export function setVueVersion(version: VueVersionEnum, context?:any) {
  vueConfig.version = version;
  vueConfig.context = context;
}
