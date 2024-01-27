- [Introduction to Echart Sphere](#introduction-to-echart-sphere)
  - [Features](#features)
  - [Installation](#installation)
  - [Getting Started](#getting-started)
  - [Configuration Priority Explanation](#configuration-priority-explanation)
  - [Global Configuration](#global-configuration)
  - [Props Description](#props-description)
  - [Extending Chart Types](#extending-chart-types)
- [Echart Sphere Examples](#echart-sphere-examples)
  - [Bar Chart Examples](#bar-chart-examples)
  - [Line Chart Examples](#line-chart-examples)
  - [Multi-Series Types](#multi-series-types)
  - [Trend Charts](#trend-charts)
  - [Pie Charts](#pie-charts)
  - [Scatter Plots](#scatter-plots)
  - [Radar Charts](#radar-charts)
  - [Maps](#maps)
  - [Candlestick Chart](#candlestick-chart)
  - [Dashboard](#dashboard)

# Introduction to Echart Sphere

[![codecov](https://codecov.io/gh/isamxus/echart-sphere/graph/badge.svg?token=VA785T0R54)](https://codecov.io/gh/isamxus/echart-sphere)

- echart-sphere is a highly customizable and flexible chart component library that now supports Vue 2, Vue 3, and ECharts. It allows developers to quickly create and customize a variety of charts by passing `dataOptions`, `chartOptions`, and `styleOptions`. This library is designed to provide a simple way to integrate and extend ECharts, making it effortless to create interactive and responsive charts.

## Features

- **ECharts Integration**: Leverage the powerful chart rendering capabilities of ECharts.
- **Full Vue Support**: Compatible with both Vue 2 and Vue 3, suitable for a variety of project requirements.
- **Flexible Configuration**: Offers a rich set of configuration options through `dataOptions`, `chartOptions`, and `styleOptions`.
- **Diverse Types**: Supports multiple preset chart types, such as bar, line, and pie charts.
- **Extensibility**: Users can extend new chart types as needed or render custom components through `componentType`.
- **Global Configuration**: Supports global configuration options, allowing for the setting of default chart styles and behaviors.
- **Responsive Design**: Components can adapt responsively to different screen sizes and resolutions.

## Installation

`npm install echart-sphere`
or
`yarn add echart-sphere`

## Getting Started

For `Vue 3.x` projects, in the entry file:

```
import { createApp } from "vue";
import App from "./App.vue"; // Assume your Vue root component is here
import EchartSphere from "echart-sphere";
const app = createApp(App);
app.use(EchartSphere);
app.mount("#app");

```

Using it in a component:

```
<template>
  <div class="echart-sphere-wrapper">
    <normal-chart v-bind="options" />
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
const getValue = () => Math.floor(Math.random() * 10000);
const options = ref({
  dataOptions: {
    // Write your configuration here
  }
});

</script>
```

For `Vue 2.x` projects, in the entry file:

```
// main.ts
import Vue from "vue";
import App from "./App.vue"; // import the root component
import EchartSphere from "echart-sphere";
Vue.use(EchartSphere);
new Vue({
  render: (h) => h(App),
}).$mount("#app");
```

Using it in a component:

```
<template>
  <div
    class="echart-sphere-wrapper"
    style="width: 600px; height: 400px; background-color: aliceblue"
  >
    <normal-chart :dataOptions="dataOptions"></normal-chart>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dataOptions: {
        // Write your configuration here
      },
    };
  },
};
</script>

```

## Configuration Priority Explanation

When using the component, if you pass in properties through `styleOptions` that coincide with the global configuration, the component will give priority to the `styleOptions` property values you provided. This allows for more granular control over the component's behavior, enabling you to override global settings to meet specific needs.

For instance, if a default `lineColor` is configured globally for the component, but you pass a different `lineColor` value through `styleOptions`, then the component will render the line color using the value you have passed.

Consider this priority rule when configuring the component to ensure that your settings are effective as expected.

## Global Configuration

echart-sphere offers several methods for setting global configurations, which will be applied as default values across all chart instances. The following are the available methods for global configuration:

### `setConfig`

The `setConfig` method allows you to set common chart configuration items, such as color schemes, font sizes, tooltips, and custom displays for the chart's loading state. You can set properties like loading text, color, font size, and specify the default width for the design draft, base font size, as well as whether to enable the adaptive feature.

### `setLoadingConfig`

The `setLoadingConfig` method is used to set the style of the chart's loading animation, including font size and other related properties.

```
import { setConfig } from 'echart-sphere';

setConfig({
    barWidth: 5,
    barColor: 'rgba(132, 212, 232, 1)'
});
```

### Configuration Items

#### Bar Chart Configuration

##### `barWidth`

- Type: `number`
- Default: `20`
- Description: Sets the width of the bar.

##### `barColor`

- Type: `string`
- Default: `'#737373'` // Grey
- Description: Sets the color of the bar.

##### `barBorderType`

- Type: `string`
- Default: `'solid'`
- Description: Sets the style of the bar's border.

##### `barBorderColor`

- Type: `string`
- Default: `'#D1D1D1'` // Light grey
- Description: Sets the color of the bar's border.

##### `barBorderWidth`

- Type: `number`
- Default: `1`
- Description: Sets the width of the bar's border.

##### `barGap`

- Type: `string`
- Default: `'20%'`
- Description: Sets the gap between bars within the same category.

##### `barSymbol`

- Type: `string`
- Default: `'rect'`
- Description: Sets the shape type for PictorialBar. The default is `'rect'`, which means a rectangle is used.

##### `barSymbolRepeat`

- Type: `string`
- Default: `'fixed'`
- Description: Sets whether the shape repeats along the length of the bar. `'fixed'` means no repeat, and the shape will be stretched.

##### `barSymbolMargin`

- Type: `number`
- Default: `2`
- Description: Sets the margin between shapes when they are repeated.

##### `barSymbolOffset`

- Type: `Array<number>`
- Default: `[0, 0]`
- Description: Sets the offset position of the shape within the bar. The two elements of the array correspond to the horizontal and vertical offsets, respectively.

##### `barSymbolSize`

- Type: `Array<number>`
- Default: `[20, 6]`
- Description: Sets the size of the shape. The two elements of the array correspond to the width and height, respectively.

##### `barSymbolPosition`

- Type: `string`
- Default: `'start'`
- Description: Sets the position of the shape relative to the bar. `'start'` means the shape is positioned at the beginning of the bar.

##### `barSymbolClip`

- Type: `boolean`
- Default: `true`
- Description: Determines whether to clip the part of the graphic that exceeds the bar area.

##### `barWidth`

- Type: `number`
- Default: `20`
- Description: Sets the width of the bar.

##### `barColor`

- Type: `string`
- Default: `'rgba(132, 212, 232, 1)'`
- Description: Sets the color of the bar.

##### `barBorderType`

- Type: `string`
- Default: `'#fff'`
- Description: Sets the color of the bar's border.

##### `barBorderColor`

- Type: `string`
- Default: `'solid'`
- Description: Sets the style of the bar's border.

##### `barBorderWidth`

- Type: `number`
- Default: `0`
- Description: Sets the width of the bar's border.

##### `barGap`

- Type: `string`
- Default: `'30%'`
- Description: Sets the gap between bars within the same category.

##### `barSymbol`

- Type: `string`
- Default: `'rect'`
- Description: Sets the shape type for PictorialBar. The default is `'rect'`, which means a rectangle is used.

##### `barSymbolRepeat`

- Type: `string`
- Default: `'fixed'`
- Description: Sets whether the shape repeats along the length of the bar. `'fixed'` means no repeat, and the shape will be stretched.

##### `barSymbolMargin`

- Type: `number`
- Default: `2`
- Description: Sets the margin between shapes when they are repeated.

##### `barSymbolOffset`

- Type: `Array<number>`
- Default: `[0, 0]`
- Description: Sets the offset position of the shape within the bar. The two elements of the array correspond to the horizontal and vertical offsets, respectively.

##### `barSymbolSize`

- Type: `Array<number>`
- Default: `[6, 2]`
- Description: Sets the size of the shape. The two elements of the array correspond to the width and height, respectively.

##### `barSymbolPosition`

- Type: `string`
- Default: `'start'`
- Description: Sets the position of the shape relative to the bar. `'start'` means the shape is positioned at the beginning of the bar.

##### `barSymbolClip`

- Type: `boolean`
- Default: `true`
- Description: Determines whether to clip the part of the graphic that exceeds the bar area.

#### Line Chart Configuration

##### `lineColor`

- Type: `string`
- Default: `"#737373"` // Grey
- Description: Sets the color of the line.

##### `lineSmooth`

- Type: `boolean`
- Default: `false`
- Description: Determines whether the line is displayed as smooth or straight. `true` for a smooth curve, `false` for straight line connections.

##### `lineType`

- Type: `string`
- Default: `'solid'`
- Description: Sets the style of the line, with options including `'solid'` (solid line), `'dashed'` (dashed line), or `'dotted'` (dotted line).

##### `showSymbol`

- Type: `boolean`
- Default: `false`
- Description: Determines whether to display the data points on the line chart.

##### `lineColor`

- Type: `string`
- Default: `"rgba(45, 174, 194, 1)"`
- Description: Sets the color of the line.

##### `lineSmooth`

- Type: `boolean`
- Default: `false`
- Description: Determines whether the line is displayed as smooth or straight. `true` for a smooth curve, `false` for straight line connections.

##### `lineType`

- Type: `string`
- Default: `'solid'`
- Description: Sets the type of the line, with options including `'solid'`, `'dashed'`, or `'dotted'`.

##### `showSymbol`

- Type: `boolean`
- Default: `false`
- Description: Determines whether to display the data points on the line chart.

#### Map Configuration

##### `mapZoom`

- Type: `number`
- Default: `1`
- Description: Sets the zoom level of the map.

##### `mapColor`

- Type: `string`
- Default: `"#c8def1"`
- Description: Sets the default color of the map.

##### `mapLabelShow`

- Type: `boolean`
- Default: `false`
- Description: Determines whether to display labels on the map.

##### `mapLabelSize`

- Type: `number`
- Default: `10`
- Description: Sets the font size of the map labels.

##### `mapColorHL`

- Type: `string`
- Default: `"#337ab7"`
- Description: Sets the color of the highlighted areas on the map.

##### `mapLabelColorHL`

- Type: `string`
- Default: `"#fff"`
- Description: Sets the color of the labels for the highlighted areas on the map.

##### `mapSelectedColor`

- Type: `string`
- Default: `"#337ab7"`
- Description: Sets the color of the selected regions on the map.

##### `mapSelectedLabelColor`

- Type: `string`
- Default: `"#fff"`
- Description: Sets the color of the labels for the selected regions on the map.

#### Legend Configuration

##### `legendWidth`

- Type: `number`
- Default: `10`
- Description: Sets the width of the legend.

##### `legendHeight`

- Type: `number`
- Default: `4`
- Description: Sets the height of the legend.

##### `legendBottom`

- Type: `number`
- Default: `0`
- Description: Sets the distance of the legend from the bottom.

##### `legendSize`

- Type: `number`
- Default: `12`
- Description: Sets the font size of the legend.

##### `legendTop`

- Type: `string`
- Default: `"auto"`
- Description: Sets the distance of the legend from the top.

##### `legendOrient`

- Type: `string`
- Default: `"horizontal"`
- Description: Sets the orientation of the legend.

##### `legendType`

- Type: `string`
- Default: `"plain"`
- Description: Sets the type of the legend.

##### `legendLeft`

- Type: `string`
- Default: `"auto"`
- Description: Sets the distance of the legend from the left side.

##### `legendRight`

- Type: `string`
- Default: `"auto"`
- Description: Sets the distance of the legend from the right side.

#### Legend Rich Text Configuration

##### `legendRichSize`

- Type: `number`
- Default: `14`
- Description: Sets the font size of the legend text.

##### `legendRichWeight`

- Type: `number`
- Default: `500`
- Description: Sets the font weight of the legend text.

##### `legendRichWidth`

- Type: `number`
- Default: `70`
- Description: Sets the width of the legend item.

##### `legendRichAlign`

- Type: `string`
- Default: `"right"`
- Description: Sets the text alignment of the legend text.

##### `legendRichColor`

- Type: `string`
- Default: `"rgba(0, 0, 0, 0.85)"`
- Description: Sets the color of the legend text.

##### `legendRichPadding`

- Type: `Array<number>`
- Default: `[0, 0, 0, 5]`
- Description: Sets the padding inside the legend item. The array format represents the padding on the top, right, bottom, and left sides.

##### `legendRichFamily`

- Type: `string`
- Default: `"Source Han Sans CN-Medium"`
- Description: Sets the font family of the legend text.

#### Grid Configuration

##### `gridTop`

- Type: `number`
- Default: `22`
- Description: Sets the margin on the top of the chart.

##### `gridLeft`

- Type: `number`
- Default: `3`
- Description: Sets the margin on the left side of the chart.

##### `gridRight`

- Type: `number`
- Default: `5`
- Description: Sets the margin on the right side of the chart.

##### `gridBottom`

- Type: `number`
- Default: `30`
- Description: Sets the margin on the bottom of the chart.

##### `isContainLabel`

- Type: `boolean`
- Default: `true`
- Description: Determines whether the grid area includes the labels of the axes.

#### Series Configuration

##### `yAxisField`

- Type: `string`
- Default: `"value"`
- Description: Sets the field for the series data on the Y-axis.

##### `yAxisIndex`

- Type: `number`
- Default: `0`
- Description: Specifies which Y-axis to use, with `0` indicating the first Y-axis.

#### DataZoom Configuration

##### `dataZoomType`

- Type: `string`
- Default: `'inside'`
- Description: Sets the type of data zoom component. `'inside'` indicates an embedded data zoom component that allows zooming via mouse wheel or touchpad.

##### `dataZoomXAxisIndex`

- Type: `number`
- Default: `0`
- Description: Specifies which x-axis is associated with the data zoom component, by default it is associated with the first x-axis.

#### DataZoom Configuration

##### `dataZoomType`

- Type: `string`
- Default: `'inside'`
- Description: Sets the type of data zoom component. `'inside'` refers to an internal data zoom component that allows zooming via mouse wheel or touchpad.

##### `dataZoomXAxisIndex`

- Type: `number`
- Default: `0`
- Description: Specifies which x-axis is associated with the data zoom component, by default, it is associated with the first x-axis.

#### Tooltip Configuration

##### `tooltipShow`

- Type: `boolean`
- Default: `true`
- Description: Determines whether to display the tooltip.

##### `isTooltipConfine`

- Type: `boolean`
- Default: `true`
- Description: Determines whether the tooltip is confined within the chart area.

##### `tooltipBgColor`

- Type: `string`
- Default: `"#737373"` // Grey
- Description: Sets the background color of the tooltip.

##### `tooltipTextColor`

- Type: `string`
- Default: `"#fff"`
- Description: Sets the color of the tooltip text.

##### `tooltipTextSize`

- Type: `number`
- Default: `10`
- Description: Sets the font size of the tooltip text.

##### `tooltipBorderColor`

- Type: `string`
- Default: `"#D1D1D1"` // Light grey
- Description: Sets the border color of the tooltip.

##### `tooltipPadding`

- Type: `number`
- Default: `5`
- Description: Sets the padding inside the tooltip.

##### `tooltipTriggerType`

- Type: `string`
- Default: `"axis"`
- Description: Sets the trigger type for the tooltip. `"axis"` means that the tooltip is triggered by the coordinate axis.

##### `tooltipAxisPointer`

- Type: `string`
- Default: `"shadow"`
- Description: Sets the type of axis pointer for the tooltip. `"shadow"` indicates a shadow indicator.

##### `tooltipShadowColor`

- Type: `string`
- Default: `"rgba(0, 0, 0, 0.2)"` // Black shadow with lower opacity
- Description: Sets the color of the shadow indicator for the tooltip.

##### `tooltipFormatter`

- Type: `Function`
- Default: `null`
- Description: Custom formatter function for the tooltip.

#### X-Axis Configuration

##### `xAxisField`

- Type: `string`
- Default: `"label"`
- Description: Sets the field for the X-axis values.

##### `xAxisLabelSize`

- Type: `number`
- Default: `8`
- Description: Sets the font size of the X-axis labels.

##### `xAxisTickShow`

- Type: `boolean`
- Default: `false`
- Description: Determines whether to display the ticks on the X-axis.

#### Y-Axis Configuration

##### `yAxisLabelSize`

- Type: `number`
- Default: `10`
- Description: Sets the font size of the Y-axis labels.

#### Loading Configuration

##### `loadingText`

- Type: `string`
- Default: `"Loading chart"`
- Description: Sets the text displayed during loading.

##### `loadingColor`

- Type: `string`
- Default: `"#009C84"`
- Description: Sets the color of the loading icon.

##### `loadingTextColor`

- Type: `string`
- Default: `"#009C84"`
- Description: Sets the color of the loading text.

##### `loadingMaskColor`

- Type: `string`
- Default: `"rgba(255, 255, 255, 0.8)"`
- Description: Sets the color of the mask layer during loading.

##### `loadingZlevel`

- Type: `number`
- Default: `0`
- Description: Sets the Z-axis level of the loading layer.

##### `loadingFontSize`

- Type: `number`
- Default: `12`
- Description: Sets the font size of the loading text.

##### `loadingShowSpinner`

- Type: `boolean`
- Default: `true`
- Description: Determines whether to show the loading spinner.

##### `loadingSpinnerRadius`

- Type: `number`
- Default: `10`
- Description: Sets the radius size of the loading spinner.

##### `loadingLineWidth`

- Type: `number`
- Default: `2`
- Description: Sets the width of the loading spinner's line.

##### `loadingFontWeight`

- Type: `string`
- Default: `"normal"`
- Description: Sets the font weight of the loading text.

##### `loadingFontStyle`

- Type: `string`
- Default: `"normal"`
- Description: Sets the font style of the loading text.

##### `loadingFontFamily`

- Type: `string`
- Default: `"sans-serif"`
- Description: Sets the font family of the loading text.

#### Responsive Configuration

##### `designWidth`

- Type: `number`
- Default: `375`
- Description: The default width of the design draft, used as the reference width for responsive calculations.

##### `baseSize`

- Type: `number`
- Default: `14`
- Description: The base font size for the responsive layout.

##### `flexible`

- Type: `boolean`
- Default: `false`
- Description: Whether to enable responsive layout. When set to `true`, the chart size will automatically scale according to the screen width.

#### Highlight Configuration

##### `colorHl`

- Type: `string`
- Default: `"#737373"` // Grey
- Description: Sets the color when highlighted.

##### `borderColorHl`

- Type: `string`
- Default: `"#D1D1D1"` // Light grey
- Description: Sets the border color when highlighted.

##### `borderWidthHl`

- Type: `number`
- Default: `1`
- Description: Sets the border width when highlighted.

##### `borderTypeHl`

- Type: `string`
- Default: `"solid"`
- Description: Sets the border type when highlighted.

##### `borderRadiusHl`

- Type: `number`
- Default: `2`
- Description: Sets the border radius size when highlighted.

##### `shadowBlurHl`

- Type: `number`
- Default: `5`
- Description: Sets the shadow blur size when highlighted.

##### `shadowColorHl`

- Type: `string`
- Default: `"rgba(0, 0, 0, 0.2)"` // Black shadow with lower opacity
- Description: Sets the shadow color when highlighted.

##### `shadowOffsetXHl`

- Type: `number`
- Default: `0`
- Description: Sets the shadow offset on the X-axis when highlighted.

##### `shadowOffsetYHl`

- Type: `number`
- Default: `2`
- Description: Sets the shadow offset on the Y-axis when highlighted.

##### `opacityHl`

- Type: `number`
- Default: `0.9`
- Description: Sets the opacity when highlighted.

## Props Description

### dataOptions

#### `name`

- Type: `string`
- Description: The name of the data item.

#### `labelX`

- Type: `string`
- Description: Specifies the field to be used as the X-axis value in the data.

#### `labelY`

- Type: `string`
- Description: Specifies the field to be used as the Y-axis value in the data.

#### `measureType`

- Type: `DataFormatType`
- Possible values: `"billion"`, `"tenthousand"`, `"number"`, `"percent"`, `"string"`
- Description: The type of measurement unit, used for formatting the value of the data item.

#### `formatter`

- Type: `(value: any) => any`
- Description: A custom formatting function for the value of the data item.

#### `isNegative`

- Type: `boolean`
- Description: Indicates whether the value of the data item is negative.

#### `itemType`

- Type: `string`
- Possible values: `"line"`, `"bar"`, `"pictorialBar"`
- Description: The type of series, specifying the chart display type for the data item.

#### `dataItems`

- Type: `Array<DataItemWithStyleOptions>`
- Description: An array of data items with styles. Allows you to set styles and chart behaviors individually for each data item, such as color, border width, stacking, overlapping, etc.

##### Data Item Style and Behavior Configuration

Each object in the `dataItems` array can contain the following properties:

- All properties of `DataItemOptions`, for example:

  - `name`: The name of the data item.
  - `labelX`: Specifies the field to be used as the X-axis value in the data.
  - `labelY`: Specifies the field to be used as the Y-axis value in the data.
  - `measureType`: The type of measurement unit, used for formatting the value of the data item.
  - `formatter`: A custom formatting function for the value of the data item.
  - `isNegative`: Indicates whether the value of the data item is negative.
  - `itemType`: The type of series, specifying the chart display type for the data item.
  - `stack`: If set, data will be displayed in stacks. Items with the same `stack` value will be stacked together.
  - `overlap`: If set, allows data series to be displayed overlapping.
  - `split`: Defines a split point in the chart, which can be used to create a separation in the chart to identify different areas or datasets.
  - `secondYAxis`: Configures or enables a second Y-axis. If `true`, the default second Y-axis configuration will be used. If a `SecondYAxisType` object is provided, the second Y-axis configuration can be customized.
  - All configurable style properties, named the same as global configuration properties

#### `xAxisData`

- Type: `Array<any>`
- Description: If `labelX` is not specified, this array will be used as the data for the X-axis.

#### `data`

- Type: `Array<any>`
- Description: The source data array for the chart.

#### `isFormatter`

- Type: `boolean`
- Description: Whether to enable formatting for the value of the data item.

#### `mapConfig`

- Type: `object`
- Description: Options for configuring the map.

##### `isBuiltIn`

- Type: `boolean`
- Description: Specifies whether to use the built-in map. If `true`, the built-in map data provided by the library will be used. To use the built-in map type, you need to install the `china-map-echarts` library. If this library is not installed and imported in the entry file, a warning will be thrown, and the map will not render.
- To install the `china-map-echarts` library, run the following command:

```
npm install china-map-echarts --save
```

Or, if you use `yarn`:

```
yarn add china-map-echarts
```

After installation, import the library in your project's entry file:

```
import 'china-map-echarts';
```

##### `mapJson`

- Type: `any`
- Description: Custom JSON data for the map. If provided, this data will be used instead of the built-in map.

##### `name`

- Type: `string`
- Description: The name of the map. Usually used for display or referencing the map.

##### `code`

- Type: `string | number`
- Description: The administrative division code of the map. Used to specify the map corresponding to the administrative region code, effective when `isBuiltIn` is true.

### chartOptions

`chartOptions` is an object used to configure the behavior and style of the chart. Here are the available configuration items and their functions:

#### `chartType`

- Type: `string`
- Default: `"normal"`
- Description: Specifies the built-in chart type. This determines the overall presentation and interaction behavior of the chart. The default is `"normal"`.

#### `optionFormatter`

- Type: `(option: echarts.EChartsCoreOption) => echarts.EChartsCoreOption`
- Description: A custom function for further formatting or modifying the configuration options of ECharts.

#### `loading`

- Type: `boolean`
- Description: Controls the loading state of the chart. When set to `true`, a loading animation is displayed.

#### `xAxisType`

- Type: `string`
- Default: `"normal"`
- Description: Specifies the built-in type of the X-axis. The default is `"normal"`, which means using the standard X-axis configuration.

#### `yAxisType`

- Type: `string`
- Default: `"normal"`
- Description: Specifies the built-in type of the Y-axis. The default is `"normal"`, which means using the standard Y-axis configuration.

#### `legendType`

- Type: `string`
- Default: `"normal"`
- Description: Specifies the built-in type of the legend component. The default is `"normal"`, which means using the standard legend configuration.

#### `gridType`

- Type: `string`
- Default: `"normal"`
- Description: Specifies the built-in type of the grid component. The default is `"normal"`, which means using the standard grid configuration.

#### `tooltipType`

- Type: `string`
- Default: `"normal"`
- Description: Specifies the built-in type of the tooltip component. The default is `"normal"`, which means using the standard tooltip configuration.

#### `seriesType`

- Type: `string`
- Default: `"normal"`
- Description: Specifies the built-in type of the series list. The default is `"normal"`, which means using the standard series configuration.

#### `dataZoomType`

- Type: `string`
- Default: `"normal"`
- Description: Specifies the built-in type of the data zoom component. The default is `"normal"`.

### `visualMapType`

- Type: `string`
- Default: `"normal"`
- Description: Specifies the built-in type of the visual map component. The default is `"normal"`, which means using the standard visual map configuration.

#### `componentType`

- Type: `string`
- Default: `"normal"`
- Description: Specifies the built-in type of the direct rendering component. The default is `"normal"`, which means using the standard component configuration.

#### `stack`

- Type: `string`
- Description: If set, data will be displayed in stacks. Items with the same `stack` value will be stacked together.

#### `overlap`

- Type: `string`
- Description: If set, allows data series to be displayed overlapping.

#### `split`

- Type: `ChartSplitPointOptions`
- Description: Defines the split points in the chart, which can be used to create a separation within the chart to identify different areas or datasets.

##### ChartSplitPointOptions

- `splitX`: The X-axis position of the split point.
- `styleBefore`: The graphic style before the split point.
- `styleAfter`: The graphic style after the split point.
- `trend`: The type of trend, such as "pictorial" or "line".
- `trendPart`: The part of the trend affected, "before" or "after".
- `trendStyle`: The style of the trend part.
- `trendOffset`: The offset of the trend.

#### `secondYAxis`

- Type: `SecondYAxisType | boolean`
- Description: Configures or enables a second Y-axis. If `true`, the default second Y-axis configuration will be used. If a `SecondYAxisType` object is provided, the second Y-axis configuration can be customized, with Y-axis configuration properties referring to the global Y-axis configuration properties.

#### `legendRichOptions`

- Type: `LegendRichOptions` or `Array<LegendRichOptions>`
- Description: Used to customize the rich text style of legend items. Different styles can be specified for each item in the legend (such as name, value, percentage).

Each `LegendRichOptions` object can contain the following properties:

##### `field`

- Type: `string`
- Description: Specifies the legend item field for which to customize the style, such as `name`, `value`, or `percent`.

##### `styles`

- Type: `Partial<typeof legendRichConfig>`
- Description: An object containing style properties that will be applied to the specified legend item field. This is an optional property; if provided, it will override the default rich text styles.

#### `isHighlight`

- Type: `boolean`
- Description: Sets whether to enable the highlight feature for data items. When set to `true`, the chart can be highlighted by setting highlight styles.

#### `candlestick`

- Type: `CandlestickOptions`
- Description: Options for configuring the candlestick chart (K-line chart). These options specify the fields in the data that correspond to the data points on the candlestick chart.

Each `CandlestickOptions` object can include the following properties:

##### `open`

- Type: `string`
- Description: Specifies the field in the data that represents the opening price.

##### `close`

- Type: `string`
- Description: Specifies the field in the data that represents the closing price.

##### `lowest`

- Type: `string`
- Description: Specifies the field in the data that represents the lowest price.

##### `highest`

- Type: `string`
- Description: Specifies the field in the data that represents the highest price.

#### `radar`

- Type: `RadarOptions`
- Description: Configuration options for the radar chart. These options define the fields for the maximum and minimum values of the radar chart indicators, allowing you to customize the display of the radar chart according to the data range.

Each `RadarOptions` object can contain the following properties:

##### `max`

- Type: `string`
- Description: Specifies the field in the data that represents the maximum value. The value of this field is used to set the maximum value on each axis of the radar chart, ensuring that all data points are displayed correctly in proportion.

##### `min`

- Type: `string`
- Description: Specifies the field in the data that represents the minimum value. The value of this field is used to set the minimum value on each axis of the radar chart, ensuring that all data points are displayed within the range of the radar chart.

### styleOptions

#### `styleOptions` is an object used to customize the style of the chart. It contains a series of properties that have the same names as the global configuration properties, allowing you to override global style settings at the individual chart level. These properties include, but are not limited to, color schemes, font sizes, margins, etc.

## Extending Chart Types

Echart-sphere provides a set of extension mechanisms that allow developers to customize and extend different types of chart components. Here's how to use these extension points:

### X-Axis Type Extension

Use the `xAxisExtend` method to extend or customize the behavior of the X-axis. You can register a new X-axis type and provide a function to define its behavior.

```
import EchartSphere from "echart-sphere";
EchartSphere.xAxisExtend.extend('customXType', (props) => {
// Customize the behavior of the X-axis
});
```

### Y-Axis Type Extension

Similarly, `yAxisExtend` allows you to extend the behavior of the Y-axis. By providing a type and a function, you can define new behaviors for the Y-axis.

```
import EchartSphere from "echart-sphere";
EchartSphere.yAxisExtend.extend('customXType', (props) => {
// Customize the behavior of the Y-axis
});
```

### Grid Type Extension

Use `gridExtend` to customize the configuration and behavior of the grid. You can define a new type for the grid and its corresponding behavior.

```
import EchartSphere from "echart-sphere";
EchartSphere.gridExtend.extend('customXType', (props) => {
// Customize the grid's configuration and behavior
});
```

### Tooltip Type Extension

`tooltipExtend` allows you to customize the display of tooltips. By registering a new type, you can control the rendering and behavior of tooltips.

```
import EchartSphere from "echart-sphere";
EchartSphere.tooltipExtend.extend('customXType', (props) => {
// Customize the display of tooltips
});
```

### Legend Type Extension

Use `legendExtend` to customize the style and behavior of the legend. You can define a new legend type to change its default display and interaction.

```
import EchartSphere from "echart-sphere";
EchartSphere.legendExtend.extend('customXType', (props) => {
// Customize the style and behavior of the legend
});
```

### Series Type Extension

The `seriesExtend` method allows you to extend the configuration of series. By registering a new series type, you can customize the way series are rendered.

```
import EchartSphere from "echart-sphere";
EchartSphere.seriesExtend.extend('customXType', (props) => {
// Customize the rendering of series
});
```

### Type Hooks

When extending chart types, you can also use `beforeHook` and `afterHook` hook functions to execute custom logic before or after the type's initialization.

#### beforeHook

`beforeHook` allows you to insert custom behavior before the initialization logic of the type. This can be used for setting initial states, preprocessing properties, etc.

#### afterHook

Corresponding to `beforeHook`, `afterHook` allows you to add custom behavior after the type's initialization logic has been executed. This can be used for post-processing, adding additional configurations, etc.

```
import EchartSphere from "echart-sphere";
EchartSphere.seriesExtend.afterHook('customXType', (props) => {
// Customize the rendering method of the series
});
```

#### Note that "customXType" must be an existing type for the afterHook and beforeHook hooks to take effect.

### Chart Type Extension

Finally, `chartExtend` provides a powerful extension point that allows you to define the behavior of the entire chart. You can register a new chart type and provide a callback function to customize the entire chart's rendering logic.

```
import EchartSphere from "echart-sphere";
EchartSphere.chartExtend.extend('customXType', (props) => {
// Customize the entire chart's rendering logic
});
```

With these extension points, you can flexibly add new behaviors and styles to meet specific business needs or create unique chart effects.

# Echart Sphere Examples

Echart-sphere is a highly customizable and flexible chart component library based on Vue 3 and ECharts. Below are examples of how to use echart-sphere to create different types of charts.

## Bar Chart Examples

Bar charts are suitable for comparing different categories. Here are some configuration examples for bar charts:

### Basic Bar Chart

```
<template>
  <div class="chart-container">
    <normal-chart v-bind="options" />
  </div>
</template>
<script lang="ts" setup>
const options = {
  dataOptions: {
    name: "Test",
    labelX: "label",
    labelY: "value",
    data: [
      { label: "Test Bar 1", value: 23324 },
      { label: "Test Bar 2", value: 23123 },
      { label: "Test Bar 3", value: 43431 },
      { label: "Test Bar 4", value: 13421 },
      { label: "Test Bar 5", value: 55232 },
      { label: "Test Bar 6", value: 31234 },
    ],
  }
};
</script>
<style>
.chart-container {
  width: 600px;
  height: 400px;
  background-color: aliceblue;
}
</style>
```

![Basic Bar Chart](https://github.com/isamxus/echart-sphere-assets/blob/a9d5b5d3d17cbc44936fb5c23dee8384d72f590f/assets/bar/%E5%9F%BA%E7%A1%80%E6%9F%B1%E7%8A%B6%E5%9B%BE.png)

### Stacked Bar Chart

You can create a stacked bar chart by setting the `stack` property in `chartOptions` to any string.

```
<template>
  <div class="echart-sphere-wrapper">
    <normal-chart v-bind="options" />
  </div>
</template>
<script lang="ts" setup>
const getValue = () => Math.floor(Math.random() * 10000);
const options = {
  dataOptions: {
    dataItems: [
      { name: "StackChart 1", labelX: "label", labelY: "value", barColor: "#737373" },
      { name: "StackChart 2", labelX: "label", labelY: "value1", barColor: "#D1D1D1" },
      { name: "StackChart 3", labelX: "label", labelY: "value2", barColor: "#A9A9A9" },
    ],
    data: [
      { id: "01", label: "Parent 1", value: getValue(), value1: getValue(), value2: getValue() },
      { id: "02", label: "Parent 2", value: getValue(), value1: getValue(), value2: getValue() },
      { id: "03", label: "Parent 3", value: getValue(), value1: getValue(), value2: getValue() },
      { id: "04", label: "Parent 4", value: getValue(), value1: getValue(), value2: getValue() }
    ],
  },
  chartOptions: {
    stack: "stack"
  }
};
</script>
<style lang="css">
.echart-sphere-wrapper {
  width: 600px;
  height: 400px;
  background-color: aliceblue;
}
</style>
```

![Stacked Bar Chart](https://github.com/isamxus/echart-sphere-assets/blob/43cc453b95769833c7a31dfe820c92db15b3f069/assets/bar/%E5%A0%86%E5%8F%A0%E6%9F%B1%E5%9B%BE.png)

### Overlapping Bar Chart

An overlapping bar chart can be achieved by setting the `overlap` property to `true` in `chartOptions`.

```
<template>
  <div class="echart-sphere-wrapper">
    <normal-chart v-bind="options" />
  </div>
</template>
<script lang="ts" setup>
const getValue = () => Math.floor(Math.random() * 10000);
const options = {
  dataOptions: {
    dataItems: [
      { name: "Overlap Chart 1", labelX: "label", labelY: "value", barColor: "#737373" },
      { name: "Overlap Chart 2", labelX: "label", labelY: "value1", barColor: "#D1D1D1"},
      { name: "Overlap Chart 3", labelX: "label", labelY: "value2", barColor: "#A9A9A9" }
    ],
    data: [
      {
        id: "01",
        label: "Parent 1",
        value: getValue(),
        value1: getValue(),
        value2: getValue(),
      },
      {
        id: "02",
        label: "Parent 2",
        value: getValue(),
        value1: getValue(),
        value2: getValue(),
      },
      {
        id: "03",
        label: "Parent 3",
        value: getValue(),
        value1: getValue(),
        value2: getValue(),
      },
      {
        id: "04",
        label: "Parent 4",
        value: getValue(),
        value1: getValue(),
        value2: getValue(),
      },
    ],
  },
  chartOptions: {
    overlap: true,
  },
};
</script>
<style lang="css">
.echart-sphere-wrapper {
  width: 600px;
  height: 400px;
  background-color: aliceblue;
}
</style>

```

![Overlapping Bar Chart](https://github.com/isamxus/echart-sphere-assets/blob/dfd651820ae3ca5b64e24c0e57a2eee462a387bb/assets/bar/%E9%87%8D%E5%8F%A0%E6%9F%B1%E5%9B%BE.png)

## Line Chart Examples

### Basic Line Chart

You can create a line chart by setting `itemType` to `"line"`.

```
<template>
  <div class="chart-container">
    <normal-chart v-bind="options" />
  </div>
</template>
<script lang="ts" setup>
const options = {
  dataOptions: {
    name: "Test",
    labelX: "label",
    labelY: "value",
    itemType: "line", // This indicates that the series uses a line chart
    data: [
      { label: "Test Bar 1", value: 23324 },
      { label: "Test Bar 2", value: 23123 },
      { label: "Test Bar 3", value: 43431 },
      { label: "Test Bar 4", value: 13421 },
      { label: "Test Bar 5", value: 55232 },
      { label: "Test Bar 6", value: 31234 },
    ],
  },
};
</script>
<style>
.chart-container {
  width: 600px;
  height: 400px;
  background-color: aliceblue;
}
</style>

```

![Basic Line Chart](https://github.com/isamxus/echart-sphere-assets/blob/64d02fa633b6d47785a1a62af5d4feb4a2809253/assets/line/%E5%9F%BA%E7%A1%80%E6%8A%98%E7%BA%BF%E5%9B%BE.png)

## Multi-Series Types

### Bar-Line Mix

By setting the `dataItems` property and specifying the `name`, `labelX`, `labelY`, and `itemType` for each data item, you can create a multi-series chart where each series can be of a different type. For example, the following code creates a mixed chart of bar and line graphs:

```
<template>
  <div class="chart-container">
    <normal-chart v-bind="options" />
  </div>
</template>
<script lang="ts" setup>
const getValue = () => Math.random() * 10000;
const options = {
  dataOptions: {
    dataItems: [
      { name: "Bar Line Mixin 1", labelX: "label", labelY: "value", itemType: "bar" },
      { name: "Bar Line Mixin 2", labelX: "label", labelY: "value1", itemType: "line", lineColor: "#A9A9A9" },
    ],
    data: [
      { label: "01", value: getValue(), value1: getValue() },
      { label: "02", value: getValue(), value1: getValue() },
      { label: "03", value: getValue(), value1: getValue() },
      { label: "04", value: getValue(), value1: getValue() },
      { label: "05", value: getValue(), value1: getValue() },
      { label: "06", value: getValue(), value1: getValue() },
    ],
  },
};
</script>
<style>
.chart-container {
  width: 600px;
  height: 400px;
  background-color: aliceblue;
}
</style>
```

![Bar-Line Mix](https://github.com/isamxus/echart-sphere-assets/blob/c82f8e5e4abddbf3f8f1f4ae5adf294a8df0cea1/assets/multi-series/%E6%9F%B1%E7%BA%BF%E6%B7%B7%E5%90%88.png)

### Bar-Line Mix (Custom Styles)

In this example of a bar-line mixed chart, we customize the chart's style by setting the `barColor` and `lineColor` properties.

```
<template>
  <div class="echart-sphere-wrapper">
    <normal-chart v-bind="options" />
  </div>
</template>
<script lang="ts" setup>
const getValue = () => Math.floor(Math.random() * 10000);
const options = {
  dataOptions: {
    dataItems: [
      { name: "Test 1", labelX: "label", labelY: "value", barColor: "blue" },
      { name: "Test 2", labelX: "label", labelY: "value1" },
      {
        name: "Test 3",
        labelX: "label",
        labelY: "value2",
        itemType: "line",
        lineColor: "orange",
      },
    ],
    data: [
      {
        label: "01",
        value: getValue(),
        value1: getValue(),
        value2: getValue(),
      },
      {
        label: "02",
        value: getValue(),
        value1: getValue(),
        value2: getValue(),
      },
      {
        label: "03",
        value: getValue(),
        value1: getValue(),
        value2: getValue(),
      },
      {
        label: "04",
        value: getValue(),
        value1: getValue(),
        value2: getValue(),
      },
      {
        label: "05",
        value: getValue(),
        value1: getValue(),
        value2: getValue(),
      },
    ],
  },
};
</script>
<style lang="css">
.echart-sphere-wrapper {
  width: 600px;
  height: 400px;
  background-color: aliceblue;
}
</style>

```

![Bar-Line Mix-Custom Styles](https://github.com/isamxus/echart-sphere-assets/blob/61cf3dd6ed50ad6c22667b2037baa2cec681746e/assets/multi-series/%E6%9F%B1%E7%BA%BF%E6%B7%B7%E5%90%88-%E8%87%AA%E5%AE%9A%E4%B9%89%E6%A0%B7%E5%BC%8F.png)

## Trend Charts

### Normal Trend Chart

By setting the `seriesType` to 'trend' and configuring the `split` option in `chartOptions`, we can create a columnar trend chart. In the `split` option, setting `splitX` to 2 means that the X-axis is divided into two parts with the second label as the midpoint, and setting `trend` to "pictorial" indicates that the trend is displayed in a pictorial manner.

```
<template>
  <div class="echart-sphere-wrapper">
    <normal-chart v-bind="options" />
  </div>
</template>
<script lang="ts" setup>
const options = {
  dataOptions: {
    dataItems: [
      { name: "Trend Chart", labelX: "label", labelY: "value", itemType: "bar" },
    ],
    data: [
      { label: "01", value: 23324, value1: Math.floor(Math.random() * 10000) },
      { label: "02", value: 23123, value1: Math.floor(Math.random() * 10000) },
      { label: "03", value: 43431, value1: Math.floor(Math.random() * 10000) },
      { label: "04", value: 13421, value1: Math.floor(Math.random() * 10000) },
      { label: "05", value: 55232, value1: Math.floor(Math.random() * 10000) },
      { label: "06", value: 31234, value1: Math.floor(Math.random() * 10000) },
    ],
  },
  chartOptions: {
    split: {
      splitX: 2,
      trend: "pictorial",
    },
    seriesType: "trend",
  },
};
</script>
<style lang="css">
.echart-sphere-wrapper {
  width: 600px;
  height: 400px;
  background-color: aliceblue;
}
</style>

```

![Normal Trend Chart](https://github.com/isamxus/echart-sphere-assets/blob/cdb0e87b08d1b1d5bfe0ead672cf0fe7bcae5a99/assets/trend/%E5%9F%BA%E7%A1%80%E8%B6%8B%E5%8A%BF%E5%9B%BE.png)

### Multi-Series Trend Chart

By setting the `split` object for the line series, we define the type of the trend chart as `line`.

```
<template>
  <div class="echart-sphere-wrapper">
    <normal-chart v-bind="options" />
  </div>
</template>
<script lang="ts" setup>
const getValue = () => Math.floor(Math.random() * 10000);
const options = {
  dataOptions: {
    dataItems: [
      { name: "Trend Chart 1", labelX: "label", labelY: "value", barColor: "blue" },
      { name: "Trend Chart 2", labelX: "label", labelY: "value1" },
      {
        name: "Trend Chart 3",
        labelX: "label",
        labelY: "value2",
        itemType: "line",
        lineColor: "orange",
        split: {
          trend: "line",
        },
      },
    ],
    data: [
      {
        label: "01",
        value: getValue(),
        value1: getValue(),
        value2: getValue(),
      },
      {
        label: "02",
        value: getValue(),
        value1: getValue(),
        value2: getValue(),
      },
      {
        label: "03",
        value: getValue(),
        value1: getValue(),
        value2: getValue(),
      },
      {
        label: "04",
        value: getValue(),
        value1: getValue(),
        value2: getValue(),
      },
      {
        label: "05",
        value: getValue(),
        value1: getValue(),
        value2: getValue(),
      },
      {
        label: "06",
        value: getValue(),
        value1: getValue(),
        value2: getValue(),
      },
    ],
  },
  chartOptions: {
    seriesType: "trend",
    split: {
      splitX: 2,
      trend: "pictorial",
    },
  },
};
</script>
<style lang="css">
.echart-sphere-wrapper {
  width: 600px;
  height: 400px;
  background-color: aliceblue;
}
</style>

```

![Multi-Series Trend Chart](https://github.com/isamxus/echart-sphere-assets/blob/ee14d6d320110e3cd6aee8e75ef03dff03e564f9/assets/trend/%E5%A4%9A%E7%B3%BB%E5%88%97%E8%B6%8B%E5%8A%BF%E5%9B%BE1.png)

## Pie Charts

### Basic Pie Chart

By setting the `chartType` in `chartOptions` to `pie`, we can create a basic pie chart.

```
<template>
  <div class="echart-sphere-wrapper">
    <normal-chart v-bind="options" />
  </div>
</template>
<script lang="ts" setup>
const options = {
  dataOptions: {
    dataItems: [{ name: "Test", labelX: "label", labelY: "value" }],
    data: [
      { label: "01", value: 23324, value1: Math.floor(Math.random() * 10000) },
      { label: "02", value: 23123, value1: Math.floor(Math.random() * 10000) },
      { label: "03", value: 43431, value1: Math.floor(Math.random() * 10000) },
      { label: "04", value: 13421, value1: Math.floor(Math.random() * 10000) },
      { label: "05", value: 55232, value1: Math.floor(Math.random() * 10000) },
      { label: "06", value: 31234, value1: Math.floor(Math.random() * 10000) },
    ],
  },
  chartOptions: {
    chartType: "pie", // Pie chart type
  },
};
</script>
<style lang="css">
.echart-sphere-wrapper {
  width: 600px;
  height: 400px;
  background-color: aliceblue;
}
</style>

```

![Basic Pie Chart](https://github.com/isamxus/echart-sphere-assets/blob/bd5f27b8cee0dfc80701cd0470c847f24b7dca00/assets/pie/%E5%9F%BA%E7%A1%80%E9%A5%BC%E5%9B%BE.png)

### Pie Chart with Detailed Legends

By setting the `chartType` in `chartOptions` to `detail-ple`, we can create a pie chart with detailed legends.

```
<template>
  <div class="echart-sphere-wrapper">
    <normal-chart v-bind="options" />
  </div>
</template>
<script lang="ts" setup>
const getValue = () => Math.floor(Math.random() * 10000);
const options = {
  dataOptions: {
    dataItems: [{ name: "Test 1", labelX: "label", labelY: "value" }],
    data: [
      {
        label: "01",
        value: getValue(),
        value1: getValue(),
        value2: getValue(),
      },
      {
        label: "02",
        value: getValue(),
        value1: getValue(),
        value2: getValue(),
      },
      {
        label: "03",
        value: getValue(),
        value1: getValue(),
        value2: getValue(),
      },
      {
        label: "04",
        value: getValue(),
        value1: getValue(),
        value2: getValue(),
      },
      {
        label: "05",
        value: getValue(),
        value1: getValue(),
        value2: getValue(),
      },
      {
        label: "06",
        value: getValue(),
        value1: getValue(),
        value2: getValue(),
      },
    ],
  },
  chartOptions: {
    chartType: "detail-ple",
  },
};
</script>
<style lang="css">
.echart-sphere-wrapper {
  width: 600px;
  height: 400px;
  background-color: aliceblue;
}
</style>

```

![Pie Chart with Detailed Legends](https://github.com/isamxus/echart-sphere-assets/blob/568174c7640f6649c9533745ffe28a570698fc1f/assets/pie/%E5%B8%A6%E5%85%B7%E4%BD%93%E4%BF%A1%E6%81%AF%E5%9B%BE%E4%BE%8B%E7%9A%84%E9%A5%BC%E5%9B%BE.png)

### Nested Pie Chart

By setting the `componentType` in `chartOptions` to `parent-child-pie`, we can create a nested pie chart.

```
<template>
  <div class="echart-sphere-wrapper">
    <normal-chart v-bind="options" />
  </div>
</template>
<script lang="ts" setup>
const getValue = () => Math.floor(Math.random() * 10000);
const options = {
  dataOptions: {
    dataItems: [
      { name: "Main Chart", labelX: "label", labelY: "value" },
      { name: "Sub Chart", labelX: "label", labelY: "value" },
    ],
    data: [
      // Parent nodes
      { id: "01", label: "Parent 1", value: getValue() },
      { id: "02", label: "Parent 2", value: getValue() },
      { id: "03", label: "Parent 3", value: getValue() },
      { id: "04", label: "Parent 4", value: getValue() },

      // Children of Parent 1
      { id: "05", parentId: "01", label: "Child 1.1", value: getValue() },
      { id: "06", parentId: "01", label: "Child 1.2", value: getValue() },
      { id: "07", parentId: "01", label: "Child 1.3", value: getValue() },

      // Children of Parent 2
      { id: "08", parentId: "02", label: "Child 2.1", value: getValue() },
      { id: "09", parentId: "02", label: "Child 2.2", value: getValue() },
      { id: "10", parentId: "02", label: "Child 2.3", value: getValue() },

      // Children of Parent 3
      { id: "11", parentId: "03", label: "Child 3.1", value: getValue() },
      { id: "12", parentId: "03", label: "Child 3.2", value: getValue() },
      { id: "13", parentId: "03", label: "Child 3.3", value: getValue() },

      // Children of Parent 4
      { id: "14", parentId: "04", label: "Child 4.1", value: getValue() },
      { id: "15", parentId: "04", label: "Child 4.2", value: getValue() },
      { id: "16", parentId: "04", label: "Child 4.3", value: getValue() },
      { id: "17", parentId: "04", label: "Child 4.4", value: getValue() },
    ],
  },
  chartOptions: {
    componentType: "parent-child-pie",
  },
};
</script>
<style lang="css">
.echart-sphere-wrapper {
  width: 600px;
  height: 400px;
  background-color: aliceblue;
}
</style>

```

![Nested Pie Chart](https://github.com/isamxus/echart-sphere-assets/blob/1bc9c0f4f66560eb1c18e18d16a5a3be669c124f/assets/pie/%E5%AD%90%E6%AF%8D%E5%9B%BE.png)

## Scatter Plots

### Basic Scatter Plot

By setting the `itemType` property to `scatter`, we can create a scatter plot.

```
<template>
  <div class="echart-sphere-wrapper">
    <normal-chart v-bind="options"></normal-chart>
  </div>
</template>
<script lang="ts" setup>
const getValue = () => Math.floor(Math.random() * 10000);
const options = {
  dataOptions: {
    dataItems: [
      {
        name: "Scatter Plot 1",
        labelX: "label",
        labelY: "value",
        itemType: "scatter",
      },
      {
        name: "Scatter Plot 2",
        labelX: "label",
        labelY: "value1",
        itemType: "scatter",
      },
      {
        name: "Scatter Plot 3",
        labelX: "label",
        labelY: "value2",
        itemType: "scatter",
      },
    ],
    data: [
      {
        id: "01",
        label: "scatter 1",
        value: getValue(),
        value1: getValue(),
        value2: getValue(),
      },
      {
        id: "02",
        label: "scatter 2",
        value: getValue(),
        value1: getValue(),
        value2: getValue(),
      },
      {
        id: "03",
        label: "scatter 3",
        value: getValue(),
        value1: getValue(),
        value2: getValue(),
      },
      {
        id: "04",
        label: "scatter 4",
        value: getValue(),
        value1: getValue(),
        value2: getValue(),
      },
      {
        id: "05",
        label: "scatter 5",
        value: getValue(),
        value1: getValue(),
        value2: getValue(),
      },
      {
        id: "06",
        label: "scatter 6",
        value: getValue(),
        value1: getValue(),
        value2: getValue(),
      },
      {
        id: "07",
        label: "scatter 7",
        value: getValue(),
        value1: getValue(),
        value2: getValue(),
      },
      {
        id: "08",
        label: "scatter 8",
        value: getValue(),
        value1: getValue(),
        value2: getValue(),
      },
    ],
  },
};
</script>
<style lang="css">
.echart-sphere-wrapper {
  width: 600px;
  height: 400px;
  background-color: aliceblue;
}
</style>

```

![Basic Scatter Plot](https://github.com/isamxus/echart-sphere-assets/blob/effa7f6b00e5d9ce1dcfeec207c69aa9ebe99d21/assets/scatter/%E6%95%A3%E7%82%B9%E5%9B%BE.png)

## Radar Charts

### Basic Radar Chart

By setting the `componentType` in `chartOptions` to `radar`, a radar chart can be created, and the `max` field within the `radar` options can be set to specify the maximum value for each vertex.

```
<template>
  <div class="echart-sphere-wrapper">
    <normal-chart v-bind="options" />
  </div>
</template>
<script lang="ts" setup>
const getValue = () => Math.floor(Math.random() * 10000);
const options = {
  dataOptions: {
    dataItems: [
      { name: "Radar Chart 1", labelX: "label", labelY: "value" },
      { name: "Radar Chart 2", labelX: "label", labelY: "value1" },
    ],
    data: [
      {
        id: "01",
        label: "radar 1",
        value: getValue(),
        value1: getValue(),
        max: 10000,
      },
      {
        id: "02",
        label: "radar 2",
        value: getValue(),
        value1: getValue(),
        max: 10000,
      },
      {
        id: "03",
        label: "radar 3",
        value: getValue(),
        value1: getValue(),
        max: 10000,
      },
      {
        id: "04",
        label: "radar 4",
        value: getValue(),
        value1: getValue(),
        max: 10000,
      },
      {
        id: "05",
        label: "radar 5",
        value: getValue(),
        value1: getValue(),
        max: 10000,
      },
      {
        id: "06",
        label: "radar 6",
        value: getValue(),
        value1: getValue(),
        max: 10000,
      },
    ],
  },
  chartOptions: {
    componentType: "radar",
    radar: {
      max: "max"
    }
  },
};
</script>
<style lang="css">
.echart-sphere-wrapper {
  width: 600px;
  height: 400px;
  background-color: aliceblue;
}
</style>

```

![Basic Radar Chart](https://github.com/isamxus/echart-sphere-assets/blob/a9455e6a68d9c0796d3eb669214a41d5b3519b87/assets/radar/%E5%9F%BA%E7%A1%80%E9%9B%B7%E8%BE%BE%E5%9B%BE.png)

## Maps

### Basic Map

The basic map provides a simple data visualization of the provinces of China, using the preset map of China with the built-in map configuration `isBuiltIn: true`.

```
<template>
  <div class="echart-sphere-wrapper">
    <normal-chart v-bind="options" />
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
const getValue = () => Math.floor(Math.random() * 10000);
const options = ref({
  dataOptions: {
    dataItems: [{ name: "Map of China", labelX: "label", labelY: "value" }],
    data: [
      { id: "01", label: "Guangdong Province", value: getValue() },
      { id: "02", label: "Hunan Province", value: getValue() },
      { id: "03", label: "Qinghai Province", value: getValue() },
      { id: "04", label: "Tibet Autonomous Region", value: getValue() },
      { id: "05", label: "Heilongjiang Province", value: getValue() },
      { id: "06", label: "Jilin Province", value: getValue() },
    ],
    mapConfig: {
      name: "china",
      isBuiltIn: true,
    },
  },
  chartOptions: {
    componentType: "map",
  },
});
</script>
<style lang="css">
.echart-sphere-wrapper {
  width: 600px;
  height: 400px;
  background-color: aliceblue;
}
</style>

```

![Basic Map](https://github.com/isamxus/echart-sphere-assets/blob/a4e15bf67fab71639a4d474cd0427bfe079396b0/assets/map/%E5%9C%B0%E5%9B%BE1.png)

## Candlestick Chart

### Basic Candlestick Chart

By setting `chartType` to `candlestick` and configuring the `candlestick` properties for opening, closing, lowest, and highest values, you can create a basic candlestick chart.

```
<template>
  <div class="echart-sphere-wrapper">
    <normal-chart v-bind="options" />
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
const getRandomValue = () => Math.floor(Math.random() * 10000);
const getOHLC = () => {
  let open = getRandomValue();
  let close = getRandomValue();
  let low = Math.min(open, close) - Math.floor(Math.random() * 500);
  let high = Math.max(open, close) + Math.floor(Math.random() * 500);
  return { open, high, low, close };
};
const options = ref({
  dataOptions: {
    dataItems: [{ name: "Candlestick Chart", labelX: "label" }],
    data: [
      { id: "01", label: "2023-11-30", ...getOHLC() },
      { id: "02", label: "2023-12-30", ...getOHLC() },
      { id: "03", label: "2024-1-30", ...getOHLC() },
      { id: "04", label: "2024-2-26", ...getOHLC() },
      { id: "05", label: "2024-3-30", ...getOHLC() },
      { id: "06", label: "2024-4-20", ...getOHLC() },
    ],
  },
  chartOptions: {
    chartType: "candlestick",
    candlestick: {
      open: "open",
      close: "close",
      lowest: "low",
      highest: "open",
    },
  },
});
</script>
<style lang="css">
.echart-sphere-wrapper {
  width: 600px;
  height: 400px;
  background-color: aliceblue;
}
</style>

```

![Basic Candlestick Chart](https://github.com/isamxus/echart-sphere-assets/blob/13a3074ca475f61c4a542e7343dc96bb3ce7c234/assets/candlestick/%E5%9F%BA%E7%A1%80K%E7%BA%BF%E5%9B%BE.png)

## Dashboard

### By setting `chartType` to `gauge`, you can create a basic dashboard gauge

```
<template>
  <div class="echart-sphere-wrapper">
    <normal-chart v-bind="options" />
  </div>
</template>
<script lang="ts" setup>
const getValue = () => Math.floor(Math.random() * 100);
const options = {
  dataOptions: {
    dataItems: [{ name: "Dashboard", labelX: "label", labelY: "value" }],
    data: [{ id: "01", label: "gauge 1", value: getValue() }],
  },
  chartOptions: {
    chartType: "gauge",
  },
};
</script>
<style lang="css">
.echart-sphere-wrapper {
  width: 600px;
  height: 400px;
  background-color: aliceblue;
}
</style>
```

![Basic Dashboard Gauge](https://github.com/isamxus/echart-sphere-assets/blob/45ea2eb6ea74234ebd3327b92a9686a5362aa28e/assets/gauge/%E5%9F%BA%E7%A1%80%E4%BB%AA%E8%A1%A8%E7%9B%98.png)
