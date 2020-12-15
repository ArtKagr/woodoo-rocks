<template>
  <div class="d-flex flex-wrap justify-content-between bg-main p-3">
    <template v-if="posts && posts.length">
      <b-card-group columns>
        <b-card
          v-for="(post, key) in posts"
          :key="key"
          :title="post.title"
          class="img-fluid mb-3"
        >
          <b-card-text>
            {{ post.body }}
          </b-card-text>
          <b-card-text>
            {{ authorName(post.userId) || null }}
          </b-card-text>
        </b-card>
      </b-card-group>
    </template>
    <template v-else>
      <div class="d-flex justify-content-center w-100">
        <span class="h3 pt-4">Ничего не найдено</span>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "MainPage",
  data() {
    return {
      posts: []
    }
  },
  computed: {
    foundUser() {
      return this.$store.getters['users/getFoundUser']
    },
    postsCopy() {
      return JSON.parse(JSON.stringify(this.$store.getters['posts/getPosts']))
    },
    users() {
      return JSON.parse(JSON.stringify(this.$store.getters['users/getUsers'])) || []
    },
  },
  watch: {
    foundUser(newValue) {
      if(newValue === undefined) this.posts = []
      else if(newValue === null) this.posts = this.postsCopy
      else if(newValue) this.posts = this.postsCopy.filter(post => post.userId === this.foundUser.id )
    },
    postsCopy(newValue) {
      this.posts = newValue
    }
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


