<template>
  <section id="home" :class="[classes]" :style="{
		'backgroundPosition': moveX ? `${moveX}% 100%` : '50% 100%',
		'transition': `background-position ${transDur} 0s, transform 0.5s 0s`
	}">
		<BackgroundText text="Alex" />
		<BackgroundText text="Figliolia" />
		<div>
			<IntroText />
			<Button3D 
				text="Work"
				@click="nav"
				url='work' />
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
		computed: {
			moveX() {
				return this.$store.state.moveX;
			},
			transDur() {
				return this.$store.state.transDur;
			},
			mounts() {
				return this.$store.state.mounts;
			}
		},
		components: {
			IntroText,
			Button3D,
			BackgroundText
		},
		methods: {
			nav({ target: { dataset: { page }}}) {
				this.$store.commit('navigate', { page, router: this.$router });
			}
		},
		mounted: function () {
		  this.$nextTick(function () {
		  	const delay = this.mounts === 0 ? 2000 : 1000;
		  	setTimeout(() => { this.classes = 'home home-show' }, delay);
    		setTimeout(() => { this.classes = 'home home-show home-reset-delays' }, delay + 500);
    		if(this.mounts === 0) this.$store.commit('updateMounts');
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
