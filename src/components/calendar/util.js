// 获取一个日期的年月日
export function getNewDate(date) {
  let year = date.getFullYear()
  let month = date.getMonth()
  let day = date.getDate()
  return { year, month, day }
}

// 根据年月日转换成日期类型
export function getDate(year, month, day) {
  return new Date(year, month, day)
}
