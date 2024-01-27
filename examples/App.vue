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
