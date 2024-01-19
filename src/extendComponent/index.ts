import { extendOptions } from "../hooks/useExtend";
import parentChildPieComponent from "./parentChildPie";
import normalComponent from "./normal";
import radarComponent from "./radarChart";
import mapComponent from "./mapChart";

const componentMap = new Map([
  ["parent-child-pie", parentChildPieComponent],
  ["normal", normalComponent],
  ["radar", radarComponent],
  ["map", mapComponent],
]);

export function registerExtendComponents(Vue?: any) {
  [...componentMap.entries()].forEach((item) => {
    extendOptions.chartExtend.extend(item[0], item[1]);
  });
}
