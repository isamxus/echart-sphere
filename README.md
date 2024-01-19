# Echart Sphere 介绍

选择阅读语言版本 / Choose your reading language:

- [中文版](README.md)
- [English Version](README.en.md)(Updates ongoing)
- echart-sphere 是一个高度可定制和灵活的图表组件库，现已支持 Vue 2 和 Vue 3 以及 ECharts。它允许开发者通过传递 `dataOptions`、`chartOptions` 和 `styleOptions` 来快速创建和定制多种图表。此组件库旨在提供一个简单的方式来集成和扩展 ECharts，使得创建交互式和响应式图表变得轻而易举。

## 特性

- **ECharts 集成**: 利用 ECharts 强大的图表渲染能力。
- **Vue 全版本支持**: 兼容 Vue 2 和 Vue 3，适用于各种项目需求。
- **配置灵活**: 通过 `dataOptions`、`chartOptions` 和 `styleOptions` 提供丰富的配置选项。
- **类型多样**: 支持多种预设图表类型，如柱形图、折线图、饼图等。
- **可扩展性**: 用户可以根据需求扩展新的图表类型或通过 `componentType` 渲染自定义组件。
- **全局配置**: 支持全局配置选项，允许设置默认的图表样式和行为。
- **响应式设计**: 组件能够响应式地适应不同屏幕尺寸和分辨率。

## 安装

`npm install echart-sphere`
or
`yarn add echart-sphere`

## 快速上手

对于 `Vue3.x` 项目，在入口文件中：

```
import { createApp } from "vue";
import App from "./App.vue"; // 假设你的Vue根组件在这里
import EchartSphere from "echart-sphere";
const app = createApp(App);
app.use(EchartSphere);
app.mount("#app");

```

在组件中使用：

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
     // 这里写配置
  }
});

</script>
```

对于 `Vue2.x` 项目，在入口文件中：

```
// main.ts
import Vue from "vue";
import App from "./App.vue"; // 引入根组件
import EchartSphere from "echart-sphere";
Vue.use(EchartSphere);
new Vue({
  render: (h) => h(App),
}).$mount("#app");
```

在组件中使用：

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
        // 这里写配置
      },
    };
  },
};
</script>

```

## 配置优先级说明

在使用组件时，如果您通过 `styleOptions` 传入了与全局配置相同的属性，组件将优先使用传入的 `styleOptions` 属性值。这允许您对组件的行为进行更细粒度的控制，覆盖全局设置以满足特定情况的需求。

例如，如果组件全局配置了一个默认的 `lineColor`，但您通过 `styleOptions` 传入了一个不同的 `lineColor` 值，那么组件将使用您传入的值来渲染线条颜色。

请在配置组件时考虑此优先级规则，以确保您的设置能够按预期生效。

## 全局配置

echart-sphere 提供了几种方法来设置全局配置，这些配置将作为默认值应用于所有图表实例。以下是可用的全局配置方法：

### `setConfig`

`setConfig` 方法允许您设置通用的图表配置项，如颜色方案、字体大小、工具提示，自定义图表的加载状态显示。您可以设置加载文本、颜色、字体大小等属性，指定设计稿的默认宽度、基准字体大小以及是否启用自适应功能。

### `setLoadingConfig`

`setLoadingConfig`方法用于设置图表加载动画的样式，字体大小等。

```
import { setConfig } from 'echart-sphere';

setConfig({
    barWidth: 5,
    barColor: 'rgba(132, 212, 232, 1)'
});
```

### 配置项

#### 柱形图配置

##### `barWidth`

- 类型: `number`
- 默认值: `20`
- 描述: 设置柱的宽度。

##### `barColor`

- 类型: `string`
- 默认值: `'rgba(132, 212, 232, 1)'`
- 描述: 设置柱的颜色。

##### `barBorderType`

- 类型: `string`
- 默认值: `'#fff'`
- 描述: 设置柱边框的颜色。

##### `barBorderColor`

- 类型: `string`
- 默认值: `'solid'`
- 描述: 设置柱边框的样式。

##### `barBorderWidth`

- 类型: `number`
- 默认值: `0`
- 描述: 设置柱边框的宽度。

##### `barGap`

- 类型: `string`
- 默认值: `'30%'`
- 描述: 设置同一类目中柱间的间隔。

##### `barSymbol`

- 类型: `string`
- 默认值: `'rect'`
- 描述: 设置 PictorialBar 的图形类型。默认为 `'rect'`，表示使用矩形。

##### `barSymbolRepeat`

- 类型: `string`
- 默认值: `'fixed'`
- 描述: 设置图形是否沿着柱的长度方向重复。`'fixed'` 表示不重复，图形将被拉伸。

##### `barSymbolMargin`

- 类型: `number`
- 默认值: `2`
- 描述: 设置图形在重复时的间隔。

##### `barSymbolOffset`

- 类型: `Array<number>`
- 默认值: `[0, 0]`
- 描述: 设置图形在柱体中的偏移位置。数组的两个元素分别对应水平和垂直方向的偏移。

##### `barSymbolSize`

- 类型: `Array<number>`
- 默认值: `[6, 2]`
- 描述: 设置图形的大小。数组的两个元素分别对应宽度和高度。

##### `barSymbolPosition`

- 类型: `string`
- 默认值: `'start'`
- 描述: 设置图形相对于柱体的位置。`'start'` 表示图形位于柱体的起始端。

##### `barSymbolClip`

- 类型: `boolean`
- 默认值: `true`
- 描述: 设置是否对超出柱体部分的图形进行裁剪。

