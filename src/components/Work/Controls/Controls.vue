<template>
  <div class='controls'>
    <div class='bar' />
    <button
      class='control'
      data-direction='left'
      @click="$emit('scroll', $event)">
      <img 
        src="@/assets/up.svg" 
        alt="Go to previous"
        @click="$emit('scroll', $event)" />
    </button>
    <button
      class='control'
      data-direction='right'
      @click="$emit('scroll', $event)">
      <img 
        src="@/assets/down.svg" 
        alt="Go to next"
        @click="$emit('scroll', $event)" />
    </button>
  </div>
</template>

<script>
  export default {
    name: 'Controls',
    props: {
      'scroll': Function
    }
  }
</script>