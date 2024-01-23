<template>
  <div class="echart-sphere-wrapper">
    <normal-chart v-bind="options" />
  </div>
</template>
<script lang="ts" setup>
const getValue = () => Math.floor(Math.random() * 100);
const options = {
  dataOptions: {
    dataItems: [{ name: "仪表盘", labelX: "label", labelY: "value" }],
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
