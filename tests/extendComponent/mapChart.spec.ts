import { mount } from "@vue/test-utils";
import { defineComponent, ref } from "vue";
import EchartSphere from "../../src";
import { expect } from "chai";
import mockMapJson from "./mock/mapChart.json";
import sinon from "sinon";
const getData = () => {
  const getValue = () => Math.floor(Math.random() * 10000);
  return [
    { id: "01", label: "广东省", value: getValue() },
    { id: "02", label: "湖南省", value: getValue() },
    { id: "03", label: "青海省", value: getValue() },
    { id: "04", label: "西藏自治区", value: getValue() },
    { id: "05", label: "黑龙江省", value: getValue() },
    { id: "06", label: "吉林省", value: getValue() },
  ];
};

const getComponent = (props?: any) => {
  return defineComponent({
    template: `<normal-chart ref="chartRef" style="width: 600px;height: 400px;" v-bind="props" />`,
    setup() {
      return {
        chartRef: ref(),
        props: {
          dataOptions: {
            dataItems: [{ name: "中国地图", labelX: "label", labelY: "value" }],
            data: getData(),
            mapConfig: {
              name: "china",
              isBuiltIn: false,
              mapJson: mockMapJson,
            },
            ...props,
          },
          chartOptions: {
            componentType: "map",
          },
        },
      };
    },
  });
};

describe("mapChart.ts", () => {
  let div;
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
  });

  it("renders a map chart when chartOptions.componentType is 'map'", async () => {
    const wrapper = mount(getComponent(), {
      attachTo: "#app",
      global: {
        plugins: [EchartSphere],
      },
    });
    const chartRef = wrapper.vm.$refs["chartRef"] as any;
    const series = chartRef.getInstance().getOption().series;
    expect(series.every((item) => item.type === "map")).to.be.true;
  });
  it("warns when isBuiltIn is false and 'mapJson' is not provided", () => {
    const consoleWarnSpy = sinon.spy(console, "warn");
    const wrapper = mount(
      getComponent({
        mapConfig: {
          name: "china",
          isBuiltIn: false,
        },
      }),
      {
        attachTo: "#app",
        global: {
          plugins: [EchartSphere],
        },
      }
    );
    const chartRef = wrapper.vm.$refs["chartRef"] as any;
    expect(consoleWarnSpy.calledOnce).to.be.true;
    expect(
      consoleWarnSpy.calledWith(
        'Warning: You must provide "mapJson" data when "isBuiltIn" is not set to true.'
      )
    ).to.be.true;
    consoleWarnSpy.restore();
  });
  it("warns when isBuiltIn is true and 'china-map-echarts' package is not installed", () => {
    const consoleWarnSpy = sinon.spy(console, "warn");
    const wrapper = mount(
      getComponent({
        mapConfig: {
          name: "china",
          isBuiltIn: true,
        },
      }),
      {
        attachTo: "#app",
        global: {
          plugins: [EchartSphere],
        },
      }
    );
    const chartRef = wrapper.vm.$refs["chartRef"] as any;
    expect(consoleWarnSpy.calledOnce).to.be.true;
    expect(
      consoleWarnSpy.calledWith(
        'Warning: When "isBuiltIn" is set to true, please ensure that the "china-map-echarts" package is installed and that the administrative code "code" you have provided is correct.'
      )
    ).to.be.true;
    consoleWarnSpy.restore();
  });
});
