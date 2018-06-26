/* eslint-disable no-undef,camelcase */

/**
 * 提示与加载工具类
 */
export default class AudioManager {
  constructor () {
    // this.status = ''
    this.curAudio = {}
    this.album = {
      list: []
    }
    this.curIndex = 0
    // 数据集合
    this.list = []
    // 起始数据
    this.start = 1
    // 加载数据条数
    this.pagesize = 10
    // 总数据数
    this.count = 0
    // 数据处理函数
    this.loading = false
    // 参数
    this.params = []
    // 是否底部
    this.reachBottom = false
    // 是否为空
    this.empty = true
    // 是否需要清除
    this.toClear = false
    this.currentProcess = '00:00'
    this.percent = 0
    this.duration = 0
  }
  getCurIndex () {
    return this.curIndex
  }
  setCurIndex (index) {
    this.curIndex = index
  }
  setAlbum(album) {
    this.album = album
  }
  getAlbum() {
    return this.album
  }
  setCurrentProcess (process) {
    this.currentProcess = process
  }
  getCurrentProcess () {
    return this.currentProcess
  }
  setPercent (percent) {
    this.percent = percent
  }
  getPercent () {
    return this.percent
  }
  getDuration () {
    return this.duration
  }
  setDuration (duration) {
    this.duration = duration
  }

  getAudio() {
    return this.curAudio
  }
  setAudio(audio) {
    this.curAudio = audio
  }
  setAudioList (list) {
    this.list = list
  }
  getAudioList () {
    return this.list
  }
  hasPrev () {}
  hasNext () {}
  getPrevAudio() {}
  getNextAudio() {}
  play () {
/*    wx.playBackgroundAudio({
      dataUrl: this.curAudio.url,
      title: this.curAudio.songname,
      success (res)
        if (seek !== undefined) {
          wx.seekBackgroundAudio({position: seek})
        }
        that.globalData.curplay = Object.assign({}, {play_status: 'playing'}, m)
        // that.emitter.emit('audio_toggle', {
        //   playing: true,
        //   curplay: that.globalData.curplay || {}
        // })
        // cb && cb()
      },
      fail () {
        console.log('fail --- play next')
      }
    })*/
  }
  changeAudio (bgAudioManager) {
    // 当前音频
    const { id, title, url } = this.getAudio()
    // 当前专辑信息
    const { author, name, feature_image } = this.getAblumInfo()
    bgAudioManager.title = title
    bgAudioManager.epname = name
    bgAudioManager.audioId = id
    bgAudioManager.coverImgUrl = feature_image
    bgAudioManager.singer = author.nickname || '育儿柚道'

    // iOS使用content_type_signare_url
    // const src = isIOS() ? content_type_signare_url : url;
    if (!url) {
      showToast({
        title: '音频丢失，无法播放',
        icon: 'warn',
        duration: 2000
      })
    } else {
      bgAudioManager.src = src
    }
  }
}
