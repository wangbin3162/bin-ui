<template>
  <div id="app" flex="dir:top box:first">
    <main-header></main-header>
    <div class="main-cnt" flex>
      <side-nav class="nav" flex-box="0"></side-nav>
      <div class="page-container" flex-box="1">
        <b-scrollbar style="height:100%;" ref="componentScrollBar">
          <router-view></router-view>
          <main-footer></main-footer>
          <b-back-top></b-back-top>
        </b-scrollbar>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        showBackToTop: false,
        componentScrollBar: null
      }
    },
    watch: {
      '$route.path' () {
        // 触发伪滚动条更新
        this.componentScrollBox.scrollTop = 0
        this.$nextTick(() => {
          this.componentScrollBar.update()
          if (this.$route.meta.desc) {
            this.$util.title(this.$route.meta.desc + ' - [bin-ui]')
          }
        })
      }
    },
    mounted () {
      this.componentScrollBar = this.$refs.componentScrollBar
      this.componentScrollBox = this.componentScrollBar.$el.querySelector('.bin-scrollbar__wrap')
    }
  }
</script>

<style lang="stylus">
  #app {
    color: #444444;
    font-size: 12px;
    width: 100%;
    height: 100%;
  }
  .main-cnt {
    margin-top: 20px;
    width: 100%;
    background-color: #fff;
    box-shadow: 0 4px 30px 0 rgba(223, 225, 230, .5);
    .page-container {
      box-sizing: border-box;
      overflow: hidden;
      height: 100%;
      .bin-scrollbar__wrap {
        overflow-x: hidden;
      }
      section {
        width: 1100px;
        margin: 0 auto;
        padding: 20px 60px 0 20px;
      }
      p, ul li {
        font-size: 14px;
        color: #5e6d82;
        line-height: 2em;
      }
      p {
        strong {
          display: block;
          padding: 8px 16px;
          background-color: #ecf8ff;
          border-radius: 4px;
          border-left: 5px solid #50bfff;
          margin: 20px 0;
        }
      }
      h2, h3, h4, h5 {
        font-weight: 400;
        color: #1f2f3d;
      }
      h2 {
        font-size: 28px;
        margin: 0;
        padding: 10px 0;
        border-bottom: 1px solid #c5d9e8;
      }
      h3 {
        font-size: 22px;
        margin: 55px 0 20px;
      }
      h4 {
        font-weight: 400;
        color: #1f2f3d;
        font-size: 16px;
      }
      table {
        width: 100%;
        background-color: #fff;
        color: #5e6d82;
        font-size: 12px;
        border-collapse: collapse;
        overflow: auto;
        margin-bottom: 50px;
        border: 1px solid #e9e9e9;
        thead, tbody {
          width: 100%;
        }
        th, td {
          padding: 8px 16px;
          max-width: 250px;
          text-align: left;
          border: 1px solid #e9e9e9;
        }
        th {
          background-color: #fafbfc;
        }
      }
    }
  }
</style>
