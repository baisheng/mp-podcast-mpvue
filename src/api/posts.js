/* eslint-disable func-call-spacing,no-unexpected-multiline,no-unused-vars,no-unused-vars */
import base from './base'
import Page from '@/utils/page'
import moment from 'moment'

moment.locale('zh-cn')

export default class posts extends base {
  /**
   * 获取推荐内容列表
   * @returns {Pagination}
   */
  // static getStickies () {
  //   const url = `${this.appService}/posts?sticky=true`
  //   return new Page(url)
  // }
  /**
   * 获取节目列表从全部分类中
   */
  static page (category) {
    const url = `${this.appService}/posts?status=publish&category=${category}&rand=true`
    return new Page(url, this.__before.bind(this), this.__after.bind(this))
    // return new MyPage(url)
  }

  /**
   * 获取节目信息
   * @param id
   * @returns {Promise.<*>}
   */
  static async detail (id) {
    const url = `${this.appService}/posts/${id}`
    const data = await this.get(url)
    return data
  }

  /**
   * 按作者查找
   * @param author
   * @returns {Promise.<*>}
   */
  static async findByAuthor (author) {
    const url = `${this.appService}/posts?author=${author}&type=page&status=publish`
    // const data = await this.get(url, {author: author})
    return new Page(url, this.__before.bind(this), this.__after.bind(this))
  }
  /**
   * 获取列表
   * @param parent
   * @returns {Promise.<*>}
   */
  static async list (items) {
    // console.log(JSON.stringify(items))
    const list = []
    for (const item of items) {
      const url = `${this.appService}/posts/${item.id}?status=publish`
      const data = await this.get(url)
      // console.log(JSON.stringify(data))
      // list.push(data.data)
      // return data
      list.unshift(data)
    }
    // console.log(JSON.stringify(list))
    return list
    // console.log(JSON.stringify(data))
  }

  static async loadEpisodes (item) {
    const url = `${this.appService}/posts`
    const data = await this.get(url, {parent: item.id})
    return data.data
  }

  /**
   * Like
   * @param postId
   * @returns {Promise.<*>}
   */
  static async newLike (postId) {
    const url = `${this.appService}/posts/${postId}/likes/new`
    const data = await this.post(url, {})
    return data
  }

  /**
   * Un Like
   * @param postId
   * @returns {Promise.<void>}
   */
  static async unLike (postId) {
    const url = `${this.appService}/posts/${postId}/likes/mine/delete`
    const data = await this.post(url, {})
    return data
  }

  /**
   * View
   * @param postId
   * @returns {Promise.<*>}
   */
  static async newView (postId) {
    const url = `${this.appService}/posts/${postId}/views/new`
    const data = await this.post(url, {})
    return data
  }
  /**
   * 获取当前内容的评论回复
   * @returns {Promise.<void>}
   */
  static async getReplies (postId) {
    // TODO: 需要支持下拉加载与分页 @basil 1107
    const url = `${this.appService}/posts/${postId}/replies`
    const data = await this.get(url)
    return data
  }

  /**
   * 新建评论j
   * @param postId
   * @returns {Promise.<void>}
   */
  static async repliesNew (postId, postData) {
    const url = `${this.appService}/posts/${postId}/replies/new`
    const data = await this.post(url, postData)
    return data
  }
  /**
   * 前置数据处理
   * @param item
   * @returns {Promise.<*>}
   * @private
   */
  static async __before (item) {
    item.title = item.title.split('-')[0]
    item.modified = moment(item.modified).fromNow()
    // item.list = await this.loadEpisodes(item)
    // item.modified = moment(item.modified).fromNow()
    // item.list.forEach((value) => {
    //   value.modified = moment(value.modified).fromNow()
    // })
    // item.loaded = true
    // return item
  }

  static async __after (item) {
    // $wxapp.emitter.emit(Event.PODCAST_LIST_UPDATE, item)
  }
}
