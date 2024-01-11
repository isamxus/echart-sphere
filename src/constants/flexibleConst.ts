export const chartSelfAdaptionConfig = {
  // 设计稿默认宽度
  designWidth: 375,
  // 基准值
  baseSize: 14,
  // 是否自适应
  flexible: true
};

// 需要进行自适应的字段集合
export const flexibleFieldsSet = new Set([
  "bottom",
  "left",
  "right",
  "top",
  "itemHeight",
  "itemWidth",
  "fontSize",
  "barWidth",
  "borderWidth",
  "symbolMargin"
]);
