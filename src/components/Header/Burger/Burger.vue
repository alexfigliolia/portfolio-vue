<template>
	<div 
    id="burg"
    v-on:click="openMenu">
    <div id="hamburger" class="hamburglar" :class="{ 'is-open': !menuOpen, 'is-closed': menuOpen}">
      <div id="top"></div>
      <svg 
        id="svb" 
        x="0px" 
        y="0px" 
        width="64px" 
        height="64px" 
        view-box="0 0 64 64" 
        enable-background="new 0 0 64 64" 
        xml-space="preserve">
        <path 
          id="circle" 
          fill="none" 
          stroke-width="2" 
          stroke-miterlimit="10" 
          d="M16,32h32c0,0,11.723-0.306,10.75-11 c-0.25-2.75-1.644-4.971-2.869-7.151C50.728,7.08,42.767,2.569,33.733,2.054C33.159,2.033,32.599,2,32,2C15.432,2,2,15.432,2,32 c0,16.566,13.432,30,30,30c16.566,0,30-13.434,30-30C62,15.5,48.5,2,32,2S1.875,15.5,1.875,32"/>
      </svg>
      <div id="bottom1"></div>
    </div>
  </div>
</template>

<script>
  export default { 
    name: 'Burger',
    computed: {
      menuOpen() {
        return this.$store.state.menuOpen;
      },
    },
    methods: {
      openMenu: function() {
        this.$store.commit('toggleMenu');
      }
    }
  }
</script>