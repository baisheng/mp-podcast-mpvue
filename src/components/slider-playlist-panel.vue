<style lang="scss">
  .c-color-picker {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    align-content: flex-start;
    box-sizing: border-box;
    padding: 3px;
  }

  .c-color-block {
    width: 25%;
    padding: 3px;
    box-sizing: border-box;
    display: block;
    &__content {
      height: 42px;
      border-radius: 2px;
      /*display: block;*/
      box-sizing: border-box;
      text-align: center;
      /*font-size: 12px;*/
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
  }
</style>
<template>
  <div class="c-slider-panel">
    <!--遮罩层-->
    <div class="c-slider-panel-cover" v-if="isModal && display" @click="close"></div>

    <!--滑动面板-->
    <div :class="{'c-slider-panel-box': true,  'c-slider-panel-show' : display}"
         style="box-shadow: rgba(84, 70, 35, 0.3) 0px 6px 20px, rgba(84, 70, 35, 0.14) 0px 1px 3px, rgba(0, 0, 0, 0.08) 0px 0px 1px;">
      <!--面板标题-->
      <div class="header-box">
        <!--标题槽位-->
        <div class="title-box">
          播放列表
        </div>

        <!--关闭按钮-->
        <div class="close-box">
          <image class="icon" @click="close" src="/static/images/icons/close.png"></image>
        </div>
      </div>

      <!--内容槽位-->
      <scroll-view
        scroll-y="true"
        class="content-box"
        :style="backgroundStyle"
        :scroll-into-view="toView">
        <div class="c-panel c-panel--without-margin-top">
          <div class="c-cell c-cell--access"
               :id="'play-' + item.id"
               v-for="(item, index) of album.list"
               :key="item.id"
               @click="playItem(item, index)">
            <div class="c-cell__icon">
              <play-button :index="index + 1"
                           :current="curAudio.id === item.id"
                           :status="audioStatus"/>
            </div>

            <div class="c-cell__bd">
              <div class="c-cell__text" style="font-size: 15px;"> {{item.title}}</div>
              <div class="c-cell__desc u-text-mute">{{item.date}}</div>
            </div>
          </div>
        </div>
      </scroll-view>

    </div>
  </div>

</template>

<script>
  import PlayButton from '@/components/play-button'

  export default {
    props: {
      value: {
        type: Boolean,
        default: false
      },
      isModal: {
        type: Boolean,
        default: false
      },
      isDisplay: {
        type: Boolean,
        default: false
      },
      background: {
        type: String,
        default: '#F8F8F8'
      },
      minHeight: {
        type: Number,
        default: 0
      },
      showButton: {
        type: Boolean,
        default: false
      },
      toView: {
        type: String
      }
    },
    components: {
      PlayButton
    },
    data () {
      return {
        display: this.value,
        autoFocus: true
      }
    },
    watch: {
      value (val) {
        this.display = val
      },
      display (val) {
        this.$emit('display', val)
      }
    },
    computed: {
      album () {
        return this.$audioStore.state.album
      },
      audioStatus () {
        return this.$audioStore.state.status
      },
      curAudio () {
        return this.$audio.getAudio()
      }
      // toView () {
      //   return `play-${this.curAudio.id}`
      // }
    },
    mounted () {
      // this.display = this.isDisplay
    },
    methods: {
      close () {
        this.display = false
      },
      handleScroll (e) {
        this.toView = ''
      },
      playItem (item) {
        if (this.curAudio.id !== item.id) {
          const curAudio = {
            id: item.id,
            albumId: this.album.id,
            epname: this.album.title,
            title: item.title,
            singer: item.author.user_nicename,
            avatar: item.author.avatar,
            coverImgUrl: this.album.featured_image,
            src: item.url
          }
          this.$audio.setAudio(curAudio)
          this.$audio.playTarget()
        } else {
          this.$audio.play()
        }
      }
    }
  }
</script>

