import app from '@/api/app'

export default class Cache {
  static cache = new Map();
  static _debug = false;

  /**
   * 获取应用信息（缓存）
   */
  static async app() {
    const KEY = 'APP_OPTIONS'
    if (this.isExpired(KEY)) {
      let options = await app.options()
      this.set(KEY, options)
    }
    return this.cache.get(KEY)
  }

  /**
   * 判断是否过期
   */
  static isExpired(key, minute = 5) {
    const value = this.cache.get(key)
    if (value === undefined || value === null) {
      this.log(`[cache]${key} not exists`)
      return true
    }
    const interval = new Date().getTime() - value._lastupdate
    const isExpired = interval > minute * 60 * 1000
    if (isExpired) {
      this.log(`[cache]${key} expired, interval=${interval}`)
      this.cache.delete(key)
    } else {
      this.log(`[cache]${key} exists, interval=${interval}`)
    }
    return isExpired
  }

  /**
   * 删除缓存对象
   */
  static remove(key) {
    if (key === null) {
      return
    }
    this.cache.delete(key)
  }

  /**
   * 设置缓存
   */
  static set(key, value) {
    if (key === null) {
      return
    }
    value._lastupdate = new Date().getTime()
    this.cache.set(key, value)
  }
  static log(text) {
    if (this._debug) {
      console.info(text)
    }
  }
}
