import { createApp } from "vue";
import App from "./App.vue"; // 假设你的Vue根组件在这里
import "china-map-echarts";
import EchartSphere, { setTheme } from "../src";
// import EchartSphere from "../src";
// setTheme("modern");
const app = createApp(App);
app.use(EchartSphere);
app.mount("#app");
