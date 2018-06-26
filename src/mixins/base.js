import Tips from '@/utils/tips'

export default {
  data () {
    return {
      init: false,
      topTips: {
        show: false,
        content: '成功'
      },
      dialog: {
        show: false,
        // 自定义 btn 列表
        // { type: 按钮类型，回调时以此作为区分依据，text: 按钮文案, color: 按钮文字颜色 }
        buttons: [],
        // 标题
        title: '',
        // 内容
        content: ' ',
        // 按钮是否展示为纵向
        buttonsShowVertical: false,
        // 是否展示确定
        showConfirm: true,
        // 确认按钮文案
        confirmText: '确定',
        // 确认按钮颜色
        confirmColor: '#3CC51F',
        // 是否展示取消
        showCancel: false,
        // 取消按钮文案
        cancelText: '取消',
        // 取消按钮颜色
        cancelColor: '#333'
      }
    }
  },

  loaded () {
    this.init = true
    Tips.loaded()
  },

// 卸载清理
  onUnload () {
    // Object.assign(this, this.def)
  },
  methods: {
    $alert (item = '标题', item2) {
      const param = this.isObject(item) ? Object.assign({
        // 首参数为obj
        title: 'title', content: 'content'
      }, item) : this.isString(item) ? this.isString(item2) ? {
        // 俩参数均为字符串
        title: item, content: item2
      } : {
        // 只有首参为字符串
        title: '', content: item
      } : {
        // 尝试转换字符串
        title: item.toString ? item.toString() : '参数异常'
      }
      wx.showModal(Object.assign({
        showCancel: false
      }, param))
    },
    $showTopTips (content = '', options = {}) {
      let topTips = this.topTips || {}
      // 如果已经有一个计时器在了，就清理掉先
      if (topTips.timer) {
        clearTimeout(cTopTips.timer)
        topTips.timer = undefined
      }

      if (typeof options === 'number') {
        options = {
          duration: options
        }
      }

      // options参数默认参数扩展
      options = Object.assign({
        duration: 3000
      }, options)

      // 设置定时器，定时关闭topTips
      let timer = setTimeout(() => {
        this.cTopTips = {
          'show': false,
          'timer': undefined
        }
        this.$apply()
      }, options.duration)
      this.topTips = {
        show: true,
        content,
        options,
        timer,
        type: options.type ? options.type : ''
      }
      console.log(JSON.stringify(options))
      this.$apply()
    },

    $showDialog (options = {}) {
      console.log('show dialog....')
      const {
        // 自定义 btn 列表
        // { type: 按钮类型，回调时以此作为区分依据，text: 按钮文案, color: 按钮文字颜色 }
        buttons = [],
        // 标题
        title = '',
        // 内容
        content = ' ',
        // 按钮是否展示为纵向
        buttonsShowVertical = false,
        // 是否展示确定
        showConfirm = true,
        // 确认按钮文案
        confirmText = '确定',
        // 确认按钮颜色
        confirmColor = '#4EC0AA',
        // 是否展示取消
        showCancel = false,
        // 取消按钮文案
        cancelText = '取消',
        // 取消按钮颜色
        cancelColor = '#344A5E'
      } = options

      // 处理默认按钮的展示
      // 纵向排布确认按钮在上方
      let showCustomBtns = false
      if (buttons.length === 0) {
        if (showConfirm) {
          buttons.push({
            type: 'confirm',
            text: confirmText,
            color: confirmColor
          })
        }

        if (showCancel) {
          const cancelButton = {
            type: 'cancel',
            text: cancelText,
            color: cancelColor
          }
          if (buttonsShowVertical) {
            buttons.push(cancelButton)
          } else {
            buttons.unshift(cancelButton)
          }
        }
      } else {
        showCustomBtns = true
      }
      return new Promise((resolve, reject) => {
        this.dialog = {
          show: true,
          showCustomBtns,
          buttons,
          title,
          content,
          buttonsShowVertical,
          showConfirm,
          confirmText,
          confirmColor,
          showCancel,
          cancelText,
          cancelColor,
          // 回调钩子
          resolve,
          reject
        }
      })
    }
  }
}

