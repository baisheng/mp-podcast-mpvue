import wx from '@/utils/wx'
// import storage from './storage'
import Fly from 'flyio'

import global from './global'
// 生产服务器
let HOST = 'https://api.caixie'

if (process.env.NODE_ENV === 'st') { // 预发布
  console.log('st')
}
if (process.env.NODE_ENV === 'test') { // 测试
  console.log('test')
}
if (process.env.NODE_ENV === 'development') {
  HOST = 'http://api.caixie.la'
}


const request = new Fly()

request.interceptors.request.use((request) => {
  request.headers['Authorization'] = `Bearer ${global.getToken()}`
  wx.showNavigationBarLoading()
  return request
})

request.interceptors.response.use(
  (response, promise) => {
    wx.hideNavigationBarLoading()
    return promise.resolve(response.data)
  },
  (err, promise) => {
    wx.hideNavigationBarLoading()
    wx.showToast({
      title: err.message,
      icon: 'none'
    })
    return promise.resolve()
  }
)

export default request
