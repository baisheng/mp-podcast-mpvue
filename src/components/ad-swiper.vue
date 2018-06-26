<template>
  <swiper
    class="c-swiper"
    style="position: absolute;z-index: -1;"
    :indicator-dots="config.indicatorDots"
    :autoplay="config.autoplay"
    :interval="config.interval"
    :duration="config.duration">
    <swiper-item v-for="(item, index) in config.items" :key="index">
      <image :src="item.image_link" class="c-slide-image animated fadeIn"/>
    </swiper-item>
  </swiper>
</template>

<script>
  export default {
    props: {
      value: {
        type: Object,
        require: true
      }
    },
    data () {
      return {
        config: this.value
      }
    },
    watch: {
      value (val) {
        this.config = val
      }
    }
  }
</script>
