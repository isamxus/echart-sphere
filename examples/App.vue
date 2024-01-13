<template>
  <div class="echart-sphere-wrapper">
    <NormalChart v-bind="options"></NormalChart>
  </div>
</template>
<script lang="ts" setup>
import { NormalChart } from "../src";
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
    chartType: 'pie'
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
