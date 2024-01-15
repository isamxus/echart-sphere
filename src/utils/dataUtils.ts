import { treeConfig } from "../constants/globalConfig";

/**
 *  对象深拷贝
 */
export function deepCopy(sourceData: any): any {
  if (
    sourceData === null ||
    typeof sourceData === "undefined" ||
    typeof sourceData !== "object"
  ) {
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

/**
 * 将数组转化为树型结构
 * @param {Array<any>} list - 待转换的数组
 * @param {string} idKey - 节点ID的属性名，默认为'id'
 * @param {string} parentKey - 父节点ID的属性名，默认为'parentId'
 * @returns {Array<any>} - 树型结构数组
 */
export function listToTree(
  list: Array<any>,
  idKey: string = treeConfig.idKey,
  parentKey: string = treeConfig.parentKey
): Array<any> {
  const map = {};
  const roots = [];
  list.forEach((item) => {
    map[item[idKey]] = { ...item, children: [] };
  });
  list.forEach((item) => {
    const parent = map[item[parentKey]];
    if (parent) {
      parent.children.push(map[item[idKey]]);
    } else {
      roots.push(map[item[idKey]]);
    }
  });
  return roots;
}
