<style lang="scss">
  Page, body {
    /*background: #F5F5F7;*/
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
    textarea {
      padding: 15px;
      width: 95%;
      height: 200px;
      margin-left: auto;
      margin-right: auto;
      font-size: 16px;
      line-height: 1.5;
      letter-spacing: 1.25px;
      border-radius: 4px;
      box-sizing: border-box;
    }
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
    flat: right;
  }


</style>
<template>
  <div class="o-page">
    <form @submit="formSubmit" report-submit="true">
      <div class="c-panel c-panel--without-margin-top u-flex u-justify-between u-align-items-center u-p-small">
        <button class="c-btn c-btn--flat c-btn--small u-text-bold" @click="cancel">取消</button>
        <!--<color-button :rgb="selectedColor.RGB" @toggle="changeColor"/>-->
        <color-button :rgb="selectedColor.RGB" @toggle="changeColor"/>
        <button formType="submit"
                :class="['c-btn  c-btn--small u-text-bold c-btn--flat c-btn--primary',{
                  'c-btn--loading': isPost,
                   'c-btn--disabled': isEmpty
                }]"
                :disabled="isEmpty || isPost">
          <span v-if="!isPost">发布</span>
        </button>
        <!--<div class="c-btn c-btn&#45;&#45;flat c-btn&#45;&#45;small u-c-cyan">发送</div>-->
      </div>
      <div style="position: fixed; top: 50px; width: 100%;">
        <textarea class="u-mt-small u-pl-medium"
                  @input="bindInput"
                  @focus="bindFocus"
                  @blur="bindBlur"
                  :focus="autoFocus"
                  placeholder="在这里写下您的评价"
                  :placeholder-style="selectedColor.dark"
                  maxlength="141"
                  :style="selectedColor.dark"
                  fixed="true"></textarea>
        <div
          class="c-panel c-panel--without-margin-top c-panel--without-border u-flex u-justify-between u-m-small">
          <span class="u-c-gray u-text-small">
            剩余 {{140 - wordCount}} 个字
          </span>
        </div>
      </div>
    </form>

    <slider-color-panel
      :isModal="isSliderModal"
      @change-color="handleSelectdColor"
      v-model="isSliderDisplay">
      <div slot="title">
        个性化
      </div>
    </slider-color-panel>
    <c-dialog v-model="dialog"/>
  </div>
