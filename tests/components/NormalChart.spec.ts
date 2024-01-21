import { expect } from "chai";
import { VueWrapper, mount } from "@vue/test-utils";
import { defineComponent, nextTick, ref } from "vue";
import EchartSphere from "../../src"; // 假设这是你要在全局使用的插件
import sinon from "sinon";

describe("NormalChart.vue", () => {
  let div;
  let component;
  let wrapper: VueWrapper;
  afterEach(() => {
    document.body.removeChild(div);
  });
  beforeEach(() => {
    document.documentElement.style.height = "100%";
    document.documentElement.style.width = "100%";
    document.body.style.margin = "0";
    document.body.style.height = "100%";
    document.body.style.width = "100%";
    div = document.createElement("div");
    div.style.width = "100%";
    div.style.height = "100%";
    div.id = "app";
    document.body.appendChild(div);

    component = defineComponent({
      template: `<normal-chart ref="chartRef" style="width: 600px;height: 400px;" v-bind="props" />`,
      setup() {
        return {
          chartRef: ref(),
          props: {
            dataOptions: {},
          },
        };
      },
    });

    wrapper = mount(component, {
      attachTo: "#app",
      global: {
        plugins: [EchartSphere],
      },
    });
  });

  it("renders correctly with labelY, labelX, and mock data without dataItems", async () => {
    wrapper.setProps({
      dataOptions: {
        labelY: "valueY",
        labelX: "valueX",
        data: [
          { valueX: "X1", valueY: 10 },
          { valueX: "X2", valueY: 20 },
        ],
      },
    });
    await nextTick();

    const chartRef = wrapper.vm.$refs["chartRef"] as any;
    const isBarChart = chartRef
      .getInstance()
      .getOption()
      .series.every((s: any) => s.type === "bar");

    expect(isBarChart).to.be.true;
  });

  it("renders correctly with dataItems and displays a bar chart", async () => {
    wrapper.setProps({
      dataOptions: {
        dataItems: [{ labelX: "valueX", labelY: "valueY" }],
        data: [
          { valueX: "X1", valueY: 10 },
          { valueX: "X2", valueY: 20 },
        ],
      },
    });
    await nextTick();

    const chartRef = wrapper.vm.$refs["chartRef"] as any;
    const isBarChart = chartRef
      .getInstance()
      .getOption()
      .series.every((s: any) => s.type === "bar");

    expect(isBarChart).to.be.true;
  });

  it("throws a warning when dataOptions is not provided", async () => {
    const warnSpy = sinon.spy(console, "warn");
    const component = defineComponent({
      template: `<normal-chart ref="chartRef" style="width: 600px;height: 400px;" v-bind="props" />`,
      setup() {
        return {
          chartRef: ref(),
          props: {
            dataOptions: undefined,
          },
        };
      },
    });
    mount(component, {
      attachTo: "#app",
      global: {
        plugins: [EchartSphere],
      },
    });

    await nextTick();

    expect(
      warnSpy.calledWith(
        "Warning: dataOptions is required and should be an object."
      )
    ).to.be.true;
    warnSpy.restore();
  });

  it("renders correctly as a line chart when dataOptions.itemType is 'line'", async () => {
    wrapper.setProps({
      dataOptions: {
        labelX: "valueX",
        labelY: "valueY",
        itemType: "line",
        data: [
          { valueX: "X1", valueY: 10 },
          { valueX: "X2", valueY: 20 },
        ],
      },
    });
    await nextTick();

    const chartRef = wrapper.vm.$refs["chartRef"] as any;
    const isLineChart = chartRef
      .getInstance()
      .getOption()
      .series.every((s: any) => s.type === "line");

    expect(isLineChart).to.be.true;
  });

  it("renders correctly as a pie chart when dataOptions.itemType is 'pie'", async () => {
    wrapper.setProps({
      dataOptions: {
        labelX: "valueX",
        labelY: "valueY",
        itemType: "pie",
        data: [
          { valueX: "X1", valueY: 10 },
          { valueX: "X2", valueY: 20 },
        ],
      },
    });
    await nextTick();

    const chartRef = wrapper.vm.$refs["chartRef"] as any;
    const isPieChart = chartRef
      .getInstance()
      .getOption()
      .series.every((s: any) => s.type === "pie");

    expect(isPieChart).to.be.true;
  });

  it("renders correctly as a scatter chart when dataOptions.itemType is 'scatter'", async () => {
    wrapper.setProps({
      dataOptions: {
        labelX: "valueX",
        labelY: "valueY",
        itemType: "scatter",
        data: [
          { valueX: "X1", valueY: 10 },
          { valueX: "X2", valueY: 20 },
        ],
      },
    });
    await nextTick();

    const chartRef = wrapper.vm.$refs["chartRef"] as any;
    const isScatterChart = chartRef
      .getInstance()
      .getOption()
      .series.every((s: any) => s.type === "scatter");

    expect(isScatterChart).to.be.true;
  });
});
