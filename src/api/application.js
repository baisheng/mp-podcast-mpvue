import Base from './base'
export default class Application extends Base {

  /**
   * 获取应用配置
   */
  static async getInfo() {
    const url = `${this.appService}?key=_wxapp`
    return await this.get(url)
  }

  static async getSticky(id) {
    const url = `${this.appService}/posts`
    return await this.get(url, {id: id})
  }
}
