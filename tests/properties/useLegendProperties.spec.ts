import { expect } from "chai";
import { handlePieLegendRich } from "../../src/properties/useLegendProperties";

describe("useLegendProperties", () => {
  describe("handlePieLegendRich", () => {
    it("should handle pie legend rich options correctly", () => {
      // Define the mock props
      const mockProps = {
        chartOptions: {
          legendRichOptions: [
            { field: "name", styles: { legendRichAlign: "left" } },
            { field: "value", styles: { legendRichPadding: [10, 10, 10, 10] } },
          ],
        },
      };

      // Call the method to test
      const richOptions = handlePieLegendRich(mockProps);

      // Assertions
      expect(richOptions).to.be.an("object");
      expect(richOptions.name).to.have.property("align", "left");
      expect(richOptions.value)
        .to.have.property("padding")
        .that.is.an("array")
        .and.to.deep.equal([10, 10, 10, 10]);
      expect(richOptions.percent)
        .to.have.property("padding")
        .that.is.an("array")
        .and.to.deep.equal([0, 0, 0, 0]);

      // Add more assertions to cover all properties and cases
    });

    it("should return default rich options when no custom options are provided", () => {
      // Define the mock props with no custom legendRichOptions
      const mockProps = {
        chartOptions: {},
      };

      // Call the method to test
      const richOptions = handlePieLegendRich(mockProps);

      // Assertions for default values
      // You need to replace 'defaultAlign', 'defaultPadding', etc. with actual default values
      expect(richOptions.name).to.have.property("align", "center");
      expect(richOptions.value)
        .to.have.property("padding")
        .that.is.an("array")
        .and.to.deep.equal([0, 0, 0, 0]);
      expect(richOptions.percent)
        .to.have.property("padding")
        .that.is.an("array")
        .and.to.deep.equal([0, 0, 0, 0]);

      // Add more assertions to cover all properties and cases
    });

    // Add more tests to cover other branches as needed
  });
});
