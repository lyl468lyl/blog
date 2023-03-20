<template>
  <div>
    <a-row type="flex">
      <a-col flex="auto">
        <a-upload
          class="upload-wrapper"
          :showUploadList="false"
          :disabled="maxFile && tableDate.length >= maxFile"
          :accept="accept"
          :before-upload="beforeUpload"
          :customRequest="customRequestUpload"
          @change="handleChange">
          <a-button :disabled="maxFile && tableDate.length >= maxFile">
            <a-icon type="upload" /> 文档上传
          </a-button>
        </a-upload>
      </a-col>
      <a-col flex="100px" v-if="false" >
        <a-button @click="customRequestUpload">
          <a-icon type="upload" /> 文档上传
        </a-button>
      </a-col>
    </a-row>
    <div class="result-wrapper" :style="{minHeight: boxHeight + 'px'}" >
      <div class="item" v-for="(file,idx) in tableDate" :key="file.uid">
        <div class="content">
          <div class="body">
            <div class="fileName"> {{ file.fileName }}</div>
            <div>
              <a-popconfirm
                title="是否确认删除该文件?"
                @confirm="handleDelete(idx)"
              >
                <a-icon style="margin-left:10px; cursor: pointer;" type="delete" />
              </a-popconfirm>
            </div>
            <a-progress
              class="progress"
              :percent="file.percentage"
              :strokeWidth="3"
              :showInfo="false" />
          </div>
        </div>
        <slot name="extra" :idx="idx" />
      </div>
    </div>
  </div>
</template>

<script>
import SparkMD5 from 'spark-md5'
import { verifyUpload, postAction, mergeFile } from '@/api/sliceUpload'

