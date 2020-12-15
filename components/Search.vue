<template>
  <div class="d-flex py-3 px-4 justify-content-center w-100 bg-main">
    <b-input-group class="w-20">
      <b-input-group-prepend is-text>
        <b-icon-search></b-icon-search>
      </b-input-group-prepend>
      <b-form-input id="filter-by-author" v-model="query" placeholder="Filter by author..."></b-form-input>
    </b-input-group>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      query: null,
    }
  },
  watch: {
    query(newValue) {
      this.$store.commit('users/SET_CURRENT_USER', newValue)
    },
  }
}
</script>
