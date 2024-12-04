<template>
  <div id="app">
    <!-- Loader -->
        <div id="preloader" v-if="loading">
            <div id="status">
                <div class="spinner">
                    <div class="bounce1"></div>
                    <div class="bounce2"></div>
                    <div class="bounce3"></div>
                  </div>
            </div>
        </div>
     <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      loading: true
    };
  },
  created() {
    setTimeout(() => (this.loading = false), 600);
  }
}
</script>

<style>

</style>
