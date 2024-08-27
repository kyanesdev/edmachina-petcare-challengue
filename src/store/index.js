import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

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
    },
    SET_PETS (state, pets) {
      state.pets = pets
    },
    SET_WIDGETS (state, widgets) {
      state.widgets = widgets
    },
    SET_VACCINATIONS (state, vaccinations) {
      state.vaccinations = vaccinations
    },
    SET_HEALTH_DATA (state, healthData) {
      state.healthData = healthData
    }
  },
  actions: {
    registerUser ({ commit, state }, { username, password }) {
      const userExists = state.users.some(user => user.username === username)
      if (userExists) {
        return Promise.reject(new Error('El usuario ya existe'))
      }
      const newUser = { username, password }
      commit('ADD_USER', newUser)
      return Promise.resolve(newUser)
    },
    loginUser ({ commit, state }, { username, password }) {
      const user = state.users.find(
        user => user.username === username && user.password === password
      )
      if (user) {
        commit('SET_USER', user)
        return Promise.resolve(user)
      } else {
        return Promise.reject(new Error('Usuario o contraseña incorrectos'))
      }
    },
    fetchPets ({ commit }) {
      const pets = []
      commit('SET_PETS', pets)
    },
    updateWidgets ({ commit }, widgets) {
      commit('SET_WIDGETS', widgets)
    },
    fetchVaccinations ({ commit }) {
      const vaccinations = []
      commit('SET_VACCINATIONS', vaccinations)
    },
    updateHealthData ({ commit }, healthData) {
      commit('SET_HEALTH_DATA', healthData)
    }
  },
  getters: {
    isAuthenticated: state => !!state.user,
    getPets: state => state.pets,
    getWidgets: state => state.widgets,
    getVaccinations: state => state.vaccinations,
    getHealthData: state => state.healthData
  },
  plugins: [createPersistedState()]
})
