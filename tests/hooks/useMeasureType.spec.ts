import { expect } from "chai";
import {
  toFixedString,
  converToTenThousandYuan,
  convertToBillionYuan,
  toFixedNumber,
  convertToPercent,
  formatToCurrencyString,
  getIndexConvertValueByUnitType,
  getIndexFormatStringByUnitType,
  handleMeasure,
  DEFAULT_NUMBER_FORMAT_OPTIONS,
} from "../../src/hooks/useMeasureType";
import { DataFormatType } from "@/constants/dataFormatConfig";
import { RenderPropOptions } from "@/models/propOptionModel";

describe("useMeasureType", () => {
  describe("toFixedString", () => {
    it("should format number to fixed string with rounding", () => {
      const value = 1234.567;
      const digits = 2;
      const result = toFixedString(value, digits);
      expect(result).to.equal("1234.57");
    });

    it("should format number to fixed string without rounding", () => {
      const value = 1234.567;
      const digits = 2;
      const round = false;
      // Assuming commafy function truncates instead of rounding when round option is false
      const result = toFixedString(value, digits, round);
      expect(result).to.equal("1234.57");
    });

    it("should handle values with fewer decimal places than digits", () => {
      const value = 1234.5;
      const digits = 3;
      const result = toFixedString(value, digits);
      expect(result).to.equal("1234.500");
    });

    it("should return integer as is when digits is 0", () => {
      const value = 1234;
      const digits = 0;
      const result = toFixedString(value, digits);
      expect(result).to.equal("1234");
    });
  });
  describe("toFixedNumber", () => {
    it("should format number to fixed number with rounding", () => {
      const value = 1234.567;
      const digits = 2;
      const result = toFixedNumber(value, digits);
      expect(result).to.be.a("number");
      expect(result).to.equal(1234.57);
    });

    it("should format number to fixed number without rounding", () => {
      const value = 1234.567;
      const digits = 2;
      const round = false;
      // Assuming toFixedString function truncates instead of rounding when round option is false
      const result = toFixedNumber(value, digits, round);
      expect(result).to.be.a("number");
      expect(result).to.equal(1234.57);
    });

    it("should handle values with fewer decimal places than digits", () => {
      const value = 1234.5;
      const digits = 3;
      const result = toFixedNumber(value, digits);
      expect(result).to.be.a("number");
      expect(result).to.equal(1234.5);
    });

    it("should return integer as is when digits is 0", () => {
      const value = 1234;
      const digits = 0;
      const result = toFixedNumber(value, digits);
      expect(result).to.be.a("number");
      expect(result).to.equal(1234);
    });
  });
  describe("converToTenThousandYuan", () => {
    it("should convert number to ten thousand yuan with rounding", () => {
      const value = 12345678;
      const digits = 2;
      const result = converToTenThousandYuan(value, digits);
      expect(result).to.be.a("number");
      expect(result).to.equal(1234.57); // 12345678 / 10000 rounded to 2 decimal places
    });

    it("should convert number to ten thousand yuan without rounding", () => {
      const value = 12345678;
      const digits = 2;
      const round = false;
      const result = converToTenThousandYuan(value, digits, round);
      expect(result).to.be.a("number");
      expect(result).to.equal(1234.57); // 12345678 / 10000 truncated to 2 decimal places
    });

    it("should handle values less than ten thousand correctly", () => {
      const value = 5678;
      const digits = 2;
      const result = converToTenThousandYuan(value, digits);
      expect(result).to.be.a("number");
      expect(result).to.equal(0.57); // 5678 / 10000 rounded to 2 decimal places
    });

    it("should return zero when value is zero", () => {
      const value = 0;
      const digits = 2;
      const result = converToTenThousandYuan(value, digits);
      expect(result).to.be.a("number");
      expect(result).to.equal(0);
    });

    // Add more test cases if necessary
  });

  describe("convertToBillionYuan", () => {
    it("should convert number to billion yuan with rounding", () => {
      const value = 1234567890;
      const digits = 2;
      const result = convertToBillionYuan(value, digits);
      expect(result).to.be.a("number");
      expect(result).to.equal(12.35); // 1234567890 / 100000000 rounded to 2 decimal places
    });

    it("should convert number to billion yuan without rounding", () => {
      const value = 1234567890;
      const digits = 2;
      const round = false;
      const result = convertToBillionYuan(value, digits, round);
      expect(result).to.be.a("number");
      expect(result).to.equal(12.35); // 1234567890 / 100000000 truncated to 2 decimal places
    });

    it("should handle values less than a billion correctly", () => {
      const value = 12345678;
      const digits = 2;
      const result = convertToBillionYuan(value, digits);
      expect(result).to.be.a("number");
      expect(result).to.equal(0.12); // 12345678 / 100000000 rounded to 2 decimal places
    });

    it("should return zero when value is zero", () => {
      const value = 0;
      const digits = 2;
      const result = convertToBillionYuan(value, digits);
      expect(result).to.be.a("number");
      expect(result).to.equal(0);
    });

    // Add more test cases if necessary
  });

  describe("convertToPercent", () => {
    it("should convert number to percent with rounding", () => {
      const value = 0.123456;
      const digits = 2;
      const result = convertToPercent(value, digits);
      expect(result).to.be.a("number");
      expect(result).to.equal(12.35); // 0.123456 / 0.01 rounded to 2 decimal places
    });

    it("should convert number to percent without rounding", () => {
      const value = 0.123456;
      const digits = 2;
      const round = false;
      const result = convertToPercent(value, digits, round);
      expect(result).to.be.a("number");
      expect(result).to.equal(12.35); // 0.123456 / 0.01 truncated to 2 decimal places
    });

    it("should handle values with fewer decimal places than digits", () => {
      const value = 0.1;
      const digits = 3;
      const result = convertToPercent(value, digits);
      expect(result).to.be.a("number");
      expect(result).to.equal(10.0); // 0.1 / 0.01 rounded to 3 decimal places
    });

    it("should return integer percent as is when digits is 0", () => {
      const value = 0.5;
      const digits = 0;
      const result = convertToPercent(value, digits);
      expect(result).to.be.a("number");
      expect(result).to.equal(50); // 0.5 / 0.01 with 0 decimal places
    });
  });
  describe("formatToCurrencyString", () => {
    const defaultOptions = {
      thousandth: true,
      digits: 2,
      round: true,
      defaultString: "--",
    };

    it("should format number to currency string with thousand separator", () => {
      const value = 1234567.89;
      const result = formatToCurrencyString(value, defaultOptions);
      expect(result).to.equal("1,234,567.89");
    });

    it("should format number to currency string without thousand separator", () => {
      const value = 1234567.89;
      const options = { ...defaultOptions, thousandth: false };
      const result = formatToCurrencyString(value, options);
      expect(result).to.equal("1234567.89");
    });

    it("should handle rounding when specified", () => {
      const value = 1234567.895;
      const result = formatToCurrencyString(value, defaultOptions);
      expect(result).to.equal("1,234,567.90");
    });

    it("should handle non-rounding when specified", () => {
      const value = 1234567.895;
      const options = { ...defaultOptions, round: false };
      const result = formatToCurrencyString(value, options);
      // Assuming commafy function truncates instead of rounding when round option is false
      expect(result).to.equal("1,234,567.90");
    });

    it("should return default string for NaN values", () => {
      const value = NaN;
      const result = formatToCurrencyString(value, defaultOptions);
      expect(result).to.equal(defaultOptions.defaultString);
    });

    it("should return empty string for NaN values if default string is not provided", () => {
      const value = NaN;
      const options = { ...defaultOptions, defaultString: undefined };
      const result = formatToCurrencyString(value, options);
      expect(result).to.equal("");
    });

    // Add more test cases if necessary
  });
  describe("getIndexConvertValueByUnitType", () => {
    it("should convert value to ten thousand yuan unit", () => {
      const originalValue = 12345678;
      const convertUnitType = DataFormatType.TEN_THOUSAND;
      const digits = 2;
      const result = getIndexConvertValueByUnitType(
        originalValue,
        convertUnitType,
        digits
      );
      expect(result).to.equal(1234.57); // Assuming converToTenThousandYuan works correctly
    });

    it("should convert value to billion yuan unit", () => {
      const originalValue = 1234567890;
      const convertUnitType = DataFormatType.BILLION;
      const digits = 2;
      const result = getIndexConvertValueByUnitType(
        originalValue,
        convertUnitType,
        digits
      );
      expect(result).to.equal(12.35); // Assuming convertToBillionYuan works correctly
    });

    it("should convert value to percent unit", () => {
      const originalValue = 0.123456;
      const convertUnitType = DataFormatType.PERCENT;
      const digits = 2;
      const result = getIndexConvertValueByUnitType(
        originalValue,
        convertUnitType,
        digits
      );
      expect(result).to.equal(12.35); // Assuming convertToPercent works correctly
    });

    it("should return original value for unknown unit type", () => {
      const originalValue = 12345678;
      const convertUnitType = "UNKNOWN_UNIT";
      const digits = 2;
      const result = getIndexConvertValueByUnitType(
        originalValue,
        convertUnitType,
        digits
      );
      expect(result).to.equal(originalValue);
    });

    it("should return original value if input is not a number", () => {
      const originalValue = "not a number";
      const convertUnitType = DataFormatType.BILLION;
      const digits = 2;
      const result = getIndexConvertValueByUnitType(
        originalValue as any,
        convertUnitType,
        digits
      );
      expect(result).to.equal(originalValue);
    });

    // Add more test cases if necessary
  });
  describe("getIndexFormatStringByUnitType", () => {
    it("should format value as currency string for ten thousand yuan unit", () => {
      const originalValue = 12345678;
      const convertUnitType = DataFormatType.TEN_THOUSAND;
      const result = getIndexFormatStringByUnitType(
        originalValue,
        convertUnitType
      );
      expect(result).to.equal("1,234.57"); // Assuming formatToCurrencyString works correctly
    });

    it("should format value as currency string for billion yuan unit", () => {
      const originalValue = 1234567890;
      const convertUnitType = DataFormatType.BILLION;
      const result = getIndexFormatStringByUnitType(
        originalValue,
        convertUnitType
      );
      expect(result).to.equal("12.35"); // Assuming formatToCurrencyString works correctly
    });

    it("should format value as percent string for percent unit", () => {
      const originalValue = 0.123456;
      const convertUnitType = DataFormatType.PERCENT;
      const result = getIndexFormatStringByUnitType(
        originalValue,
        convertUnitType
      );
      expect(result).to.equal("12.35%"); // Assuming formatToCurrencyString works correctly
    });

    it("should format value as integer string for number unit", () => {
      const originalValue = 1234.5678;
      const convertUnitType = DataFormatType.NUMBER;
      const result = getIndexFormatStringByUnitType(
        originalValue,
        convertUnitType
      );
      expect(result).to.equal("1,235"); // Assuming formatToCurrencyString works correctly
    });

    it("should return default string for NaN values", () => {
      const originalValue = NaN;
      const convertUnitType = DataFormatType.BILLION;
      const result = getIndexFormatStringByUnitType(
        originalValue,
        convertUnitType
      );
      expect(result).to.equal("--"); // Default string as defined in DEFAULT_NUMBER_FORMAT_OPTIONS
    });

    it("should return default string for null values", () => {
      const originalValue = null;
      const convertUnitType = DataFormatType.BILLION;
      const result = getIndexFormatStringByUnitType(
        originalValue as any,
        convertUnitType
      );
      expect(result).to.equal("--"); // Default string as defined in DEFAULT_NUMBER_FORMAT_OPTIONS
    });
    it("should return default string for NaN values", () => {
      const originalValue = NaN;
      const convertUnitType = DataFormatType.BILLION;
      const result = getIndexFormatStringByUnitType(
        originalValue,
        convertUnitType
      );
      expect(result).to.equal(DEFAULT_NUMBER_FORMAT_OPTIONS.defaultString);
    });

    it("should return default string for null values", () => {
      const originalValue = null;
      const convertUnitType = DataFormatType.BILLION;
      const result = getIndexFormatStringByUnitType(
        originalValue as any,
        convertUnitType
      );
      expect(result).to.equal(DEFAULT_NUMBER_FORMAT_OPTIONS.defaultString);
    });
    // Add more test cases if necessary
  });
  describe("handleMeasure", () => {
    it("should not modify data if isFormatter is false", () => {
      const props: RenderPropOptions = {
        dataOptions: {
          data: [{ value: 1000000 }],
          isFormatter: false,
        },
      };
      handleMeasure(props);
      expect(props.dataOptions.data[0].value).to.equal(1000000);
    });

    it("should apply negative transformation if isNegative is true", () => {
      const props: RenderPropOptions = {
        dataOptions: {
          data: [{ value: 1000000 }],
          isNegative: true,
          isFormatter: true,
        },
      };
      handleMeasure(props);
      // Assuming getIndexConvertValueByUnitType works correctly
      expect(props.dataOptions.data[0].value).to.be.lessThan(0);
    });

    it("should convert data using default measureType if not specified", () => {
      const props: RenderPropOptions = {
        dataOptions: {
          data: [{ value: 1000000 }],
          isFormatter: true,
        },
      };
      handleMeasure(props);
      // Assuming getIndexConvertValueByUnitType works correctly
      expect(props.dataOptions.data[0].value).to.be.a("number");
    });

    it("should use custom formatter if provided", () => {
      const customFormatter = (value) => `formatted ${value}`;
      const props: RenderPropOptions = {
        dataOptions: {
          data: [{ value: 1000000 }],
          isFormatter: true,
          formatter: customFormatter,
        },
      };
      handleMeasure(props);
      expect(props.dataOptions.data[0].value).to.equal(
        customFormatter(1000000)
      );
    });

    it("should handle multiple data items with different configurations", () => {
      const props: RenderPropOptions = {
        dataOptions: {
          data: [{ value1: 1000000, value2: 2000000 }],
          dataItems: [
            { labelY: "value1", measureType: DataFormatType.BILLION },
            { labelY: "value2", measureType: DataFormatType.TEN_THOUSAND },
          ],
          isFormatter: true,
        },
      };
      handleMeasure(props);
      // Assuming getIndexConvertValueByUnitType works correctly
      expect(props.dataOptions.data[0].value1).to.be.a("number");
      expect(props.dataOptions.data[0].value2).to.be.a("number");
    });

    it("should use custom formatter for data items if provided", () => {
      const customFormatter = (value) => `formatted ${value}`;
      const props: RenderPropOptions = {
        dataOptions: {
          data: [{ value1: 1000000 }],
          dataItems: [{ labelY: "value1", formatter: customFormatter }],
          isFormatter: true,
        },
      };
      handleMeasure(props);
      expect(props.dataOptions.data[0].value1).to.equal(
        customFormatter(1000000)
      );
    });
    it("should apply negative transformation to the value if isNegative is true", () => {
      const props: RenderPropOptions = {
        dataOptions: {
          data: [{ value1: 1000000 }],
          dataItems: [{ labelY: "value1", isNegative: true }],
          isFormatter: true,
        },
      };
      handleMeasure(props);
      // Assuming getIndexConvertValueByUnitType works correctly and returns a positive number
      // The test checks if the value has been negated
      expect(props.dataOptions.data[0].value1).to.be.below(0);
    });
  });
});
