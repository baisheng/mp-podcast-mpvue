<template>
  <div class="index">
    <img src="/static/images/banner.svg" class="banner"/>
      <button open-type="getUserInfo"
              @getuserinfo="bindGetUserInfo"
              class="c-btn c-btn--primary c-btn--small" v-if="!isAuth">
        授权登录
      </button>
    <img src="/static/images/footer.png" class="background"/>

  </div>
</template>

<script>
  import { wxLogin, setStorage, jumpTo, showLoading, hideLoading, modal, toast } from "../utils/wechatUtils";
  import auth from "@/api/auth";
  import userApi from '@/api/users'

  export default {
    data () {
      return {
        isAuth: true
      }
    },
    methods: {
      async bindGetUserInfo (e) {
        // let info = JSON.parse(e.mp.detail.rawData);
        // console.log(JSON.stringify(e.mp.detail))
        // setStorage("nickName", info.nickName);
        // setStorage("avatar", info.avatarUrl);
        showLoading()
        // jumpTo("/pages/featured");
        // auth.login()
        this.isAuth = await auth.user({block: false, redirect: true}, e.mp.detail)
        if (this.isAuth) {
          hideLoading();
          // setTimeout(() => {
            // this.$router.push({
            //   path: "/pages/featured"
            // });
            wx.switchTab({
              url: '/pages/featured'
            })
          // }, 500);
        }
      }
    },
    async mounted () {
      // this.isAuth = await auth.user()
      const me = await userApi.me()
      if (me) {
        hideLoading();
        // setTimeout(() => {
          // this.$router.push({
          //   path: "/pages/featured"
          // });
          wx.switchTab({
            url: '/pages/featured'
          })
        // }, 500);
      } else {
        this.isAuth = false
      }
    },
   // onLoad () {
     // const updateManager = wx.getUpdateManager();
     //  updateManager.onCheckForUpdate((res) => {
     //    console.log(res.hasUpdate);
     //  });
     //  updateManager.onUpdateReady(() => {
     //    modal("更新提示", "新版本已经准备好，是否重启应用")
     //      .then(() => {
     //        updateManager.applyUpdate();
     //      })
     //      .catch(err => {
     //        toast("必须使用新版本", "none");
     //        console.log(err);
     //      });
     //  });
    // }
  };
</script>

<style lang="scss">
  $problemFontColor: #33270c;
  .banner {
    position: absolute;
    top: 300rpx;
    width: 750rpx;
    height: 266rpx;
  }

  .background {
    width: 464rpx;
    height: 269rpx;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: absolute;
    bottom: 0;
    z-index: 1;
  }

  .index {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /*position: fixed;*/

    button:after {
      border: none;
    }
  }
</style>
