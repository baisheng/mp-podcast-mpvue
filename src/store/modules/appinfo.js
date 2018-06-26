import appApi from "@/api/application"
import global from "@/utils/global"
// import Application from "../../api/application";

const state = {
  application: {},
  layout: {},
  swiper: {}
}

const getters = {
  appInfo (state) {
    return state.application
  },
  swiper (state) {
    return state.swiper
  }
}

const actions = {
  async getAppInfo ({commit}) {
    const appInfo = await global.getAppInfo() || await appApi.getInfo()
    if (!appInfo) {
      return
    }
    let options = null
    if (!Object.is(appInfo.options, undefined)) {
      options = appInfo.options
    }
    if (options) {
      commit('SET_APP_LAYOUT', options.layout)
      commit('SET_APP_SWIPER', options.swiper)
    }
    commit('SET_APP_INFO', appInfo)
  }
}

const mutations = {
  SET_APP_INFO (state, data) {
    global.setAppInfo(data)
    state.application = data
  },
  SET_APP_LAYOUT (state, data) {
    state.layout = data
  },
  SET_APP_SWIPER (state, data) {
    state.swiper = data
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
