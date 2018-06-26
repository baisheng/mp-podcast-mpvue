<style lang="scss">
  /*Page {*/
  /*background: #f5f5f5;*/
  /*}*/
  .c-app {
    padding: 30px;
    display: flex;
    flex-direction: column;
    font-size: 16px;
    align-items: center;
    justify-content: center;
    line-height: 30px;
    &__name {
      font-size: 14px;
    }
  }

  .c-app__icon {
    width: 48px;
    height: 48px;
    box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.10);
  }
</style>
<template>
  <div class="c-app" v-if="appInfo">
    <image class="c-app__icon" :src="appInfo.logo_url"></image>
    <div class="c-app__name">{{appInfo.name}}</div>
    <div class="c-app__description">{{appInfo.description}}</div>

    <!--<view class="c-panel">-->
    <div class="c-btns">
      <button open-type="getUserInfo"
              class="c-btn c-btn--primary"
              @getuserinfo="confirm"
              v-if="reInfo">确认授权
      </button>
      <button class="c-btn" @click="backHome">随便逛逛</button>
    </div>
    <!--</view>-->
  </div>
  <div v-else></div>
</template>
<script>
  import auth from '@/api/auth'
  import {mapState, mapActions} from 'vuex'
  import WxUtils from '@/utils/WxUtils'
  import tips from '@/utils/tips'

  export default {
    components: {},
    data () {
      return {
        redirect: 'false',
        init: false,
        reInfo: null,
        reAuth: null
      }
    },

    computed: {
      appInfo () {
        return this.$store.getters.appInfo
      }
    },

    async mounted () {
      this.load()
    },
    methods: {
      ...mapActions([
        'getAppInfo'
      ]),
      async load () {
        await this.getAppInfo()
      },
      async confirm (event) {
        if (event.target.rawData) {
          const userInfo = event.target.rawData
          await auth.user({block: false, redirect: true}, userInfo)
          tips.success('授权成功')
          if (this.redirect === 'true') {
            wx.switchTab({url: '/pages/index'})
          } else {
            // $wxapp.emitter.emit('reload')
            wx.navigateBack()
          }
        } else {
          tips.error('授权失败')
        }
      },
      backHome () {
        wx.switchTab({url: '/pages/index'})
      }
    },
    async onLoad ({redirect}) {
      this.redirect = redirect
      this.reInfo = WxUtils.canIUse('button.open-type.getUserInfo')
      // await this.load()
    }
  }
</script>
