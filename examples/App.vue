<template>
  <div class="echart-sphere-wrapper">
    <NormalChart v-bind="options"></NormalChart>
  </div>
</template>
<script lang="ts" setup>
import { NormalChart } from "../src";
</script>
<style lang="css">
.echart-sphere-wrapper {
  width: 600px;
  height: 400px;
  background-color: aliceblue;
}
</style>
