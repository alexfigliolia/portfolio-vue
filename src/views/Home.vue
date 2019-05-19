<template>
  <section id="home" :class="[classes]">
		<BackgroundText text="Alex" />
		<BackgroundText text="Figliolia" />
		<div>
			<IntroText />
			<Button3D 
				text="Work"
				@click="nav" />
		</div>
	</section>
</template>

<script>
	import $ from 'jquery';
	import ripples from 'ripples';
	import IntroText from '../components/Home/IntroText.vue';
	import Button3D from '../components/Button3D/Button3D';
	import BackgroundText from '../components/BackgroundText/BackgroundText';

	export default {
		name: 'Home',
		data: function() {
			return {
				classes: 'home'
			}
		},
		components: {
			IntroText,
			Button3D,
			BackgroundText
		},
		methods: {
			nav: function() {
				this.$router.push('work');
			}
		},
		mounted: function () {
		  this.$nextTick(function () {
		  	setTimeout(() => { this.classes = 'home home-show' }, 1000);
    		setTimeout(() => { this.classes = 'home home-show home-reset-delays' }, 1500);
			  $('#home').ripples({
	        resolution: 512,
	        dropRadius: 10, 
	        perturbance: 0.02,
	    	});
		  });
		},
		beforeDestroy: function() {
			$('#home').ripples('destroy');
		}
	}
</script>

<style lang="scss">
	@import "@/components/Home/_Home.scss";
</style>

<!-- <section 
				id="home"
				onMouseMove={handlePageMove}
				onMouseEnter={handlePageEnter}
				onTouchMove={handlePageMove}
				onTouchStart={handlePageEnter}
				className={classes}
				style={{
					backgroundPosition: moveX ? `${moveX}% 100%` : '50% 100%',
					transition: `background-position ${transDur} 0s, transform 0.5s 0s`
				}}>
				<BackgroundText text="Alex" />
				<BackgroundText text="Figliolia" />
				<div>
					<IntroText />
					<Button3D 
						text="Work"
						function={nav} />
				</div>
			</section> -->
