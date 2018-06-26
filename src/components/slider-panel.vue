<template>
  <div class="c-slider-panel">
    <!--遮罩层-->
    <div class="c-slider-panel-cover" v-if="isModal && display" @click="close"></div>

    <!--滑动面板-->
    <div :class="{'c-slider-panel-box': true,  'c-slider-panel-show' : display}"
         :style="slideStyle">
      <!--面板标题-->
      <div class="header-box">
        <!--标题槽位-->
        <div class="title-box">
          <slot name="title"/>
        </div>

        <!--关闭按钮-->
        <div class="close-box">
          <image class="icon" @tap="close" src="/static/images/icons/close.png"></image>
        </div>
      </div>

      <!--内容槽位-->
      <scroll-div scroll-y="true" class="content-box" :style="backgroundStyle">
        <slot />
      </scroll-div>

      <!-- 按钮区域 -->
      <div class="btn-box row-center" v-if="showButton">
        <div class="btn-back column-center" @click="close">
          <span>取消</span>
        </div>
        <div class="btn-primary column-center ml20">
          <span>确定</span>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

  export default {
    props: {
      isModal: {
        type: Boolean,
        default: false
      },
      display: {
        type: Boolean,
        default: false
      },
      background: {
        type: String,
        default: '#F8F8F8'
      },
      minHeight: {
        type: Number,
        default: 0
      },
      showButton: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      slideStyle () {
        return [
          {
            'min-height': this.minHeight,
            'box-shadow: rgba(84, 70, 35, 0.3) 0px 6px 20px, rgba(84, 70, 35, 0.14) 0px 1px 3px, rgba(0, 0, 0, 0.08) 0px 0px 1px;': !this.isModal
          }
        ]
      },
      backgroundStyle () {
      }
    },
    methods: {
      print () {
        console.log('xlxlxlxl')
      },
      close () {
        this.display = false
      }
    }
  }
</script>

