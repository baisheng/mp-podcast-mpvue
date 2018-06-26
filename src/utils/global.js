import storage from "./storage";

const KEY_OPENID = "_openId";
const KEY_UNIONID = "_unionId";
const KEY_UUID = "_uuid";
const KEY_TOKEN = "_token";
const KEY_USER_INFO = "user";
const KEY_APP_INFO = "_appInfo";

class global {
  // 设置当前页面的navbar title
  static setTitle ({ title = "" }) {
    wx.setNavigationBarTitle({ title });
  }

  // 自定义单选象确认框
  static alert ({ content = "", title = "" }) {
    return new Promise((success, fail) => {
      wx.showModal({
        title,
        content,
        showCancel: false,
        confirmColor: "#21c0ae",
        complete: function(res) {
          if (res.confirm) {
            success(res);
          } else if (res.cancel) {
            fail(res);
          }
        }
      });
    });
  }

  // 自定义多选象确认框
  static confirm ({ content = "", title = "", options }) {
    return new Promise((resolve, reject) => {
      wx.showModal({
        title,
        content,
        cancelText: options[0].label || "取消",
        confirmText: options[1].label || "确定",
        confirmColor: "#21c0ae",
        success: function(res) {
          if (res.confirm) {
            resolve(res);
            if (options[1].callback) {
              options[1].callback();
            }
          } else if (res.cancel) {
            reject(res);
            if (options[0].callback) {
              options[0].callback();
            }
          }
        }
      });
    });
  }

  // 获取当前系统参数
  static getSystemInfo () {
    return new Promise((resolve, reject) => {
      wx.getSystemInfo({
        success: (res) => {
          resolve(res);
        },
        fail: () => {
          reject();
        }
      });
    });
  }

  // 获取用户信息
  static getUserInfo () {

    // return new Promise((success, fail) => {
      // 查看是否授权
      // return wx.getSetting({
      //   success: function(res) {
      //     if (res.authSetting["scope.userInfo"]) {
      //       // 已经授权，可以直接调用 getUserInfo 获取头像昵称
      //       return wx.getUserInfo({
      //         success: function(res) {
      //           console.log(res)
      //           return res
      //         }
      //       })
      //     }
      //   }
      // });
      // wx.getUserInfo({
      //   success,
      //   fail
      // });
    // });
  }

  // toast 封装
  static toast ({ content, duration = 1 }, success, fail) {
    wx.showToast({
      title: content,
      icon: "success",    // 图标，有效值 "success", "loading"
      duration: parseInt(duration * 1000)
    });
  }

  // 显示加载中
  static showLoading ({ content = "加载中...", mask = true }) {
    wx.showLoading({
      title: content,
      mask
    });
  }

  // 隐藏加载中
  static hideLoading () {
    wx.hideLoading();
  }

  // 获取当前位置
  static getLocation () {
    return new Promise((success, fail) => {
      wx.getLocation({
        success,
        fail
      });
    });
  }

  // 打开新的页
  static openWebview ({ url, redirect = false }) {
    if (redirect) {
      wx.redirectTo({ url });
      return;
    }
    wx.navigateTo({ url });
  }

  // 关闭当前页
  static closeWebview () {
    wx.navigateBack({
      delta: 1
    });
    // wx.navigateBack(1);
  }

  // 设置navbar 背景颜色
  static setTitleColor (options) {
    wx.setNavigationBarColor(options);
  }

  // 获取当前小程序openId 没有返回 ''
  static getOpenId () {
    return storage.get(KEY_OPENID, "");
  }

  static setOpenId (openId) {
    return storage.set(KEY_OPENID, openId);
  }

  // 获取小程序的unionId 没有返回 '';
  static getUnionId () {
    return storage.get(KEY_UNIONID, "");
  }

  static setUnionId (unionId) {
    return storage.set(KEY_UNIONID, unionId);
  }

  // 获取当前小程序的UUID 没有返回 ''
  static getUUID () {
    return storage.get(KEY_UUID);
  }

  static setUUID (uuid) {
    return storage.set(KEY_UUID, uuid);
  }

  static setRandomUUID () {
    return storage.set(KEY_UUID, new Date().getTime());
  }

  // 获取当前小程序的token 没有返回 ''
  static getToken () {
    return storage.get(KEY_TOKEN);
  }

  static setToken (token) {
    console.log(token);
    return storage.set(KEY_TOKEN, token);
  }

  static removeToken () {
    return storage.remove(KEY_TOKEN);
  }

  static setUser (user) {
    return storage.set(KEY_USER_INFO, user);
  }

  static getUser () {
    return storage.get(KEY_USER_INFO);
  }

  static setAppInfo (appInfo) {
    return storage.set(KEY_APP_INFO, appInfo);
  }

  static getAppInfo () {
    return storage.get(KEY_APP_INFO);
  }
}

export default global;
