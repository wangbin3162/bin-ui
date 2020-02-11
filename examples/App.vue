<template>
  <div id="app" ref="scrollBox">
    <main-header></main-header>
    <div class="main-cnt">
      <side-nav class="nav"></side-nav>
      <div class="page-container">
        <router-view></router-view>
        <main-footer></main-footer>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        showBackToTop: false,
        componentScrollBar: null
      }
    },
    watch: {
      '$route.path'() {
        this.$nextTick(() => {
          if (this.$route.meta.desc) {
            this.$util.title(this.$route.meta.desc + ' - [bin-ui]')
          }
        })
      }
    }
  }
</script>

<style lang="stylus">
  #app {
    font-size: 12px;
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
