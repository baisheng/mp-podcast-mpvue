<style lang="scss" scoped>
  .c-slide-item {
    height: 100%;
    position: relative;
    float: left;
    box-sizing: border-box;
    flex-flow: column;
  }
  .c-slide-item__content {
    position: absolute;
    box-sizing: border-box;
    margin: 15px 9px;
    overflow: hidden;
    padding: 10px;
    height: calc(100% - 80px);
    width: 95%;
    color: #aaa;
    background-color: white;
    /*box-shadow: 0 0 1px rgba(0, 0, 0, 0.10) inset, !*左边阴影*!*/
    /*0 2px 10px rgba(0, 0, 0, 0.10); !*右边阴影*!*/
    box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    display: flex;
    flex-flow: column;
    flex-direction: column;
    align-items:center;
    /*justify-content: center;*/
    text-align: center;
  }
</style>
<template>
  <div class="c-slide-item">
    <div class="c-slide-item__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SlideItem'
  }
</script>
