import { mount } from "@vue/test-utils";
import { defineComponent, ref } from "vue";
import EchartSphere from "../../src";
import { expect } from "chai";
const getData = () => {
  const getValue = () => Math.floor(Math.random() * 10000);
  return [
    {
      id: "01",
      label: "radar 1",
      value: getValue(),
      value1: getValue(),
      max: 10000,
    },
    {
      id: "02",
      label: "radar 2",
      value: getValue(),
      value1: getValue(),
      max: 10000,
    },
    {
      id: "03",
      label: "radar 3",
      value: getValue(),
      value1: getValue(),
      max: 10000,
    },
    {
      id: "04",
      label: "radar 4",
      value: getValue(),
      value1: getValue(),
      max: 10000,
    },
    {
      id: "05",
      label: "radar 5",
      value: getValue(),
      value1: getValue(),
      max: 10000,
    },
    {
      id: "06",
      label: "radar 6",
      value: getValue(),
      value1: getValue(),
      max: 10000,
    },
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
            dataItems: [
              { name: "雷达图1", labelX: "label", labelY: "value" },
              { name: "雷达图2", labelX: "label", labelY: "value1" },
            ],
            data: getData(),
            ...props,
          },
          chartOptions: {
            componentType: "radar",
            radar: {
              max: "max",
            },
          },
        },
      };
    },
  });
};

describe("radarChart.ts", () => {
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

  it("renders a radar chart when chartOptions.componentType is 'radar'", async () => {
    const wrapper = mount(getComponent(), {
      attachTo: "#app",
      global: {
        plugins: [EchartSphere],
      },
    });
    const chartRef = wrapper.vm.$refs["chartRef"] as any;
    const series = chartRef.getInstance().getOption().series;
    expect(series.length).to.equal(2);
    expect(series.every((item) => item.type === "radar")).to.be.true;
  });
});
