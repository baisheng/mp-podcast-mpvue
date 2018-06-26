<style lang="scss">
  Page, body {
    background: #F5F5F7;
    font-size: 15px;
    color: #2d3848;
    line-height: 26px;
    letter-spacing: 1.25px;
    width: 100%;
    height: 100%;
  }

  .o-page {
    display: flex;
    flex-direction: column;
  }

  .c-page__cover {
    z-index: 1;
    height: 200px;
    position: relative;
    display: flex;
    flex-direction: column;
  }

  .c-page__body {
    display: flex;
  }

  .c-section__title {
    font-size: 16px;
  }

  .c-love-special {
    background: #F5F5F7;
  }

  .c-special__cover {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .c-special__author {
    background: #fff;
    display: flex;
    flex-direction: row;
    align-items: center;
    /*padding: 20px;*/
    padding-top: 20px;
    .c-avatar {
      width: 56px;
      height: 56px;
    }
    &-info {
      font-size: 16px;
      padding-left: 10px;
      display: flex;
      flex-direction: column;
      align-items: start;
      line-height: 24px;
      &__highlights {
        font-size: 14px;
        font-weight: 300;
      }
    }
  }

  .c-author__info {
    display: flex;
    flex-direction: column;
    align-items: start;
  }

  .c-special__detail {
    padding: 20px;

  }

  .replies {
    &__header {
    }
    /*display: flex;*/
    /*flex-direction: column;*/
    &__list {
    }
    &__item {
      padding: 20px;
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      &-user {
        display: flex;
        height: auto;
        &--avatar {
          width: 36px;
          height: 36px;
          background-position: center center;
          border-radius: 50px;
          border: 2px solid #efefef;
        }
      }
      &-info {
        flex: 1;
        margin-left: 15px;
        &__nicename {
          font-weight: 300;
          display: inline-flex;
        }
        &--date {
          float: right;
          color: #D1D1D1;
          font-weight: 300;

          font-size: 12px;
        }
        &__content {
          /*color: #7f8fa4;*/
          color: #2d3848;
        }
      }
    }
  }

  .c-placeholder {
    transition: opacity 0.3s;
    color: #fff;
    opacity: 0.65;
  }

  .c-love-card--isHover {
  }

  .c-recalls--scroll {
    display: flex;
    white-space: nowrap;
    width: rpx(780);
  }

  .c-recall-card {
    /*box-sizing:border-box;*/
    /*display: flex;*/
    /*flex: 1;*/
    /*height: rpx(360);*/
    /*background: #fff;*/
    /*box-shadow: 0 0 1px 1px rgba(0,0,0,0.05), 0 2px 2px 0 rgba(0,0,0,0.10);*/
    /*border-radius: rpx(8);*/
    /*padding: rpx(28) rpx(20) rpx(14);*/
    /*position: relative;*/
    /*align-items: center;*/
    /*flex-direction: column;*/
    /*position: relative;*/
    /*flex: 1;*/
    /*padding: rpx(24) rpx(30);*/
    /*width: 90%;*/
    /*display: flex;*/
    /*flex: 1;*/
    /*height: rpx(400);*/
    /*padding: rpx(28) rpx(14) rpx(14);*/
    padding: 10px;
    position: relative;
  }

  .c-recall-card__body {
    background: #fff;
    box-sizing: border-box;
    overflow: hidden;
    /*box-shadow: 0 0 1px 1px rgba(0,0,0,0.05), 0 2px 2px 0 rgba(0,0,0,0.10);*/
    border-radius: 4px;
    padding: 14px 10px 7px;
    position: relative;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }

  .c-recall-card__content {
    box-sizing: border-box;
    padding: 10px;
    height: 138px;
    width: 100%;
    /*box-shadow: 0 0 1px 1px rgba(0,0,0,0.05),0 2px 2px 0 rgba(0,0,0,0.08);*/
  }

  .c-recall-card__warpper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-self: center;
    justify-self: center;
  }

  .c-recall__content {
    flex: 1;
    width: inherit;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-self: center;
    justify-self: center;
  }

  .c-recall__meta {
    /*position: absolute;*/
    /*bottom: 10px;*/
    /*padding: 0 10px 0 10px;*/
    box-sizing: border-box;
    /*width: rpx(600);*/
    /*text-align: right;*/
    /*font-size: rpx(36);*/
    display: block;
    line-height: 1.615;
    /*font-weight: 300;*/
    /*width: rpx(620);*/
    width: 100%;
    /*text-align: center;*/
  }

  .c-swiper__item {
    /*wx-swiper-item {*/
    width: 100% !important;
    /*margin-left: 5% !important;*/
  }

  .c-replies {
    position: relative;
    margin-bottom: 60px;

  }

  .c-write-button {
    display: flex;
    align-items: center;
    color: #985ED6;
    padding-left: 15px;
    font-size: 14px;
    justify-items: end;
    float: right;
    background: none;
  }