#### 折线图配置

##### `lineColor`

- 类型: `string`
- 默认值: `"rgba(45, 174, 194, 1)"`
- 描述: 设置折线的颜色。

##### `lineSmooth`

- 类型: `boolean`
- 默认值: `false`
- 描述: 设置折线是否平滑显示，`true` 为平滑曲线，`false` 为直线连接。

##### `lineType`

- 类型: `string`
- 默认值: `'solid'`
- 描述: 设置折线的类型，可选值为 `'solid'`, `'dashed'`, 或 `'dotted'`。

##### `showSymbol`

- 类型: `boolean`
- 默认值: `false`
- 描述: 设置是否显示折线图的数据点。

#### 饼图配置

##### `pieLeft`

- 类型: `number`
- 默认值: `0`
- 描述: 设置饼图距离容器左侧的距离。

##### `pieTop`

- 类型: `number`
- 默认值: `0`
- 描述: 设置饼图距离容器顶部的距离。

##### `pieRight`

- 类型: `number`
- 默认值: `0`
- 描述: 设置饼图距离容器右侧的距离。

##### `pieBottom`

- 类型: `number`
- 默认值: `0`
- 描述: 设置饼图距离容器底部的距离。

##### `pieWidth`

- 类型: `string`
- 默认值: `"auto"`
- 描述: 设置饼图的宽度。当值为 `"auto"` 时，宽度会自适应容器。

##### `pieHeight`

- 类型: `string`
- 默认值: `"auto"`
- 描述: 设置饼图的高度。当值为 `"auto"` 时，高度会自适应容器。

##### `pieLabelshow`

- 类型: `boolean`
- 默认值: `false`
- 描述: 设置是否显示饼图中的标签。

#### 地图配置

##### `mapZoom`

- 类型: `number`
- 默认值: `1`
- 描述: 设置地图的缩放级别。

##### `mapColor`

- 类型: `string`
- 默认值: `"#c8def1"`
- 描述: 设置地图的默认颜色。

##### `mapLabelShow`

- 类型: `boolean`
- 默认值: `false`
- 描述: 设置是否显示地图上的标签。

##### `mapLabelSize`

- 类型: `number`
- 默认值: `10`
- 描述: 设置地图标签的字体大小。

##### `mapColorHL`

- 类型: `string`
- 默认值: `"#337ab7"`
- 描述: 设置地图上高亮区域的颜色。

##### `mapLableColorHL`

- 类型: `string`
- 默认值: `"#fff"`
- 描述: 设置地图上高亮标签的颜色。

##### `mapSelectedColor`

- 类型: `string`
- 默认值: `"#337ab7"`
- 描述: 设置地图上选中区域的颜色。

##### `mapSelectedLabelColor`

- 类型: `string`
- 默认值: `"#fff"`
- 描述: 设置地图上选中区域标签的颜色。

#### Legend 图例配置

##### `legendWidth`

- 类型: `number`
- 默认值: `10`
- 描述: 设置图例的宽度。

##### `legendHeight`

- 类型: `number`
- 默认值: `4`
- 描述: 设置图例的高度。

##### `legendBottom`

- 类型: `number`
- 默认值: `0`
- 描述: 设置图例距离底部的距离。

##### `legendSize`

- 类型: `number`
- 默认值: `12`
- 描述: 设置图例字体的大小。

##### `legendTop`

- 类型: `string`
- 默认值: `"auto"`
- 描述: 设置图例距离顶部的距离。

##### `legendOrient`

- 类型: `string`
- 默认值: `"horizontal"`
- 描述: 设置图例的排列方向。

##### `legendType`

- 类型: `string`
- 默认值: `"plain"`
- 描述: 设置图例的类型。

##### `legendLeft`

- 类型: `string`
- 默认值: `"auto"`
- 描述: 设置图例距离左侧的距离。

##### `legendRight`

- 类型: `string`
- 默认值: `"auto"`
- 描述: 设置图例距离右侧的距离。

#### Legend 图例富文本配置

##### `legendRichSize`

- 类型: `number`
- 默认值: `14`
- 描述: 设置图例文本的字体大小。

##### `legendRichWeight`

- 类型: `number`
- 默认值: `500`
- 描述: 设置图例文本的字体粗细。

##### `legendRichWidth`

- 类型: `number`
- 默认值: `70`
- 描述: 设置图例项的宽度。

##### `legendRichAlign`

- 类型: `string`
- 默认值: `"right"`
- 描述: 设置图例文本的对齐方式。

##### `legendRichColor`

- 类型: `string`
- 默认值: `"rgba(0, 0, 0, 0.85)"`
- 描述: 设置图例文本的颜色。

##### `legendRichPadding`

- 类型: `Array<number>`
- 默认值: `[0, 0, 0, 5]`
- 描述: 设置图例项的内边距，数组格式表示上、右、下、左的内边距。

##### `legendRichFamily`

- 类型: `string`
- 默认值: `"Source Han Sans CN-Medium"`
- 描述: 设置图例文本的字体家族。

#### Grid 配置

##### `gridTop`

- 类型: `number`
- 默认值: `22`
- 描述: 设置图表上方的边距。

##### `gridLeft`

- 类型: `number`
- 默认值: `3`
- 描述: 设置图表左侧的边距。

##### `gridRight`

- 类型: `number`
- 默认值: `5`
- 描述: 设置图表右侧的边距。

##### `gridBottom`

