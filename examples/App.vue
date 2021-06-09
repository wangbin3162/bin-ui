<template>
  <div id="app" ref="scrollBox">
    <main-header></main-header>
    <div class="main-cnt">
      <side-nav class="nav"></side-nav>
      <div class="page-container" ref="containerRef">
        <div class="global-anchor" v-if="anchors.length">
          <b-scrollbar>
            <b-anchor :scroll-offset="100" ref="anchorRef">
              <template v-for="item in anchors">
                <b-anchor-link :key="item.id" :href="`#${item.id}`" :title="item.text"></b-anchor-link>
              </template>
            </b-anchor>
          </b-scrollbar>
        </div>
        <router-view></router-view>
        <main-footer></main-footer>
      </div>
    </div>
    <b-back-top></b-back-top>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      showBackToTop: false,
      componentScrollBar: null,
      anchors: []
    }
  },
  watch: {
    '$route.path'() {
      this.$nextTick(() => {
        if (this.$route.meta.desc) {
          this.$util.title(this.$route.meta.desc + ' - Bin UI')
        }
        this.fetchAnchors()
      })
    }
  },
  mounted() {
    this.fetchAnchors()
  },
  methods: {
    fetchAnchors() {
      if (!this.$refs.containerRef) return
      const content = this.$refs.containerRef.querySelector('.content.element-doc.content')
      if (!content) return
      const h3 = content.querySelectorAll('h3')
      this.anchors = Array.from(h3).map(item => {
        const text = item.childNodes[1]?.textContent.trim()
        const id = item.getAttribute('id')
        return { id, text }
      })
    }
  }
}
</script>

<style lang="stylus">
#app {
  width: 100%;
  min-height: 100vh;
}
.main-cnt {
  padding-top: 80px;
  width: 100%;
  height: 100%;
  .page-container {
    box-sizing: border-box;
    margin-left: 260px;
    background: #fff;
  }
}
</style>
