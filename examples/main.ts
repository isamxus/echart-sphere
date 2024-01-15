import { createApp } from "vue";
import App from "./App.vue"; // 假设你的Vue根组件在这里
import EchartSphere, { setConfig } from "../src";
const app = createApp(App);
app.use(EchartSphere);
app.mount("#app");
