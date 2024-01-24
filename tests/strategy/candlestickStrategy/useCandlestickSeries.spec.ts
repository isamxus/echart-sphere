import { expect } from "chai";
import { buildNormalCandleStickSeries } from "../../../src/strategy/candlestickStrategy/useCandlestickSeries";

describe("useCandlestickSeries", () => {
  describe("buildNormalCandleStickSeries", () => {
    it("should build normal candlestick series options correctly", () => {
      // Define the mock data and props
      const mockData = [
        { id: "01", open: 10, close: 20, lowest: 5, highest: 25 },
        { id: "02", open: 20, close: 30, lowest: 15, highest: 35 },
      ];
      const mockDataItems = [{ name: "Test" }];
      const mockProps = {
        dataOptions: {
          data: mockData,
          dataItems: mockDataItems,
        },
        chartOptions: {
          candlestick: {
            open: "open",
            close: "close",
            lowest: "lowest",
            highest: "highest",
          },
        },
      };

      // Call the method to test
      const seriesOptions = buildNormalCandleStickSeries(mockProps);

      // Assertions
      expect(seriesOptions).to.be.an("array");
      expect(seriesOptions).to.have.lengthOf(mockDataItems.length);
      seriesOptions.forEach((series) => {
        expect(series).to.have.property("type", "candlestick");
        expect(series.data).to.be.an("array");
        series.data.forEach((dataPoint, dataIndex) => {
          expect(dataPoint).to.deep.equal([
            mockData[dataIndex].open,
            mockData[dataIndex].close,
            mockData[dataIndex].lowest,
            mockData[dataIndex].highest,
          ]);
        });
      });
    });
  });
});
