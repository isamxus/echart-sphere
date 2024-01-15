import { extendOptions } from "../hooks/useExtend";
import parentChildPieComponent from "./parentChildPie";
import normalComponent from "./normal";

const componentMap = new Map([
  ["parent-child-pie", parentChildPieComponent],
  ["normal", normalComponent],
]);

export function registerExtendComponents() {
  [...componentMap.entries()].forEach((item) => {
    extendOptions.chartExtend.extend(item[0], item[1]);
  });
}
