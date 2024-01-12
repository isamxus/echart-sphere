import { StyleConfigType } from "../models/propOptionModel";
import globalConfig from "../constants/globalConfig";

// 设置全局配置
export function setConfig(config: Partial<StyleConfigType>) {
  Object.assign(globalConfig, config);
}
