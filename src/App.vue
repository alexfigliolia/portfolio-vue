<template>
  <div id="app" :class="[appClasses]">
    <div class="app-inner">
      <div class='back'>
        <Loader />
      </div>
      <div class='front'>  
        <Header />
        <Menu />
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
  import Header from '@/components/Header/Header.vue';
  import Menu from '@/components/Menu/Menu.vue';
  import Loader from '@/components/Loader/Loader.vue';

  export default {
    name: 'App',
    components: {
      Header,
      Menu,
      Loader
    },
    data() {
      return {
        preloaded: new Image(),
        mounts: 0,
      }
    },
    computed: {
      appClasses() {
        return this.$store.state.appClasses;
      },
      menuOpen() {
        return this.$store.state.menuOpen;
      },
      width() {
        return this.$store.state.width;
      }
    },
    methods: {
      resize() {
        this.$store.commit('resize');
      },
      updateMoveX({ gamma }) {
        this.$store.commit('updateMoveX', { gamma });
      },
      preload() {
        let url;
        if(this.width >= 670) url = require('@/assets/wordClouds.png');
        else url = require('@/assets/wordClouds-small.png');
        this.preloaded = new Image();
        this.preloaded.src = url;
      },
    },
    mounted: function() {
      this.$nextTick(function() {
        window.addEventListener('resize', this.resize, true);
        if(/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/.test(navigator.userAgent) && window.DeviceOrientationEvent){
          window.addEventListener('deviceorientation', this.updateMoveX, true);
        } 
        window.onpopstate = this.handlePopState;
        document.body.style.height = window.innerHeight;
        document.body.style.width = window.innerWidth;
        setTimeout(() => { 
          this.$store.commit('dropApp');
          setTimeout(() => {
            setTimeout(() => { 
              this.$store.commit('resetApp'); 
              this.$store.commit('toggleLoader');
            }, 600);
          }, 400);
        }, 1000);
        this.preload();
      });
    },
    beforeDestroy: function() {
      this.$nextTick(function() {
        window.removeEventListener('resize', this.resize, true);
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && window.DeviceOrientationEvent){
          window.removeEventListener('deviceorientation', this.updateMoveX, true);
        } 
      });
    }
  }
</script>

<style lang="scss">
  @import "@/styles/_App.scss";
</style>
