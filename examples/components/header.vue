<template>
  <header class="page-header">
    <div class="header-container" flex="main:justify">
      <div class="logo">BIN-UI</div>
      <div class="link">
        <router-link :to="{name: 'giud'}" class="active">指南</router-link>
        <a href="https://github.com/wangbin3162/bin-ui" class="github">GitHub</a>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'MainHeader'
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
      line-height: 80px;
      .logo {
        color: #409EFF;
        text-transform: uppercase;
        font-weight: bold;
        font-family: helvetica;
        text-align: center;
        font-size: 40px;
        padding: 0 15px;
        @media screen and (-webkit-min-device-pixel-ratio: 0) {
          background: -webkit-gradient(linear, left top, left bottom, from(#409EFF), to(#154bff));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }
      .link {
        height: 100%
        a {
          text-decoration: none;
          color: #1989fa;
          display: inline-block;
          padding: 0 22px;
          height: 100%
          font-size: 15px;
          &.github {
            color: #636363;
          }
        }
      }
    }
  }
</style>
