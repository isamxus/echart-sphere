import { GridOption } from "echarts/types/dist/shared";
import { gridConfig } from "../constants/gridConfigConst";
import { RenderPropOptions } from "../models/propOptionModel";

export function buildNormalGrid(props: RenderPropOptions) {
  const { styleOptions } = props;
  const getProperties = (key: keyof typeof gridConfig) => {
    return styleOptions?.[key] || gridConfig[key];
  };
  return {
    top: getProperties("gridTop"),
    bottom: getProperties("gridBottom"),
    left: getProperties("gridLeft"),
    right: getProperties("gridRight"),
    containLabel: getProperties("isContainLabel")
  } as GridOption;
}
