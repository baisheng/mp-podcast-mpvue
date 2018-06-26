/* eslint-disable func-call-spacing,no-unexpected-multiline,no-unused-vars,no-unused-vars */
import base from './base'

export default class Author extends base {
  /**
   * 获取作者信息
   * @param userId user_login
   * @returns {Promise.<*>}
   */
  static async detail (userId) {
    const url = `${this.appService}/users/login:${userId}`
    const data = await this.get(url)
    // console.log(JSON.stringify(data))
    return data
  }
  // static async listPodcast (userId) {}
}
