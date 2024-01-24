import { expect } from "chai";
import { handleSplitPoint } from "../../src/properties/useChartProperties";

describe("useChartProperties", () => {
  describe("handleSplitPoint", () => {
    it("should handle split point options correctly without trend", () => {
      // Define the mock data and props without trend
      const mockProps = {
        dataOptions: {
          dataItems: [
            { split: { splitX: 1, styleAfter: {}, styleBefore: {} } },
          ],
        },
        chartOptions: {},
      };
      let seriesOptions = [
        { name: "Series 1", type: "line", data: [10, 20, 30] },
      ];

      // Call the method to test
      const modifiedOptions = handleSplitPoint(mockProps, seriesOptions);

      // Assertions
      expect(modifiedOptions).to.be.an("array");
      expect(modifiedOptions[0].data[0]).to.include({ value: 10 });
      expect(modifiedOptions[0].data[1]).to.include({ value: 20 });
      expect(modifiedOptions[0].data[2]).to.include({ value: 30 });
    });

    it("should handle split point options correctly with trend", () => {
      // Define the mock data and props with trend
      const mockProps = {
        dataOptions: {
          dataItems: [
            { split: { splitX: 1, trend: "line", trendPart: "after" } },
          ],
        },
        chartOptions: {},
      };
      let seriesOptions = [
        { name: "Series 1", type: "line", data: [10, 20, 30] },
      ];

      // Call the method to test
      const modifiedOptions = handleSplitPoint(mockProps, seriesOptions);

      // Assertions
      expect(modifiedOptions).to.be.an("array");
      expect(modifiedOptions).to.have.lengthOf(2);
      expect(modifiedOptions[0].data).to.deep.equal([10, 20]);
      expect(modifiedOptions[1].data).to.deep.equal(["--", 20, 30]);
    });

    it("should handle split point options correctly with auto offset", () => {
      // Define the mock data and props with auto offset
      const mockProps = {
        dataOptions: {
          dataItems: [
            {
              split: {
                splitX: 1,
                trend: "line",
                trendPart: "after",
                trendOffset: 1,
              },
            },
          ],
        },
        chartOptions: {},
      };
      let seriesOptions = [
        { name: "Series 1", type: "line", data: [10, 20, 30] },
      ];

      // Call the method to test
      const modifiedOptions = handleSplitPoint(mockProps, seriesOptions);

      // Assertions
      expect(modifiedOptions).to.be.an("array");
      expect(modifiedOptions).to.have.lengthOf(2);
      expect(modifiedOptions[0].data).to.deep.equal([10, 20]);
      expect(modifiedOptions[1].data).to.deep.equal(["--", 20, 30]);
    });

    // Add more tests to cover other branches as needed
  });
});
