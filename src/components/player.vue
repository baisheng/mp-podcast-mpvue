<template>
  <div :class="['c-player', isShow ? 'is-show' : '']">
    <div :class="['c-player__container', isShow ? 'is-show' : '']">
      <div class="c-player-status">
        <span class="time">{{playtime}}</span>
        <progress :percent="buffered" stroke-width="2" color="#8b898b"/>
        <span class="c-player-status__playstate" :style="playStyle"></span>
        <span class="c-player-status__dpstate" :style="dpStyle"></span>
        <slider color="#d33a31" left-icon="cancel" :value="percent"></slider>
        <text class="time">{{duration}}</text>
      </div>
      <div class="c-player__actions">
        <image class="u-icon-lg u-ml-medium" src="/static/images/player/icon-edit.svg" @click="$emit('comment')"></image>

        <div class="c-player__control">
          <image class="u-icon-xlg" src="/static/images/player/icon-music-play-prev.svg" v-if="hasPrev"
                 @click="playPrev"></image>
          <image class="u-icon-xlg" src="/static/images/player/icon-music-play-prev--disabled.svg" v-else></image>
          <image class="u-icon-xlg u-mr-large u-ml-large"
                 :src="playing ? '/static/images/player/icon-music-pause.svg' : '/static/images/player/icon-music-play.svg'"
                 @click="play"></image>
          <image class="u-icon-xlg" src="/static/images/player/icon-music-play-next.svg" @click="playNext"></image>
        </div>
        <image class="u-icon-lg u-mr-medium" src="/static/images/player/icon-music-list.svg"
               @click="togglePlaylist"></image>

      </div>

    </div>
    <div class="c-player__footer"></div>
    <slider-playlist-panel
      :isModal="isSliderModal"
      v-model="isSliderDisplay"
      :to-view="'play-' + curAudio.id"
      @display="handleDisplayPlaylist" />
  </div>
</template>
<script>
  import SliderPlaylistPanel from '@/components/slider-playlist-panel'

  export default {
    name: 'Player',
    components: {
      SliderPlaylistPanel
    },
    props: {
      value: {
        type: Boolean,
        default: false
      }
    },
    mounted () {
      this.isShow = this.value
    },
    data () {
      return {
        downloadPercent: 30,
        isShow: this.value,
        isSliderDisplay: false,
        isSliderModal: true
      }
    },
    watch: {
      value (val) {
        this.isShow = val
      }
    },
    methods: {
      playPrev () {
        this.$audio.playPrev()
      },
      playNext () {
        this.$audio.playNext()
      },
      play () {
        this.$audio.play()
      },
      togglePlaylist () {
        this.isSliderDisplay = !this.isSliderDisplay
      },
      handleDisplayPlaylist (display) {
        this.isSliderDisplay = display
        this.$emit('show-list', display)
      }
    },
    computed: {
      curAudio () {
        return this.$audio.getAudio()
      },
      hasPrev () {
        return this.$audioStore.state.curIndex !== 0
      },
      classes () {
        return [
          'c-player',
          {'is-show': this.isShow}
        ]
      },
      playing () {
        return this.$audioStore.state.status === 'playing'
      },
      playtime () {
        return this.$audioStore.state.currentProcess
      },
      duration () {
        return this.$audioStore.state.duration
      },
      buffered () {
        return this.$audioStore.state.buffered
      },
      percent () {
        return this.$audioStore.state.percent
      },
      playStyle () {
        return `left: ${this.percent}px`
      },
      dpStyle () {
        return `width: ${this.percent + 10}px`
      }
    }
  }
</script>
