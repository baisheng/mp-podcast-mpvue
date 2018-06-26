export function boundingClientRect (selector) {
  // 在mpvue中target被设置为global
  if (!window) {
    return new Promise((resolve, reject) => {
      const query = wx.createSelectorQuery()
      query.select(selector).boundingClientRect(res => {
        resolve(res)
      }).exec()
    })
  }

  return new Promise((resolve, reject) => {
    resolve(document.querySelector(selector).getBoundingClientRect())
  })
}
/**
 * @desc 生成滑动动画
 * @param {number} speed - 动画运行时间
 * @param {number} transX - 横向偏移量
 * @return {object} animationData
 */
export function slideAnimate (speed, transX, selector) {
  if (!window) {
    const animation = wx.createAnimation({
      transformOrigin: 'left top',
      timingFunction: 'linear',
      duration: speed || 17,
      delay: 0
    })
    animation.translateX(transX).step()
    return animation.export()
  }

  // 非微信环境就操作dom
  const target = document.querySelector(selector)
  target.style.transform = `translateX(${transX}px)`
  target.style.transitionProperty = 'transform'
  target.style.transitionDuration = `${speed || 17}ms`
  target.style.transitionTimingFunction = `linear`
  return null
}
