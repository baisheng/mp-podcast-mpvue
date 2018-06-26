<style lang="scss">
  Page, body {
    background: #F5F5F7;
  }

  .o-page {
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
  }

</style>
<template>
  <div class="o-page">
    <slide :list="featured.list" :slideLength="slideLength" v-if="slideLength > 0 && featured.list"/>
    <div class="u-flex u-justify-center u-align-items-center u-height-100" v-else>
      <button class="c-btn c-btn--loading c-btn--flat c-btn--large " style="background: transparent;"></button>
    </div>
    <play-fab/>
  </div>
</template>
<script>
  import { mapState, mapActions } from "vuex";
  import Slide from "@/components/slide";
  import SlideItem from "@/components/slide/item";
  import PlayFab from "@/components/play-fab";
  import auth from "@/api/auth";

  export default {
    components: {
      Slide,
      SlideItem,
      PlayFab
    },
    data () {
      return {
        // initialSlide: 0
      };
    },
    computed: {
      ...mapState([
        "featured"
      ]),
      slideLength () {
        if (this.featured.list) {
          return this.featured.list.length;
        }
        // if (Object.is(this.featured, "list")) {
        //   if (Object.is(this.featured.list, "length")) {
        //     return this.featured.list.length;
        //   }
        // }
        return 0;
      }
    },

    mounted () {
      this.load();
      // await auth.user()
    },
    // onLoad () {
    //   this.load();
      // this.load()
    // },
    methods: {
      ...mapActions([
        "getFeatured"
      ]),
      async load () {
        await auth.login();
        await this.getFeatured();
      }
    }
  };
</script>
