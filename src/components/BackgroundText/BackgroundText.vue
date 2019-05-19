<template>
	<h2>
		<div 
			v-for="letter, i in text.split('')"
			v-bind:key="i"
			v-bind:style="{
				'transition': `transform 0.5s ${2 + (i/20)}s, 
					opacity 0.5s ${2 + (i/20)}s, 
					color 0.3s 0s, text-shadow 0.3s 0s`
			}">
				{{ letter }}
			</div>
	</h2>
</template>

<script>
	export default {
		name: 'BackgroundText',
		props: ['text']
	}
</script>