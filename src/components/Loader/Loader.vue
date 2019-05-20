<template>
	<section 
		:class="[showLoader ? 'loader loader-show' : 'loader']" 
		id="loader">
    <div class="showbox">
      <div class="loads">
        <svg class="circular" viewBox="25 25 50 50">
          <circle 
            class="path" 
            cx="50" 
            cy="50" 
            r="20" 
            fill="none" 
            stroke="#fff"
            stroke-width="2" 
            strokeMiterlimit="10" />
        </svg>
      </div>
    </div>
  </section>
</template>

<script>
	export default {
		name: 'Loader',
		computed: {
			showLoader() {
				return this.$store.state.showLoader
			}
		}
	}
</script>

<style lang="scss">
	@import '_Loader.scss';
</style>