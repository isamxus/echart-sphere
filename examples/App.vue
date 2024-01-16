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
