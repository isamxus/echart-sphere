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
    dataItems: [{ name: "K线图", labelX: "label" }],
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
