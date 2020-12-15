export const state = () => ({
  status: '',
  users: []
})

export const getters = {
  getStatus: (state) => state.status,
  getUsers: (state) => state.users
}

export const mutations = {
  SET_STATUS(state, status) {
    state.status = status
  },
  SAVE_USERS(state, users) {
    state.users = users
  }
}

export const actions = {
  async fetchUsers({ commit }) {
    commit('SET_STATUS', 'fetching')
    try {
      const data = await this.$axios.$get(`/users`)
      commit('SET_STATUS', 'users-fetched')
      commit('SAVE_USERS', data)
    } catch {
      commit('SET_STATUS', 'error')
    }
  },
}