- 类型: `number`
- 默认值: `30`
- 描述: 设置图表下方的边距。

##### `isContainLabel`

- 类型: `boolean`
- 默认值: `true`
- 描述: 设置网格区域是否包含坐标轴的标签。

#### Series 配置

##### `yAxisField`

- 类型: `string`
- 默认值: `"value"`
- 描述: 设置系列数据在 Y 轴上的取值字段。

##### `yAxisIndex`

- 类型: `number`
- 默认值: `0`
- 描述: 指定使用哪一条 Y 轴，`0` 表示第一条 Y 轴。

#### DataZoom 配置

##### `dataZoomType`

- 类型: `string`
- 默认值: `'inside'`
- 描述: 设置数据区域缩放组件的类型。`'inside'` 表示内置型数据区域缩放组件，允许通过鼠标滚轮或触摸板进行缩放。

##### `dataZoomXAxisIndex`

- 类型: `number`
- 默认值: `0`
- 描述: 指定哪一个 x 轴与数据区域缩放组件关联，默认关联第一个 x 轴。

#### Tooltip 配置

##### `tooltipShow`

- 类型: boolean
- 默认值: true
- 描述: 设置是否显示 Tooltip。
-

##### `isTooltipConfine`

- 类型: boolean
- 默认值: true
- 描述: 设置 Tooltip 是否被限制在图表的区域内。

##### `tooltipBgColor`

- 类型: string
- 默认值: "rgba(50,50,50,0.7)"
- 描述: 设置 Tooltip 的背景颜色。

##### `tooltipTextColor`

- 类型: string
- 默认值: "#fff"
- 描述: 设置 Tooltip 文本的颜色。

##### `tooltipTextSize`

- 类型: number
- 默认值: 10
- 描述: 设置 Tooltip 文本的字体大小。

##### `tooltipBorderColor`

- 类型: string
- 默认值: "rgba(50,50,50,0)"
- 描述: 设置 Tooltip 的边框颜色。

##### `tooltipPadding`

- 类型: number
- 默认值: 5
- 描述: 设置 Tooltip 的内边距。

##### `tooltipTriggerType`

- 类型: string
- 默认值: "axis"
- 描述: 设置触发 Tooltip 的方式。"axis" 表示坐标轴触发。

##### `tooltipAxisPointer`

- 类型: string
- 默认值: "shadow"
- 描述: 设置坐标轴指示器的类型。"shadow" 表示阴影指示器。

##### `tooltipShadowColor`

- 类型: string
- 默认值: "rgba(153, 153, 153, 0.4)"
- 描述: 设置阴影指示器的颜色。

##### `tooltipFormatter`

- 类型: Function
- 默认值: null
- 描述: 自定义 Tooltip 的格式化函数。

#### X 轴配置

##### `xAxisField`

- 类型: `string`
- 默认值: `"label"`
- 描述: 设置 X 轴的取值字段。

##### `xAxisLabelSize`

- 类型: `number`
- 默认值: `8`
- 描述: 设置 X 轴标签的字体大小。

##### `xAxisTickShow`

- 类型: `boolean`
- 默认值: `false`
- 描述: 设置是否显示 X 轴的刻度。

#### Y 轴配置

##### `yAxisLabelSize`

- 类型: `number`
- 默认值: `10`
- 描述: 设置 Y 轴标签的字体大小。

#### loading 配置

##### `loadingText`

- 类型: `string`
- 默认值: `"正在加载图表"`
- 描述: 设置加载时显示的文本。

##### `loadingColor`

- 类型: `string`
- 默认值: `"#009C84"`
- 描述: 设置加载图标的颜色。

##### `loadingTextColor`

- 类型: `string`
- 默认值: `"#009C84"`
- 描述: 设置加载文本的颜色。

##### `loadingMaskColor`

- 类型: `string`
- 默认值: `"rgba(255, 255, 255, 0.8)"`
- 描述: 设置加载时遮罩层的颜色。

##### `loadingZlevel`

- 类型: `number`
- 默认值: `0`
- 描述: 设置加载图层的 Z 轴层级。

##### `loadingFontSize`

- 类型: `number`
- 默认值: `12`
- 描述: 设置加载文本的字体大小。

##### `loadingShowSpinner`

- 类型: `boolean`
- 默认值: `true`
- 描述: 设置是否显示加载旋转器。

##### `loadingSpinnerRadius`

- 类型: `number`
- 默认值: `10`
- 描述: 设置加载旋转器的半径大小。

##### `loadingLineWidth`

- 类型: `number`
- 默认值: `2`
- 描述: 设置加载旋转器线条的宽度。

##### `loadingFontWeight`

- 类型: `string`
- 默认值: `"normal"`
- 描述: 设置加载文本的字体粗细。

##### `loadingFontStyle`

- 类型: `string`
- 默认值: `"normal"`
- 描述: 设置加载文本的字体样式。

##### `loadingFontFamily`

- 类型: `string`
- 默认值: `"sans-serif"`
- 描述: 设置加载文本的字体族。

#### 自适应配置

##### `designWidth`

- 类型: `number`
- 默认值: `375`
- 描述: 设计稿的默认宽度，用于自适应计算的基准宽度。

##### `baseSize`

- 类型: `number`
- 默认值: `14`
- 描述: 自适应布局时的基准字体大小。

##### `flexible`

- 类型: `boolean`
- 默认值: `false`
- 描述: 是否开启自适应布局，当设置为 `true` 时，图表大小将根据屏幕宽度自动缩放。

#### 高亮配置

