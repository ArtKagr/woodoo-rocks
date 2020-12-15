export const state = () => ({
  status: '',
  users: [],
  foundUser: {}
})

export const getters = {
  getStatus: (state) => state.status,
  getUsers: (state) => state.users,
  getFoundUser: (state) => state.foundUser,

}

export const mutations = {
  SET_STATUS(state, status) {
    state.status = status
  },
  SAVE_USERS(state, users) {
    state.users = users
  },
  SET_CURRENT_USER(state, soughtUser) {
    if(!soughtUser) state.foundUser = 'reset'
    else state.foundUser = state.users.find(user => user.name.toLowerCase().match('^' + soughtUser.toLowerCase())) || null
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
