import { TooltipOption } from "echarts/types/dist/shared";
import { RenderPropOptions } from "../models/propOptionModel";
import globalConfig from "../constants/globalConfig";
// 默认tooltip
export function buildNormalTooltip(props: RenderPropOptions) {
  const { styleOptions } = props;
  const getProperties = (key: GlobalConfigkeys) => {
    return styleOptions?.[key] || globalConfig[key];
  };
  const option = {
    trigger: getProperties("tooltipTriggerType"),
    axisPointer: {
      type: getProperties("tooltipAxisPointer"),
      shadowStyle: {
        color: getProperties("tooltipShadowColor"),
      },
    },
    show: getProperties("tooltipShow"),
    confine: getProperties("isTooltipConfine"),
    backgroundColor: getProperties("tooltipBgColor"),
    borderColor: getProperties("tooltipBorderColor"),
    padding: getProperties("tooltipPadding"),
    textStyle: {
      color: getProperties("tooltipTextColor"),
      fontSize: getProperties("tooltipTextSize"),
    },
    formatter: (params: any) => {
      return `<div style="display: flex; flex-direction: column;">
        <div style="padding: 0 0 3px 0">${params[0].name}</div>
        ${params
          .filter((param: any) => param.value !== "--")
          .map((param: any) => {
            return `<div style="display:flex;align-items:center;">${param.marker}${param.seriesName}：
              <div style="flex: 1;text-align: right">${param.value}</div>
            </div>`;
          })
          .join("")}
      </div>`;
    },
  } as TooltipOption;
  return option;
}