</style>
<template>
  <scroll-view :scroll-y="isScroll"
               :style="style">

    <div class="o-page"
         @touchstart="touchstart"
         @touchmove="touchmove"
         @touchend="touchend" v-if="detail">

      <div class="c-cell c-cell--access c-special__author" v-if="detail.id">
        <image class="c-avatar c-cell__icon" :src="detail.avatarUrl"></image>
        <div class="c-cell__bd">
          <div class="c-special__author-info">
            <span>{{detail.user_nicename}}</span>
            <span class="c-special__author-info__highlights" v-if="hasResume">{{detail.resume.highlights}}</span>
          </div>
        </div>
        <div class="c-cell__ft"></div>
      </div>
      <div class="c-panel-title u-flex u-justify-between" v-if="hasResume">
        <span class="u-text-large u-text-dark u-text-bold">介绍</span>
        <span @click="toggleContent" class="u-c-blue">{{contentTitle}}</span>
      </div>
      <div :class="['c-panel animated fadeIn', {'fadeOut': !showContent}]" v-show="showContent">
        <div class="u-p-medium " v-if="hasResume">
          {{detail.resume.summary}}
        </div>
      </div>
      <div class="c-panel-title u-flex u-justify-between">
        <span class="u-text-large u-text-dark u-text-bold">{{detail.user_nicename}} 的柚道</span>
      </div>
      <div class="c-panel">
        <!--<div class="c-cell c-cell&#45;&#45;access" @tap="showDetail('recalls')">-->
          <!--<div class="c-cell__bd">我的喜欢的</div>-->
          <!--<div class="c-cell__ft">{{countRecalls}}</div>-->
        <!--</div>-->
        <!---->
        <div class="c-cell c-cell--access"
             :id="'block-' + item.id"
             v-for="(item, index) of page.list"
             :key="item.id"
             @click="showDetail(item.id)">
          <div class="c-cell__icon u-mr-large">
            {{index + 1}}
          </div>

          <div class="c-cell__bd">
            <div class="c-cell__text" style="font-size: 15px;"> {{item.title}}</div>
            <div class="c-cell__desc u-text-mute">{{item.modified}}</div>
          </div>
          <div class="c-cell__ft"></div>
        </div>
      </div>
    </div>
  </scroll-view>
