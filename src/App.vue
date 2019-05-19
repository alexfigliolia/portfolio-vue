<template>
  <div id="app" class='App'>
    <div class='back'></div>
    <div class='front'>  
      <Header />
      <router-view/>
    </div>
  </div>
</template>

<script>
  import Header from '@/components/Header/Header.vue';
  export default {
    name: 'App',
    components: {
      Header
    },
    methods: {
      resize: function() {
        this.$store.commit('resize');
      }
    },
    mounted: function() {
      this.$nextTick(function() {
        window.addEventListener('resize', this.resize, true);
      });
    },
    beforeDestroy: function() {
      this.$nextTick(function() {
        window.removeEventListener('resize', this.resize, true);
      });
    }
  }
</script>

<style lang="scss">
  @import "@/styles/_App.scss";
</style>