##### `colorHl`

- 类型: `string`
- 默认值: `"auto"`
- 描述: 设置高亮时的颜色。

##### `borderColorHl`

- 类型: `string`
- 默认值: `"#000"`
- 描述: 设置高亮时的边框颜色。

##### `borderWidthHl`

- 类型: `number`
- 默认值: `0`
- 描述: 设置高亮时的边框宽度。

##### `borderTypeHl`

- 类型: `string`
- 默认值: `"solid"`
- 描述: 设置高亮时的边框类型。

##### `borderRadiusHl`

- 类型: `number`
- 默认值: `0`
- 描述: 设置高亮时的边框圆角大小。

##### `shadowBlurHl`

- 类型: `number`
- 默认值: `10`
- 描述: 设置高亮时的阴影模糊大小。

##### `shadowColorHl`

- 类型: `string`
- 默认值: `"auto"`
- 描述: 设置高亮时的阴影颜色。

##### `shadowOffsetXHl`

- 类型: `number`
- 默认值: `0`
- 描述: 设置高亮时的阴影在 X 轴的偏移。

##### `shadowOffsetYHl`

- 类型: `number`
- 默认值: `0`
- 描述: 设置高亮时的阴影在 Y 轴的偏移。

##### `opacityHl`

- 类型: `number`
- 默认值: `1`
- 描述: 设置高亮时的透明度。

## Props 说明

### dataOptions

#### `name`

- 类型: `string`
- 描述: 数据项的名称。

#### `labelX`

- 类型: `string`
- 描述: 指定数据中作为 X 轴值的字段。

#### `labelY`

- 类型: `string`
- 描述: 指定数据中作为 Y 轴值的字段。

#### `measureType`

- 类型: `DataFormatType`
- 可选值: `"billion"`, `"tenthousand"`, `"number"`, `"percent"`, `"string"`
- 描述: 值计量单位类型，用于格式化数据项的值。

#### `formatter`

- 类型: `(value: any) => any`
- 描述: 自定义格式化函数，用于格式化数据项的值。

#### `isNegative`

- 类型: `boolean`
- 描述: 标记数据项的值是否为负数。

#### `itemType`

- 类型: `string`
- 可选值: `"line"`, `"bar"`, `"pictorialBar"`
- 描述: 系列类型，指定数据项的图表展示类型。

#### `dataItems`

- 类型: `Array<DataItemWithStyleOptions>`
- 描述: 包含样式的数据项数组。允许您为每个数据项单独设置样式和图表行为，例如颜色、边框宽度、堆叠、重叠等。

##### 数据项样式和行为配置

每个 `dataItems` 数组中的对象可以包含以下属性：

- 所有 `DataItemOptions` 的属性，例如：

  - `name`: 数据项的名称。
  - `labelX`: 指定数据中作为 X 轴值的字段。
  - `labelY`: 指定数据中作为 Y 轴值的字段。
  - `measureType`: 值计量单位类型，用于格式化数据项的值。
  - `formatter`: 自定义格式化函数，用于格式化数据项的值。
  - `isNegative`: 标记数据项的值是否为负数。
  - `itemType`: 系列类型，指定数据项的图表展示类型。
  - `stack`: 如果设置，将数据堆叠显示。相同的 `stack` 值会被堆叠在一起。
  - `overlap`: 如果设置，允许数据系列重叠显示。
  - `split`: 定义图表的分割点，可以用来在图表中创建一个分隔，标识不同的区域或数据集。
  - `secondYAxis`: 配置或启用第二个 Y 轴。如果为 `true`，将使用默认的第二 Y 轴配置。如果提供了 `SecondYAxisType` 对象，则可以自定义第二个 Y 轴的配置。
  - 所有可以配置的样式属性，与全局配置属性同名

#### `xAxisData`

- 类型: `Array<any>`
- 描述: 如果不指定 `labelX`，则使用此数组作为 X 轴的数据。

#### `data`

- 类型: `Array<any>`
- 描述: 图表的源数据数组。
-

#### `isFormatter`

- 类型: `boolean`
- 描述: 是否开启数据项的值格式化。

#### `mapConfig`

- 类型: `object`
- 描述: 用于配置地图的选项。

##### `isBuiltIn`

- 类型: `boolean`
- 描述: 指定是否使用内置的地图。如果为 `true`，则使用库提供的内置地图数据。为了使用内置地图类型，您需要安装 `china-map-echarts` 库。如果没有安装并在入口文件中引入这个库，将会抛出警告，并且地图无法渲染。
- 要安装 `china-map-echarts` 库，请运行以下命令：

```
npm install china-map-echarts --save
```

或者，如果你使用 `yarn`：

```
yarn add china-map-echarts
```

安装完成后，在你的项目入口文件中引入这个库：

```
import 'china-map-echarts';
```

##### `mapJson`

- 类型: `any`
- 描述: 自定义地图的 JSON 数据。如果提供，将使用此数据而不是内置地图。

##### `name`

- 类型: `string`
- 描述: 地图的名称。通常用于显示或引用地图。

##### `code`

- 类型: `string | number`
- 描述: 地图的行政区划编码。用于指定显示行政区域编码对应的地图，在`isBuiltIn`为 true 时生效。

### chartOptions

`chartOptions` 是一个对象，用于配置图表的行为和样式。以下是可用的配置项及其作用：

#### `chartType`

- 类型: `string`
- 默认值: `"normal"`
- 描述: 指定内置的图表类型。这决定了图表的整体呈现方式和交互行为。默认为 `"normal"`。