</template>
<script>
  import BaseMixins from '@/mixins/base'
  import postsApi from '@/api/posts'
  import SliderColorPanel from '@/components/slider-color-panel'
  import ColorButton from '@/components/color-button'
  import CDialog from '@/components/dialog'
  import Tips from '@/utils/tips'
  import Route from '@/utils/WxUtils'

  const device = wx.getSystemInfoSync()  //  获取设备信息
  export default {
    mixins: [BaseMixins],
    components: {
      SliderColorPanel,
      ColorButton,
      CDialog
    },
    data () {
      return {
        postId: 1,
        detail: {},
        replies: {},
        coverWidth: device.windowWidth,
        current: 0,
        isSliderDisplay: false,
        isSliderModal: false,
        autoFocus: true,
        colors: [
          {
            'RGB': [
              48,
              48,
              48
            ],
            'hex': '#303030',
            'name': '百草霜',
            'pinyin': 'baicaoshuang'
          },
          {
            'RGB': [
              78,
              24,
              146
            ],
            'hex': '#4e1892',
            'name': '柏坊灰蓝',
            'pinyin': 'baifanghuilan'
          },
          {
            'RGB': [
              31,
              54,
              150
            ],
            'hex': '#1f3696',
            'name': '宝蓝',
            'pinyin': 'baolan'
          },
          {
            'RGB': [
              39,
              104,
              147
            ],
            'hex': '#276893',
            'name': '北京毛蓝',
            'pinyin': 'beijingmaolan'
          },
          {
            'RGB': [
              86,
              149,
              151
            ],
            'hex': '#569597',
            'name': '碧玉石',
            'pinyin': 'biyushi'
          },
          {
            'RGB': [
              198,
              83,
              6
            ],
            'hex': '#c65306',
            'name': '苍黄',
            'pinyin': 'canghuang'
          },
          {
            'RGB': [
              37,
              56,
              107
            ],
            'hex': '#25386b',
            'name': '藏蓝',
            'pinyin': 'zanglan'
          },
          {
            'RGB': [
              78,
              95,
              69
            ],
            'hex': '#4e5f45',
            'name': '苍绿',
            'pinyin': 'canglyu'
          },
          {
            'RGB': [
              219,
              206,
              84
            ],
            'hex': '#dbce54',
            'name': '草黄',
            'pinyin': 'caohuang'
          },
          {
            'RGB': [
              117,
              117,
              112
            ],
            'hex': '#757570',
            'name': '承德灰',
            'pinyin': 'chengdehui'
          },
          {
            'RGB': [
              90,
              92,
              91
            ],
            'hex': '#5a5c5b',
            'name': '承德皂',
            'pinyin': 'chengdezao'
          },
          {
            'RGB': [
              175,
              94,
              83
            ],
            'hex': '#af5e53',
            'name': '辰砂',
            'pinyin': 'chensha'
          },
          {
            'RGB': [
              123,
              161,
              168
            ],
            'hex': '#7ba1a8',
            'name': '春蓝',
            'pinyin': 'chunlan'
          },
          {
            'RGB': [
              227,
              239,
              209
            ],
            'front': '#006e5f',
            'hex': '#e3efd1',
            'name': '春绿',
            'pinyin': 'chunlyu'
          },
          {
            'RGB': [
              0,
              110,
              95
            ],
            'hex': '#006e5f',
            'name': '翠绿',
            'pinyin': 'cuilyu'
          },
          {
            'RGB': [
              67,
              69,
              74
            ],
            'hex': '#43454a',
            'name': '粗晶皂',
            'pinyin': 'cujingzao'
          },
          {
            'RGB': [
              109,
              115,
              88
            ],
            'hex': '#6d7358',
            'name': '大赤金',
            'pinyin': 'dachijin'
          },
          {
            'RGB': [
              48,
              71,
              88
            ],
            'hex': '#304758',
            'name': '黛蓝',
            'pinyin': 'dailan'
          },
          {
            'RGB': [
              215,
              193,
              107
            ],
            'hex': '#d7c16b',
            'name': '丹东石',
            'pinyin': 'dandongshi'
          },
          {
            'RGB': [
              174,
              196,
              183
            ],
            'hex': '#aec4b7',
            'name': '淡灰绿',
            'pinyin': 'danhuilyu'
          },
          {
            'RGB': [
              54,
              53,
              50
            ],
            'hex': '#363532',
            'name': '灯草灰',
            'pinyin': 'dengcaohui'
          },
          {
            'RGB': [
              27,
              84,
              242
            ],
            'hex': '#1b54f2',
            'name': '靛蓝',
            'pinyin': 'dianlan'
          },
          {
            'RGB': [
              196,
              71,
              61
            ],
            'hex': '#c4473d',
            'name': '蕃茄红',
            'pinyin': 'fanqiehong'
          },
          {
            'RGB': [
              195,
              86,
              85
            ],
            'hex': '#c35655',
            'name': '妃红',
            'pinyin': 'feihong'
          },
          {
            'RGB': [
              228,
              207,
              142
            ],
            'hex': '#e4cf8e',
            'name': '甘草黄',
            'pinyin': 'gancaohuang'
          },
          {
            'RGB': [
              106,
              104,
              52
            ],
            'hex': '#6a6834',
            'name': '橄榄绿',
            'pinyin': 'ganlanlyu'
          },
          {
            'RGB': [
              234,
              220,
              214
            ],
            'front': '#344A5E',
            'hex': '#eadcd6',
            'name': '甘石粉',
            'pinyin': 'ganshifen'
          },
          {
            'RGB': [
              100,
              147,
              175
            ],
            'hex': '#6493af',
            'name': '钴蓝',
            'pinyin': 'gulan'
          },
          {
            'RGB': [
              136,
              174,
              163
            ],
            'hex': '#88aea3',
            'name': '果灰',
            'pinyin': 'guohui'
          },
          {
            'RGB': [
              23,
              80,
              125
            ],
            'hex': '#17507d',
            'name': '海蓝',
            'pinyin': 'hailan'
          },
          {
            'RGB': [
              79,
              83,
              85
            ],
            'hex': '#4f5355',
            'name': '红皂',
            'pinyin': 'hongzao'
          },
          {
            'RGB': [
              176,
              183,
              172
            ],
            'hex': '#b0b7ac',
            'name': '黄灰',
            'pinyin': 'huanghui'
          },
          {
            'RGB': [
              84,
              107,
              131
            ],
            'hex': '#546b83',
            'name': '花青',
            'pinyin': 'huaqing'
          },
          {
            'RGB': [
              93,
              130,
              138
            ],
            'hex': '#5d828a',
            'name': '灰蓝',
            'pinyin': 'huilan'
          },
          {
            'RGB': [
              92,
              137,
              135
            ],
            'hex': '#5c8987',
            'name': '灰绿',
            'pinyin': 'huilyu'
          },
          {
            'RGB': [
              182,
              177,
              150
            ],
            'hex': '#b6b196',
            'name': '灰米',
            'pinyin': 'huimi'
          },
          {
            'RGB': [
              180,
              148,
              54
            ],
            'hex': '#b49436',
            'name': '姜黄',
            'pinyin': 'jianghuang'
          },
          {
            'RGB': [
              109,
              97,
              74
            ],
            'hex': '#6d614a',
            'name': '将校呢',
            'pinyin': 'jiangxiaoni'
          },
          {
            'RGB': [
              112,
              77,
              78
            ],
            'hex': '#704d4e',
            'name': '绛紫',
            'pinyin': 'jiangzi'
          },
          {
            'RGB': [
              231,
              105,
              63
            ],
            'hex': '#e7693f',
            'name': '桔红',
            'pinyin': 'jiehong'
          },
          {
            'RGB': [
              232,
              133,
              59
            ],
            'hex': '#e8853b',
            'name': '桔黄',
            'pinyin': 'jiehuang'
          },
          {
            'RGB': [
              199,
              122,
              58
            ],
            'hex': '#c77a3a',
            'name': '金黄',
            'pinyin': 'jinhuang'
          },
          {
            'RGB': [
              202,
              212,
              186
            ],
            'hex': '#cad4ba',
            'name': '军绿',
            'pinyin': 'junlyu'
          },
          {
            'RGB': [
              0,
              65,
              165
            ],
            'hex': '#0041a5',
            'name': '孔雀蓝',
            'pinyin': 'kongquelan'
          },
          {
            'RGB': [
              133,
              121,
              79
            ],
            'hex': '#85794f',
            'name': '库金',
            'pinyin': 'kujin'
          },
          {
            'RGB': [
              183,
              178,
              120
            ],
            'hex': '#b7b278',
            'name': '枯绿',
            'pinyin': 'kulyu'
          },
          {
            'RGB': [
              231,
              229,
              208
            ],
            'front': '#344A5E',
            'hex': '#e7e5d0',
            'name': '蜡白',
            'pinyin': 'labai'
          },
          {
            'RGB': [
              61,
              110,
              83
            ],
            'hex': '#3d6e53',
            'name': '老绿',
            'pinyin': 'laolyu'
          },
          {
            'RGB': [
              213,
              75,
              68
            ],
            'hex': '#d54b44',
            'name': '榴花红',
            'pinyin': 'liuhuahong'
          },
          {
            'RGB': [
              169,
              176,
              143
            ],
            'hex': '#a9b08f',
            'name': '芦灰',
            'pinyin': 'luhui'
          },
          {
            'RGB': [
              151,
              52,
              68
            ],
            'hex': '#973444',
            'name': '玫瑰红',
            'pinyin': 'meiguihong'
          },
          {
            'RGB': [
              121,
              61,
              86
            ],
            'hex': '#793d56',
            'name': '玫瑰灰',
            'pinyin': 'meiguihui'
          },
          {
            'RGB': [
              225,
              189,
              162
            ],
            'hex': '#e1bda2',
            'name': '米红',
            'pinyin': 'mihong'
          },
          {
            'RGB': [
              197,
              191,
              173
            ],
            'hex': '#c5bfad',
            'name': '米灰',
            'pinyin': 'mihui'
          },
          {
            'RGB': [
              245,
              245,
              220
            ],
            'custom': '#344A5E',
            'hex': '#f5f5dc',
            'name': '米色',
            'pinyin': 'mise'
          },
          {
            'RGB': [
              175,
              200,
              186
            ],
            'custom': '#344A5E',
            'hex': '#afc8ba',
            'name': '奶绿',
            'pinyin': 'nailyu'
          },
          {
            'RGB': [
              193,
              162,
              153
            ],
            'hex': '#c1a299',
            'name': '奶棕',
            'pinyin': 'naizong'
          },
          {
            'RGB': [
              233,
              219,
              57
            ],
            'hex': '#e9db39',
            'name': '柠檬黄',
            'pinyin': 'ningmenghuang'
          },
          {
            'RGB': [
              167,
              19,
              104
            ],
            'hex': '#a71368',
            'name': '品红',
            'pinyin': 'pinhong'
          },
          {
            'RGB': [
              60,
              94,
              145
            ],
            'hex': '#3c5e91',
            'name': '浅海昌蓝',
            'pinyin': 'qianhaichanglan'
          },
          {
            'RGB': [
              222,
              168,
              122
            ],
            'hex': '#dea87a',
            'name': '浅黄棕',
            'pinyin': 'qianhuangzong'
          },
          {
            'RGB': [
              218,
              149,
              88
            ],
            'hex': '#da9558',
            'name': '浅桔黄',
            'pinyin': 'qianjiehuang'
          },
          {
            'RGB': [
              162,
              32,
              118
            ],
            'hex': '#a22076',
            'name': '牵牛紫',
            'pinyin': 'qianniuzi'
          },
          {
            'RGB': [
              171,
              150,
              197
            ],
            'hex': '#ab96c5',
            'name': '浅石英紫',
            'pinyin': 'qianshiyingzi'
          },
          {
            'RGB': [
              196,
              195,
              203
            ],
            'hex': '#c4c3cb',
            'name': '浅藤紫',
            'pinyin': 'qiantengzi'
          },
          {
            'RGB': [
              201,
              174,
              140
            ],
            'hex': '#c9ae8c',
            'name': '浅驼色',
            'pinyin': 'qiantuose'
          },
          {
            'RGB': [
              234,
              205,
              209
            ],
            'hex': '#eacdd1',
            'name': '浅血牙',
            'pinyin': 'qianxieya'
          },
          {
            'RGB': [
              225,
              219,
              205
            ],
            'hex': '#e1dbcd',
            'name': '浅棕灰',
            'pinyin': 'qianzonghui'
          },
          {
            'RGB': [
              213,
              184,
              132
            ],
            'hex': '#d5b884',
            'name': '卡其黄',
            'pinyin': 'kaqihuang'
          },
          {
            'RGB': [
              100,
              115,
              112
            ],
            'hex': '#647370',
            'name': '卡其绿',
            'pinyin': 'kaqilyu'
          },
          {
            'RGB': [
              103,
              73,
              80
            ],
            'hex': '#674950',
            'name': '茄皮紫',
            'pinyin': 'qiepizi'
          },
          {
            'RGB': [
              69,
              86,
              103
            ],
            'hex': '#455667',
            'name': '鹊灰',
            'pinyin': 'quehui'
          },
          {
            'RGB': [
              49,
              103,
              141
            ],
            'hex': '#31678d',
            'name': '绒蓝',
            'pinyin': 'ronglan'
          },
          {
            'RGB': [
              144,
              202,
              175
            ],
            'hex': '#90caaf',
            'name': '三绿',
            'pinyin': 'sanlyu'
          },
          {
            'RGB': [
              0,
              91,
              90
            ],
            'hex': '#005b5a',
            'name': '沙绿',
            'pinyin': 'shalyu'
          },
          {
            'RGB': [
              43,
              94,
              125
            ],
            'hex': '#2b5e7d',
            'name': '沙青',
            'pinyin': 'shaqing'
          },
          {
            'RGB': [
              90,
              76,
              76
            ],
            'hex': '#5a4c4c',
            'name': '深烟',
            'pinyin': 'shenyan'
          },
          {
            'RGB': [
              100,
              52,
              65
            ],
            'hex': '#643441',
            'name': '深烟红',
            'pinyin': 'shenyanhong'
          },
          {
            'RGB': [
              37,
              120,
              181
            ],
            'hex': '#2578b5',
            'name': '深竹月',
            'pinyin': 'shenzhuyue'
          },
          {
            'RGB': [
              252,
              177,
              170
            ],
            'hex': '#fcb1aa',
            'name': '十样锦',
            'pinyin': 'shiyangjin'
          },
          {
            'RGB': [
              148,
              156,
              151
            ],
            'hex': '#949c97',
            'name': '水貂灰',
            'pinyin': 'shuidiaohui'
          },
          {
            'RGB': [
              190,
              210,
              182
            ],
            'hex': '#bed2b6',
            'name': '水黄',
            'pinyin': 'shuihuang'
          },
          {
            'RGB': [
              242,
              222,
              118
            ],
            'hex': '#f2de76',
            'name': '藤黄',
            'pinyin': 'tenghuang'
          },
          {
            'RGB': [
              46,
              195,
              231
            ],
            'hex': '#2ec3e7',
            'name': '天青',
            'pinyin': 'tianqing'
          },
          {
            'RGB': [
              55,
              68,
              75
            ],
            'hex': '#37444b',
            'name': '铁灰',
            'pinyin': 'tiehui'
          },
          {
            'RGB': [
              206,
              147,
              53
            ],
            'hex': '#ce9335',
            'name': '土黄',
            'pinyin': 'tuhuang'
          },
          {
            'RGB': [
              98,
              92,
              82
            ],
            'hex': '#625c52',
            'name': '相思灰',
            'pinyin': 'xiangsihui'
          },
          {
            'RGB': [
              160,
              62,
              40
            ],
            'hex': '#a03e28',
            'name': '血红',
            'pinyin': 'xiehong'
          },
          {
            'RGB': [
              196,
              55,
              57
            ],
            'hex': '#c43739',
            'name': '猩红',
            'pinyin': 'xinghong'
          },
          {
            'RGB': [
              208,
              133,
              61
            ],
            'hex': '#d0853d',
            'name': '雄黄',
            'pinyin': 'xionghuang'
          },
          {
            'RGB': [
              228,
              117,
              66
            ],
            'hex': '#e47542',
            'name': '雄精',
            'pinyin': 'xiongjing'
          },
          {
            'RGB': [
              77,
              25,
              25
            ],
            'hex': '#4d1919',
            'name': '锈红',
            'pinyin': 'xiuhong'
          },
          {
            'RGB': [
              184,
              200,
              183
            ],
            'hex': '#b8c8b7',
            'name': '锈绿',
            'pinyin': 'xiulyu'
          },
          {
            'RGB': [
              121,
              111,
              84
            ],
            'hex': '#796f54',
            'name': '选金',
            'pinyin': 'xuanjin'
          },
          {
            'RGB': [
              255,
              250,
              250
            ],
            'front': '#344A5E',
            'hex': '#fffafa',
            'name': '雪色',
            'pinyin': 'xuese'
          },
          {
            'RGB': [
              121,
              72,
              90
            ],
            'hex': '#79485a',
            'name': '雪紫',
            'pinyin': 'xuezi'
          },
          {
            'RGB': [
              209,
              227,
              219
            ],
            'hex': '#d1e3db',
            'name': '鸭蛋青',
            'pinyin': 'yadanqing'
          },
          {
            'RGB': [
              156,
              102,
              128
            ],
            'hex': '#9c6680',
            'name': '洋葱紫',
            'pinyin': 'yangcongzi'
          },
          {
            'RGB': [
              220,
              20,
              60
            ],
            'hex': '#dc143c',
            'name': '洋红',
            'pinyin': 'yanghong'
          },
          {
            'RGB': [
              204,
              53,
              54
            ],
            'hex': '#cc3536',
            'name': '艳红',
            'pinyin': 'yanhong'
          },
          {
            'RGB': [
              0,
              142,
              89
            ],
            'hex': '#008e59',
            'name': '鹦鹉绿',
            'pinyin': 'yingwulyu'
          },
          {
            'RGB': [
              221,
              59,
              68
            ],
            'hex': '#dd3b44',
            'name': '银朱',
            'pinyin': 'yinzhu'
          },
          {
            'RGB': [
              69,
              85,
              74
            ],
            'hex': '#45554a',
            'name': '油绿',
            'pinyin': 'youlyu'
          },
          {
            'RGB': [
              63,
              63,
              60
            ],
            'hex': '#3f3f3c',
            'name': '油烟墨',
            'pinyin': 'youyanmo'
          },
          {
            'RGB': [
              62,
              60,
              61
            ],
            'hex': '#3e3c3d',
            'name': '元青',
            'pinyin': 'yuanqing'
          },
          {
            'RGB': [
              192,
              63,
              60
            ],
            'hex': '#c03f3c',
            'name': '胭脂',
            'pinyin': 'yanzhi'
          },
          {
            'RGB': [
              88,
              90,
              87
            ],
            'hex': '#585a57',
            'name': '银箔',
            'pinyin': 'yinbo'
          },
          {
            'RGB': [
              187,
              28,
              51
            ],
            'hex': '#bb1c33',
            'name': '月季红',
            'pinyin': 'yuejihong'
          },
          {
            'RGB': [
              80,
              120,
              131
            ],
            'hex': '#507883',
            'name': '玉石蓝',
            'pinyin': 'yushilan'
          },
          {
            'RGB': [
              137,
              48,
              63
            ],
            'hex': '#89303f',
            'name': '枣红',
            'pinyin': 'zaohong'
          },
          {
            'RGB': [
              235,
              101,
              45
            ],
            'hex': '#eb652d',
            'name': '章丹',
            'pinyin': 'zhangdan'
          },
          {
            'RGB': [
              147,
              162,
              169
            ],
            'hex': '#93a2a9',
            'name': '正灰',
            'pinyin': 'zhenghui'
          },
          {
            'RGB': [
              219,
              199,
              166
            ],
            'hex': '#dbc7a6',
            'name': '枝黄',
            'pinyin': 'zhihuang'
          },
          {
            'RGB': [
              116,
              138,
              141
            ],
            'hex': '#748a8d',
            'name': '织锦灰',
            'pinyin': 'zhijinhui'
          },
          {
            'RGB': [
              188,
              165,
              144
            ],
            'hex': '#bca590',
            'name': '纸棕',
            'pinyin': 'zhizong'
          },
          {
            'RGB': [
              169,
              152,
              124
            ],
            'hex': '#a9987c',
            'name': '中棕灰',
            'pinyin': 'zhongzonghui'
          },
          {
            'RGB': [
              165,
              67,
              88
            ],
            'hex': '#a54358',
            'name': '紫粉',
            'pinyin': 'zifen'
          },
          {
            'RGB': [
              195,
              166,
              203
            ],
            'hex': '#c3a6cb',
            'name': '紫水晶',
            'pinyin': 'zishuijing'
          },
          {
            'RGB': [
              133,
              126,
              149
            ],
            'hex': '#857e95',
            'name': '紫藤灰',
            'pinyin': 'zitenghui'
          },
          {
            'RGB': [
              238,
              165,
              209
            ],
            'hex': '#eea5d1',
            'name': '紫薇花',
            'pinyin': 'ziweihua'
          },
          {
            'RGB': [
              184,
              132,
              79
            ],
            'hex': '#b8844f',
            'name': '棕茶',
            'pinyin': 'zongcha'
          }
        ],
        randomColors: [],
        selectedColor: {
          'RGB': [
            98,
            92,
            82
          ],
          'hex': '#625c52',
          'name': '相思灰',
          'pinyin': 'xiangsihui'
        },
        isFocus: false,
        content: '',
        title: '',
        isPost: false
      }
    },
    computed: {
      wordCount () {
        return this._wordCount(this.content)
      },
      isEmpty () {
        return this.content.trim().length === 0 || this.content === '' || this.content === null || this.content === undefined
      },
      buttonClass () {
        // class="c-btn c-btn--flat c-btn--small u-text-bold {{isPost ? 'c-btn--loading' : ' u-c-cyan'}} {{isEmpty ? 'c-btn--disabled' : ''}}
        return [
          'c-btn c-btn--flat c-btn--small u-text-bold',
          {
            'c-btn--loading': this.isPost,
            'u-c-cyan': this.isPost,
            'c-btn--disabled': this.isEmpty
          }
        ]
      }
    },
    methods: {
      cancel () {
        Tips.confirm('确认取消？').then(() => {
          wx.navigateBack({
            delta: 2
          })
        }).catch(() => {
          console.log('取消')
        })
        // this.$showDialog({
        //   content: '确定取消？',
        //   showCancel: true
        // }).then(async () => {
        //   wx.navigateBack({
        //     delta: 2
        //   })
        // }).catch(() => {
        //   this.dialog.show = false
        // })
      },
      async formSubmit (e) {
        // console.log(this.postId)
        // if (!this.postId) {
        //   return
        // }
        this.isPost = true
        const commentData = {
          // formId: e.target.formId,
          content: this.content,
          postId: this.postId,
          meta: {
            style: JSON.stringify(this.selectedColor)
          }
        }
        // console.log(commentData)
        // console.log(commentData)
        const res = await postsApi.repliesNew(this.postId, commentData)
        // console.log(res)
        if (res) {
          await Tips.success('成功发表评论')
        }
        Route.backOrRedirect(`/pages/detail?id=${this.postId}&#comments`)

      },
      changeColor () {
        // this.isSliderDisplay = !this.isSliderDisplay
        // this.isFocus = false
        // this.bindBlur()
        if (this.autoFocus === true) {
          this.autoFocus = false
          this.isSliderDisplay = true
          return true
        }
        this.isSliderDisplay = !this.isSliderDisplay
      },
      handleSelectdColor (item) {
        this.selectedColor = item
      },
      _wordCount (data) {
        const pattern = /[a-zA-Z0-9_\u0392-\u03c9\u0410-\u04F9]+|[\u4E00-\u9FFF\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\uac00-\ud7af]+/g

        const m = data.match(pattern)
        let count = 0
        if (m === null) {
          return count
        }
        for (let i = 0; i < m.length; i++) {
          if (m[i].charCodeAt(0) >= 0x4E00) {
            count += m[i].length
          } else {
            count += 1
          }
        }
        return count
      },
      bindInput (e) {
        this.content = e.target.value
      },
      bindFocus () {
        this.autoFocus = true
      },
      bindBlur () {
        this.autoFocus = false
      }
    },
    async onLoad () {
      const query = this.$root.$mp.query
      this.postId = query.postId
      wx.setNavigationBarTitle({title: `评价「${query.title}」`})
    }
  }
</script>
