<template>
  <div class='work-wrapper' :style="{
  	'height': height + 'px', 
  	'width': width + 'px'
  }">
		<div :style="{ 
			'height': height + 'px', 
			'width': width + 'px', 
			'perspective': '1000px', 
			'position': 'relative' 
		}">
 			<Controls 
 				v-if="width > 957"
 				@scroll="scroll" />
			<section class='work' :style="{
				'height': height + 'px',
				'width': width + 'px',
				'backgroundColor': '#fff'
			}" id='slides'>
			<Slide v-for="(data, i) in API"
				:index="i"
				:key="data.name"
				:selectedIndex="selectedIndex"
				:api="data"
				@scroll="scroll" />
			</section>
		</div>
	</div>
</template>

<script>
	import PageSwitch from 'pageswitch';
	import API from '@/components/Work/API';
	import Slide from '@/components/Work/Slide/Slide.vue';
	import Controls from '@/components/Work/Controls/Controls.vue';

	export default {
		name: 'Work',
		components: {
			Slide,
			Controls,
		},
		data: function() {
			return {
				selectedIndex: 0,
				pw: null,
				API
			}
		},
		computed: {
	    height() {
	    	return this.$store.state.height;
	    },
	    width() {
	    	return this.$store.state.width;
	    }
	  },
	  methods: {
	  	scroll: function({ target: { dataset: { direction }}}) {
	  		direction === 'right' ? this.pw.next() : this.pw.prev();
	  	}
	  },
		mounted: function () {
		  this.$nextTick(function () {
		  	const desktop = this.width > 957;
		  	this.pw = new PageSwitch('slides', {
					duration: 750,
					direction: desktop ? 1 : 0,
			    start: 0,
			    loop: true,
			    ease: 'ease',
			    transition: desktop ? 'flip3d' : 'flip3dY',
					freeze: false,
					mouse: true,
				  mousewheel: true,
					arrowkey: true,
				  autoplay: false,
					interval: false
				});
				this.pw.on('after', () => {
					this.selectedIndex = this.pw.current;
				});
		  });
		},
		beforeDestroy: function() {
	  	this.$nextTick(function() {
        if(this.pw) {
		  		this.pw.destroy();
		  		this.pw = null;
		  	}
      });
		},
		updated: function() {
			this.pw.setTransition(this.width >= 957 ? 'flip3d' : 'flip3dY'); 
		}
	}
</script>

<style lang="scss">
	@import '@/components/Work/_Work.scss';
</style>