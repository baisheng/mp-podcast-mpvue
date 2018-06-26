import http from '@/utils/http'

const VERSION = 'v1'
const APP_ID = 'S11SeYT2W'
const BASE_URL = process.env.SERVICE_URL
const APP_API = `${BASE_URL}/${VERSION}/apps/${APP_ID}`
/**
 * 方便子类调用 http 请求
 */
export default class base {
  static baseUrl = BASE_URL
  static appService = APP_API
  static getApi = function (version) {
    return `${BASE_URL}/${version}/apps/${APP_ID}`
  }
  static get = http.get.bind(http);
  static put = http.put.bind(http);
  static post = http.post.bind(http);
  static delete = http.delete.bind(http);
}