#### `optionFormatter`

- 类型: `(option: echarts.EChartsCoreOption) => echarts.EChartsCoreOption`
- 描述: 自定义函数，用于进一步格式化或修改 ECharts 的配置项。

#### `loading`

- 类型: `boolean`
- 描述: 控制图表的加载状态。当设置为 `true` 时，显示加载动画。

#### `xAxisType`

- 类型: `string`
- 默认值: `"normal"`
- 描述: 指定 X 轴的内置类型。默认为 `"normal"`，表示使用标准的 X 轴配置。

#### `yAxisType`

- 类型: `string`
- 默认值: `"normal"`
- 描述: 指定 Y 轴的内置类型。默认为 `"normal"`，表示使用标准的 Y 轴配置。

#### `legendType`

- 类型: `string`
- 默认值: `"normal"`
- 描述: 指定图例组件的内置类型。默认为 `"normal"`，表示使用标准的图例配置。

#### `gridType`

- 类型: `string`
- 默认值: `"normal"`
- 描述: 指定网格组件的内置类型。默认为 `"normal"`，表示使用标准的网格配置。

#### `tooltipType`

- 类型: `string`
- 默认值: `"normal"`
- 描述: 指定提示框组件的内置类型。默认为 `"normal"`，表示使用标准的提示框配置。

#### `seriesType`

- 类型: `string`
- 默认值: `"normal"`
- 描述: 指定系列列表的内置类型。默认为 `"normal"`，表示使用标准的系列配置。

#### `dataZoomType`

- 类型: `string`
- 默认值: `"normal"`
- 描述: 指定数据区域缩放组件的内置类型。默认为 `"normal"`。

### `visualMapType`

- 类型: `string`
- 默认值: `"normal"`
- 描述: 指定视觉映射组件的内置类型。默认为 `"normal"`，表示使用标准的视觉映射配置。

#### `componentType`

- 类型: `string`
- 默认值: `"normal"`
- 描述: 指定直接渲染组件的内置类型。默认为 `"normal"`，表示使用标准的组件配置。

#### `stack`

- 类型: `string`
- 描述: 如果设置，将数据堆叠显示。相同的 `stack` 值会被堆叠在一起。

#### `overlap`

- 类型: `string`
- 描述: 如果设置，允许数据系列重叠显示。

#### `split`

- 类型: `ChartSplitPointOptions`
- 描述: 定义图表的分割点，可以用来在图表中创建一个分隔，标识不同的区域或数据集。

##### ChartSplitPointOptions

- `splitX`: 分割点 X 轴位置。
- `styleBefore`: 分割点前面的图形样式。
- `styleAfter`: 分割点后面的图形样式。
- `trend`: 趋势类型，如 "pictorial" 或 "line"。
- `trendPart`: 趋势作用部分，"before" 或 "after"。
- `trendStyle`: 趋势部分样式。
- `trendOffset`: 趋势偏移。

#### `secondYAxis`

- 类型: `SecondYAxisType | boolean`
- 描述: 配置或启用第二个 Y 轴。如果为 `true`，将使用默认的第二 Y 轴配置。如果提供了 `SecondYAxisType` 对象，则可以自定义第二个 Y 轴的配置，Y 轴配置属性参考全局 Y 轴配置属性。

#### `legendRichOptions`

- 类型: `LegendRichOptions` 或 `Array<LegendRichOptions>`
- 描述: 用于自定义图例项的富文本样式。可以为图例中的每个项（如名称、值、百分比）指定不同的样式。

每个 `LegendRichOptions` 对象可以包含以下属性：

##### `field`

- 类型: `string`
- 描述: 指定要自定义样式的图例项字段，例如 `name`、`value` 或 `percent`。

##### `styles`

- 类型: `Partial<typeof legendRichConfig>`
- 描述: 一个包含样式属性的对象，这些样式将应用于指定的图例项字段。这是一个可选属性，如果提供，它将覆盖默认的富文本样式。

#### `isHightlight`

- 类型: `boolean`
- 描述: 设置是否启用数据项的高亮显示功能。当设置为 `true` 时，可以通过设置高亮样式使图表高亮。

### styleOptions

#### `styleOptions` 是一个对象，用于自定义图表的样式。它包含了一系列属性，这些属性与全局配置的属性同名，允许您在单个图表级别上覆盖全局样式设置。这些属性包括但不限于颜色方案、字体大小、边距等。

## 扩展图表类型

echart-sphere 提供了一套扩展机制，允许开发者自定义和扩展不同的图表组件类型。以下是如何使用这些扩展点：

### X 轴类型扩展

使用 `xAxisExtend` 方法来扩展或自定义 X 轴的行为。您可以注册一个新的 X 轴类型，并提供一个函数来定义它的行为。

```
import EchartSphere from "echart-sphere";
EchartSphere.xAxisExtend.extend('customXType', (props) => {
// 自定义 X 轴的行为
});
```

### Y 轴类型扩展

类似地，`yAxisExtend` 允许您扩展 Y 轴的行为。通过提供一个类型和一个函数，您可以定义 Y 轴的新行为。

```
import EchartSphere from "echart-sphere";
EchartSphere.yAxisExtend.extend('customXType', (props) => {
// 自定义 Y 轴的行为
});
```

### Grid 类型扩展

使用 `gridExtend` 来自定义网格的配置和行为。您可以为网格定义一个新的类型和相应的行为。

```
import EchartSphere from "echart-sphere";
EchartSphere.gridExtend.extend('customXType', (props) => {
// 自定义网格的配置和行为
});
```

