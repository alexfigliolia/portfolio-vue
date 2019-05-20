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
	export default {
		name: 'Button3D',
		props: ['text', 'url', 'click'],
		data() {
			return {
				rotX: 0,
				rotY: 0,
				bTransDur: 0.5,
				scale: 1,
				boxShadow: 'none',
				top: null,
				left: null,
				height: null,
				width: null,
				mathX: null,
				mathY: null
			}
		},
		methods: {
	  	mouseEnter({ type, clientX, clientY, target, touches }) {
				this.getCachedTargetData(target);
				this.setFrame(
					this.getRotations(
						this.getType(type, touches, clientX, clientY)
					), 0.5);
		  },
		  mouseMove({ type, clientX, clientY, touches }) {
				this.setFrame(
					this.getRotations(
						this.getType(type, touches, clientX, clientY)
					), 0);
		  },
		  mouseLeave() {
				this.rotX = 0;
				this.rotY = 0; 
				this.bTransDur = '0.5s';
				this.scale = 1; 
				this.boxShadow = 'none';
		  },
		  getCachedTargetData(target) {
				if(!this.left || !this.y || !this.height || !this.width) {
					const { left, top } = target.getBoundingClientRect();
					const { offsetWidth, offsetHeight } = target;
					this.left = left;
					this.top = top;
					this.height = offsetHeight;
					this.width = offsetWidth;
					this.mathX = this.left + (this.width / 2);
					this.mathY = this.top + (this.height / 2);
				}
			},
		  getType(type, touches, clientX, clientY) {
				const isMouse = type.substring(0, 5) === 'mouse';
				return {
					y: isMouse ? clientY : touches[0].clientY,
					x: isMouse ? clientX : touches[0].clientX,
				}
			},
		  getRotations({ x, y }) {
				let rotX = (this.mathY - y) / 1.75;
				return {
					rotX: rotX > 0 ? rotX+=4 : rotX,
					rotY: (this.mathX - x) / -10,
				}
			}, 
		  setFrame({ rotX, rotY }, duration) {
				this.rotX = rotX;
				this.rotY = rotY; 
				this.bTransDur = `${duration}s`, 
				this.scale = 1.1;
				this.boxShadow = `0 14px 28px rgba(0,0,0,0.5), ${rotY* -1.85}px ${rotX}px 10px rgba(0,0,0,0.44)`;
			}
		},
		beforeDestroy() {
			this.mouseLeave()
		}
	}
</script>