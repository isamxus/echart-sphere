/**
 *  对象深拷贝
 */
export function deepCopy(sourceData: any): any {
  if (sourceData === null || typeof sourceData === "undefined" || typeof sourceData !== "object") {
    return sourceData;
  }
  if (Array.isArray(sourceData)) {
    const newArray: Array<any> = [];
    sourceData.forEach((item: any) => {
      if (typeof item === "object") {
        newArray.push(deepCopy(item));
      } else {
        newArray.push(item);
      }
    });
    return newArray;
  }
  const newObj: any = {};
  Object.keys(sourceData).forEach((key: string) => {
    if (typeof sourceData[key] === "object") {
      newObj[key] = deepCopy(sourceData[key]);
    } else {
      newObj[key] = sourceData[key];
    }
  });
  return newObj;
}
