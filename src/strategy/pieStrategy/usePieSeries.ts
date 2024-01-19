import { SeriesOption } from "echarts";
import { getNormalPieOptions } from "../../hooks/useGetOptions";
import { RenderPropOptions } from "../../models/propOptionModel";
import { handleDataItems } from "../../properties/useDataProperties";
import { treeConfig } from "../../constants/globalConfig";

// 默认饼图系列
export function buildNormalPieSeries(props: RenderPropOptions) {
  const { data = [] } = props.dataOptions;
  const dataItems = handleDataItems(props);
  const pieItem = dataItems[0];
  const options = {
    ...getNormalPieOptions(props, pieItem),
    name: pieItem.name,
    data: data.map((item) => {
      return {
        value: item[pieItem.labelY],
        name: item[pieItem.labelX],
      };
    }),
  } as SeriesOption;
  return options;
}

// 饼图带详细信息
export function buildPieWithDetailSeries(props: RenderPropOptions) {
  const { data = [] } = props.dataOptions;
  const dataItems = handleDataItems(props);
  const pieItem = dataItems[0];
  const options = {
    ...getNormalPieOptions(props, pieItem),
    name: pieItem.name,
    width: pieItem.pieWidth || "45%",
    data: data.map((item) => {
      return {
        value: item[pieItem.labelY],
        name: item[pieItem.labelX],
      };
    }),
  } as SeriesOption;
  return options;
}

// 子母图
export function buildParentChildPieSeries(props: RenderPropOptions) {
  const { idKey = "id" } = props.dataOptions.treeConfig || treeConfig;
  const extendOptions = props.extendOptions;
  const treeData = extendOptions.treeData;
  let dataItems = handleDataItems(props);
  const currentChildData = extendOptions.currentChildData;
  dataItems = dataItems.slice(0, 2);
  if (dataItems.length > 1) {
    const parentItem = dataItems[0];
    const childItem = dataItems[1];
    const parentPieOptions = {
      name: parentItem.name,
      ...getNormalPieOptions(props, parentItem),
      width: parentItem.pieWidth || "45%",
      data: treeData.map((item) => {
        return {
          value: item[parentItem.labelY],
          name: item[parentItem.labelX],
          id: item[idKey],
        };
      }),
    };
    const childPieOptions = {
      name: childItem.name,
      ...getNormalPieOptions(props, childItem),
      width: parentItem.pieWidth || "30%",
      left: "50%",
      data: currentChildData.map((item: any) => {
        return {
          value: item[childItem.labelY],
          name: item[childItem.labelX],
          id: item[idKey],
        };
      }),
    };
    return [parentPieOptions, childPieOptions] as SeriesOption;
  }

  return buildNormalPieSeries(props);
}
