import { ThemeType } from "@/models/propOptionModel";
import setModernTheme from "./modern";

export function setTheme(type: ThemeType) {
  const themeFnMap = new Map([["modern", setModernTheme]]);
  const themeFn = themeFnMap.get(type);
  return themeFn ? themeFn() : setModernTheme();
}
