import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import bcrypt from 'bcryptjs'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    pets: [],
    widgets: [],
    vaccinations: [],
    healthData: {},
    users: []
  },
  mutations: {
    SET_USER (state, user) {
      state.user = user
    },
    ADD_USER (state, user) {
      state.users.push(user)
    }
  },
  actions: {
    async registerUser ({ commit, state }, { username, password }) {
      const userExists = state.users.some(user => user.username === username)
      if (userExists) {
        return Promise.reject(new Error('El usuario ya existe'))
      }
      const hashedPassword = await bcrypt.hash(password, 10)
      const recoveryCodes = [
        Math.random().toString(36).substr(2, 8),
        Math.random().toString(36).substr(2, 8),
        Math.random().toString(36).substr(2, 8)
      ]
      const newUser = { username, password: hashedPassword, recoveryCodes }
      commit('ADD_USER', newUser)
      return Promise.resolve(newUser)
    },
    async loginUser ({ commit, state }, { username, password }) {
      const user = state.users.find(user => user.username === username)
      if (user) {
        const passwordMatch = await bcrypt.compare(password, user.password)
        if (passwordMatch) {
          commit('SET_USER', user)
          return Promise.resolve(user)
        } else {
          return Promise.reject(new Error('Usuario o contraseña incorrectos'))
        }
      } else {
        return Promise.reject(new Error('Usuario o contraseña incorrectos'))
      }
    },
    async resetPassword ({ commit, state }, { username, recoveryCode, newPassword }) {
      const user = state.users.find(user => user.username === username)
      if (user && user.recoveryCodes.includes(recoveryCode)) {
        const hashedPassword = await bcrypt.hash(newPassword, 10)
        user.password = hashedPassword
        user.recoveryCodes = [
          Math.random().toString(36).substr(2, 8),
          Math.random().toString(36).substr(2, 8),
          Math.random().toString(36).substr(2, 8)
        ]
        commit('SET_USER', user)
        return Promise.resolve(user)
      } else {
        return Promise.reject(new Error('Código de recuperación incorrecto'))
      }
    }
  },
  getters: {
    isAuthenticated: state => !!state.user
  },
  plugins: [createPersistedState()]
})
