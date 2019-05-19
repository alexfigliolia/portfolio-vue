<template>
	<div>
		<h2>
			<div 
				v-for="(letter, i) in 'Full Stack'.split('')" 
				v-bind:key="i"
				v-bind:style="{
					'transitionDelay': letter === ' ' ? '0s' : (9 - i)/70 + 's'
				}">
				{{ letter === ' ' ? '&nbsp;&nbsp;' : letter }}
			</div>
		</h2>
		<h2>
			<div 
				v-for="(letter, i) in 'Developer'.split('')"
				v-bind:key="i"
				v-bind:style="{
					'transitionDelay': i/70 + 's'
				}">
				{{ letter }}
			</div>
		</h2>
	</div>
</template>