import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: null,
    uid: 0,
    name: '',
    avatar: '',
    // 底部的导航栏
    footstatus: false,
    // 头部的导航标签
    headerStatus: false,
    // 提示的是否登录
    tishi: false,
    // 用户的信息
    tishi1: false,
    // 侧边边菜单的显示和隐藏
    sidebar: false,
    // 语言的判断 中文
    language: true,
    // 英文
    language1: false,

  },
  mutations: {
    setUser(state, payload) {
      let { uid, username, avatar } = payload
      state.uid = uid
      state.username = username
      state.avatar = avatar

      localStorage.setItem('uid', uid + '')
      localStorage.setItem('username', username)
      localStorage.setItem('avatar', avatar)
    },
    setToken(state, token) {
      state.token = token
      localStorage.setItem('token', token)
    },
    setAvatar(state, avatar) {
      state.avatar = avatar
      localStorage.setItem('avatar', avatar)
    },

    // ------------------------
    tabBar(a, b) {
      a.footstatus = b
    },
    headerStatus(a, b) {
      a.headerStatus = b
    },
    size(a, b) {
      a.header = b
    },
    // -------------------------- 账户登录的信息
    account(a, b) {
      a.account = b
    },
    person(a, b) {
      a.person = b
    },
    money(a, b) {
      a.money = b
    },
    wallet(a, b) {
      a.wallet = b
    },
    // ------------------------
    // 提示的信息
    tishi(a, b) {
      a.tishi = b
    },
    // 菜单的显示
    tishi1(a, b) {
      a.tishi1 = b
    },
    // 侧边栏的显示 和隐藏
    sidebar(a, b) {
      a.sidebar = b
    },
    // 中文
    language(a, b) {
      a.language = b
    },
    // 英文
    language1(a, b) {
      a.language1 = b
    }

  },
  actions: {
    login({ commit }, payload) {
      let { token, id, username, avatar } = payload

      commit('setToken', token)
      commit('setUser', { uid: id, username, avatar })
    }
  }
})
