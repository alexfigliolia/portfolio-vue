<template>
  <section id="contact" :class="[classes]">
		<BackgroundText text="Alex" />
		<BackgroundText text="Figliolia" />
		<div>
			<div>
				<h2>
					<div 
						v-for="(letter, i) in 'Contact'.split('')"
						:key="i"
						:style="{
							'transition': `transform 0.5s ${i/20}s`
						}">
						{{ letter }}
					</div>
				</h2>
			</div>
			<Button3D 
				text="Call Me"
				@click="call" />
			<Button3D 
				text="Email Me"
				@click="sendEmail" />
			<Button3D 
				text="GitHub"
				@click="github" />
		</div>
	</section>
</template>

<script>
	import $ from 'jquery';
	import ripples from 'ripples';
	import BackgroundText from '@/components/BackgroundText/BackgroundText';
	import Button3D from '@/components/Button3D/Button3D';

	export default {
		name: 'Contact',
		components: {
			BackgroundText,
			Button3D
		},
		data: function() {
			return {
				classes: 'home contact'
			}
		},
		methods: {
			github: function() {
				window.open('https://github.com/alexfigliolia', '_blank');
			},
			sendEmail: function() {
				window.location.href = "mailto:alexfigliolia@gmail.com?subject=Subject";
			},
			call: function() {
				return false;
			}
		},
		mounted: function () {
		  this.$nextTick(function () {
		  	setTimeout(() => { this.classes = 'home contact contact-show' }, 1000);
    		setTimeout(() => { this.classes = 'home contact contact-show contact-reset-delays' }, 1500);
			  $('#contact').ripples({
	        resolution: 512,
	        dropRadius: 10, 
	        perturbance: 0.02,
	    	});
		  });
		},
		beforeDestroy: function() {
			$('#contact').ripples('destroy');
		}
	}
</script>

<style lang="scss">
	@import '@/components/Contact/_Contact.scss';
</style>
