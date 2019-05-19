<template>
	<div 
		class="link"
		v-on:click="$emit('nav', $event)" 
		:data-page="url">
		<div
			v-for="(letter, i) in pageTo.split('')"
			:key="i"
			class="link-letter"
			:style="{
				'transitionDelay': (i/20) + 's'
			}">{{ letter }}</div>
		<div class='inner'>
			<div
				v-for="(letter, i) in pageTo.split('')"
				:key="i"
				:style="{
					'transitionDelay': (i/20) + 's'
				}">{{ letter }}</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Link',
		props: ['pageTo', 'nav', 'menuClasses', 'url']
	}
</script>