import { setConfig, setLoadingConfig } from "..";

// 设置现代企业主题风格
export default function setModernTheme() {
  setConfig({
    barWidth: 20, // 保持原有宽度
    barColor: "#34568B", // 主色 - 蓝色
    barBorderType: "solid",
    barBorderColor: "#FF6F61", // 辅助色 - 珊瑚色
    barBorderWidth: 2, // 边框宽度，增加辅助色的可见性
    barGap: "30%", // 柱子之间的间隙
    barSymbol: "rect", // 柱状图的形状为矩形
    barSymbolRepeat: "fixed",
    barSymbolMargin: 2, // 柱状图符号的边距
    barSymbolOffset: [0, 0], // 柱状图符号的偏移
    barSymbolSize: [20, 6], // 柱状图符号的大小
    barSymbolPosition: "start", // 柱状图符号的位置
    barSymbolClip: true, // 是否裁剪超出坐标系部分的图形
    colorHl: "#34568B", // 主色 - 蓝色
    borderColorHl: "#FF6F61", // 辅助色 - 珊瑚色
    borderWidthHl: 2, // 边框宽度，增加辅助色的可见性
    borderTypeHl: "solid",
    borderRadiusHl: 4, // 边框圆角，增加现代感
    shadowBlurHl: 10, // 阴影模糊距离
    shadowColorHl: "rgba(52, 86, 139, 0.5)", // 主色 - 蓝色的阴影，增加深度感
    shadowOffsetXHl: 0, // 阴影X轴偏移
    shadowOffsetYHl: 4, // 阴影Y轴偏移，增加立体感
    opacityHl: 0.8, // 不完全透明，以突出高亮部分
    lineColor: "#34568B", // 主色 - 蓝色
    lineSmooth: true, // 启用平滑曲线，以符合现代风格的流畅感
    lineType: "solid",
    showSymbol: true, // 显示数据点，以增强视觉效果和数据的可读性
    mapZoom: 1, // 默认缩放级别
    mapColor: "#c8def1", // 地图默认颜色，保持原有的淡蓝色调
    mapLabelShow: true, // 显示地图标签以提供更多信息
    mapLabelSize: 10, // 地图标签的字体大小
    mapColorHL: "#34568B", // 高亮颜色 - 主色 - 蓝色
    mapLableColorHL: "#FF6F61", // 高亮时的标签颜色 - 辅助色 - 珊瑚色
    mapSelectedColor: "#88B04B", // 选中项的颜色 - 强调色 - 橄榄绿
    mapSelectedLabelColor: "#fff", // 选中项的标签颜色 - 白色
    legendRichColor: "#34568B", // 主色 - 蓝色
    tooltipBgColor: "rgba(52, 86, 139, 0.7)",
    tooltipTextColor: "#fff", // 文本颜色 - 白色，保持原有以确保可读性
    tooltipTextSize: 12, // 增加字体大小以提高可读性
    tooltipBorderColor: "#FF6F61", // 辅助色 - 珊瑚色
    tooltipPadding: 8, // 增加内边距以提供更多空间
    tooltipShadowColor: "rgba(255, 111, 97, 0.5)", // 辅助色 - 珊瑚色，半透明
  });
  setLoadingConfig({
    loadingText: "正在加载图表", // 保持原有文本
    loadingColor: "#34568B", // 主色 - 蓝色
    loadingTextColor: "#34568B", // 主色 - 蓝色
    loadingMaskColor: "rgba(255, 255, 255, 0.8)", // 保持原有的遮罩颜色
    loadingZlevel: 0,
    loadingFontSize: 14, // 增加字体大小以提高可读性
    loadingShowSpinner: true,
    loadingSpinnerRadius: 12, // 增加旋转器半径以提高可见性
    loadingLineWidth: 3, // 增加线宽以使旋转器更明显
    loadingFontWeight: "bold", // 加粗字体以增加现代感
    loadingFontStyle: "normal",
    loadingFontFamily: "Source Han Sans CN-Medium", // 使用现代企业风格的字体
  });
}