### Tooltip 类型扩展

`tooltipExtend` 允许您自定义提示框的显示方式。通过注册一个新类型，您可以控制提示框的渲染和行为。

```
import EchartSphere from "echart-sphere";
EchartSphere.tooltipExtend.extend('customXType', (props) => {
// 自定义提示框的显示方式
});
```

### Legend 图例类型扩展

使用 `legendExtend` 来自定义图例的样式和行为。您可以定义新的图例类型来改变其默认的显示和交互。

```
import EchartSphere from "echart-sphere";
EchartSphere.legendExtend.extend('customXType', (props) => {
// 自定义图例的样式和行为
});
```

### Series 类型扩展

`seriesExtend` 方法允许您扩展系列的配置。通过注册新的系列类型，您可以自定义系列的渲染方式。

```

import EchartSphere from "echart-sphere";
EchartSphere.seriesExtend.extend('customXType', (props) => {
// 自定义系列的渲染方式
});
```

### 类型钩子

在扩展图表类型时，您还可以利用 `beforeHook` 和 `afterHook` 钩子函数来在类型的初始化之前或之后执行自定义逻辑。

#### beforeHook

`beforeHook` 允许您在类型的初始化逻辑执行之前插入自定义的行为。这可以用于设置初始状态、预处理属性等。

#### afterHook

与 `beforeHook` 相对应，`afterHook` 允许您在类型的初始化逻辑执行之后添加自定义行为。这可以用于后处理、添加额外的配置等。

```

import EchartSphere from "echart-sphere";
EchartSphere.seriesExtend.afterHook('customXType', (props) => {
// 自定义系列的渲染方式
});
```

#### 注意，"customXType"必须是已经存在的类型，afterHook 和 beforeHook 钩子才生效

### 图表类型扩展

最后，`chartExtend` 提供了一个强大的扩展点，允许您定义整个图表的行为。您可以注册一个新的图表类型，并提供一个回调函数来自定义整个图表的渲染逻辑。

```

import EchartSphere from "echart-sphere";
EchartSphere.chartExtend.extend('customXType', (props) => {
// 自定义整个图表的渲染逻辑
});
```

通过这些扩展点，您可以灵活地增加新的行为和样式，以满足特定的业务需求或创造独特的图表效果。

# Echart Sphere 示例

echart-sphere 是一个基于 Vue 3 和 ECharts 的高度可定制和灵活的图表组件库。以下是如何使用 echart-sphere 创建不同类型的图表的示例。

## 柱状图示例

柱状图适用于展示不同类别之间的比较。以下是一些柱状图的配置示例：

### 基础柱状图

```
<template>
  <div class="chart-container">
    <normal-chart v-bind="options" />
  </div>
</template>
<script lang="ts" setup>
const options = {
  dataOptions: {
    name: "测试",
    labelX: "label",
    labelY: "value",
    data: [
      { label: "测试柱子1", value: 23324 },
      { label: "测试柱子2", value: 23123 },
      { label: "测试柱子3", value: 43431 },
      { label: "测试柱子4", value: 13421 },
      { label: "测试柱子5", value: 55232 },
      { label: "测试柱子6", value: 31234 },
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

![基础柱状图](https://github.com/isamxus/echart-sphere-assets/blob/0b448c8f4eb646c04e49c5b1d189e153726541d9/assets/bar/normalBar.png)

### 堆叠柱状图

通过设置 `chartOptions`中的`stack` 为任意字符串可实现堆叠柱状图

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
      { name: "堆叠图1", labelX: "label", labelY: "value", barColor: "red" },
      { name: "堆叠图2", labelX: "label", labelY: "value1", barcolor: "blue"},
      { name: "堆叠图3", labelX: "label", labelY: "value2", barColor: "yellow" },
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

![堆叠柱状图](https://github.com/isamxus/echart-sphere-assets/blob/c05d3b7b67d2c1cd9b6a483d05e03644d6803bcc/assets/bar/%E5%A0%86%E5%8F%A0%E6%9F%B1%E5%9B%BE.png)

### 重叠柱状图

通过设置 `chartOptions`中的`overlap` 为`true`实现重叠柱状图

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
      { name: "重叠图1", labelX: "label", labelY: "value", barColor: "red" },
      { name: "重叠图2", labelX: "label", labelY: "value1", barcolor: "blue"},
      { name: "重叠图3", labelX: "label", labelY: "value2", barColor: "yellow" },
    ],
    data: [
      { id: "01", label: "Parent 1", value: getValue(), value1: getValue(), value2: getValue() },
      { id: "02", label: "Parent 2", value: getValue(), value1: getValue(), value2: getValue() },
      { id: "03", label: "Parent 3", value: getValue(), value1: getValue(), value2: getValue() },
      { id: "04", label: "Parent 4", value: getValue(), value1: getValue(), value2: getValue() }
    ],
  },
  chartOptions: {
    overlap: true
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

![重叠柱状图](https://github.com/isamxus/echart-sphere-assets/blob/5548caf0e7eb218208d748182746a1a06a03886f/assets/bar/%E9%87%8D%E5%8F%A0%E6%9F%B1%E5%9B%BE.png)

## 折线图示例

### 基础折线图

通过设置 `itemType` 为`"line"`即可实现

```
<template>
  <div class="chart-container">
    <normal-chart v-bind="options" />
  </div>
