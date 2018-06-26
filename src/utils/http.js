import fly from '@/utils/request'
import tips from '@/utils/tips'

// HTTP 请求工具类
export default class http {
  static async request (method, url, data) {
    const param = [
      url,
      data,
      {method: method}
    ]
    // tips.loading()

    const res = await fly.request(...param)
    if (this.isSuccess(res)) {
      return res.data
    } else {
      throw this.requestException(res)
    }
  }

  /**
   * 判断请求是否成功
   */
  static isSuccess (res) {
    // console.log(res)
    // const wxCode = res.statusCode
    // 微信请求错误
    // if (wxCode !== 200) {
    //   return false
    // }
    // const wxData = res.data
    return !(res !== undefined && res &&  res.errno !== 0)
  }

  /**
   * 异常
   */
  static requestException (res) {
    const error = {}
    error.statusCode = res.statusCode
    const wxData = res.data
    const serverData = wxData.data
    if (serverData) {
      error.serverCode = wxData.code
      error.message = serverData.message
      error.serverData = serverData
    }
    return error
  }

  static get (url, data) {
    return this.request('get', url, data)
  }

  static put (url, data) {
    return this.request('put', url, data)
  }

  static post (url, data) {
    return this.request('post', url, data)
  }

  static patch (url, data) {
    return this.request('patch', url, data)
  }

  static delete (url, data) {
    return this.request('delete', url, data)
  }
}
