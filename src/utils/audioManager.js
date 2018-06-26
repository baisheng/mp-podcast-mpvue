import Vuex from 'vuex'
import Tips from '../utils/tips'

const formatNumber = function (n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const formatDuration = function (duration) {
  duration = new Date(duration)
  return formatNumber(duration.getMinutes()) + ':' + formatNumber(duration.getSeconds())
}
let globalAudioManager = wx.getBackgroundAudioManager()

export default class AudioManager {
  constructor (v, options) {

    v.use(Vuex)
    v.prototype.$audioStore = new Vuex.Store({
      state: {
        count: 0,
        status: 'stop',
        // playing: false,
        curAudio: {
          id: -1,
          albumId: -1,
          epname: '',
          title: '',
          singer: '',
          avatar: '',
          coverImgUrl: '',
          src: ''
        },
        album: {
          id: -1,
          name: '',
          author: {},
          description: '',
          cover: '',
          list: []
        },
        curIndex: 0,
        playList: [],
        start: 1,
        currentProcess: '00:00',
        percent: 0,
        buffered: 0,
        duration: '00:00'
      },
      getters: {
        curAudio (state) {
          return state.curAudio
        },
        album (state) {
          return state.album
        }
      },
      mutations: {
        SET_PLAY_STATUS (state, status) {
          state.status = status
        },
        SET_AUDIO (state, audio) {
          // state.curAudio = Object.assign({}, state.curAudio, audio)
          state.curAudio = audio
        },
        SET_CUR_INDEX (state, index) {
          state.curIndex = index
        },
        SET_ALBUM (state, album) {
          state.album = album
        },
        SET_CURRENT_PROCESS (state, process) {
          state.currentProcess = process
        },
        SET_PERCENT (state, percent) {
          state.percent = percent
        },
        SET_BUFFERED (state, buffered) {
          state.buffered = buffered
        },
        SET_DURATION (state, duration) {
          state.duration = duration
        },
        SET_PLAY_LIST (state, list) {
          state.playList = list
        }
      }
    })
    this.store = v.prototype.$audioStore
    let _options = {
      onWaiting () {
        v.prototype.$audioStore.commit('SET_PLAY_STATUS', 'waiting')
      },
      onTimeUpdate () {
        if (v.prototype.$audioStore.state.status === 'waiting') {
          v.prototype.$audioStore.commit('SET_PLAY_STATUS', 'playing')
        }
        const currentTime = globalAudioManager.currentTime
        // 当前播放进度
        const currentProcess = formatDuration(currentTime * 1000)
        const duration = formatDuration(globalAudioManager.duration * 1000)
        // 当前播放百分比
        const percent = currentTime / globalAudioManager.duration * 100
        v.prototype.$audioStore.commit('SET_CURRENT_PROCESS', currentProcess)
        v.prototype.$audioStore.commit('SET_PERCENT', percent)
        v.prototype.$audioStore.commit('SET_DURATION', duration)
        v.prototype.$audioStore.commit('SET_BUFFERED', globalAudioManager.buffered)
      },
      changeAudio () {
        let curAudio = v.prototype.$audioStore.getters.curAudio
        if (Object.is(curAudio.src, undefined) || curAudio.src === '') {
          if (v.prototype.$audioStore.state.album.list.length > 0) {
            curAudio = v.prototype.$audioStore.state.album.list[0]
            curAudio = {
              id: curAudio.id,
              epname: curAudio.title,
              title: curAudio.title,
              singer: curAudio.author.user_nicename,
              avatar: curAudio.author.avatar,
              coverImgUrl: v.prototype.$audioStore.state.album.featured_image,
              src: curAudio.url
            }
            v.prototype.$audioStore.commit('SET_AUDIO', curAudio)
          } else {
            Tips.toast('音频加载失败', null, 'warning')
            v.prototype.$audioStore.commit('SET_PLAY_STATUS', 'stop')
            return false
          }
        }
        globalAudioManager.title = curAudio.title
        globalAudioManager.coverImgUrl = curAudio.coverImgUrl
        globalAudioManager.epname = curAudio.epname
        globalAudioManager.singer = curAudio.singer
        globalAudioManager.src = curAudio.src
      }
    }
    if (options) {
      _options = Object.assign({}, _options, options)
    }
    globalAudioManager.changeAudio = _options.changeAudio
    globalAudioManager.onWaiting.call(this, _options.onWaiting)
    globalAudioManager.onTimeUpdate.call(this, _options.onTimeUpdate)
  }

  play () {
    let status = globalAudioManager.paused
    if (status === undefined || !globalAudioManager.currentTime) {
      globalAudioManager.changeAudio()
      this.store.commit('SET_PLAY_STATUS', 'playing')
    } else if (status) {
      this.store.commit('SET_PLAY_STATUS', 'playing')
      globalAudioManager.play()
    } else {
      this.store.commit('SET_PLAY_STATUS', 'pause')
      globalAudioManager.pause()
    }
  }

  playTarget () {
    globalAudioManager.changeAudio()
  }

  pause () {
    this.store.commit('SET_PLAY_STATUS', 'pause')
    globalAudioManager.pause()
  }

  stop () {
    this.store.commit('SET_PLAY_STATUS', 'stop')
    globalAudioManager.stop()
  }

  getAudio () {
    return this.store.getters.curAudio
  }

  setAudio (audio) {
    this.store.commit('SET_AUDIO', audio)
    this.store.commit('SET_PLAY_STATUS', 'playing')
  }

  getAlbum () {
    return this.store.getters.album
  }

  async setAlbum (album) {
    await this.store.commit('SET_ALBUM', album)
  }

  playPrev (cb, pos) {
    this._playControl(cb, 'prev', pos)
  }

  playNext (cb, pos) {
    this._playControl(cb, 'next', pos)
  }

  _playControl (cb, action, pos) {
    this.stop()
    const album = this.getAlbum()

    this.playList = album.list
    this.playIndex = this.store.state.curIndex
    // this.playIndex = audioStore.getCurIndex()
    if (action === 'prev') {
      this.playIndex--
    } else {
      this.playIndex++
    }
    this.playIndex = this.playIndex > this.playList.length - 1 ? 0 : (this.playIndex < 0 ? this.playList.length - 1 : this.playIndex)
    this.playIndex = pos !== undefined ? pos : this.playIndex
    this.store.commit('SET_CUR_INDEX', this.playIndex)
    // audioStore.setCurIndex(this.playIndex)
    const audioItem = this.playList[this.playIndex]
    const audio = {
      id: audioItem.id,
      epname: album.title,
      title: audioItem.title,
      singer: audioItem.author.user_nicename,
      avatar: audioItem.author.avatar,
      coverImgUrl: album.featured_image,
      src: audioItem.url
    }

    this.setAudio(audio)
    this.playTarget()
    // this.curAudio = audioStore.getAudio()
    // this.curAudio.playStatus = 'playing'

    // $wxapp.emitter.emit(`audio-play-${action}`)
    // globalAudio.changeAudio()
    typeof cb === 'function' && cb()
  }

  echo () {
    console.log('Hi, I am audio manager.')
  }
}
