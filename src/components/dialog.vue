<template name="c-dialog">
  <div :class="{'c-dialog': true, 'c-dialog--show' : dialog.show }">
    <div class="c-dialog--mask"></div>
    <div class="c-dialog--container">
      <div v-if="dialog.title" class="c-dialog__header">
        {{ dialog.title }}
      </div>
      <div
        :class="{'c-dialog__content': true, 'c-dialog__content--title':  dialog.title}">
        {{ dialog.content }}
      </div>
      <div
        :class="[{'c-dialog__footer' :true}, dialog.buttonsShowVertical ? 'c-dialog__footer--vertical' : 'c-dialog__footer--horizon' ]">
        <button
          class="c-dialog__button c-btn"
          :data-type="item.type"
          @tap="_handleDialogButtonClick"
          :style="[item.color ? 'color:'+ item.color : 'color: #344A5E']"
          v-for="(item, index) in dialog.buttons" :key="item.text + '-' + item.type">
          {{ item.text }}
        </button>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      value: {
        type: Object,
        default: {
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
          confirmColor: '#4EC0AA',
          // 是否展示取消
          showCancel: false,
          // 取消按钮文案
          cancelText: '取消',
          // 取消按钮颜色
          cancelColor: '#344A5E'
        }
      }
    },
    data () {
      return {
        dialog: this.value
      }
    },
    watch: {
      value (val) {
        this.dialog = val
      }
    },
    methods: {
      _handleDialogButtonClick (e) {
        console.log(e)
        const {currentTarget = {}} = e
        const {dataset = {}} = currentTarget

        // 获取当次弹出框的信息
        const cDialogData = this.dialog || {}
        const {resolve = _f, reject = _f} = cDialogData
        // 重置 Dialog 里的内容
        this.dialog = {
          show: false
        }
        // 自定义按钮，全部 resolve 形式返回，根据 type 区分点击按钮
        if (cDialogData.showCustomBtns) {
          resolve({
            type: dataset.type
          })
          return
        }

        // 默认按钮，确认为 resolve，取消为 reject
        if (dataset.type === 'confirm') {
          resolve({
            type: 'confirm'
          })
        } else {
          reject({
            type: 'cancel'
          })
        }
      }
    }
  }

</script>
