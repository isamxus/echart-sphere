import { expect } from "chai";
import sinon from "sinon";
import {
  getBarValueOptions,
  getValueOptionsByType,
  typeToValueOptionMap,
} from "../../src/hooks/useGetValueOptions";

describe("useGetValueOptions", () => {
  describe("getBarValueOptions", () => {
    it("should return an empty object when no styles are provided", () => {
      const result = getBarValueOptions();
      expect(result).to.deep.equal({});
    });

    it("should return itemStyle based on provided styles", () => {
      const styles = {
        barColor: "red",
        barBorderColor: "blue",
        barBorderWidth: 2,
        barBorderType: "solid",
      };
      const expected = {
        itemStyle: {
          color: "red",
          borderColor: "blue",
          borderWidth: 2,
          borderType: "solid",
        },
      };
      const result = getBarValueOptions(styles);
      expect(result).to.deep.equal(expected);
    });
  });

  describe("getValueOptionsByType", () => {
    it("should return bar value options by default", () => {
      const styles = {
        barColor: "red",
      };
      const expected = {
        itemStyle: {
          color: "red",
          borderColor: undefined,
          borderWidth: undefined,
          borderType: undefined,
        },
      };
      const result = getValueOptionsByType(undefined, styles);
      expect(result).to.deep.equal(expected);
    });

    it("should use a custom function from typeToValueOptionMap if available", () => {
      const customFunction = sinon.stub().returns({ custom: "value" });
      typeToValueOptionMap.set("customType", customFunction);

      const result = getValueOptionsByType("customType", {});
      sinon.assert.calledOnce(customFunction);
      expect(result).to.deep.equal({ custom: "value" });

      // Clean up
      typeToValueOptionMap.delete("customType");
    });
  });
});