</template>
<script>
  import postsApi from '@/api/posts'
  import usersApi from '@/api/users'
  import Player from '@/components/player'
  import CommentCard from '@/components/comment-card'
  import SliderPanel from '@/components/slider-panel'
  import PlayButton from '@/components/play-button'
  import pagination from '@/mixins/pagination'

  import {mapState, mapActions} from 'vuex'

  const device = wx.getSystemInfoSync()  //  获取设备信息
  export default {
    mixins: [pagination],
    components: {
      Player,
      CommentCard,
      SliderPanel,
      PlayButton
    },
    data () {
      return {
        detail: {},
        page: {
          reachBottom: false,
          added: [],
          list: []
        },
        list: [],
        coverWidth: device.windowWidth,
        isSliderDisplay: false,
        isSliderModal: true,
        isScroll: true,
        current: 0,
        showContent: true,
        showPlayer: false,
        direction: 'X',
        touchStartY: 0,
        translateY: 0,
        position: 40,
        currentGesture: 0
      }
    },

    computed: {
      ...mapState([
        'print',
        'audio'
      ]),
      hasResume () {
        if (!Object.is(this.detail.author, undefined)) {
          const _author = this.detail.author
          return !Object.is(_author.resume, undefined)
        }
        return false
      },
      style () {
        return `height: ${device.windowHeight + 100}px;`
      },
      /**
       * @return {string}
       */
      XORY () {
        return this.direction === 'horizontal' ? 'X' : 'Y'
      },
      rectDistance () {
        return this.direction === 'horizontal' ? this.width : this.height
      },
      audioStatus () {
        return this.$audioStore.state.status
      },
      curAudio () {
        return this.$audio.getAudio()
      },
      coverStyle () {
        return `width: ${this.coverWidth}px;height: 200px;`
      },

      contentTitle () {
        return this.showContent ? '隐藏' : '显示'
      }
    },
    methods: {
      showDetail (id) {
        this.$router.push({
          path: "/pages/detail",
          query: {
            id: id
          }
        });
        // wx.navigateTo({
        //   url: `/pages/detail?id=${id}`
        // })
      },
      handleShowPlayList (show) {
        this.isScroll = !show
      },
      touchstart (e) {
        let touch = null
        if (e.mp !== undefined) {
          touch = e.mp.changedTouches[0]
        } else {
          touch = e.changedTouches[0]
        }
        const distance = touch.pageY // startPos
        this.touchStartY = distance
      },
      touchmove (e) {
        if (this.currentGesture !== 0) {
          return
        }
        let touch = null
        if (e.mp !== undefined) {
          touch = e.mp.changedTouches[0]
          // this.startX = e.mp.touches[0].clientX
        } else {
          touch = e.changedTouches[0]
          // this.startX = e.touches[0].clientX
        }
        let currentY = touch.pageY
        let ty = currentY - this.touchStartY
        if (ty < 0) {
          this.currentGesture = 1
          this.showPlayer = false
        } else {
          this.currentGesture = 2
          this.showPlayer = true
        }
        this.touchStartY = currentY
      },
      touchend (e) {
        this.currentGesture = 0
      },
      initAlbum () {
        // SET Album
        if (this.$audio.getAlbum().id !== this.detail.id) {
          this.$audio.setAlbum({
            id: this.detail.id,
            title: this.detail.title,
            epname: this.detail.title,
            singer: this.detail.author,
            list: this.detail.block,
            description: this.detail.content,
            coverImgUrl: this.detail.featured_image,
            webUrl: `/pages/detail?id=${this.detail.id}`
          })
        }
      },
      playAll () {
        this.showPlayer = true
        this.initAlbum()
        this.$audio.play()
      },
      playItem (item) {
        this.showPlayer = true
        if (Object.is(item.featured_image, undefined)) {
          // coverImgUrl
          item.featured_image = this.detail.featured_image
        }
        this.initAlbum()
        // Control Audio
        if (this.$audio.getAudio().id !== item.id) {
          const curAudio = {
            id: item.id,
            albumId: this.detail.id,
            epname: this.detail.title,
            title: item.title,
            singer: item.author.user_nicename,
            avatar: item.author.avatar,
            coverImgUrl: this.detail.featured_image,
            src: item.url
          }
          this.$audio.setAudio(curAudio)
          this.$audio.playTarget()
        }
        this.$audio.play()
      },
      toggleContent () {
        this.showContent = !this.showContent
      },
      async getDetail (id) {
        this.detail = await usersApi.detail(id)
      },
      async getUserPosts (id) {
        this.page = await postsApi.findByAuthor(id)
        await this.next()
      },
      bindSwiperChange (e) {
        this.current = e.target.current
      }
    },
    async onPageScroll (e) {

    },
    onLoad () {
      const query = this.$root.$mp.query
      if (!query.id) {
        return
      }
      this.getDetail(query.id)
      this.getUserPosts(query.id)
    }
  }
</script>
