<style lang="scss">
  @import "../scss/variable";

  page {
    height: 100%;
    background: #f5f5f5;
    color: #344A5E;
    /*background-color: #fff;*/
  }

  .o-me {
    height: 100%;
    width: 100%;
    /*display: flex;*/
    /*justify-content: center;*/
  }

  .o-me__header {
    background: #fff;
    /*border-radius: 0 0 200% 200%;*/
    /*border-radius: ;*/
    /*border-bottom-right-radius: 200%;*/
    /*border-bottom-left-radius: 200%;*/
    /*box-shadow: 0 10px 30px 0 rgba(0,0,0,0.10);*/
    height: rpx(150);
    width: rpx(750);
    z-index: 3;
    border-bottom: 1px solid #efefef;
  }

  .o-me__body {
    background: #f5f5f5;
  }

  .o-me__title {
    padding: rpx(48) 0 rpx(20) rpx(48);
    display: block;
    font-size: rpx(48);
    color: $color-primary;
    letter-spacing: rpx(10);
    /*line-height: 44px;*/
    font-weight: 300;
    &::first-letter {
      background: #FADD26;
    }
  }

  .c-me-profile {
    color: #344A5E;
    padding: rpx(48);
    width: auto;
    /*height: 100%;*/
    display: flex;
    flex-direction: row;
    align-items: center;
    font-weight: 500;
    /*border-bottom: 1px solid #efefef;*/

    /*border-bottom: 1rpx solid #f5f5f5;*/
  }

  .c-me-profile__detail {
    display: flex;
    flex: 1;
    flex-direction: row;
    align-items: center;
  }

  .c-me-profile__avatar {
    /*width: rpx(80);*/
    /*height: rpx(80);*/
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.08);
    border-radius: rpx(50);
    border: 1px solid #ededed;
  }

  .c-me-profile__username {
    font-size: rpx(36);
    margin-left: rpx(20);
    font-weight: 300;
  }

  .c-me-profile__loved, .c-me-profile__story {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: rpx(30);
    font-size: rpx(30);
  }

  .c-story-card {
    /*flex: 1;*/
    margin: rpx(30);
    height: auto;
    width: auto;
    border-radius: rpx(16);
    border: 1px solid #ededed;
  }

  .c-story__body {
    display: flex;
    align-items: center;
    min-height: rpx(120);
    padding: rpx(28) rpx(40);
    font-size: rpx(28);
  }

  .c-story-meta {
    display: flex;
    padding: rpx(24);
    flex-direction: row;
    align-items: center;
  }

  .c-story-meta__author {
    display: flex;
    align-items: center;
    font-size: rpx(24);
    line-height: 1.25;
  }

  .c-story-meta__avatar {
    width: rpx(60);
    height: rpx(60);
    margin-right: rpx(20);
    border-radius: rpx(50);
    box-shadow: 0 0 0 rpx(2) rgba(255, 255, 255, 1), 0 0 0 rpx(4) rgba(31, 31, 31, .1);
  }

  .c-story-meta__date {
    font-size: rpx(22);
    color: #C2C4CA;
  }

  .c-textarea {
    border: none;
    font-size: rpx(40);
    width: auto;
    height: 60px;
    color: #FFF;
    text-align: center;
    padding-top: rpx(50);
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  }

  .c-add-btn {
    position: absolute;
    bottom: 15px;
    right: 15px;
    /*width: 36px;*/
    /*height: 36px;*/
    /*width: rpx(72);*/
    /*height: rpx(72);*/
    width: rpx(72);
    height: rpx(72);
    background-color: rgba(255, 255, 255, 0.30);
    border-radius: rpx(50);
    z-index: 100;
    /*box-shadow: 0 0 0 rpx(2) #66C6B9,0 0 0 rpx(4) rgba(168,59,75,.1);*/
    /*box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.05), 0 2px 2px 0 rgba(0, 0, 0, 0.10);*/

    /*background-color: rgba(255, 255, 255, 0.50);*/
    /*border-radius: rpx(50);*/
    /*z-index: 100;*/
  }

  .c-loves {
    display: flex;
    width: 100%;
    height: 100%;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    /*flex-direction: column;*/
    flex-direction: row;
    /*box-sizing: border-box;*/
  }

  .c-love-card {
    display: inline-block;
    vertical-align: middle;
    overflow: hidden;
    position: relative;
    /*flex: 1;*/
    padding: rpx(28) rpx(20) rpx(14);
    /*padding: rpx(24) rpx(30);*/
    box-sizing: border-box;
  }

  .c-love-card--isHover {
    /*background: #FF7058;*/
    > .c-love-card__body {
      box-shadow: none;
      background: #FF7058;
      color: #fff;
      transition: color .2s ease-in, -webkit-transform .15s cubic-bezier(.175, .885, .32, 1.275);
      > .c-love-card__detail {
        color: rgba(255, 255, 255, 0.80);
      }
    }
  }

  .c-love-card__body {
    display: flex;
    flex: 1;
    background: #fff;
    /*box-shadow: 0 0 1px 1px rgba(0,0,0,0.05), 0 2px 2px 0 rgba(0,0,0,0.10);*/

    /*box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.1);*/
    border-radius: rpx(8);
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.1);
    position: relative;
    align-items: center;
    flex-direction: column;

    box-sizing: border-box;
    /*padding: rpx(24) rpx(30);*/
    width: rpx(300);
    height: rpx(380);
    /*border-radius: 2px;*/
    /*background: rgba(255,255,255,0.19);*/
    /*padding: 14px 10px 7px;*/
    /*position: relative;*/

  }

  .c-love-card__title {
    font-size: rpx(30);
    display: block;
    /*line-height: 2;*/
    /*font-weight: 300;*/
    margin-top: 10px;
    margin-bottom: rpx(14);
    width: rpx(260);
    text-align: center;
  }

  .c-love-card__detail {
    margin: 0 0 rpx(28);
    font-size: rpx(26);
    font-weight: 400;
    color: rgba(31, 31, 31, 0.50);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 1.0769231;
  }

  .c-love-card__cover {
    position: absolute;
    left: rpx(20);
    right: rpx(20);
    bottom: rpx(20);
    box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.05), 0 2px 2px 0 rgba(0, 0, 0, 0.08);
    width: auto;
    height: rpx(240);
  }

  .c-detail {
    font-size: rpx(30);
    line-height: 1.8;
    letter-spacing: 1.3px;
  }

  .c-tips-card {
    display: flex;
    flex-direction: column;
    /*position: relative;*/
    /*flex: 1;*/
    padding-top: rpx(30);
    /*padding: rpx(72) rpx(30);*/
    /*width: 90%;*/
    text-align: center;
    background: #fff;
  }

  .c-tips-card__title {
    /*font-size: rpx(48);*/
  }

  .c-tips-card__body {
    display: flex;
    flex: 1;
    height: rpx(450);
    /*box-shadow: 0 0 1px 1px rgba(0,0,0,0.05), 0 2px 2px 0 rgba(0,0,0,0.10);*/
    border-radius: rpx(8);
    padding: rpx(28) rpx(20) rpx(14);
    position: relative;
    align-items: center;
    flex-direction: column;
  }

  .c-tips-card__content {
    box-sizing: border-box;
    padding: 0 rpx(30);
    height: rpx(300);
    width: 100%;

  }

  .c-tips-card__warpper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-self: center;
    justify-self: center;
  }

  .c-tips__content {
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

  .c-tips__meta {
    position: absolute;
    bottom: 10px;
    /*left: 10px;*/
    /*right: 10px;*/
    display: block;
    /*margin-bottom: rpx(10);*/
    padding: rpx(20);
    box-sizing: border-box;
    width: 100%;
    text-align: center;
  }

  .c-me-header {
    /*position: fixed;*/
    /*top: 0;*/
    background: #47BAA4;
    /*box-shadow: 0 10px 30px 0 rgba(0,0,0,0.10);*/
    height: rpx(380);
    width: 100%;
    z-index: 3;
    border-bottom-right-radius: rpx(32);
    border-bottom-left-radius: rpx(32);
  }

  .c-me-tab {
    /*background: #66C6B9;*/
    /*border-bottom-right-radius: rpx(32);*/
    /*border-bottom-left-radius: rpx(32);*/
  }

  .c-button {
    display: flex;
    /*background: #FF7058;*/
    font-weight: 400;
    width: rpx(90);
    height: rpx(90);
    align-items: center;
    justify-content: center;
    flex-direction: column;
    box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.05), 0 2px 2px 0 rgba(0, 0, 0, 0.10);
    border-radius: rpx(8);
  }

