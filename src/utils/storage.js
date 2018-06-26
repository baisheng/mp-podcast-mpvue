/**
 * Created by dubaoxing on 2017/2/27.
 * https://www.npmjs.com/package/store
 */
export default class {
  static set (key, value) {
    try {
      wx.setStorageSync(key, value);
    } catch (e) {
      //
    }
    return this;
  }
  static get (key, defaultValue) {
    let value = null;
    try {
      value = wx.getStorageSync(key) || defaultValue;
    } catch (e) {
      //
    }
    return value;
  }
  static remove (key) {
    try {
      wx.removeStorageSync(key);
    } catch (e) {
      //
    }
    return this;
  }
  static clearAll () {
    try {
      wx.clearStorageSync();
    } catch (e) {
      //
    }
    return this;
  }
}
