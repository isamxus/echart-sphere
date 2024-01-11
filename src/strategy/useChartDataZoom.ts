import { DataZoomComponentOption } from "echarts/types/dist/shared";
import { RenderPropOptions } from "../models/propOptionModel";
import { dataZoomConfig } from "../constants/dataZoomConfigConst";

// 默认的缩放组件配置
export function buildNormalDataZoom(props: RenderPropOptions) {
  const { styleOptions } = props;
  const getProperties = (key: keyof typeof dataZoomConfig) => {
    return styleOptions?.[key] || dataZoomConfig[key];
  };
  return {
    type: getProperties("dataZoomType"),
    xAxisIndex: getProperties("dataZoomXAxisIndex")
  } as DataZoomComponentOption;
}
