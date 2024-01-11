import useBuildChart from "../hooks/useBuildChart";
import { RenderPropOptions } from "./propOptionModel";

// echart扩展函数类型
export interface ChartExtendFn {
  (props: RenderPropOptions, chartContext: ChartContextType): void | echarts.EChartsCoreOption;
}

// echart扩展上下文
export type ChartContextType = ReturnType<typeof useBuildChart>;
