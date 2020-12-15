<template>
  <div class="d-flex flex-wrap justify-content-between bg-main p-3">
    <b-card
      v-for="(post, key) in posts"
      :key="key"
      :title="post.title"
      class="w-30 mb-3"
    >
      <b-card-text>
        {{ post.body }}
      </b-card-text>
      <b-card-text>
        {{ authorName(post.userId) || null }}
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "MainPage",
  computed: {
    foundUser() {
      return JSON.parse(JSON.stringify(this.$store.getters['users/getFoundUser'])) || null
    },
    posts() {
      return this.foundUser && this.foundUser.id
        ? JSON.parse(JSON.stringify(this.$store.getters['posts/getPosts'])).filter(post => post.userId === this.foundUser.id )
        : JSON.parse(JSON.stringify(this.$store.getters['posts/getPosts'])) || []
    },
    users() {
      return JSON.parse(JSON.stringify(this.$store.getters['users/getUsers'])) || []
    },
  },
  methods: {
    authorName(userId) {
      const currentUser = this.users.find(user => user.id === userId)
      return currentUser && currentUser.name ? currentUser.name : null
    }
  },
  created() {
    this.$store.dispatch('users/fetchUsers')
    this.$store.dispatch('posts/fetchPosts')
  }
}
</script>


