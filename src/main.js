import Vue from "vue";
import App from "@/App";
import store from "@/store";
import MpvueRouterPatch from 'mpvue-router-patch'
import AudioManager from "@/utils/audioManager";

Vue.config.productionTip = false;
// App.store = store;
App.mpType = "app";
// vuex store挂载
Vue.prototype.$store = store
Vue.prototype.$audio = new AudioManager(Vue);
Vue.use(MpvueRouterPatch)

const app = new Vue({
  store,
  ...App
});
app.$mount();

export default {
  // 这个字段走 app.json
  config: {
    pages: ["^pages/featured"],
    window: {
      backgroundTextStyle: "light",
      navigationBarBackgroundColor: "#fff",
      navigationBarTitleText: "育儿柚道",
      navigationBarTextStyle: "black"
    },
    tabBar: {
      color: '#717882',
      selectedColor: '#a8a5ed',
      backgroundColor: '#FFF',
      borderStyle: 'white',
      list: [{
        pagePath: 'pages/featured',
        text: '精选',
        iconPath: '/static/images/icon/icon-featured.png',
        selectedIconPath: '/static/images/icon/icon-featured--active.png'
      }, {
        pagePath: 'pages/index',
        text: '柚道',
        iconPath: '/static/images/icon/icon-listen.png',
        selectedIconPath: '/static/images/icon/icon-listen--active.png'
      }, {
        pagePath: 'pages/me',
        text: '我的',
        iconPath: '/static/images/icon/icon-user.png',
        selectedIconPath: '/static/images/icon/icon-user--active.png'
      }]
    }
  }
};