export default {
  name: 'SliceUpload',
  props: {
    boxHeight: {
      type: Number,
      default: 300
    },
    // eslint-disable-next-line vue/require-default-prop
    maxFile: Number,
    accept: {
      type: String,
      default: '.jpg,.png,.doc,.docx,.pdf,.txt,.jpeg'
    }
  },
  data () {
    return {
      fileMD5: {},
      isStop: false,
      fileList: [],
      tableDate: []
    }
  },
  methods: {
    stop (record) {
      this.isStop = true
      record.uploadStatus = 0
    },
    start (record, index) {
      const file = this.fileList[index].originFileObj
      const currentRow = this.tableDate.find((row) => row.uid === file.uid)
      this.isStop = false
      record.uploadStatus = 1
      this.uploadByPieces({
        file, // 文件信息
        currentRow,
        success: (data) => {
          record.percentage = 100
        },
        error: (e) => {
          record.percentage = 0
        }
      })
    },
    deleteFile () {
      this.fileList = []
      this.tableDate = []
    },
    getFileList () {
      return this.tableDate
    },
    bytesToSize (bytes) {
      if (bytes === 0) return '0 B'
      const k = 1024
      const sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
      const i = Math.floor(Math.log(bytes) / Math.log(k))
      return (bytes / Math.pow(k, i)).toPrecision(3) + ' ' + sizes[i]
    },
    handleDelete (idx) {
      this.tableDate.splice(idx, 1)
    },
    beforeUpload (file) {
      this.fileList.push(file)
      // uploadStatus 上传状态 1开始 0暂停 2完成
      this.tableDate.push({
        fileData: file,
        uid: file.uid,
        fileName: file.name,
        size: file.size,
        type: file.type,
        percentage: 0,
        uploadStatus: 1,
        remarks: ''
      })
    },
    /**
     * 自定义上传事件
     */
    customRequestUpload ({ file }) {
      // 开始执行上传逻辑
      const currentRow = this.tableDate.find((row) => row.uid === file.uid)
      // console.log('自定义上传', this.fileList)
      // console.log('当前行文件', currentRow)
      if (currentRow) {
        // 当前上传进度归0
        currentRow.percentage = 0
        // 这里走分片上传逻辑
        this.uploadByPieces({
          file, // 文件信息
          currentRow,
          success: (data) => {
            currentRow.percentage = 100
          },
          error: (e) => {
            currentRow.percentage = 0
          }
        })
      }
    },
    getMd5 (file, chunkSize) {
      const _this = this
      return new Promise((resolve, reject) => {
        const blobSlice = File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice
        const chunks = Math.ceil(file.size / chunkSize)
        let currentChunk = 0
        const spark = new SparkMD5.ArrayBuffer() // 追加数组缓冲区。
        const fileReader = new FileReader() // 读取文件
        fileReader.onload = function (e) {
          spark.append(e.target.result)
          currentChunk++
          if (currentChunk < chunks) {
            loadNext()
          } else {
            _this.fileMD5[file.uid] = spark.end() // 完成md5的计算，返回十六进制结果。

            console.log('md5值', _this.fileMD5[file.uid])
            resolve(_this.fileMD5[file.uid])
          }
        }

        fileReader.onerror = function (e) {
          reject(e)
        }

        function loadNext () {
          const start = currentChunk * chunkSize
          let end = start + chunkSize
          end > file.size && (end = file.size)
          fileReader.readAsArrayBuffer(blobSlice.call(file, start, end))
        }
        loadNext()
      })
    },
    // 断点分片上传
    uploadByPieces ({ file, currentRow, success, error }) {
      console.log('uploadByPieces')
      console.log(currentRow)
      // const that = this
      // 上传过程中用到的变量
      var slicingSize = null
      if (file.size <= 20971520) {
        // 20M以内，单个切片大小设置为2MB
        slicingSize = 2 * 1024 * 1024 // 切片大小 单位MB
      } else if (file.size <= 524288000) {
        // 500M以内，单个切片大小设置为5MB
        slicingSize = 5 * 1024 * 1024 // 切片大小 单位MB
      } else {
        // 500M以外，单个切片大小设置为10MB
        slicingSize = 10 * 1024 * 1024 // 切片大小 单位MB
      }
      const sumSlicingCount = Math.ceil(file.size / slicingSize) // 总片数
      console.log('单个切片文件大小', slicingSize, '总片数', sumSlicingCount)

      currentRow.remarks = '正在获取hash值...'
      this.getMd5(file, slicingSize)
        .then((res) => {
          console.log('md5值', res)
          this.fileMD5[file.uid] = res

          currentRow.remarks = ''
          this.readFileMD5(file, currentRow, slicingSize, sumSlicingCount, success, error)
        })
        .catch((e) => {
          console.log('MD5计算错误')
        })
    },
    // 得到某一片的分片 file 总文件； currentIndex 当前切片数，按索引计算； slicingSize 切片大小
    getSlicingInfo (file, currentIndex, slicingSize) {
      const start = currentIndex * slicingSize
      const end = Math.min(file.size, start + slicingSize)
      const slicingInfo = file.slice(start, end)
      return slicingInfo
    },
    // 开始执行切片上传
    readFileMD5 (file, currentRow, slicingSize, sumSlicingCount, success, error) {
      // 检查文件有没有上传过的状态
      console.log('文件校验参数', { fileHash: this.fileMD5[file.uid] })
      verifyUpload({ fileHash: this.fileMD5[file.uid], fileName: file.name })
        .then((res) => {
          console.log('校验结果', res)
          if (res.shouldUpload) {
            // 已存在 给文件服务器路径
            currentRow.percentage = 100
            currentRow.uploadStatus = 2
            currentRow.result = res
          } else {
            if (res.uploadedList.length > 0) {
              // 上次中断上传
              console.log('上次未完成', res.uploadedList)
              // 计算之前上传的进度
              const pross = (res.uploadedList.length / sumSlicingCount) * 100
              currentRow.percentage = Number(pross.toFixed(2))

              // 上传剩余文件
              const uploadList = []
              for (let i = 0; i < sumSlicingCount; i++) {
                if (!res.uploadedList.includes(i.toString())) {
                  uploadList.push(i)
                }
              }
              this.uploadSliceFile(file, currentRow, slicingSize, sumSlicingCount, uploadList, success, error)
            } else {
              // 文件不存在
              const uploadList = []
              for (let i = 0; i < sumSlicingCount; i++) {
                uploadList.push(i)
              }
              console.log(uploadList)
              this.uploadSliceFile(file, currentRow, slicingSize, sumSlicingCount, uploadList, success, error)
            }
          }
        })
        .catch((e) => {
          error && error(e)
        })
    },
    // 对切片文件进行上传 uploadList 切片数组
    uploadSliceFile (file, currentRow, slicingSize, sumSlicingCount, uploadList, success, error) {
      if (uploadList.length > 0 && !this.isStop) {
        const currentIndex = uploadList[0]
        // 得到当前需要上传的分片文件
        const currentInfo = this.getSlicingInfo(file, currentIndex, slicingSize)
        const result = new File([currentInfo], currentIndex, { type: file.type, lastModified: Date.now() })

        const formData = new FormData()
        formData.append('chunk', result)
        // 开始上传
        const url = '/file/UploadFile?hash=' + this.fileMD5[file.uid] + '&filename=' + currentIndex
        postAction(url, formData).then((res) => {
          // 每上传一个就在进度条上加数据
          const pross = (currentIndex / sumSlicingCount) * 100
          currentRow.percentage = Number(pross.toFixed(2))
          const newArr = JSON.parse(JSON.stringify(uploadList))
          if (newArr.length > 0) {
            newArr.shift()
            this.uploadSliceFile(file, currentRow, slicingSize, sumSlicingCount, newArr, success, error)
          }
        })
      } else {
        if (!this.isStop) {
          mergeFile({ fileHash: this.fileMD5[file.uid], fileName: file.name })
            .then((res) => {
              currentRow.percentage = 100
              currentRow.uploadStatus = 2
              currentRow.result = res
              console.log('合并结果', res)
            })
            .catch((e) => {
              currentRow.percentage = 100
              error && error('合并失败')
            })
        }
      }
    },
    handleChange (info) {
      this.fileList = [...info.fileList]
    }
  }
}
</script>

<style lang="less" scoped>
.upload-wrapper{
  display: inline-block;
  width: calc(100% - 10px);
  /deep/.ant-upload{
    width: 100%;
  }
}

.result-wrapper {
  margin-top: 10px;
  width: 100%;
  background: #FFFFFF;
  border: 1px solid #D9DADB;
  padding: 10px;

  .item {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    font-weight: 400;
    color: #666666;
    line-height: 36px;

    .content {
      flex: 1;
      .body {
        position: relative;
        justify-content: space-between;
        padding-bottom: 4px;
        display: flex;

        .fileName {
          max-width: 400px;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        }

        .progress {
          position: absolute;
          left: 0;
          bottom: 0px;
        }
      }
    }
  }
}
</style>
