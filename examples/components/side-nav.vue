<template>
  <div class="side-nav">
    <b-scrollbar style="height:100%;">
      <div class="group-container">
        <p class="side-nav-title">开发指南</p>
        <div class="side-nav-items" v-for="(nav,index) in guide" :key="index">
          <router-link :class="$route.name===nav.name ? 'active' : ''" :to="{name: nav.name}">
            {{ nav.desc }}
          </router-link>
        </div>
      </div>
      <div class="group-container">
        <p class="side-nav-title">组件</p>
        <b-menu width="100%" expand-all :active-name="$route.name">
          <b-submenu v-for="(sub,index) in components" :key="sub.path+'-'+index" :name="index">
            <template slot="title">
              <b-icon v-if="sub.icon" :name="sub.icon"></b-icon>
              {{ sub.desc }}
            </template>
            <b-menu-item v-for="item in sub.items" :key="item.name" :name="item.name"
                         @click.native="handleTo(item.path)">
              <b-icon v-if="item.icon" :name="item.icon"></b-icon>
              {{ item.desc }}
            </b-menu-item>
          </b-submenu>
        </b-menu>
      </div>
    </b-scrollbar>
  </div>
</template>

<script>
  import navConf from '../nav.config.json'

  export default {
    data () {
      return {
        data: navConf,
        guide: navConf['开发指南'],
        components: navConf['组件'],
        openedNames: []
      }
    },
    methods: {
      handleTo (path) {
        this.$router.push(path)
      }
    }
  }
</script>

<style lang="stylus">
  .side-nav {
    width: 260px;
    height: 100%;
    overflow: hidden;
    padding-top: 20px
    box-sizing: border-box;
    color: #3F536E;
    background-color: #fff;
    border-right: 1px solid #dcdee2;
    z-index: 99;
    .bin-scrollbar__wrap {
      overflow-x: hidden;
    }
    .group-container {
      margin-bottom: 12px;
    }
    .side-nav-title {
      margin: 6px 0;
      padding: 0 12px;
      color: #2a3040;
      font-size: 16px;
      font-weight: bold;
      letter-spacing: 1px;
      text-transform: uppercase;
    }
    .side-nav-items {
      font-size: 14px;
      font-weight: normal;
      line-height: 1.8;
      a {
        display: block;
        position: relative;
        padding: 14px 24px;
        color: #3F536E;
        font-weight: normal;
        line-height: 1.5;
        cursor: pointer;
        &:hover {
          color: #2d8cf0;
        }
      }
      .side-nav-group {
        padding: 6px 0 6px 24px;
        font-size: 15px;
        color: #999;
        margin: 0;
      }
      .slid-nav-component {
        display: block;
        position: relative;
        padding: 10px 24px 10px 35px;
        color: #616367;
        font-size: 14px;
      }
      .active {
        color: #2d8cf0;
        background: #f0faff;
        &::after {
          content: "";
          display: block;
          width: 2px;
          position: absolute;
          top: 0;
          bottom: 0;
          right: 0;
          background: #2d8cf0;
        }
      }
    }
  }
  .bin-menu-vertical.bin-menu-light:after {
    display: none;
  }
</style>
