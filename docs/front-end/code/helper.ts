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

/**
 * @description 判断滚动条是否触底
 * @param target
 * @returns boolean
 */
export function isScrollTouchBottom(target: Element) {
  if (target) {
    const { scrollTop, clientHeight, scrollHeight } = target
    return scrollTop + clientHeight === scrollHeight
  }
  return false
}

/**
 * @description 将滚动条移动到底部
 * @param scrollElement
 */
export function toBottom(scrollElement: Element) {
  if (scrollElement) {
    scrollElement.scrollTo({
      top: scrollElement.scrollHeight,
      behavior: 'smooth',
    })
  }
}
