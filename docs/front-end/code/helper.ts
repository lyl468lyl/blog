/**
 * @description 计算文件大小
 * @param bytes
 * @returns string
 */
export function byteConvert(bytes: number): string {
  if (isNaN(bytes)) {
    return ''
  }
  const symbols = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
  let exp = Math.floor(Math.log(bytes) / Math.log(2))
  if (exp < 1) {
    exp = 0
  }
  const i = Math.floor(exp / 10)
  bytes = bytes / Math.pow(2, 10 * i)

  if (bytes.toString().length > bytes.toFixed(2).toString().length) {
    const temp = bytes.toFixed(2)
    bytes = Number(temp)
  }
  return bytes + ' ' + symbols[i]
}
