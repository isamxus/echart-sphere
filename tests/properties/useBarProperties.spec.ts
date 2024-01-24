import { expect } from "chai";
import { handleBarStack, handleBarGap } from "../../src/properties/useBarProperties";

describe("useBarProperties", () => {
  describe("handleBarStack", () => {
    it("should handle bar stack options correctly", () => {
      // Define the mock data and props
      const mockDataItems = [
        { name: "Series 1", stack: "Stack 1" },
        { name: "Series 2" }, // No stack defined for this series
      ];
      const mockProps = {
        dataOptions: {
          dataItems: mockDataItems,
        },
        chartOptions: {
          stack: "Default Stack", // Default stack for all series
        },
      };
      let seriesOptions = [
        { name: "Series 1", type: "bar" },
        { name: "Series 2", type: "bar" },
      ];

      // Call the method to test
      handleBarStack(mockProps, seriesOptions);

      // Assertions
      expect(seriesOptions[0]).to.have.property("stack", "Stack 1");
      expect(seriesOptions[1]).to.have.property("stack", "Default Stack");
    });

    it("should not modify series options if no stack is defined", () => {
      // Define the mock data and props without stack
      const mockDataItems = [{ name: "Series 1" }];
      const mockProps = {
        dataOptions: {
          dataItems: mockDataItems,
        },
        chartOptions: {}, // No default stack defined
      };
      let seriesOptions = [{ name: "Series 1", type: "bar" }];

      // Call the method to test
      handleBarStack(mockProps, seriesOptions);

      // Assertions
      expect(seriesOptions[0]).to.not.have.property("stack");
    });
  });
  describe("handleBarGap", () => {
    it("should handle bar gap options correctly when overlap is boolean", () => {
      // Define the mock data and props with boolean overlap
      const mockProps = {
        dataOptions: {
          dataItems: [{}, {}], // No specific overlap defined for dataItems
        },
        chartOptions: {
          overlap: true, // Boolean overlap
        },
      };
      let seriesOptions = [
        { name: "Series 1", type: "bar" },
        { name: "Series 2", type: "bar" },
      ];

      // Call the method to test
      handleBarGap(mockProps, seriesOptions);

      // Assertions
      expect(seriesOptions[0]).to.have.property("barGap", "-100%");
      expect(seriesOptions[1]).to.have.property("barGap", "-100%");
    });

    it("should handle bar gap options correctly when overlap is string", () => {
      // Define the mock data and props with string overlap
      const mockProps = {
        dataOptions: {
          dataItems: [{}, {}], // No specific overlap defined for dataItems
        },
        chartOptions: {
          overlap: "-50%", // String overlap
        },
      };
      let seriesOptions = [
        { name: "Series 1", type: "bar" },
        { name: "Series 2", type: "bar" },
      ];

      // Call the method to test
      handleBarGap(mockProps, seriesOptions);

      // Assertions
      expect(seriesOptions[0]).to.have.property("barGap", "-50%");
      expect(seriesOptions[1]).to.have.property("barGap", "-50%");
    });

    it("should not modify series options if no overlap is defined", () => {
      // Define the mock data and props without overlap
      const mockProps = {
        dataOptions: {
          dataItems: [{}, {}], // No specific overlap defined for dataItems
        },
        chartOptions: {}, // No overlap defined
      };
      let seriesOptions = [
        { name: "Series 1", type: "bar" },
        { name: "Series 2", type: "bar" },
      ];

      // Call the method to test
      handleBarGap(mockProps, seriesOptions);

      // Assertions
      expect(seriesOptions[0]).to.not.have.property("barGap");
      expect(seriesOptions[1]).to.not.have.property("barGap");
    });

    it("should prioritize dataItem overlap over chartOptions", () => {
      // Define the mock data and props with dataItem overlap
      const mockProps = {
        dataOptions: {
          dataItems: [{ overlap: "-30%" }, {}], // Specific overlap defined for first dataItem
        },
        chartOptions: {
          overlap: "-100%", // Different overlap in chartOptions
        },
      };
      let seriesOptions = [
        { name: "Series 1", type: "bar" },
        { name: "Series 2", type: "bar" },
      ];

      // Call the method to test
      handleBarGap(mockProps, seriesOptions);

      // Assertions
      expect(seriesOptions[0]).to.have.property("barGap", "-30%");
      expect(seriesOptions[1]).to.have.property("barGap", "-100%");
    });
  });
});
