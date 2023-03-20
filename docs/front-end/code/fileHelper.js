import request from '@/utils/request'

export function slicingDownload (param, callback, sizeUrl = '/file/filesize', downloadUrl = '/file/download') {
  callback && callback({ isLoading: true, progress: 0 })
  getFileSize(param, sizeUrl).then(async (fileSize) => {
    console.log('文件大小', fileSize)
    if (fileSize === 0) {
      this.$notification.open({
        message: '操作提示',
        description: '该文件不存在.',
        icon: <a-icon type="warning" style="color: #faad14" />
      })
      callback && callback({ isLoading: false })
      return
    }
    let slicingSize = null
    if (fileSize <= 20971520) {
      // 20M以内，单个切片大小设置为2MB
      slicingSize = 2 * 1024 * 1024 // 切片大小 单位MB
    } else if (fileSize <= 524288000) {
      // 500M以内，单个切片大小设置为5MB
      slicingSize = 5 * 1024 * 1024 // 切片大小 单位MB
    } else {
      // 500M以外，单个切片大小设置为10MB
      slicingSize = 10 * 1024 * 1024 // 切片大小 单位MB
    }
    const sumSlicingCount = Math.ceil(fileSize / slicingSize) // 总片数
    console.log('单个切片文件大小', slicingSize, '总片数', sumSlicingCount)
    const blobArr = []

    let fileName = '下载文件'

    for (let i = 0; i < sumSlicingCount; i++) {
      const start = i * slicingSize
      const end = (i + 1) * slicingSize
      const contentRage = 'bytes=' + start + '-' + (end || '')
      const res = await request({
        url: downloadUrl,
        method: 'get',
        params: param,
        headers: { Range: contentRage },
        responseType: 'arraybuffer',
        withConfig: true
      })

      callback && callback({ isLoading: true, progress: parseInt((i / sumSlicingCount) * 100) })

      if (i === 0) {
        const contentDisposition = res.headers['content-disposition']
        if (contentDisposition) {
          fileName = decodeURIComponent(contentDisposition.split('=')[1], 'UTF-8')
        }
      }
      blobArr.push({
        index: i,
        data: res.data
      })
    }

    blobArr.sort((a, b) => a.index - b.index)
    const targetBlobArr = blobArr.map((r) => r.data)
    // 多个blob排序完合并为一个blob
    const buffers = new Blob(targetBlobArr)
    saveAs(fileName, buffers, () => {
      callback && callback({ isLoading: false })
    })
  }).finally(() => {
    callback && callback({ isLoading: false })
  })
}

// 获取文件大小
function getFileSize (param, sizeUrl) {
  return new Promise((resolve, reject) => {
    request({
      url: sizeUrl,
      method: 'get',
      params: param
    }).then((size) => {
      if (size) {
        resolve(size)
      } else {
        reject(size)
      }
    })
      .catch((e) => {
        reject(e)
      })
  })
}

function saveAs (name, buffers, callback) {
  const blobUrl = URL.createObjectURL(buffers)
  const a = document.createElement('a')
  a.download = name
  a.href = blobUrl
  a.click()
  callback && callback()
  // URL.revokeObjectURL(blob)
}
