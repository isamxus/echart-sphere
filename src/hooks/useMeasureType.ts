import { isNumber as _isNumber, commafy, toNumber } from "xe-utils";
import { DataFormatType } from "../constants/dataFormatConfig";
import { CurrencyFormatOption } from "../models/dataFormatModel";
import globalConfig from "@/constants/globalConfig";
import { RenderPropOptions } from "@/models/propOptionModel";

// 货币格式化默认配置
export const DEFAULT_NUMBER_FORMAT_OPTIONS = {
  thousandth: true,
  digits: 2,
  round: true,
  defaultString: "--",
};
// 千分号符号
export const THOUSAND_SEPARATOR = ",";

/**
 * 判断是否数字
 */
export function isNumber(value: any) {
  return _isNumber(value);
}
/**
 * 格式化小数位
 */
export function toFixedString(value: number, digits: number, round = true): string {
  const options = {
    digits: digits,
    round: round,
  };
  const stringValue = commafy(value, options);
  return stringValue.replaceAll(",", "");
}
/**
 * 格式化小数位
 */
export function toFixedNumber(value: number, digits: number, round = true): number {
  const stringValue = toFixedString(value, digits, round);
  return toNumber(stringValue);
}
/**
 * 换算为万元
 */
export function converToTenThousandYuan(
  value: number,
  digits: number,
  round = true
): number {
  return toFixedNumber(value / 10000, digits, round);
}

/**
 * 换算为亿元
 */
export function convertToBillionYuan(
  value: number,
  digits: number,
  round = true
): number {
  return toFixedNumber(value / 100000000, digits, round);
}

/**
 * 转换为百分比数值
 */
export function convertToPercent(value: number, digits: number, round = true): number {
  return toFixedNumber(value / 0.01, digits, round);
}

/**
 * 格式化货币
 */
export function formatToCurrencyString(
  value: number,
  options: CurrencyFormatOption
): string {
  if (isNaN(value)) {
    return options.defaultString || "";
  }
  const numberValue = value;
  const commafyOptions = {
    separator: THOUSAND_SEPARATOR,
    digits: options.digits,
    round: options.round,
  };
  let resultString = commafy(numberValue, commafyOptions);
  // 不显示千分位则移除
  if (!options.thousandth) {
    resultString = resultString.replaceAll(THOUSAND_SEPARATOR, "");
  }
  return resultString;
}

/**
 * 根据单位获转换显示的数值(把元转换为换算单位对应的值)
 */
export function getIndexConvertValueByUnitType(
  originalValue: number,
  convertUnitType: string = DataFormatType.BILLION,
  digits = 2,
  round = true
): number {
  let convertValue = originalValue;
  if (!isNumber(originalValue)) {
    return convertValue;
  }
  switch (convertUnitType) {
    // 万元
    case DataFormatType.TEN_THOUSAND:
      convertValue = converToTenThousandYuan(convertValue, digits, round);
      break;
    // 亿元
    case DataFormatType.BILLION:
      convertValue = convertToBillionYuan(convertValue, digits, round);
      break;
    // 百分比
    case DataFormatType.PERCENT:
      convertValue = convertToPercent(convertValue, digits, round);
      break;
    default:
      break;
  }
  return convertValue;
}

/**
 * 根据单位获取转换显示的格式(把元转换为换算单位对应的值)
 */
export function getIndexFormatStringByUnitType(
  originalValue: number,
  convertUnitType: DataFormatType
): string {
  const options = DEFAULT_NUMBER_FORMAT_OPTIONS;
  // 非数字显示
  if (isNaN(originalValue) || originalValue === null) {
    return options.defaultString || "";
  }
  // 个数不显示小数位
  if (convertUnitType === DataFormatType.NUMBER) {
    options.digits = 0;
  }
  // 换算值
  const convertValue = getIndexConvertValueByUnitType(
    originalValue,
    convertUnitType,
    options.digits
  );
  // 格式化显示值
  const formatString = formatToCurrencyString(convertValue, options);
  // 百分比
  if (convertUnitType === DataFormatType.PERCENT) {
    return `${formatString}%`;
  }
  return formatString;
}


// 处理计量单位
export function handleMeasure(props: RenderPropOptions) {
  const {
    data = [],
    dataItems = [],
    labelY = globalConfig.yAxisField,
    measureType = DataFormatType.BILLION,
    isNegative = false,
    isFormatter = false,
    formatter,
  } = props.dataOptions;
  if (!isFormatter) return;
  const tranFieldsMap = new Map<
    string,
    {
      measureType: string;
      isNegative: boolean;
      formatter: ((value: any) => any) | undefined;
    }
  >();

  if (dataItems.length) {
    dataItems.forEach((item) => {
      item.labelY &&
        tranFieldsMap.set(item.labelY, {
          measureType: item.measureType || measureType,
          isNegative: item.isNegative || isNegative,
          formatter: item.formatter || formatter,
        });
    });
    data.forEach((item) => {
      [...tranFieldsMap.entries()].forEach((fieldItem) => {
        const field = fieldItem[0];
        const formatItem = fieldItem[1];
        if (formatItem.formatter)
          return (item[field] = formatItem.formatter(item[field]));
        let value = Number.parseFloat(item[field]);
        if (formatItem.isNegative) value = -value;
        item[field] = getIndexConvertValueByUnitType(
          value,
          formatItem.measureType
        );
      });
    });
    return;
  }
  data.forEach((item) => {
    let value = Number.parseFloat(item[labelY]);
    if (formatter) return (item[labelY] = formatter(item[labelY]));
    if (isNegative) value = -value;
    item[labelY] = getIndexConvertValueByUnitType(value, measureType);
  });
}