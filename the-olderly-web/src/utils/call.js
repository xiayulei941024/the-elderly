export function callPhone(phoneNumber) {
  // 使用下面的代码会尝试将phoneNumber插入到电话拨号盘中
  // 注意：这可能只在特定的移动设备上有效
  console.log("拨打电话-" + phoneNumber);
  document.location = "tel:" + phoneNumber;
}