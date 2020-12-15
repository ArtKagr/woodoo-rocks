<template>
  <div class="d-flex flex-wrap justify-content-between bg-main p-3">
    <b-card
      v-for="(post, key) in posts"
      :key="key"
      :title="post.title"
      class="w-30 mb-3"
    />
  </div>
</template>

<script>
export default {
  name: "MainPage",
  computed: {
    posts() {
      return JSON.parse(JSON.stringify(this.$store.getters['posts/getPosts'])) || []
    },
    users() {
      return JSON.parse(JSON.stringify(this.$store.getters['posts/getPosts'])) || []
    },
  },
  created() {
    this.$store.dispatch('users/fetchUsers')
    this.$store.dispatch('posts/fetchPosts')
  }
}
</script>


