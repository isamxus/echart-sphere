# Echart Sphere

echart-sphere 是一个基于 Vue 3 和 ECharts 的高度可定制和灵活的图表组件库。它允许开发者通过传递 `dataOptions`、`chartOptions` 和 `styleOptions` 来快速创建和定制多种图表。此组件库旨在提供一个简单的方式来集成和扩展 ECharts，使得创建交互式和响应式图表变得轻而易举。

## 特性

- **ECharts 集成**: 利用 ECharts 强大的图表渲染能力。
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

```
<template>
<VueECharts v-bind="config" />
</template>

<script setup>
import VueECharts from 'echart-sphere';
import { ref } from "vue";
const config = ref({
    dataOptions: {
    // ...配置你的数据源
    },
    chartOptions: {
     // ...配置你的数据源
    },
    styleOptions: {
     // ...配置你的样式选项
    }
})
</script>
```

## 配置优先级说明

在使用组件时，如果您通过 `styleOptions` 传入了与全局配置相同的属性，组件将优先使用传入的 `styleOptions` 属性值。这允许您对组件的行为进行更细粒度的控制，覆盖全局设置以满足特定情况的需求。

例如，如果组件全局配置了一个默认的 `lineColor`，但您通过 `styleOptions` 传入了一个不同的 `lineColor` 值，那么组件将使用您传入的值来渲染线条颜色。

请在配置组件时考虑此优先级规则，以确保您的设置能够按预期生效。

## 全局配置

echart-sphere 提供了几种方法来设置全局配置，这些配置将作为默认值应用于所有图表实例。以下是可用的全局配置方法：

### `setConfig`

`setConfig` 方法允许您设置通用的图表配置项，如颜色方案、字体大小、工具提示等。

```
import { setConfig } from 'echart-sphere';

setConfig({
    barWidth: 5,
    barColor: 'rgba(132, 212, 232, 1)'
});
```

### `setLoadingConfig`

`setLoadingConfig` 方法允许您自定义图表的加载状态显示。您可以设置加载文本、颜色、字体大小等属性，以匹配您的应用程序的风格。

```
import { setLoadingConfig } from 'echart-sphere';

setLoadingConfig({
    text: "正在加载图表", // 加载时显示的文本
    color: "#009C84", // 加载图标的颜色
    textColor: "#009C84", // 加载文本的颜色
    maskColor: "rgba(255, 255, 255, 0.8)", // 加载遮罩层的颜色
    zlevel: 0,
    fontSize: 12, // 文本字体大小
    showSpinner: true, // 是否显示加载图标
    spinnerRadius: 10, // 加载图标的半径
    lineWidth: 2, // 加载图标线条的宽度
    fontWeight: "normal", // 文本字体粗细
    fontStyle: "normal", // 文本字体样式
    fontFamily: "sans-serif" // 文本字体族
});
```

### `setFlexibleConfig`

`setFlexibleConfig` 方法允许您设置图表的自适应行为，使图表能够根据不同屏幕尺寸动态调整大小。您可以指定设计稿的默认宽度、基准字体大小以及是否启用自适应功能。

```
import { setFlexibleConfig } from 'echart-sphere';

setFlexibleConfig({
    designWidth: 375, // 设计稿的默认宽度
    baseSize: 14, // 基准字体大小，用于计算缩放比例
    flexible: true // 是否开启自适应功能
});
```

#### 配置项

##### 柱形图配置

###### `barWidth`

- 类型: `number`
- 默认值: `5`
- 描述: 设置柱的宽度。

###### `barColor`

- 类型: `string`
- 默认值: `'rgba(132, 212, 232, 1)'`
- 描述: 设置柱的颜色。

###### `barBorderType`

- 类型: `string`
- 默认值: `'solid'`
- 描述: 设置柱边框的样式。

###### `barBorderColor`

- 类型: `string`
- 默认值: `'#fff'`
- 描述: 设置柱边框的颜色。

###### `barBorderWidth`

- 类型: `number`
- 默认值: `0`
- 描述: 设置柱边框的宽度。

###### `barGap`

- 类型: `string`
- 默认值: `'30%'`
- 描述: 设置同一类目中柱间的间隔。

