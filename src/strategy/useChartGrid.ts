import { GridOption } from "echarts/types/dist/shared";
import { GlobalConfigkeys, RenderPropOptions } from "../models/propOptionModel";
import globalConfig from "../constants/globalConfig";
export function buildNormalGrid(props: RenderPropOptions) {
  const { styleOptions } = props;
  const getProperties = (key: GlobalConfigkeys) => {
    return styleOptions?.[key] || globalConfig[key];
  };
  return {
    top: getProperties("gridTop"),
    bottom: getProperties("gridBottom"),
    left: getProperties("gridLeft"),
    right: getProperties("gridRight"),
    containLabel: getProperties("isContainLabel"),
  } as GridOption;
}
