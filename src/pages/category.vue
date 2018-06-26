<style lang="scss">
  @import "../scss/variable";

  Page, .body {
    font-size: 14px;
    color: #333333;
    background: #F5F5F7;
  }

  .c-topbar {
    position: fixed;
    top: 0;
    background: #FFF;
    /*border-bottom-right-radius: rpx(32);*/
    /*border-bottom-left-radius: rpx(32);*/
    box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.10);
    height: rpx(100);
    width: 100%;
    z-index: 3;
  }

  .c-category {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 33.33333%;
    height: 100px;
    float: left;
    text-align: center;
  }

  /*.icon-classname {*/
  /*color: #999;*/
  /*font-size: 10px;*/
  /*}*/
  .c-category__icon {
    width: rpx(64);
    height: rpx(64);
    margin-bottom: rpx(20);
  }

  .c-section__title {
    font-size: 18px;
    position: relative;
  }

  .c-popular {
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

  .c-popular-card {
    display: inline-block;
    /*vertical-align: middle;*/
    overflow: hidden;
    position: relative;
    /*flex: 1;*/
    padding: 7px 5px 7px;
    /*padding: rpx(24) rpx(30);*/
    box-sizing: border-box;
  }

  .c-popular-card--isHover {
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

  .c-popular-card__body {
    display: flex;
    flex: 1;
    background: #FBFBFB;
    position: relative;
    text-align: left;
    flex-direction: column;
    box-sizing: border-box;
    width: 168px;
    height: 110px;
    padding: 10px;

  }

  .c-popular-card__title {
    font-size: 15px;
    font-weight: 400;
    width: 100%;
    flex: 1;
    text-align: left;
  }

  .c-popular-card__detail {
    margin: 0 0 rpx(28);
    font-size: rpx(26);
    font-weight: 400;
    color: rgba(31, 31, 31, 0.50);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 1.0769231;
  }

  .c-popular-card__cover {
    position: absolute;
    left: rpx(20);
    right: rpx(20);
    bottom: rpx(20);
    box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.05), 0 2px 2px 0 rgba(0, 0, 0, 0.08);
    width: auto;
    height: rpx(240);
  }

  .c-popular-card__footer {
    flex: 1;
    align-items: center;
    /*justify-content: end;*/
    display: flex;
    flex-direction: row;
    &-author {
      align-items: center;
      flex: 1;
      flex-direction: row;
      display: flex;
      align-items: center;
      /*justify-content: center;*/
    }
    &-action {
      align-items: center;
      /*flex: 1;*/
    }
  }

  .c-news {

  }
</style>
<template>
  <div>

    <div style="position: relative; height: 280px;">
      <div style="display: flex; flex-direction: column; align-items: center;" class="u-m-large">
        <image class="c-icon icon-band" :src="detail.featured_image" mode="aspectFit"> </image>
        <div class="c-section__title u-mt-medium">
          {{detail.name}}
        </div>
      </div>

        <div class="c-news u-mb-medium">
          <div class="c-panel c-panel&#45;&#45;without-margin-top"
               v-for="(item, index) in page.list" :key="item.id">
            <div class="c-card" @click="showDetail(item.id)">
              <div class="c-card__thumb">
                <image class="c-card__img" :src="item.featured_image"
                       mode="aspectFit"></image>
              </div>
              <div class="c-card__detail u-mt-medium">
                <view class="c-card__detail-row">
                  <view class=" ">
                    {{item.title}}
                  </view>
                </view>
              </div>
              <view class="c-card__detail u-mt-small u-text-mute" style="font-weight: 300;">
                <view class="c-card__right-col ">
                  {{item.modified}}
                </view>
                <view class="c-card__left-col">{{item.like_count}} 人喜欢</view>
              </view>
            </div>
          </div>
        </div>

        <play-fab />

        <Loadmore :page.sync="page"/>

  </div>
  </div>
</template>

<script>
  import wx from 'wx'
  import {mapState, mapActions} from 'vuex'
  import AdSwiper from '@/components/ad-swiper'
  import Loadmore from '@/components/loadmore'
  import auth from '@/api/auth'
  import pagination from '@/mixins/pagination'
  import postApi from '@/api/posts'
  import PlayFab from '@/components/play-fab'

  export default {
    mixins: [pagination],
    data () {
      return {
        motto: 'Hello World',
        userInfo: {},
        page: {
          reachBottom: false,
          added: [],
          list: []
        },
        slug: ''
      }
    },
    components: {
      AdSwiper,
      Loadmore,
      PlayFab
    },
    onLoad () {
      const query = this.$root.$mp.query
      this.slug = query.slug
      if (!this.slug) {
        return
      }
      this.getPageList()
    },
    computed: {
      ...mapState([
        'app',
        'categories'
      ]),
      detail () {
        const category = this.categories.find((cate) => {
          if (cate.slug === this.slug) {
            return cate
          }
        })
        return category
      }
    },
    methods: {
      showDetail (id) {
        console.log('CATEgory-----' + id)
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
      async getPageList () {
        this.page = await postApi.page(this.slug)
        await this.next()
      }
    }
  }
</script>

