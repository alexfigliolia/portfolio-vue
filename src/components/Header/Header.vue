<template>
	<header class="header">
		<div>
  		<h1 v-on:click="nav">
  			<div v-for="letter in 'FIG'.split('')" v-bind:key="letter">{{ letter }}</div>
  		</h1>
			<Burger />
		</div>
	</header>
</template>

<script>
	import Burger from './Burger/Burger.vue';
	export default {
	  name: 'Header',
	  components: {
	  	Burger
	  },
	  methods: {
	  	nav: function() {
	  		this.$router.push('/');
	  	}
	  }
	}
</script>

<style lang='scss'>
	@import "@/components/Header/_Header.scss";
</style>