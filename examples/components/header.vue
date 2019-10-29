<template>
  <header class="page-header">
    <div class="header-container" flex="main:justify">
      <div class="logo"></div>
      <div class="link">
        <router-link :to="{name: 'guide'}" class="active">指南</router-link>
        <router-link :to="{name: 'button'}" class="active">组件</router-link>
        <b-dropdown>
          <a href="#" class="active" @click.prevent>生态
            <i class="iconfont icon-ios-arrow-down"></i>
          </a>
          <b-dropdown-menu slot="list">
            <b-dropdown-item @click.native="goTo('https://github.com/wangbin3162/bin-cli')">
              bin-cli
            </b-dropdown-item>
            <b-dropdown-item @click.native="goTo('https://github.com/wangbin3162/bin-admin')">
              bin-admin
            </b-dropdown-item>
            <b-dropdown-item @click.native="goTo('https://github.com/wangbin3162/bin-data')">
              bin-data
            </b-dropdown-item>
            <b-dropdown-item @click.native="goTo('https://github.com/wangbin3162/bin-animation')">
              bin-animation
            </b-dropdown-item>
            <b-dropdown-item @click.native="goTo('https://github.com/wangbin3162/bin-keyframe-animation')">
              bin-keyframe-animation
            </b-dropdown-item>
            <b-dropdown-item @click.native="goTo('https://github.com/wangbin3162/bin-static-web/')">
              bin-static-web
            </b-dropdown-item>
            <b-dropdown-item @click.native="goTo('https://github.com/wangbin3162/vue-admin/')">
              vue-admin
            </b-dropdown-item>
          </b-dropdown-menu>
        </b-dropdown>
        <a href="https://github.com/wangbin3162/bin-ui" class="github" target="_blank">GitHub</a>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'MainHeader',
    methods: {
      goTo (url) {
        this.$util.open(url, true)
      }
    }
  }
</script>

<style lang="stylus">
  .page-header {
    background-color: #fff;
    box-shadow: 0 10px 60px 0 rgba(29, 29, 31, 0.07);
    opacity: 0.98;
    position: relative !important;
    top: 0;
    left: 0;
    width: 100%;
    height: 80px;
    transition: all .3s;
    z-index: 100;
    .header-container {
      width: 100%;
      margin: 0 auto;
      height: 80px;
      .logo {
        color: #409EFF;
        text-transform: uppercase;
        font-weight: bold;
        font-family: helvetica;
        text-align: center;
        font-size: 40px;
        margin-left: 30px
        width: 220px;
        background: url("../assets/bin-ui.png") no-repeat 0 0
        background-size: 100%;
      }
      .link {
        padding: 0 20px;
        line-height: 80px;
        a {
          text-decoration: none;
          color: #1989fa;
          display: inline-block;
          line-height: 1.5;
          padding: 0 22px;
          font-size: 15px;
          &.github {
            color: #636363;
          }
        }
        .bin-dropdown {
          line-height: 1.5;
        }
      }
    }
  }
</style>
