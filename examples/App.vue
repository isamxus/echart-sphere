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
    componentType: "radar",
    radar: {
      max: 'max'
    }
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