###### `barSymbol`

- 类型: `string`
- 默认值: `'rect'`
- 描述: 设置 PictorialBar 的图形类型。默认为 `'rect'`，表示使用矩形。

###### `barSymbolRepeat`

- 类型: `string`
- 默认值: `'fixed'`
- 描述: 设置图形是否沿着柱的长度方向重复。`'fixed'` 表示不重复，图形将被拉伸。

###### `barSymbolMargin`

- 类型: `number`
- 默认值: `2`
- 描述: 设置图形在重复时的间隔。

###### `barSymbolOffset`

- 类型: `Array<number>`
- 默认值: `[0, 0]`
- 描述: 设置图形在柱体中的偏移位置。数组的两个元素分别对应水平和垂直方向的偏移。

###### `barSymbolSize`

- 类型: `Array<number>`
- 默认值: `[6, 2]`
- 描述: 设置图形的大小。数组的两个元素分别对应宽度和高度。

###### `barSymbolPosition`

- 类型: `string`
- 默认值: `'start'`
- 描述: 设置图形相对于柱体的位置。`'start'` 表示图形位于柱体的起始端。

###### `barSymbolClip`

- 类型: `boolean`
- 默认值: `true`
- 描述: 设置是否对超出柱体部分的图形进行裁剪。

##### 折线图配置

###### `lineColor`

- 类型: `string`
- 默认值: `"rgba(45, 174, 194, 1)"`
- 描述: 设置折线的颜色。

###### `lineSmooth`

- 类型: `boolean`
- 默认值: `true`
- 描述: 设置折线是否平滑显示，`true` 为平滑曲线，`false` 为直线连接。

###### `lineType`

- 类型: `string`
- 默认值: `'solid'`
- 描述: 设置折线的类型，可选值为 `'solid'`, `'dashed'`, 或 `'dotted'`。

###### `showSymbol`

- 类型: `boolean`
- 默认值: `false`
- 描述: 设置是否显示折线图的数据点。

##### Legend 图例配置

###### `legendWidth`

- 类型: `number`
- 默认值: `10`
- 描述: 设置图例的宽度。

###### `legendHeight`

- 类型: `number`
- 默认值: `4`
- 描述: 设置图例的高度。

###### `legendBottom`

- 类型: `number`
- 默认值: `0`
- 描述: 设置图例距离底部的距离。

###### `legendSize`

- 类型: `number`
- 默认值: `12`
- 描述: 设置图例字体的大小。

##### Grid 配置

###### `gridTop`

- 类型: `number`
- 默认值: `22`
- 描述: 设置图表上方的边距。

###### `gridLeft`

- 类型: `number`
- 默认值: `3`
- 描述: 设置图表左侧的边距。

###### `gridRight`

- 类型: `number`
- 默认值: `5`
- 描述: 设置图表右侧的边距。

###### `gridBottom`

- 类型: `number`
- 默认值: `30`
- 描述: 设置图表下方的边距。

###### `isContainLabel`

- 类型: `boolean`
- 默认值: `true`
- 描述: 设置网格区域是否包含坐标轴的标签。

##### Series 配置

###### `yAxisField`

- 类型: `string`
- 默认值: `"value"`
- 描述: 设置系列数据在 Y 轴上的取值字段。

###### `yAxisIndex`

- 类型: `number`
- 默认值: `0`
- 描述: 指定使用哪一条 Y 轴，`0` 表示第一条 Y 轴。

##### DataZoom 配置

###### `dataZoomType`

- 类型: `string`
- 默认值: `'inside'`
- 描述: 设置数据区域缩放组件的类型。`'inside'` 表示内置型数据区域缩放组件，允许通过鼠标滚轮或触摸板进行缩放。

###### `dataZoomXAxisIndex`

- 类型: `number`
- 默认值: `0`
- 描述: 指定哪一个 x 轴与数据区域缩放组件关联，默认关联第一个 x 轴。

##### X 轴配置

###### `xAxisField`

- 类型: `string`
- 默认值: `"label"`
- 描述: 设置 X 轴的取值字段。

###### `xAxisLabelSize`

