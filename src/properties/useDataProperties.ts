import globalConfig from "../constants/globalConfig";
import { RenderPropOptions } from "../models/propOptionModel";

export function handleDataItems(props: RenderPropOptions) {
  const {
    name,
    labelX = globalConfig.xAxisField,
    labelY = globalConfig.yAxisField,
    dataItems = [],
  } = props.dataOptions;

  return dataItems.length
    ? dataItems
    : [
        {
          labelY,
          labelX,
          name,
        },
      ];
}
