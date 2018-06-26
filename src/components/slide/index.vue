<template>
  <div class="c-slide">
    <div class="c-slide__wrapper"
         :animation="animationData"
         @touchstart="touchstart"
         @touchmove="touchmove"
         @touchend="touchend"
         :style="style" v-if="slideLength > 0">
      <div class="c-slide-item"
           :style="itemStyle"
           v-for="item in list" :key="item.id">
        <div class="c-slide-item__content" :style="contentHeightStyle">
          <div class="c-post">
            <div class="c-post__featured-image" @click="showDetail(item.id)">
              <image :src="item.featured_image"
                     style="width: 120px; height: 173px;" mode="aspectFill"></image>
            </div>
            <div class="c-post__title" @click="showDetail(item.id)">
              {{item.title}}
            </div>
            <div @click="showAuthorDetail(item.author.id)"
                 style="position: absolute; bottom: 30px; flex-direction: column;"
                 class="u-flex u-justify-center u-align-items-center u-width-100">
              <div class="c-post__author">
                <image class="c-avatar" :src="item.author.avatar" mode="aspectFill"></image>
              </div>
              <div class="c-post__author">
                {{item.author.user_nicename}}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import SlideItem from "./item";
  // import {boundingClientRect, slideAnimate} from '@/utils/adapter'
  import wx from "wx";

  const device = wx.getSystemInfoSync();  //  获取设备信息
  // import global from '@/utils/global'
  export default {
    name: "Slide",
    components: {
      SlideItem
    },
    props: {
      speed: {
        type: Number,
        default: 17
      },
      isStick: {
        type: Boolean,
        default: false
      },
      list: {
        type: Array,
        default: () => {
          return [];
        }
      },
      slideLength: {
        type: Number,
        default: 0
      },
      direction: {
        type: String,
        default: "horizontal"
      },
      onTouchStart: {
        type: Function,
        default () {
          return {};
        }
      },
      onTouchMove: {
        type: Function,
        default () {
          return {};
        }
      },
      onTouchEnd: {
        type: Function,
        default () {
          return {};
        }
      }
    },
    data () {
      return {
        animationData: {
          transformOrigin: "50% 50%",
          duration: 300,
          timingFunction: "ease",
          delay: 0
        },
        startPos: 0,
        startX: 0,
        transX: 0,
        wrapWidth: 0,
        // Slide CONFIG
        /**
         * 必填项
         */
        // slideLength: 0,                       //  由于目前无法直接获取slide页数，目前只能通过参数写入
        items: [],
        /**
         * 可选参数
         */
        width: device.windowWidth,
        height: device.windowHeight,
        initialSlide: 0,
        speed: 300,
        timingFunction: "ease",               //  过渡动画速度曲线
        autoplay: 0,                          //  自动播放间隔，设置为0时不自动播放
        directionViewName: "directionClass",   //  对应视图中direction类名
        animationViewName: "animationData",   //  对应视图中animation属性名
        touchStartTime: 0,
        touchEndTime: 0,
        /**
         * 事件回调
         * @type {[type]}
         */
        onInit: null,                         //  swiper初始化时执行
        onTouchStart: null,                   //  手指碰触slide时执行
        onTouchMove: null,                    //  手指碰触slide并且滑动时执行
        onTouchEnd: null,                     //  手指离开slide时执行
        onSlideChangeStart: null,             //  slide达到过渡条件时执行
        onSlideChangeEnd: null,               //  swiper从一个slide过渡到另一个slide结束时执行
        onTransitionStart: null,              //  过渡时触发
        onTransitionEnd: null,                //  过渡结束时执行
        onSlideMove: null,                    //  手指触碰swiper并且拖动slide时执行
        onSlideNextStart: null,               //  slide达到过渡条件 且规定了方向 向前（右、下）切换时执行
        onSlideNextEnd: null,                 //  slide达到过渡条件 且规定了方向 向前（右、下）切换结束时执行
        onSlidePrevStart: null,               //  slide达到过渡条件 且规定了方向 向前（左、上）切换时执行
        onSlidePrevEnd: null                  //  slide达到过渡条件 且规定了方向 向前（左、上）切换结束时执行
      };
    },
    computed: {
      contentHeightStyle () {
        // console.log(device)
        // const selfHeight = device.model.indexOf('iPhone x') >= 0 ? '120' : '100'
        const selfHeight = device.model.indexOf("iPhone X") >= 0 ? device.windowHeight - 110 : device.windowHeight - 90;
        return `height: ${selfHeight}px`;
      },
      style () {
        return `width:${this.wapperWidth}px;`;
      },
      itemStyle () {
        return `width:${this.itemWidth}px;`;
      },
      itemWidth () {
        return this.width - 60;
      },
      rectDistance () {
        return this.direction === "horizontal" ? this.width : this.height;
      },
      wapperWidth () {
        return this.slideLength * this.rectDistance;
      },
      /**
       * @return {string}
       */
      XORY () {
        return this.direction === "horizontal" ? "X" : "Y";
      }
    },
    // created () {
    //   this.slideLength = this.list.length;
    // },
    mounted () {
      this.slideTo(this.initialSlide)
      // console.log(this.slideLength)
      // this.slideTo(this.initialSlide)
    },
    methods: {
      showAuthorDetail (authorId) {
        this.$router.push({
          path: "/pages/author",
          query: {
            id: authorId
          }
        });
        // wx.navigateTo({
        //   url: `/pages/author?id=${authorId}`
        // })
      },
      showDetail (id) {
        this.$router.push({
          path: "/pages/detail",
          query: {
            id: id
          }
        });
        // wx.navigateTo({
        //   url: `/pages/detail?id=${id}`
        // });
      },
      async touchstart (e) {

        const { onTouchStart, XORY, activeIndex, rectDistance } = this;
        let touch = null;
        if (e.mp !== undefined) {
          touch = e.mp.changedTouches[0];
        } else {
          touch = e.changedTouches[0];
        }
        const distance = touch[`client${XORY}`]; // startPos
        const translate = -activeIndex * this.itemWidth + 30;
        this[`touchStart${XORY}`] = distance;
        this[`translate${XORY}`] = translate;
        this.touchStartTime = new Date().getTime();
        this.startPos = touch[`client${XORY}`];
        // this.startPos = e.changedTouches[0].clientX
        typeof onTouchStart === "function" && onTouchStart(this, e); //  当手指碰触到slide时执行
        this.slideAnimation(translate, 0);
      },
      touchmove (e) {
        // 获取distance

        const { onTouchMove, XORY, onSlideMove } = this;
        // const touch = e.changedTouches[0]
        let touch = null;
        if (e.mp !== undefined) {
          touch = e.mp.changedTouches[0];
          // this.startX = e.mp.touches[0].clientX
        } else {
          touch = e.changedTouches[0];
          // this.startX = e.touches[0].clientX
        }

        const distance = touch[`client${XORY}`];
        const tmpMove = this[`translate${XORY}`] + distance - this[`touchStart${XORY}`];
        typeof onTouchMove === "function" && onTouchMove(this, e); //  手指碰触slide并且滑动时执行
        const self = this;
        self.endPos = touch[`client${XORY}`];
        const maxPos = 30;
        const minPos = -this.itemWidth * 2 - 30;
        if (this.tmpMove > maxPos) {
          this.tmpMove = maxPos;
        }
        if (this.tmpMove < minPos) {
          this.tmpMove = minPos;
        }
        this.slideAnimation(tmpMove, 0);

        typeof onSlideMove === "function" && onSlideMove(this);

        // let moveX = 0
        // if (e.mp !== undefined) {
        //   moveX = e.mp.touches[0].clientX
        // } else {
        //   moveX = e.touches[0].clientX
        // }
        // const distance = moveX - this.startX
        // this.startX = moveX
        // this.transX = this.transX + distance
        // 边界检测
        // this.transX = this.getSafeWidth(this.transX)
        // 创建动画 动画移动跟随distance
        // this.animationData = slideAnimate(this.speed, this.transX, '.mpvue-slide>.slide-wrap')

      },
      touchend (e) {
        const { onTouchEnd, XORY, speed, touchStartTime, rectDistance } = this;
        let touch = null;
        if (e.mp !== undefined) {
          touch = e.mp.changedTouches[0];
        } else {
          touch = e.changedTouches[0];
        }
        const distance = touch[`client${XORY}`];
        const touchEndTime = new Date().getTime();

        const action = this.action(touchStartTime, touchEndTime, this[`touchStart${XORY}`], distance, rectDistance);
        typeof onTouchEnd === "function" && onTouchEnd(this, e); //  手指离开slide时执行
        this[action](true, speed);
      },
      /**
       * 切换到指定slide
       * @param index：必选，num，指定将要切换到的slide的索引
       * @param speed：可选，num(单位ms)，切换速度
       * @param runCallbacks：可选，boolean，设置为false时不会触发onSlideChange回调函数
       */
      slideTo (index, speed = 300, runCallbacks = false) {
        const self = this;
        const {
          slideLength,
          activeIndex,
          rectDistance,
          onSlideChangeStart,
          onSlideChangeEnd,
          onTransitionEnd,
          consoleException
        } = self;

        try {
          if (typeof index !== "number") throw "paramType"; //  参数类型错误
          if (index < 0 || index > slideLength - 1) throw "bound";   //  越界

          const translate = -index * this.itemWidth + 30;
          self.previousIndex = activeIndex;
          self.activeIndex = index;
          self.isBeginning = self.activeIndex === self.initialSlide;
          self.isEnd = self.activeIndex === self.slideLength - 1;

          runCallbacks && typeof onSlideChangeStart === "function" && onSlideChangeStart(self);  // slide达到过渡条件时执行

          self.slideAnimation(translate, speed);

          runCallbacks && typeof onSlideChangeEnd === "function" && setTimeout(() => {
            onSlideChangeEnd(self);
          }, speed);  //  swiper从一个slide过渡到另一个slide结束后执行
          typeof onTransitionEnd === "function" && setTimeout(() => {
            onTransitionEnd(self);
          }, speed);  //  slide过渡结束后执行
        } catch (err) {
          consoleException(err, "slideTo[Function]");
        }
      },
      /**
       * 切换控制器
       * @param touchStartTime： 手指触碰slide时的时间戳
       * @param et： 手指离开slide时的时间戳
       * @param from： 手指触碰slide时的屏幕位置
       * @param to： 手指离开slide时的屏幕位置
       * @param wrapperDistance： slide滑动方向上的容器长度
       * @returns {*}
       */
      action (touchStartTime, touchEndTime, from, to, wrapperDistance) {
        const {
          activeIndex,
          slideLength,
          onTransitionStart
        } = this;
        const deltaTime = touchEndTime - touchStartTime;  //  手指触摸时长
        const distance = Math.abs(to - from);  //  滑动距离

        const k = distance / deltaTime;
        if (to > from) {
          typeof onTransitionStart === "function" && onTransitionStart(self);  // slide达到过渡条件时执行
          return (k > 0.3 || distance > wrapperDistance / 2) ? (activeIndex === 0 ? "slideBack" : "slidePrev") : "slideBack";
        }

        if (to < from) {
          typeof onTransitionStart === "function" && onTransitionStart(self);  // slide达到过渡条件时执行
          return (k > 0.3 || distance > wrapperDistance / 2) ? (activeIndex === slideLength - 1 ? "slideBack" : "slideNext") : "slideBack";
        }

        if (to === from) {
          return "slideBack";
        }

        return "slideBack";
      },
      /**
       * 切换至下一个slide
       * @param runCallbacks： 可选，boolean，设置为false时不会触发onSlideChange回调函数
       * @param speed: 可选，num(单位ms)，切换速度
       */
      slideNext (runCallbacks = false, speed = 300) {
        const self = this;
        const {
          onSlideNextStart,
          onSlideNextEnd
        } = self;

        typeof onSlideNextStart === "function" && onSlideNextStart(self);  // slide达到过渡条件时执行

        self.slideTo(self.activeIndex + 1, speed, runCallbacks);

        typeof onSlideNextEnd === "function" && setTimeout(() => {
          onSlideNextEnd(self);
        }, speed);  //  slide过渡结束后执行
      },

      /**
       * 切换至上一个slide
       * @param runCallbacks： 可选，boolean，设置为false时不会触发onSlideChange回调函数
       * @param speed: 可选，num(单位ms)，切换速度
       */
      slidePrev (runCallbacks = false, speed = 300) {
        const self = this;
        const {
          onSlidePrevStart,
          onSlidePrevEnd
        } = self;

        typeof onSlidePrevStart === "function" && onSlidePrevStart(self);  // slide达到过渡条件时执行

        self.slideTo(self.activeIndex - 1, speed, runCallbacks);

        typeof onSlidePrevEnd === "function" && setTimeout(() => {
          onSlidePrevEnd(self);
        }, speed);  //  slide过渡结束后执行
      },

      /**
       * 回弹
       * @param runCallbacks: 可选，boolean，设置为false时不会触发onSlideChange回调函数
       * @param speed: 可选，num(单位ms)，切换速度
       */
      slideBack (runCallbacks = false, speed = 300) {
        const self = this;
        const {
          XORY,
          activeIndex,
          rectDistance,
          onTransitionEnd
        } = self;

//      const translate = -activeIndex * rectDistance + 30
        const translate = -activeIndex * this.itemWidth + 30;

        self.slideAnimation(translate, speed);

        typeof onTransitionEnd === "function" && setTimeout(() => {
          onTransitionEnd(self);
        }, speed);  //  slide过渡结束后执行
      },

      /**
       * @desc 获取偏移的安全距离
       * @param {number} transX - 横向偏移量
       * @return {transX} 安全的便宜距离
       */
      // getSafeWidth (transX) {
      //   const safeWidth = this.wrapWidth - this.slideWidth
      //   if (transX > 0) {
      //     return 0
      //   }
      //   if (transX < -safeWidth) {
      //     return -safeWidth
      //   }
      //   return transX
      // },
      /**
       * 平移动画
       * @param translate：平移位置
       * @param speed：过渡时长
       * @param timingFunction：过渡类型
       */
      slideAnimation (translate = 0, speed = 300, timingFunction = "linear") {
        const REG = {
          TRANSLATE: /^(0|[1-9][0-9]*|-[1-9][0-9]*)$/,
          SPEED: /^(0|[1-9][0-9]*|-[1-9][0-9]*)$/,
          TIMINGFUNCTION: /linear|ease|ease-in|ease-in-out|ease-out|step-start|step-end/
        };

        const { XORY, animationViewName, consoleException } = this;
        try {
          // 异常处理
          if (!REG.TRANSLATE.test(translate)) throw "paramType";
          if (!REG.SPEED.test(speed)) throw "paramType";
          if (!REG.TIMINGFUNCTION.test(timingFunction)) throw "paramType";

          // 创建一个动画实例
          // const animation = wx.createAnimation({
          //   transformOrigin: '50% 50%',
          //   duration: speed,
          //   timingFunction,
          //   delay: 0
          // })
          const animation = wx.createAnimation({
            transformOrigin: "left top",
            timingFunction: "linear",
            duration: 300,
            delay: 0
          });
          // animation.translateX(transX).step()
          // return animation.export()

          // this.animationData = slideAnimate(this.speed, this.transX, '.mpvue-slide>.slide-wrap')

          // + 30 -60
          this.animationData = animation[`translate${this.XORY}`](translate).step();  //  动画描述
          // animation[`translate${XORY}`](translate).step()  //  动画描述

          // slideAnimate(translate).step()
          // this.syncView(animationViewName, animation)  //  同步动画到视图
        } catch (err) {
          consoleException(err, "slideAnimation[Function]");
        }
      },
      /**
       * 同步设置到视图
       * @param DEFAULT：默认参数
       * @param param：构造参数
       */
      syncView (viewName, prop) {
        this[`${viewName}`] = prop;
      },
      /**
       * 错误对照
       */
      consoleException (type, place) {
        const ERROR = {
          "paramType": "参数类型错误",
          "bound": "参数越界"
        };
        console.log(`%c${place}:${ERROR[type]}`, "color: red");
      }
    }
  };
</script>
