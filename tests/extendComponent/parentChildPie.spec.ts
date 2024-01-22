import { mount } from "@vue/test-utils";
import { defineComponent, ref } from "vue";
import EchartSphere from "../../src";
import { expect } from "chai";
import sinon from "sinon";
import { handleChartClick } from "@/extendComponent/parentChildPie";
const getData = () => {
  const getValue = () => Math.floor(Math.random() * 10000);
  return [
    // 父节点
    { id: "01", label: "Parent 1", value: getValue() },
    { id: "02", label: "Parent 2", value: getValue() },
    { id: "03", label: "Parent 3", value: getValue() },
    { id: "04", label: "Parent 4", value: getValue() },

    // Parent 1 的子节点
    {
      id: "05",
      parentId: "01",
      label: "Child 1.1",
      value: getValue(),
    },
    {
      id: "06",
      parentId: "01",
      label: "Child 1.2",
      value: getValue(),
    },
    {
      id: "07",
      parentId: "01",
      label: "Child 1.3",
      value: getValue(),
    },

    // Parent 2 的子节点
    {
      id: "08",
      parentId: "02",
      label: "Child 2.1",
      value: getValue(),
    },
    {
      id: "09",
      parentId: "02",
      label: "Child 2.2",
      value: getValue(),
    },
    {
      id: "10",
      parentId: "02",
      label: "Child 2.3",
      value: getValue(),
    },

    // Parent 3 的子节点
    {
      id: "11",
      parentId: "03",
      label: "Child 3.1",
      value: getValue(),
    },
    {
      id: "12",
      parentId: "03",
      label: "Child 3.2",
      value: getValue(),
    },
    {
      id: "13",
      parentId: "03",
      label: "Child 3.3",
      value: getValue(),
    },

    // Parent 4 的子节点
    {
      id: "14",
      parentId: "04",
      label: "Child 4.1",
      value: getValue(),
    },
    {
      id: "15",
      parentId: "04",
      label: "Child 4.2",
      value: getValue(),
    },
    {
      id: "16",
      parentId: "04",
      label: "Child 4.3",
      value: getValue(),
    },
    {
      id: "17",
      parentId: "04",
      label: "Child 4.4",
      value: getValue(),
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
              { name: "母图", labelX: "label", labelY: "value" },
              { name: "子图", labelX: "label", labelY: "value" },
            ],
            data: getData(),
            ...props,
          },
          chartOptions: {
            componentType: "parent-child-pie",
          },
        },
      };
    },
  });
};

describe("parentChildPie.ts", () => {
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

  it("renders a parent-child pie chart when chartOptions.componentType is 'parent-child-pie'", async () => {
    const wrapper = mount(getComponent(), {
      attachTo: "#app",
      global: {
        plugins: [EchartSphere],
      },
    });
    const chartRef = wrapper.vm.$refs["chartRef"] as any;
    const series = chartRef.getInstance().getOption().series;
    expect(series.length).to.equal(2);
    expect(series.every((item) => item.type === "pie")).to.be.true;
  });

  it("renders the parent-child pie chart correctly with custom treeConfig", async () => {
    const wrapper = mount(
      getComponent({
        treeConfig: {
          idKey: "id",
          parentKey: "parentId",
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
    const series = chartRef.getInstance().getOption().series;
    expect(series.length).to.equal(2);
    expect(series.every((item) => item.type === "pie")).to.be.true;
  });
  it("updates currentChildData on chart click", () => {
    // 创建模拟的数据和函数
    const mockData = { data: { id: "01" } };
    const mockTreeData = [{ id: "01", children: ["child1", "child2"] }];
    const mockProps = {
      dataOptions: {},
      extendOptions: { currentChildData: [] },
    };
    const mockRenderChart = sinon.fake(); // 使用 sinon.fake 替代 sinon.spy

    // 创建上下文对象
    const context = {
      treeData: mockTreeData,
      idKey: "id",
      props: mockProps,
      renderChart: mockRenderChart,
    };

    // 调用 handleChartClick 函数
    handleChartClick(mockData, context);

    // 验证 currentChildData 是否正确更新
    expect(mockProps.extendOptions.currentChildData).to.deep.equal([
      "child1",
      "child2",
    ]);
    // 验证 renderChart 是否被调用
    sinon.assert.called(mockRenderChart); // 使用 sinon.assert.called 来验证
  });
});
