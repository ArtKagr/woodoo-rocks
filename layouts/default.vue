<template>
  <div class="d-flex vh-100 vw-100 overflow-hidden">
    <div class="d-flex flex-column w-100">
      <Search class="w-100 align-self-start"/>
      <nuxt class="align-self-stretch w-100 h-100 overflow-auto" />
    </div>
  </div>
</template>

<script>
import Search from "../components/Search";
export default {
  components: {Search}
}
</script>

<style lang="scss">
@import '../assets/scss/app.scss';
</style>

