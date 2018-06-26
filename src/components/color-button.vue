<template>
  <button :style="style" @click="$emit('toggle')">
    <slot></slot>
  </button>
</template>
<script>
  import Rgb2hex from '@/utils/rgb2hex'

  export default {
    props: {
      rgb: {
        type: String,
        require: true
      },
      isRound: {
        type: Boolean,
        default: true
      },
      size: {
        type: Number,
        default: 18
      }
    },
    computed: {
      style () {
        const bgColor = Rgb2hex(`rgba(${this.rgb},1)`)
        const borderColor = Rgb2hex(`rgba(${this.rgb},0.2)`)
        const round = this.isRound ? 'border-radius: 50px;' : ''
        return `padding: 0;width: ${this.size}px; height: ${this.size}px; background: ${bgColor}; box-sizing: border-box; border: 4px solid ${borderColor}; ${round}`
      }
    }
  }
</script>
