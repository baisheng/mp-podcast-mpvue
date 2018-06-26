import Vue from "vue";
import Vuex from "vuex";
// import global from '../utils/global'
// import appApi from '../api/app'
// import userApi from '../api/app'
import categoryApi from "@/api/category";
import postApi from "@/api/posts";
import Tips from "@/utils/tips";
import http from "@/utils/http";

import appinfo from "./modules/appinfo";
// import audio from './modules/audio'

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    appinfo
    // audio
  },
  state: {
    print: "Hello caixie!",
    // app: {},
    // layout: {},
    // swiper: [],
    categories: [],
    featured: {},
    popular: {},
    news: {},
    posts: []
  },
  getters: {
    // appInfo (state) {
    //   return state.app
    // }
  },
  mutations: {
    SET_CATEGORIES (state, data) {
      state.categories = data;
    },
    SET_FEATURED (state, data) {
      state.featured = data;
    },
    SET_POPULAR (state, data) {
      state.popular = data;
    },
    SET_NEWS (state, data) {
      state.news = data;
    }
  },
  actions: {
    async getCategories ({ commit }) {
      const categories = await categoryApi.list();
      if (categories) {
        commit("SET_CATEGORIES", categories);
      }
    },
    async getFeatured ({ commit }) {
      const page = postApi.page("featured");
      const pageData = await page.next();
      // const data = await http.get(page.url)
      // console.log(data)
      // console.log('get featured ')
      // console.log(pageData)
      // if (pageData.list) {
      // let pageData = {
      //   list: []
      // }
      // pageData.list = pageData.list.concat(data.data)

      commit("SET_FEATURED", pageData);
      // Tips.loaded()
      // }
    },
    async getPopular ({ commit }, pagesize = 6) {
      const page = postApi.page("popular");
      const pageData = await page.next({ pagesize: pagesize });
      // if (pageData.list) {
      commit("SET_POPULAR", pageData);
      // }
    },
    async getNews ({ commit }) {
      const page = postApi.page("new");
      const pageData = await page.next();
      // if (pageData.list) {
      commit("SET_NEWS", pageData);
      // }
    },
    async getPostsFromCategory ({ commit }) {
    }
    // async getMe ({commit}) {
    // }
  }
});

export default store;
