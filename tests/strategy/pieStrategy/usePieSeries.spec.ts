import { expect } from "chai";
import {
  buildNormalPieSeries,
  buildPieWithDetailSeries,
  buildParentChildPieSeries,
} from "../../../src/strategy/pieStrategy/usePieSeries";
import { handleDataItems } from "../../../src/properties/useDataProperties";
import { getNormalPieOptions } from "../../../src/hooks/useGetOptions";
import sinon from "sinon";

describe("usePieSeries", () => {
  describe("buildNormalPieSeries", () => {
    it("should build normal pie series options correctly", () => {
      // Define the mock data and props
      const mockDataItems = [{ name: "Test", labelX: "x", labelY: "y" }];
      const mockProps = {
        dataOptions: {
          data: [{ id: "01", x: "Category A", y: 20 }],
          dataItems: mockDataItems,
        },
        styleOptions: {
          pieLeft: "auto",
          pieTop: "auto",
          pieRight: "auto",
          pieBottom: "auto",
          pieWidth: "100%",
          pieHeight: "100%",
          pieLabelshow: true,
        },
      };

      // Call the method to test
      const result = buildNormalPieSeries(mockProps);

      // Assertions
      expect(result).to.be.an("object");
      expect(result).to.have.property("type", "pie");
      expect(result).to.have.property("name", "Test");
      expect(result.data).to.be.an("array");
      expect(result.data).to.have.length(1);
      expect(result.data[0]).to.deep.equal({ value: 20, name: "Category A" });
    });
  });
  describe("buildPieWithDetailSeries", () => {
    it("should build pie with detail series options correctly", () => {
      // Define the mock data and props
      const mockDataItems = [
        { name: "Test", labelX: "x", labelY: "y", pieWidth: "45%" },
      ];
      const mockProps = {
        dataOptions: {
          data: [{ id: "01", x: "Category A", y: 20 }],
          dataItems: mockDataItems,
        },
        styleOptions: {
          pieLeft: "auto",
          pieTop: "auto",
          pieRight: "auto",
          pieBottom: "auto",
          pieWidth: "100%",
          pieHeight: "100%",
          pieLabelshow: true,
        },
      };

      // Call the method to test
      const result = buildPieWithDetailSeries(mockProps);

      // Assertions
      expect(result).to.be.an("object");
      expect(result).to.have.property("type", "pie");
      expect(result).to.have.property("name", "Test");
      expect(result).to.have.property("width", "45%");
      expect(result.data).to.be.an("array");
      expect(result.data).to.have.length(1);
      expect(result.data[0]).to.deep.equal({ value: 20, name: "Category A" });
    });
  });
});
