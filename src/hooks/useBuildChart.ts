import { RenderPropOptions } from "../models/propOptionModel";
import { deepCopy } from "../utils/dataUtils";
import { chartResizeSet } from "../constants/chartEventConfig";
import { StrategyOptions } from "../models/buildChartModel";
import { handleMeasure } from "./useMeasureType";
import * as echarts from "echarts";
import useFlexible from "./useFlexible";
import {
  getDataZoomStrategy,
  getGridStrategy,
  getLegendStrategy,
  getSeriesStrategy,
  getTooltipStrategy,
  getVisualMapStrategy,
  getXAxisStrategy,
  getYAxisStrategy,
} from "./useGetStrategy";

export default function useBuildChart(props: RenderPropOptions) {
  // echart实例
  let echartInstance: echarts.ECharts;
  // 组装策略配置
  const strategyTypeOptions: StrategyOptions = {};
  const { transOptionFlexible } = useFlexible(props);
  const { chartOptions } = props;

  // 初始化echart
  function initChart(dom: HTMLElement, isRender?: boolean) {
    if (echartInstance) echartInstance.dispose();
    echartInstance = echarts.init(dom);
    chartResizeSet.add(echartInstance);
  }
  function setStrategyType(options?: StrategyOptions) {
    Object.assign(strategyTypeOptions, options);
  }
  // 获取echart实例
  function getInstance() {
    return echartInstance;
  }
  // 获取渲染选项
  function getOption() {
    const {
      xAxisType = strategyTypeOptions.xAxisType,
      yAxisType = strategyTypeOptions.yAxisType,
      tooltipType = strategyTypeOptions.tooltipType,
      gridType = strategyTypeOptions.gridType,
      legendType = strategyTypeOptions.legendType,
      seriesType = strategyTypeOptions.seriesType,
      dataZoomType = strategyTypeOptions.dataZoomType,
      visualMapType = strategyTypeOptions.visualMapType,
    } = chartOptions || {};
    const propsData = deepCopy(props) as RenderPropOptions;
    // 处理计量单位
    handleMeasure(propsData);
    const xAxisStrategy = getXAxisStrategy(xAxisType);
    const yAxisStrategy = getYAxisStrategy(yAxisType);
    const tooltipStrategy = getTooltipStrategy(tooltipType);
    const gridStrategy = getGridStrategy(gridType);
    const legendStrategy = getLegendStrategy(legendType);
    const seriesStrategy = getSeriesStrategy(seriesType);
    const dataZoomStrategy = getDataZoomStrategy(dataZoomType);
    const visualMapStrategy = getVisualMapStrategy(visualMapType);
    // 合并配置
    const finalOption: echarts.EChartsCoreOption = {};
    xAxisStrategy &&
      Object.assign(finalOption, {
        xAxis: xAxisStrategy(propsData),
      });
    yAxisStrategy &&
      Object.assign(finalOption, {
        yAxis: yAxisStrategy(propsData),
      });
    tooltipStrategy &&
      Object.assign(finalOption, {
        tooltip: tooltipStrategy(propsData),
      });
    gridStrategy &&
      Object.assign(finalOption, {
        grid: gridStrategy(propsData),
      });
    legendStrategy &&
      Object.assign(finalOption, {
        legend: legendStrategy(propsData),
      });
    seriesStrategy &&
      Object.assign(finalOption, {
        series: seriesStrategy(propsData),
      });
    dataZoomStrategy &&
      Object.assign(finalOption, {
        dataZoom: dataZoomStrategy(propsData),
      });
    visualMapStrategy &&
      Object.assign(finalOption, {
        visualMap: visualMapStrategy(propsData),
      });
    return finalOption;
  }
  // echart的resize事件
  function chartResize() {
    echartInstance && echartInstance.resize();
  }
  // 设置选项
  function setOption(opitons: echarts.EChartsCoreOption) {
    echartInstance.setOption(opitons);
    chartResize();
  }
  // 最终渲染前处理选项
  function handleOptionBeforeRender(opitons: echarts.EChartsCoreOption) {
    if (chartOptions) {
      const { optionFormatter } = chartOptions || {};
      if (optionFormatter) return optionFormatter(opitons);
    }
    return opitons;
  }
  // 渲染处理
  function handleRender(opitons: echarts.EChartsCoreOption) {
    const options = handleOptionBeforeRender(opitons);
    // 应用自适应工具方法
    transOptionFlexible(options);
    setOption(options);
  }
  // 渲染流程
  function renderChart() {
    handleRender(getOption());
  }
  // 销毁图表
  function chartDispose() {
    echartInstance && echartInstance.dispose();
    chartResizeSet.delete(echartInstance);
  }
  return {
    getInstance,
    setStrategyType,
    handleRender,
    initChart,
    getOption,
    renderChart,
    chartDispose,
    chartResize,
  };
}
