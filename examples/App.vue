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