- 类型: `number`
- 默认值: `8`
- 描述: 设置 X 轴标签的字体大小。

###### `xAxisTickShow`

- 类型: `boolean`
- 默认值: `false`
- 描述: 设置是否显示 X 轴的刻度。

##### Y 轴配置

###### `yAxisLabelSize`

- 类型: `number`
- 默认值: `10`
- 描述: 设置 Y 轴标签的字体大小。

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

#### `isFormatter`

- 类型: `boolean`
- 描述: 是否开启数据项的值格式化。

### chartOptions

`chartOptions` 是一个对象，用于配置图表的行为和样式。以下是可用的配置项及其作用：

#### `chartType`

- 类型: `string`
- 默认值: `"normal"`
- 描述: 指定内置的图表类型。这决定了图表的整体呈现方式和交互行为。默认为 `"normal"`，表示标准图表。您可以选择其他预定义的图表类型，如 `'customLine'`, `'customBar'`, `'customPie'` 等。

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

### styleOptions

#### `styleOptions` 是一个对象，用于自定义图表的样式。它包含了一系列属性，这些属性与全局配置的属性同名，允许您在单个图表级别上覆盖全局样式设置。这些属性包括但不限于颜色方案、字体大小、边距等。

## 扩展图表类型

echart-sphere 提供了一套扩展机制，允许开发者自定义和扩展不同的图表组件类型。以下是如何使用这些扩展点：

### X 轴类型扩展

使用 `xAxisExtend` 方法来扩展或自定义 X 轴的行为。您可以注册一个新的 X 轴类型，并提供一个函数来定义它的行为。

```
import Vue3Charts from "echart-sphere";
Vue3Charts.xAxisExtend.extend('customXType', (props) => {
// 自定义 X 轴的行为
});
```

### Y 轴类型扩展

类似地，`yAxisExtend` 允许您扩展 Y 轴的行为。通过提供一个类型和一个函数，您可以定义 Y 轴的新行为。

```
import Vue3Charts from "echart-sphere";
Vue3Charts.yAxisExtend.extend('customXType', (props) => {
// 自定义 Y 轴的行为
});
```

### Grid 类型扩展

使用 `gridExtend` 来自定义网格的配置和行为。您可以为网格定义一个新的类型和相应的行为。

```
import Vue3Charts from "echart-sphere";
Vue3Charts.gridExtend.extend('customXType', (props) => {
// 自定义网格的配置和行为
});
```

### Tooltip 类型扩展

`tooltipExtend` 允许您自定义提示框的显示方式。通过注册一个新类型，您可以控制提示框的渲染和行为。

```
import Vue3Charts from "echart-sphere";
Vue3Charts.tooltipExtend.extend('customXType', (props) => {
// 自定义提示框的显示方式
});
```

### Legend 图例类型扩展

使用 `legendExtend` 来自定义图例的样式和行为。您可以定义新的图例类型来改变其默认的显示和交互。

```
import Vue3Charts from "echart-sphere";
Vue3Charts.legendExtend.extend('customXType', (props) => {
// 自定义图例的样式和行为
});
```

### Series 类型扩展

`seriesExtend` 方法允许您扩展系列的配置。通过注册新的系列类型，您可以自定义系列的渲染方式。

```

import Vue3Charts from "echart-sphere";
Vue3Charts.seriesExtend.extend('customXType', (props) => {
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

import Vue3Charts from "echart-sphere";
Vue3Charts.seriesExtend.afterHook('customXType', (props) => {
// 自定义系列的渲染方式
});
```

#### 注意，"customXType"必须是已经存在的类型，afterHook 和 beforeHook 钩子才生效

### 图表类型扩展

最后，`chartExtend` 提供了一个强大的扩展点，允许您定义整个图表的行为。您可以注册一个新的图表类型，并提供一个回调函数来自定义整个图表的渲染逻辑。

```

import Vue3Charts from "echart-sphere";
Vue3Charts.chartExtend.extend('customXType', (props) => {
// 自定义整个图表的渲染逻辑
});
```

通过这些扩展点，您可以灵活地增加新的行为和样式，以满足特定的业务需求或创造独特的图表效果。

