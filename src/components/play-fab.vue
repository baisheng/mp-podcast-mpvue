<template>
  <div class="c-button c-play-fab__button animated rotation"
       v-if="playing" @click="showAlbum">
    <image class="c-play-fab__icon " mode="aspectFill" :src="cover"></image>
  </div>

</template>
<script>
  export default {
    props: {
    },
    computed: {
      cover () {
        return this.curAudio.coverImgUrl || '/static/images/icons/59.png'
      },
      pause () {
        return this.$audioStore.state.status === 'pause'
      },
      playing () {
        const status = this.$audioStore.state.status
        return status === 'playing'
        // if (status === 'playing' || status === 'pause') {
        //   return true
        // }
        // return false
      },
      curAudio () {
        return this.$audio.getAudio()
      }
    },
    methods: {
      showAlbum () {
        this.$router.push({
          path: "/pages/detail",
          query: {
            id: this.curAudio.albumId
          }
        });
        // wx.navigateTo({
        //   url: `/pages/detail?id=${this.curAudio.albumId}`
        // })
      },
    }
  }
</script>
