<template>
  <div class="echart-sphere-wrapper">
    <NormalChart v-bind="options"></NormalChart>
  </div>
</template>
<script lang="ts" setup>
import { NormalChart } from "../src";
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