</template>
<script lang="ts" setup>
const options = {
  dataOptions: {
    name: "测试",
    labelX: "label",
    labelY: "value",
    itemType: "line", // 代表系列series使用折线
    data: [
      { label: "测试柱子1", value: 23324 },
      { label: "测试柱子2", value: 23123 },
      { label: "测试柱子3", value: 43431 },
      { label: "测试柱子4", value: 13421 },
      { label: "测试柱子5", value: 55232 },
      { label: "测试柱子6", value: 31234 },
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

![基础折线图](https://github.com/isamxus/echart-sphere-assets/blob/0b448c8f4eb646c04e49c5b1d189e153726541d9/assets/line/normalLine.png)

## 多系列类型

### 柱线混合

设置 dataItems 属性，并指定每个数据项的 name、labelX、labelY 和 itemType，可以创建多系列图表，其中每个系列的类型可以不同。例如，以下代码创建了一个柱状图和折线图的混合图表：

```
<template>
  <div class="chart-container">
    <normal-chart v-bind="options" />
  </div>
</template>
<script lang="ts" setup>
const options = {
  dataOptions: {
    dataItems: [
      { name: "测试",labelX: "label", labelY: "value", itemType: "bar"},
      { name: "测试",labelX: "label", labelY: "value1", itemType: "line"}
    ],
    data: [
      { label: "01", value: 23324, value1: Math.floor(Math.random() * 10000) },
      { label: "02", value: 23123, value1: Math.floor(Math.random() * 10000) },
      { label: "03", value: 43431, value1: Math.floor(Math.random() * 10000) },
      { label: "04", value: 13421, value1: Math.floor(Math.random() * 10000) },
      { label: "05", value: 55232, value1: Math.floor(Math.random() * 10000) },
      { label: "06", value: 31234, value1: Math.floor(Math.random() * 10000) },
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

![柱线混合](https://github.com/isamxus/echart-sphere-assets/blob/4ca5222ed41f2fd13d245039ede7b12d0de88c30/assets/multi-series/bar-line-mixin.png)

### 柱线混合(自定义样式)

在这个柱线混合图的示例中，我们通过设置 `barColor` 和 `lineColor` 属性自定义了图表的样式。

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
      { name: "测试1", labelX: "label", labelY: "value", barColor: "blue" },
      { name: "测试2", labelX: "label", labelY: "value1" },
      { name: "测试3", labelX: "label", labelY: "value2", itemType: "line", lineColor: "orange" },
    ],
    data: [
      { label: "01", value: getValue(), value1: getValue(), value2: getValue() },
      { label: "02", value: getValue(), value1: getValue(), value2: getValue() },
      { label: "03", value: getValue(), value1: getValue(), value2: getValue() },
      { label: "04", value: getValue(), value1: getValue(), value2: getValue() },
      { label: "05", value: getValue(), value1: getValue(), value2: getValue() }
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

![柱线混合-自定义样式](https://github.com/isamxus/echart-sphere-assets/blob/d6b983f8c414782edb788aeb20bdc1ab3c843635/assets/multi-series/%E6%9F%B1%E7%BA%BF%E6%B7%B7%E5%90%88-%E8%87%AA%E5%AE%9A%E4%B9%89%E6%A0%B7%E5%BC%8F.png)

## 趋势图

### 柱形趋势图

通过设置 chartOptions 中的 seriesType 为 'trend' 和 split 选项，我们可以创建一个柱形趋势图。在 split 选项中，splitX 设置为 2 表示 X 轴以第二个标签为中点分割成两部分，trend 设置为 "pictorial" 表示使用象形的方式显示趋势

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
      { name: "测试", labelX: "label", labelY: "value", itemType: "bar" },
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
    seriesType: 'trend'
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

![柱形趋势图](https://github.com/isamxus/echart-sphere-assets/blob/dd86c5cdfcac2d8ba777e0389e22027770d76c0f/assets/trend/normal-trend.png)

### 多系列趋势图

通过设置折线系列的 split 对象，定义趋势图的类型为 `line`。

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
      { name: "测试1", labelX: "label", labelY: "value", barColor: "blue" },
      { name: "测试2", labelX: "label", labelY: "value1" },
      {
        name: "测试3",
        labelX: "label",
        labelY: "value2",
        itemType: "line",
        lineColor: "orange",
        split: {
          trend: "line"
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

![多系列趋势图](https://github.com/isamxus/echart-sphere-assets/blob/e534754c8a5a8d4441e7536f5c11f256fa20bbcf/assets/trend/%E5%A4%9A%E7%B3%BB%E5%88%97%E8%B6%8B%E5%8A%BF%E5%9B%BE.png)

## 饼图

### 基础饼图

通过设置 chartOptions 中的 chartType 为 `pie`，我们可以创建一个基础饼图

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
      { name: "测试", labelX: "label", labelY: "value" }
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
    chartType: 'pie' // 饼图类型
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

![基础饼图](https://github.com/isamxus/echart-sphere-assets/blob/bd5f27b8cee0dfc80701cd0470c847f24b7dca00/assets/pie/%E5%9F%BA%E7%A1%80%E9%A5%BC%E5%9B%BE.png)

### 带具体信息图例的饼图

通过设置 chartOptions 中的 chartType 为 `detail-ple`，我们可以创建一个带具体信息图例的饼图

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
    dataItems: [{ name: "测试1", labelX: "label", labelY: "value" }],
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
    chartType: "detail-ple"
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

![带具体信息图例的饼图](https://github.com/isamxus/echart-sphere-assets/blob/568174c7640f6649c9533745ffe28a570698fc1f/assets/pie/%E5%B8%A6%E5%85%B7%E4%BD%93%E4%BF%A1%E6%81%AF%E5%9B%BE%E4%BE%8B%E7%9A%84%E9%A5%BC%E5%9B%BE.png)

### 子母饼图

通过设置 chartOptions 中的 componentType 为 `parent-child-ple`，我们可以创建一个子母饼图

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
      { name: "母图", labelX: "label", labelY: "value" },
      { name: "子图", labelX: "label", labelY: "value" },
    ],
    data: [
      // 父节点
      { id: "01", label: "Parent 1", value: getValue() },
      { id: "02", label: "Parent 2", value: getValue() },
      { id: "03", label: "Parent 3", value: getValue() },
      { id: "04", label: "Parent 4", value: getValue() },

      // Parent 1 的子节点
      { id: "05", parentId: "01", label: "Child 1.1", value: getValue() },
      { id: "06", parentId: "01", label: "Child 1.2", value: getValue() },
      { id: "07", parentId: "01", label: "Child 1.3", value: getValue() },

      // Parent 2 的子节点
      { id: "08", parentId: "02", label: "Child 2.1", value: getValue() },
      { id: "09", parentId: "02", label: "Child 2.2", value: getValue() },
      { id: "10", parentId: "02", label: "Child 2.3", value: getValue() },

      // Parent 3 的子节点
      { id: "11", parentId: "03", label: "Child 3.1", value: getValue() },
      { id: "12", parentId: "03", label: "Child 3.2", value: getValue() },
      { id: "13", parentId: "03", label: "Child 3.3", value: getValue() },

      // Parent 4 的子节点
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

![子母饼图](https://github.com/isamxus/echart-sphere-assets/blob/1bc9c0f4f66560eb1c18e18d16a5a3be669c124f/assets/pie/%E5%AD%90%E6%AF%8D%E5%9B%BE.png)

## 散点图

### 基础散点图

通过设置`itemType`属性为`scatter`可以实现散点图

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
      { name: "散点图1", labelX: "label", labelY: "value", itemType: "scatter" },
      { name: "散点图2", labelX: "label", labelY: "value1", itemType: "scatter" },
      { name: "散点图3", labelX: "label", labelY: "value2", itemType: "scatter" },
    ],
    data: [
      { id: "01", label: "scatter 1", value: getValue(), value1: getValue(), value2: getValue() },
      { id: "02", label: "scatter 2", value: getValue(), value1: getValue(), value2: getValue() },
      { id: "03", label: "scatter 3", value: getValue(), value1: getValue(), value2: getValue() },
      { id: "04", label: "scatter 4", value: getValue(), value1: getValue(), value2: getValue() },
      { id: "04", label: "scatter 5", value: getValue(), value1: getValue(), value2: getValue() },
      { id: "04", label: "scatter 6", value: getValue(), value1: getValue(), value2: getValue() },
      { id: "04", label: "scatter 7", value: getValue(), value1: getValue(), value2: getValue() },
      { id: "04", label: "scatter 8", value: getValue(), value1: getValue(), value2: getValue() },
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

![基础散点图](https://github.com/isamxus/echart-sphere-assets/blob/effa7f6b00e5d9ce1dcfeec207c69aa9ebe99d21/assets/scatter/%E6%95%A3%E7%82%B9%E5%9B%BE.png)

## 雷达图

### 基础雷达图

通过设置`chartOptions`的`componentType`为`radar`可以实现雷达图，需在 data 中设置`label`和`max`字段分别指定雷达图顶点和最大值

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
      { name: "雷达图1", labelX: "label", labelY: "value"},
      { name: "雷达图2", labelX: "label", labelY: "value1"}
    ],
    data: [
      { id: "01", label: "radar 1", value: getValue(), value1: getValue(), max: 10000 },
      { id: "02", label: "radar 2", value: getValue(), value1: getValue(), max: 10000 },
      { id: "03", label: "radar 3", value: getValue(), value1: getValue(), max: 10000 },
      { id: "04", label: "radar 4", value: getValue(), value1: getValue(), max: 10000 },
      { id: "05", label: "radar 5", value: getValue(), value1: getValue(), max: 10000 },
      { id: "06", label: "radar 6", value: getValue(), value1: getValue(), max: 10000 }
    ],
  },
  chartOptions: {
    componentType: "radar"
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

![基础雷达图](https://github.com/isamxus/echart-sphere-assets/blob/a9455e6a68d9c0796d3eb669214a41d5b3519b87/assets/radar/%E5%9F%BA%E7%A1%80%E9%9B%B7%E8%BE%BE%E5%9B%BE.png)

## 地图

### 基础地图

基础地图展示了中国各省份的简单数据可视化，通过内置的地图配置 `isBuiltIn: true` 来使用预设的中国地图。

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
    dataItems: [{ name: "中国地图", labelX: "label", labelY: "value" }],
    data: [
      { id: "01", label: "广东省", value: getValue() },
      { id: "02", label: "湖南省", value: getValue() },
      { id: "03", label: "青海省", value: getValue() },
      { id: "04", label: "西藏自治区", value: getValue() },
      { id: "05", label: "黑龙江省", value: getValue() },
      { id: "06", label: "吉林省", value: getValue() },
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

![基础地图](https://github.com/isamxus/echart-sphere-assets/blob/61c4a284c8a542f6b0c0df60bef2d021be8fe6a5/assets/map/%E5%9C%B0%E5%9B%BE.png)
