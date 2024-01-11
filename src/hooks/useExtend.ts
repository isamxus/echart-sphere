import { Arrayable } from "../models/buildChartModel";
import { RenderPropOptions } from "../models/propOptionModel";

export default function useExtend<T>(map: Map<string, any>) {
  // 扩展类型函数
  function extend(type: string, fn: (props: RenderPropOptions) => Arrayable<T>) {
    map.set(type, fn);
  }
  // 类型钩子-在类型初始化之前
  function beforeHook(type: string, fn: (props: RenderPropOptions) => void) {
    const strategy = map.get(type);
    if (strategy) {
      map.set(type, (props: RenderPropOptions) => {
        fn(props);
        return strategy(props);
      });
    }
  }
  // 类型钩子-在类型完成初始化后
  function afterHook(type: string, fn: (props: RenderPropOptions) => Arrayable<T>) {
    const strategy = map.get(type);
    if (strategy) {
      map.set(type, (props: RenderPropOptions) => {
        const result = strategy(props);
        return fn(result);
      });
    }
  }
  return {
    extend,
    beforeHook,
    afterHook
  };
}
