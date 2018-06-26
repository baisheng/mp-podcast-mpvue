<template name="c-loadmore">

  <div>

    <div class="c-loadmore c-loadmore--nomore" v-if="page.reachBottom">
      <div class="c-loadmore__tips">
        <div class="c-loadmore__dot"></div>
      </div>
    </div>

    <div class="c-loadmore c-loadmore--nodata" v-if="page.empty">
      <div class="c-loadmore__tips">暂无数据</div>
    </div>

    <div class="c-loadmore" v-else-if="page.loading">
      <div class="c-loading"></div>
      <div class="c-loadmore__tips">加载中...</div>
    </div>
  </div>

</template>


<script>
  export default {
    props: {
      page: {
        type: Object,
        require: true
      }
    }
  }
</script>
