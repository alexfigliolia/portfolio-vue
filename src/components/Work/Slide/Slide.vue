<template>
	<div
		:class="[selectedIndex === index ? 'project is-selected' : 'project']"
    id="slide"
		:style="{ 'height': height + 'px', 'width': width + 'px' }"
    ref="slide">
    <Snow v-if="selectedIndex === index && index === 9" />
		<div 
      class="center-stuff"
      :style="{ 'height': height + 'px', 'width': width + 'px' }">
      <img 
        :src="img" 
        :alt="api.name" />
      <div>
        <h2>
          <div 
          	v-for="(letter, i) in api.name.split('')"
          	:style="{'transition-delay': letter === ' ' ? '0s' : `${(0.3 + i/20)}s`}" 
          	:key="i">{{ letter === ' ' ? '&nbsp;&nbsp;' : letter }}</div>
        </h2>
        <div :class="[infoClasses]">
          <p>
            {{ api.p1 }}
            <a v-on:click="switchText">&nbsp;More Info</a>
          </p>
          <p :class="width < 957 ? 'text-switch' : ''">
            {{ api.p2 }}
            <a v-on:click="switchText">&nbsp;Back</a>
          </p>
        </div>
        <div class='slide-buttons'>
          <button 
            class='scroller'
            data-direction='left'
            @click="$emit('scroll', $event)">
            <img
              alt="View previous project"
              :style="{ 'margin-left': '0%', 'margin-right': '10%'}"
              src="@/assets/left.svg" />
          </button>
          <Button3D 
            @click="visit"
            text="VISIT" />
          <button 
            class='scroller'
            data-direction='right'
            @click="$emit('scroll', $event)">
            <img
              alt="View next project"
              :style="{ 'margin-left': '10%', 'margin-right': '0%'}"
              src="@/assets/right.svg" />
          </button>
        </div>
      </div>
    </div>
	</div>
</template>

<script>

	import Snow from './Snow/Snow.vue';
	import Button3D from '@/components/Button3D/Button3D.vue';

	export default {
		name: 'Slide',
		components: {
			Snow,
			Button3D
		},
		data: function() {
			return {
				infoClasses: 'info',
			}
		},
		props: {
			selectedIndex: Number,
			api: Object,
			index: Number,
		},
		computed: {
	    height() {
	    	return this.$store.state.height;
	    },
	    width() {
	    	return this.$store.state.width;
	    },
	    img() {
	    	return this.$store.state.width >= 670 ? this.api.imgLarge : this.api.imgSmall
	    }
	  },
    methods: {
      switchText: function() {
        this.infoClasses = this.infoClasses === 'info' ? 'info change-info' : 'info';
      },
      visit: function() {
        window.open(this.api.url, '_blank');
      }
    },
    mounted: function() {
      if(this.index === 0) {
        setTimeout(() => { 
          this.$refs.slide.classList.add('slide-reset'); 
        }, 1500);
      }
    },
    updated: function() {
      this.$nextTick(function() {
        if(this.width >= 957 && this.infoClasses === "info change-info") {
          this.infoClasses = "info";
        }
      });
      const thisSlide = this.$refs.slide;
      if(this.selectedIndex === this.index) {
        setTimeout(() => {
          thisSlide && 
          !thisSlide.classList.contains('slide-reset') &&
          thisSlide.classList.add('slide-reset');
        }, 1500);
      } else {
        setTimeout(() => {
          thisSlide &&
          thisSlide.classList.contains('slide-reset') &&
          thisSlide.classList.remove('slide-reset');
          this.infoClasses = "info";
        }, 1500);
      }
    }
	}
</script>