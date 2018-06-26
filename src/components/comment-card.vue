<style lang="scss">

</style>
<template>
  <div class="c-comment-card">
    <div class="c-comment-card__body">

      <div class="c-comment-card__content u-text-large u-flex"
           :style="style">
        {{comment.content}}
        <!--<Elip :line="line">{{item.content}}</Elip>-->
      </div>
      <div class="u-flex u-justify-between c-comment__meta  u-text-small u-mt-small">
        <button class="c-btn c-btn--plain c-btn--danger c-btn--mini"
                v-if="isAuthor">
          删除
        </button>
        <span v-else></span>
        <span>
          ─{{comment.author.user_nicename}}
            <span class="u-text-xsmall">{{comment.date}}</span>
      </span>
      </div>
    </div>
  </div>
</template>

<script>
  import Rgb2hex from '@/utils/rgb2hex'

  export default {
    props: {
      comment: {
        type: Object,
        require: true
      },
      isAuthor: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      style () {
        const meta = !Object.is(this.comment.meta, undefined) ? this.comment.meta : null
        if (!meta) {
          return ''
        }
        if (!Object.is(this.comment.meta.style, undefined)) {
          const bgHex = Rgb2hex(`rgba(${this.comment.meta.style.RGB},0.1)`)
          const colorHex = Rgb2hex(`rgba(${this.comment.meta.style.RGB},1)`)
          return `background: ${bgHex}; color: ${colorHex}`
        }
        return ''
      }
    }
  }
</script>