</style>
<template>
  <div class="o-me">
    <div class="c-me-profile c-panel">
      <div class="c-me-profile__avatar">
        <image
          class="u-icon u-icon-xl u-icon-round animated fadeIn"
          mode="aspectFill"
          :src="profile.avatar"></image>
      </div>
      <div class="c-me-profile__username">{{profile.user_nicename}}</div>
    </div>
    <div class="c-panel">
      <!--<div class="c-cell ">-->
        <!--<div class="c-cell__bd u-text-mute">我的主页(近期开放)</div>-->
        <!--<div class="c-cell__ft u-text-mute"></div>-->
      <!--</div>-->

      <div class="c-cell c-cell--access">
        <div class="c-cell__bd">我的点评</div>
        <div class="c-cell__ft u-text-mute u-text-xsmall">近期开放</div>
      </div>
      <div class="c-cell c-cell--access">
        <div class="c-cell__bd">我喜欢的</div>
        <div class="c-cell__ft u-text-mute u-text-xsmall">近期开放</div>
      </div>
      <div class="c-cell c-cell--access">
        <div class="c-cell__bd">最近浏览的</div>
        <div class="c-cell__ft u-text-mute u-text-xsmall">近期开放</div>
      </div>
    </div>
    <div class="u-m-large u-flex u-justify-center u-align-items-center u-text-tiny u-text-mute"
         style="flex-direction: column">
      <div style="letter-spacing: 2px;"></div>
    </div>
  </div>
</template>
<script>
  import userApi from '@/api/users'

  export default {
    components: {},
    data () {
      return {
        profile: {}
      }

    },
    mounted () {
      this.load()
    },
    methods: {
      async load () {
        this.profile = await userApi.me()
      }
    }
  }
</script>
