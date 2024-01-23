import { expect } from "chai";
import {
  getNormalBarOptions,
  getNormalLegendRichOptions,
  getNormalMapOptions,
} from "../../src/hooks/useGetOptions";
import { getNormalPictorialOptions } from "../../src/hooks/useGetOptions";
import {
  RenderPropOptions,
  DataItemWithStyleOptions,
} from "../../src/models/propOptionModel";
import {
  hightlightConfig,
  legendRichConfig,
  mapConfig,
} from "../../src/constants/globalConfig";
describe("useGetOptions", () => {
  describe("getNormalBarOptions", () => {
    it("should return default bar options when no item is provided", () => {
      const props: RenderPropOptions = {
        styleOptions: {
          barWidth: 10,
          barGap: "20%",
          barColor: "red",
          barBorderWidth: 2,
          barBorderColor: "blue",
          barBorderType: "solid",
        },
        dataOptions: {},
      };

      const result = getNormalBarOptions(props);

      expect(result).to.deep.equal({
        barWidth: 10,
        barGap: "20%",
        type: "bar",
        itemStyle: {
          color: "red",
          borderWidth: 2,
          borderColor: "blue",
          borderType: "solid",
        },
      });
    });

    it("should override styleOptions with item properties", () => {
      const props: RenderPropOptions = {
        styleOptions: {
          barWidth: 10,
          barGap: "20%",
          barColor: "red",
          barBorderWidth: 2,
          barBorderColor: "blue",
          barBorderType: "solid",
        },
        dataOptions: {},
      };

      const item: DataItemWithStyleOptions = {
        barWidth: 15,
        barColor: "green",
        isHightlight: false,
      };

      const result = getNormalBarOptions(props, item);
      expect(result).to.deep.equal({
        barWidth: 15,
        barGap: "20%",
        type: "bar",
        itemStyle: {
          color: "green",
          borderWidth: 2,
          borderColor: "blue",
          borderType: "solid",
        },
      });
    });

    it("should apply highlight properties when isHightlight is true", () => {
      const props: RenderPropOptions = {
        styleOptions: {
          barWidth: 10,
          barGap: "20%",
          barColor: "red",
          barBorderWidth: 2,
          barBorderColor: "blue",
          barBorderType: "solid",
        },
        dataOptions: {},
      };

      const item: DataItemWithStyleOptions = {
        isHightlight: true,
      };

      const result = getNormalBarOptions(props, item);

      expect(result).to.deep.equal({
        barWidth: 10,
        barGap: "20%",
        type: "bar",
        itemStyle: {
          color: "red",
          borderWidth: 2,
          borderColor: "blue",
          borderType: "solid",
        },
        emphasis: {
          itemStyle: {
            color: hightlightConfig.colorHl,
            borderColor: hightlightConfig.borderColorHl,
            borderWidth: hightlightConfig.borderWidthHl,
            borderType: hightlightConfig.borderTypeHl,
            borderRadius: hightlightConfig.borderRadiusHl,
            shadowBlur: hightlightConfig.shadowBlurHl,
            shadowColor: hightlightConfig.shadowColorHl,
            shadowOffsetX: hightlightConfig.shadowOffsetXHl,
            shadowOffsetY: hightlightConfig.shadowOffsetYHl,
            opacity: hightlightConfig.opacityHl,
          },
        },
      });
    });

    it("should return pictorial bar options with specified properties", () => {
      const props: RenderPropOptions = {
        styleOptions: {
          barWidth: 10,
          barGap: "20%",
          barColor: "red",
          barBorderWidth: 2,
          barBorderColor: "blue",
          barBorderType: "solid",
          barSymbolClip: true,
          barSymbolRepeat: "fixed",
          barSymbolMargin: 5,
          barSymbol: "diamond",
          barSymbolOffset: [0, 0],
          barSymbolSize: [30, 10],
          barSymbolPosition: "start",
        },
        dataOptions: {},
      };

      const item: DataItemWithStyleOptions = {};

      const result = getNormalPictorialOptions(props, item);

      expect(result).to.deep.equal({
        ...getNormalBarOptions(props, item), // 假设这个方法已经被其他测试用例覆盖
        type: "pictorialBar",
        symbolClip: true,
        symbolRepeat: "fixed",
        symbolMargin: 5,
        symbol: "diamond",
        symbolOffset: [0, 0],
        symbolSize: [30, 10],
        symbolPosition: "start",
      });
    });

    it("should return map options with specified properties", () => {
      const props: RenderPropOptions = {
        styleOptions: {},
        dataOptions: {},
      };

      const item: DataItemWithStyleOptions = {};

      const result = getNormalMapOptions(props, item);

      expect(result).to.deep.equal({
        zoom: mapConfig.mapZoom,
        label: {
          show: mapConfig.mapLabelShow,
          fontSize: mapConfig.mapLabelSize,
        },
        itemStyle: {
          areaColor: mapConfig.mapColor,
        },
        emphasis: {
          itemStyle: {
            areaColor: mapConfig.mapColorHL,
          },
          label: {
            color: mapConfig.mapLableColorHL,
          },
        },
        select: {
          itemStyle: {
            areaColor: mapConfig.mapSelectedColor,
          },
          label: {
            color: mapConfig.mapSelectedLabelColor,
          },
        },
      });
    });

    it("should return default legend rich options when no item is provided", () => {
      const result = getNormalLegendRichOptions();

      expect(result).to.deep.equal({
        fontSize: legendRichConfig.legendRichSize,
        fontWeight: legendRichConfig.legendRichWeight,
        width: legendRichConfig.legendRichWidth,
        align: legendRichConfig.legendRichAlign,
        padding: legendRichConfig.legendRichPadding,
        color: legendRichConfig.legendRichColor,
        fontFamily: legendRichConfig.legendRichFamily,
      });
    });

    it("should override default options with provided item properties", () => {
      const item = {
        legendRichSize: 16,
        legendRichColor: "blue",
      };

      const result = getNormalLegendRichOptions(item);

      expect(result).to.deep.equal({
        fontSize: item.legendRichSize,
        fontWeight: legendRichConfig.legendRichWeight,
        width: legendRichConfig.legendRichWidth,
        align: legendRichConfig.legendRichAlign,
        padding: legendRichConfig.legendRichPadding,
        color: item.legendRichColor,
        fontFamily: legendRichConfig.legendRichFamily,
      });
    });
  });
});
