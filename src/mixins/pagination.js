import Tips from '@/utils/tips'

export default {
  data () {
    return {
      isPageLoading: false,
      isPageEmpty: false,
      isPageReachBottom: false
    }
  },

  /**
   * 到达底部
   */
  async onReachBottom () {
    await this.next()
  },

  async onScrollBottom () {
    await this.next()
  },
  /**
   * 下拉刷新
   */
  async onPullDownRefresh () {
    await this.reload()
  },
  methods: {
    /**
     * 下一页
     */
    async next () {
      try {
        if (this.page.reachBottom) {
          return
        }
        if (this.page.start !== 1) {
          Tips.setLoading()
        }
        this.isPageLoading = true
        const param = this.params ? this.params() : {}
        await this.page.next(param)
        this.isPageReachBottom = this.page.reachBottom
        // this.isPageEmpty = this.page.list.length === 0
      } finally {
        this.isPageLoading = false
        this.init = true
        Tips.loaded()
      }
    },


    /**
     * 重新加载
     */
    async reload () {
      this.page.reset()
      await this.next()
      wx.stopPullDownRefresh()
    },

    /**
     * 更新列表（外部事件）
     */
    async update () {
      await this.reload()
    }
  }
}
