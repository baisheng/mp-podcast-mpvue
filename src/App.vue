<script>
  import global from "./utils/global";

  export default {
    mpType: "app",
    created () {
      // 调用API从本地缓存中获取数据
      const logs = wx.getStorageSync("logs") || [];
      logs.unshift(Date.now());
      wx.setStorageSync("logs", logs);
      const appInfo = global.getAppInfo();
      if (appInfo) {
        global.setAppInfo(appInfo);
      }
      // eslint-disable-next-line
      console.log("app created and cache logs by setStorageSync");
    }
  };
</script>
<style lang="scss">
  @import "./scss/base";
  @import "./scss/animate";
  @import "./scss/variable";
  @import "./scss/main";
</style>

