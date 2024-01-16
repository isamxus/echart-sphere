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
