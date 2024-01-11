<template>
  <component v-if="renderComponent" :is="renderComponent"></component>
  <div v-else class="universal-echart-component-wrapper" ref="chartRef"></div>
</template>
<script lang="ts" setup>
import useNormalChart from "./hooks/useNormalChart";
import { RenderPropOptions } from "../models/propOptionModel";
const props = defineProps<RenderPropOptions>();
const { chartRef, renderComponent } = useNormalChart(props);
</script>
<style>
.universal-echart-component-wrapper {
  width: 100%;
  height: 100%;
}
</style>
