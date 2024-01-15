<template>
  <component
    class="universal-echart-component-wrapper"
    v-if="renderComponent"
    :is="renderComponent"
    v-bind="props"
    ref="chartComponentRef"
  ></component>
</template>
<script lang="ts" setup>
import useNormalChart from "./hooks/useNormalChart";
import { RenderPropOptions } from "../models/propOptionModel";
import { onMounted } from "vue";
const props = defineProps<RenderPropOptions>();
const { renderComponent, chartComponentRef, exposeMethods } = useNormalChart(props);
defineExpose(exposeMethods);
onMounted(() => {
  Object.assign(exposeMethods, {
    ...chartComponentRef.value
  })
});
</script>
<style>
.universal-echart-component-wrapper {
  width: 100%;
  height: 100%;
}
</style>
