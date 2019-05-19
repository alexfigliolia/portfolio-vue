<template>
	<button 
		:data-page="url"
		:style="{
			'transform': `rotateX(${rotX}deg) rotateY(${rotY}deg) skew(-5deg) scale(${scale})`,
			'transitionDuration': bTransDur,
			'boxShadow': boxShadow
		}"
		@click="$emit('click', $event)"
		v-on:mouseenter="mouseEnter"
		v-on:mousemove="mouseMove"
		v-on:mouseleave="mouseLeave"
		v-on:touchstart="mouseEnter"
		v-on:touchmove="mouseMove"
		v-on:touchend="mouseLeave">
		<h3 
			@click="$emit('click', $event)"
			:data-page="url">{{ text }}</h3>
	</button>
</template>

<script>
	import ButtonMethods from './Methods';
	const { 
		data, 
		mouseEnter, 
		mouseMove, 
		mouseLeave, 
		getCachedTargetData, 
		getType, 
		getRotations, 
		setFrame 
	} = new ButtonMethods();
	export default {
		name: 'Button3D',
		props: ['text', 'url', 'click'],
		data: function() {
			return data;
		},
		methods: {
		  mouseEnter,
		  mouseMove,
		  mouseLeave,
		  getCachedTargetData, 
		  getType, 
		  getRotations, 
		  setFrame
		},
		beforeDestroy: function() {
			mouseLeave()
		}
	}
</script>