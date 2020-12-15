export const state = () => ({
  status: '',
  posts: [],
})

export const getters = {
  getStatus: (state) => state.status,
  getPosts: (state) => state.posts
}

export const mutations = {
  SET_STATUS(state, status) {
    state.status = status
  },
  SAVE_POSTS(state, posts) {
    state.posts = posts
  },
}

export const actions = {
  async fetchPosts({ commit }) {
    commit('SET_STATUS', 'fetching')
    try {
      const data = await this.$axios.$get(`/posts`)
      commit('SET_STATUS', 'posts-fetched')
      commit('SAVE_POSTS', data)
    } catch {
      commit('SET_STATUS', 'error')
    }
  },
}
