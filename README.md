MpPodcast
==========
A Podcast miniprogram project, 一款播课类小程序

## 简介
这是一个类播客类的小程序，功能包括内容推荐、音频播放、内容评论、收藏，主播详情、节目详情等内容。
功能上主要是以下几项：

精选，内容精选页（首页），Slide 滑动切换效果，类微信读书首页
柚道，内容为卡片流式列表，包含的内容为柚道类别下的：读书、读文内容，音频内容可直接点播放
柚答，育儿问题音频解答内容
教师（主播）详情页
柚道内容详情页，音频列表、评论列表，音频列表支持连续播放
柚道内容评论页
柚道内容收藏
交互上需要播放器与导航整合，可滑动切换，播放器默认停留的内容为精选页内容第一条
一期的需求，大致以上几条，还有我的里面会有各种内容收藏的详情页

### 特点
- mpvue 基于 mpvue 快速构建
- vux 音频及内容数据管理
- scss 样式组件


## 演示地址


## 系统部分截图

### Landing 页
![img]()
### 精选页
![img]()
### 详情页及播放器
![img]()
### 音频播放列表
![img]()
### 特色评论页，可以选择喜欢的色彩
![img]()

## 安装部署
## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
