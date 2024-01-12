import { DataZoomComponentOption } from "echarts/types/dist/shared";
import { GlobalConfigkeys, RenderPropOptions } from "../models/propOptionModel";
import globalConfig from "../constants/globalConfig";

// 默认的缩放组件配置
export function buildNormalDataZoom(props: RenderPropOptions) {
  const { styleOptions } = props;
  const getProperties = (key: GlobalConfigkeys) => {
    return styleOptions?.[key] || globalConfig[key];
  };
  return {
    type: getProperties("dataZoomType"),
    xAxisIndex: getProperties("dataZoomXAxisIndex"),
  } as DataZoomComponentOption;
}
