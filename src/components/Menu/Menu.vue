<template>
	<section class="menu" :class="{ 'menu-show': menuOpen }">
		<div class="arrow"></div>
		<div class='links'>
			<Link 
				:menuClasses="menuOpen ? 'menu menu-show' : 'menu'"
				pageTo="Home"
				url="/"
				@nav="nav" />
			<Link 
				:menuClasses="menuOpen ? 'menu menu-show' : 'menu'"
				pageTo="Work"
				url="work"
				@nav="nav" />
			<Link 
				:menuClasses="menuOpen ? 'menu menu-show' : 'menu'"
				pageTo="Contact"
				url="contact"
				@nav="nav" />
		</div>
	</section>
</template>

<script>
	import Link from './Link/Link.vue';

	export default {
		name: 'Menu',
		components: {
			Link,
		},
		computed: {
	    menuOpen() {
	    	return this.$store.state.menuOpen;
	    },
	  },
		methods: {
			nav({ target: { dataset: { page }}}) {
				this.$store.commit('navigate', { page, router: this.$router });
			}
		}
	}
</script>

<style lang="scss">
	@import './_Menu.scss';
</style>