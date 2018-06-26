<style lang="scss">

  .c-play-button {
    /*width: 30px;*/
    width: 36px;
    height: 36px;
    justify-content: center;
    vertical-align: middle;
    align-items: center;
    text-align: center;
    &__icon {
      justify-content: center;
      vertical-align: middle;
      align-items: center;
      text-align: center;
      /*padding: 5px;*/
      width: 18px;
      height: 18px;
    }
    .is-order {
      /*text-align: center;*/
      /*width: 30px;*/

      display: flex;
      align-items: center;
      /*margin:0 auto;*/
      justify-content: center;
    }
    .c-btn {
      padding: 0;
      width: 36px;
      height: 36px;
    }
  }

  /*.c-play--playing {}*/
</style>
<template>
  <!--<button :class="['c-btn c-btn&#45;&#45;small c-btn&#45;&#45;flat', {'c-btn&#45;&#45;loading': isWaiting}]">-->
  <!---->
  <!--</button>-->
  <div :class="['c-play-button', {'is-order': !current}]">
    <button :class="['c-btn c-btn--small c-btn--flat', {'c-btn--loading': isWaiting}]"
            v-if="isWaiting && current"></button>

    <button class="c-btn c-btn--small c-btn--flat u-text-mute"
            v-else-if="!current">{{index}}</button>
    <button class="c-btn c-btn--small c-btn--flat" v-else>
      <image class="icon" :src="icon"></image>

    </button>
  </div>

</template>
<script>
  export default {
    props: {
      index: {
        type: Number,
        default: 1
      },
      current: {
        type: Boolean,
        default: false
      },
      status: {
        type: Boolean,
        default: 'stop'
      },
      playIcon: {
        type: String,
        default: '/static/images/player/play_mini.png'
      },
      pauseIcon: {
        type: String,
        default: '/static/images/player/pause_mini.png'
      }
    },
    computed: {
      icon () {
        if (this.status === 'playing' && this.current) {
          return this.pauseIcon
        } else if (this.status !== 'playing' && this.current) {
          return this.playIcon
        }
      },
      isWaiting () {
        return this.status === 'waiting'
      }
    }
  }
</script>
