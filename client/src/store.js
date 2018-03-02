import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    token: null,
    articles: []
  },
  mutations: {
    setIsLogin (state, payload) {
      state.isLogin = payload
    },
    setToken (state, payload) {
      state.token = payload
    },
    setArticles (state, payload) {
      state.articles = payload
    }
  },
  actions: {
    setIsLogin ({commit}, payload) {
      commit('setIsLogin', payload)
    },
    setToken ({commit}, payload) {
      commit('setToken', payload)
    },
    setArticles ({commit}, payload) {
      commit('setArticles', payload)
    }
  },
  getters: {
    getArticles (state) {
      return state.articles.reverse()
    }
  }
})
