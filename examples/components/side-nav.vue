<template>
  <div class="side-nav">
    <b-scrollbar style="height:100%;">
      <div v-for="title in (Object.keys(data))" class="group-container" :key="title">
        <p class="side-nav-title">{{ title }}</p>
        <div class="side-nav-items" v-for="(nav,index) in data[title]" :key="index">
          <router-link v-if="nav.name" :class="$route.name===nav.name ? 'active' : ''" :to="{name: nav.name}">
            {{ nav.desc }}
          </router-link>
          <p v-else class="side-nav-group">{{nav.desc}}</p>
          <div v-for="item in nav.items" :key="item.name">
            <router-link :to="{name: item.name}" :class="$route.name===item.name ? 'active' : ''"
                         class="slid-nav-component">{{item.desc}}
            </router-link>
          </div>
        </div>
      </div>
    </b-scrollbar>
  </div>
</template>

<script>
  import navConf from '../nav.config.json'

  export default {
    data () {
      return {
        data: navConf
      }
    }
  }
</script>

<style lang="stylus">
  .side-nav {
    width: 240px;
    height: 100%;
    overflow: hidden;
    padding-top: 20px
    box-sizing: border-box;
    color: #3F536E;
    background-color: #fff;
    z-index: 99;
    .bin-scrollbar__wrap {
      overflow-x: hidden;
    }
    .group-container {
      margin-bottom: 32px;
    }
    .side-nav-title {
      padding: 0 24px;
      color: #8DABC4;
      font-size: 14px;
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
        padding: 8px 24px;
        color: #3F536E;
        font-weight: normal;
        line-height: 1.5;
        cursor: pointer;
      }
      .side-nav-group {
        padding: 6px 0 6px 24px;
        font-size: 12px;
        color: #999;
        margin: 0;
      }
      .slid-nav-component {
        display: block;
        position: relative;
        padding: 6px 24px 6px 32px;
        color: #616367;
        font-size: 14px;
      }
      .active {
        color: #3FAAF5;
      }
    }
  }
</style>
