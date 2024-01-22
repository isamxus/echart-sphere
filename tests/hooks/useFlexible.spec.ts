import { expect } from "chai";
import sinon from "sinon";
import useFlexible from "../../src/hooks/useFlexible";
import { flexibleFieldsSet } from "../../src/constants/globalConfig";

describe("useFlexible", () => {
  let props;
  let flexible;
  let designWidth;
  let clientWidthStub;
  let options;

  beforeEach(() => {
    props = {
      chartOptions: {
        flexibleConfig: {
          flexible: true,
          designWidth: 1920,
        },
      },
    };
    flexible = true;
    designWidth = 1920;
    clientWidthStub = sinon
      .stub(document.documentElement, "clientWidth")
      .get(() => 960);
    sinon.stub(document.body, "clientWidth").get(() => 960);
    options = {
      title: {
        left: 100,
        top: "10%",
        right: ["10%", "20%"],
      },
    };
    flexibleFieldsSet.add("left");
    flexibleFieldsSet.add("right");
  });

  afterEach(() => {
    sinon.restore();
    flexibleFieldsSet.delete("left");
    flexibleFieldsSet.delete("right");
  });

  it("should apply flexible scaling to options fields", () => {
    const { transOptionFlexible } = useFlexible(props);
    transOptionFlexible(options);

    expect(options.title.left).to.equal(50); // 100 * 960 / 1920
    expect(options.title.right).to.deep.equal(["10%", "20%"]); // Should not change
  });

  it("should not apply flexible scaling if flexible is false", () => {
    props.chartOptions.flexibleConfig.flexible = false;
    const { transOptionFlexible } = useFlexible(props);
    transOptionFlexible(options);

    expect(options.title.left).to.equal(100); // Should not change
    expect(options.title.right).to.deep.equal(["10%", "20%"]); // Should not change
  });

  // Add more tests as needed for edge cases and error handling
});
