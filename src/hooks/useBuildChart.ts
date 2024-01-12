import { RenderPropOptions } from "../models/propOptionModel";
import { deepCopy } from "../utils/objectUtils";
import { chartResizeSet } from "../constants/chartEventConst";
import { DataFormatType } from "../constants/dataFormatConst";
import { StrategyOptions } from "../models/buildChartModel";
import globalConfig from "../constants/globalConfig";
import useMeasureType from "./useMeasureType";
import * as echarts from "echarts";
import useFlexible from "./useFlexible";
import useGetStrategy from "./useGetStrategy";
// 处理计量单位
function handleMeasure(props: RenderPropOptions) {
  const {
    data = [],
    dataItems = [],
    labelY = globalConfig.yAxisField,
    measureType = DataFormatType.BILLION,
    isNegative = false,
    isFormatter = false,
    formatter,
  } = props.dataOptions;
  if (!isFormatter) return;
  const { getIndexConvertValueByUnitType } = useMeasureType();
  const tranFieldsMap = new Map<
    string,
    {
      measureType: string;
      isNegative: boolean;
      formatter: ((value: any) => any) | undefined;
    }
  >();

  if (dataItems.length) {
    dataItems.forEach((item) => {
      item.labelY &&
        tranFieldsMap.set(item.labelY, {
          measureType: item.measureType || measureType,
          isNegative: item.isNegative || isNegative,
          formatter: item.formatter || formatter,
        });
    });
    data.forEach((item) => {
      [...tranFieldsMap.entries()].forEach((fieldItem) => {
        const field = fieldItem[0];
        const formatItem = fieldItem[1];
        if (formatItem.formatter)
          return (item[field] = formatItem.formatter(item[field]));
        let value = Number.parseFloat(item[field]);
        if (formatItem.isNegative) value = -value;
        item[field] = getIndexConvertValueByUnitType(
          value,
          formatItem.measureType
        );
      });
    });
    return;
  }
  data.forEach((item) => {
    let value = Number.parseFloat(item[labelY]);
    if (isNegative) value = -value;
    item[labelY] = getIndexConvertValueByUnitType(value, measureType);
  });
}

export default function useBuildChart(props: RenderPropOptions) {
  // echart实例
  let echartInstance: echarts.ECharts;
  // 组装策略配置
  const strategyTypeOptions: StrategyOptions = {};
  const strategyMethods = useGetStrategy();
  const { transOptionFlexible } = useFlexible(props);
  const { chartOptions } = props;

  // 初始化echart
  function initChart(dom: HTMLElement, isRender: boolean = true) {
    if (echartInstance) return;
    echartInstance = echarts.init(dom);
    chartResizeSet.add(echartInstance);
    isRender && renderChart();
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
    } = chartOptions || {};
    const propsData = deepCopy(props) as RenderPropOptions;
    // 处理计量单位
    handleMeasure(propsData);
    const xAxisStrategy = strategyMethods.getXAxisStrategy(xAxisType);
    const yAxisStrategy = strategyMethods.getYAxisStrategy(yAxisType);
    const tooltipStrategy = strategyMethods.getTooltipStrategy(tooltipType);
    const gridStrategy = strategyMethods.getGridStrategy(gridType);
    const legendStrategy = strategyMethods.getLegendStrategy(legendType);
    const seriesStrategy = strategyMethods.getSeriesStrategy(seriesType);
    const dataZoomStrategy = strategyMethods.getDataZoomStrategy(dataZoomType);
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
    return finalOption;
  }
  // echart的resize事件
  function chartResize() {
    echartInstance && echartInstance.resize();
  }
  // 设置选项
  function setOption(opitons: echarts.EChartsCoreOption) {
    echartInstance.setOption(opitons);
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
    renderChart,
    chartDispose,
    chartResize,
  };
}
