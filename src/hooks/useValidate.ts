import { RenderPropOptions } from "../models/propOptionModel";

export function usePropsValidate(props: RenderPropOptions) {
  const { dataOptions } = props;
  if (!dataOptions || typeof dataOptions !== "object") {
    console.warn("Warning: dataOptions is required and should be an object.");
    return false;
  }
  return true;
}
