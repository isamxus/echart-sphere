import { expect } from "chai";
import {
  buildPieNormalLegend,
  buildPieWithDetailLegend,
} from "../../../src/strategy/pieStrategy/usePieLegend";

describe("usePieLegend", () => {
  describe("buildPieNormalLegend", () => {
    it("should build pie normal legend options correctly", () => {
      // Define the mock data and props
      const mockDataItems = [{ name: "Test", labelX: "x", labelY: "y" }];
      const mockProps = {
        dataOptions: {
          data: [{ id: "01", x: "Category A", y: 20 }],
          dataItems: mockDataItems,
        },
        styleOptions: {
          legendType: "scroll",
          legendOrient: "vertical",
          legendWidth: 25,
          legendHeight: 14,
          legendBottom: 10,
          legendTop: "middle",
          legendSize: 12,
        },
      };

      // Call the method to test
      const result = buildPieNormalLegend(mockProps);

      // Assertions
      expect(result).to.be.an("object");
      expect(result).to.have.property("type", "scroll");
      expect(result).to.have.property("orient", "vertical");
      expect(result).to.have.property("itemWidth", 25);
      expect(result).to.have.property("itemHeight", 14);
      expect(result).to.have.property("bottom", 10);
      expect(result).to.have.property("top", "middle");
      expect(result.textStyle).to.have.property("fontSize", 12);
      expect(result.data).to.be.an("array");
      expect(result.data).to.have.length(1);
      expect(result.data[0]).to.deep.equal({ name: "Category A", value: 20 });
    });
  });
  describe("buildPieWithDetailLegend", () => {
    it("should build pie with detail legend options correctly", () => {
      // Define the mock data and props
      const mockData = [
        { id: "01", x: "Category A", y: 20 },
        { id: "02", x: "Category B", y: 30 },
      ];
      const mockDataItems = [
        {
          name: "Test",
          labelX: "x",
          labelY: "y",
          legendTop: "center",
          legendLeft: "50%",
        },
      ];
      const mockProps = {
        dataOptions: {
          data: mockData,
          dataItems: mockDataItems,
        },
        styleOptions: {
          // ... other style options
        },
        chartOptions: {
          // ... other chart options
        },
      };

      // Call the method to test
      const result = buildPieWithDetailLegend(mockProps);

      // Calculate total for assertions
      const total = mockData.reduce((sum, item) => sum + item.y, 0);

      // Assertions
      expect(result).to.be.an("object");
      expect(result).to.have.property("orient", "vertical");
      expect(result).to.have.property("top", "center");
      expect(result).to.have.property("left", "50%");
      expect(result.textStyle).to.have.property("rich");
      expect(result.data).to.be.an("array");
      expect(result.data).to.have.lengthOf(mockData.length);
      result.data.forEach((item, index) => {
        expect(item).to.have.property("name", mockData[index].x);
        expect(item).to.have.property("value", mockData[index].y);
        expect(item).to.have.property("percent", mockData[index].y / total);
      });
      expect(result.formatter).to.be.a("function");
      // Test the formatter function
      const formatterResult = result.formatter(mockData[0].x);
      expect(formatterResult).to.be.a("string");
      // You may want to add more detailed tests for the formatter string
    });
  });
});
