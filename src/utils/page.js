import http from '@/utils/http'

export default class Page {
  constructor (url, beforeFunc, afterFunc) {
    // 数据访问地址
    this.url = url
    // 数据集合
    this.list = []
    // 起始数据
    this.start = 1
    // 加载数据条数
    this.pagesize = 10
    // 总数据数
    this.count = 0
    // 数据处理函数
    this.beforeFunc = beforeFunc
    this.afterFunc = afterFunc
    // 正在加载中
    this.loading = false
    // 参数
    this.params = []
    // 是否底部
    this.reachBottom = false
    // 是否为空
    this.empty = true
    // 是否需要清除
    this.toClear = false
    // 本次新增加的数据
  }

  /**
   * 加载下一页数据
   */
  async next (args) {
    const param = {
      page: this.start,
      pagesize: this.pagesize
    }
    if (this.loading) {
      console.warn('page loading!')
      return this
    }
    // 附加参数
    this.loading = true
    try {
      Object.assign(param, args)
      const data = await http.get(this.url, param)
      // 底部判断
      if (data.data === undefined || data.data === null || data.data.length < 1) {
        // console.log('data is null')
        if (this.toClear) {
          this.clear()
        } else {
          this.reachBottom = true
        }
        return this
      }
      this.empty = false
      // 前置处理数据
      await this.__before(data.data)
      // 设置数据
      if (this.toClear) {
        // console.log('clear')
        this.list = data.data
        this.toClear = false
      } else {
        // console.log('data...')
        this.list = this.list.concat(data.data)
        // console.log(JSON.stringify(this.list))
        // this.__after(data.data)
      }

      this.start++
      // this.start += this.count
      if (data.data.length < this.pagesize) {
        this.reachBottom = true
      }
      return this
    } finally {
      this.loading = false
    }
  }

  /**
   * 恢复到第一页
   */
  reset () {
    this.empty = true
    this.toClear = true
    this.start = 1
    this.reachBottom = false
  }

  clear () {
    this.toClear = false
    this.start = 1
    this.list = []
  }

  /**
   * 处理数据（私有）
   */
  async __before (data) {
    if (this.beforeFunc) {
      for (let i in data) {
        const result = await this.beforeFunc(data[i])
        if (result) {
          data[i] = result
        }
      }
    }
  }

  /**
   *
   * @private
   */
  __after () {
    if (this.afterFunc) {
    }
  }
}
