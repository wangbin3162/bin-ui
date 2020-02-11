<template>
  <header class="page-header">
    <div class="header-container" flex="main:justify">
      <div class="left" style="width: 480px;" flex="main:justify cross:center">
        <div class="logo"></div>
        <b-select style="width: 220px;" placeholder="查询组件" filterable v-model="current"
                  @on-change="handleComponentChange" clearable size="large">
          <b-option v-for="item in components" :value="item.value" :key="item.value">{{ item.label }}</b-option>
        </b-select>
      </div>
      <div class="link">
        <router-link :to="{name: 'guide'}" class="active">指南</router-link>
        <router-link :to="{name: 'button'}" class="active">组件</router-link>
        <b-dropdown>
          <a href="#" class="active" @click.prevent>生态
            <i class="iconfont icon-ios-arrow-down"></i>
          </a>
          <b-dropdown-menu slot="list">
            <b-dropdown-item @click.native="goTo('https://github.com/wangbin3162/bin-animation')">
              bin-animation
            </b-dropdown-item>
            <b-dropdown-item @click.native="goTo('https://github.com/wangbin3162/bin-keyframe-animation')">
              bin-keyframe-animation
            </b-dropdown-item>
            <b-dropdown-item @click.native="goTo('https://github.com/wangbin3162/bin-tree-org')">
              bin-tree-org
            </b-dropdown-item>
            <b-dropdown-item @click.native="goTo('https://github.com/wangbin3162/bin-admin')">
              bin-admin
            </b-dropdown-item>
            <b-dropdown-item @click.native="goTo('https://github.com/wangbin3162/bin-data')">
              bin-data
            </b-dropdown-item>
            <b-dropdown-item @click.native="goTo('https://github.com/wangbin3162/bin-static-web/')">
              bin-static-web
            </b-dropdown-item>
            <b-dropdown-item @click.native="goTo('https://github.com/wangbin3162/vue-admin/')">
              vue-admin
            </b-dropdown-item>
            <b-dropdown-item @click.native="goTo('https://github.com/wangbin3162/bin-cli')">
              bin-cli
            </b-dropdown-item>
            <b-dropdown-item @click.native="goTo('https://github.com/wangbin3162/bin-lib')">
              bin-lib
            </b-dropdown-item>
          </b-dropdown-menu>
        </b-dropdown>
        <a href="https://github.com/wangbin3162/bin-ui" class="github" target="_blank">GitHub</a>
      </div>
    </div>
  </header>
</template>

<script>
  import navConf from '../nav.config.json'

  export default {
    name: 'MainHeader',
    data() {
      return {
        components: [],
        current: ''
      }
    },
    created() {
      this.getComponentsOptions()
    },
    watch: {
      $route: {
        handler() {
          setTimeout(() => {
            this.current = ''
          }, 300)
        },
        immediate: true
      }
    },
    methods: {
      goTo(url) {
        this.$util.open(url, true)
      },
      getComponentsOptions() {
        let routes = []
        Object.keys(navConf).forEach((header) => {
          routes = routes.concat(navConf[header])
        })

        let addComponent = (router) => {
          router.forEach((route) => {
            if (route.items) {
              addComponent(route.items)
              routes = routes.concat(route.items)
            } else {
              // 如果是组件路由
              if (['guide', 'install', 'start', 'logs'].indexOf(route.name) === -1) {
                this.components.push({
                  value: route.path,
                  label: route.desc
                })
              }
            }
          })
        }
        addComponent(routes)
      },
      handleComponentChange(val) {
        if (!val || val.length === 0) {
          return
        }
        if (this.$route.path !== val) {
          this.$router.push(val)
        }
      }
    }
  }
</script>

<style lang="stylus">
  .page-header {
    background-color: #fff;
    border-bottom: 1px solid #eeeeee;
    position: fixed !important;
    top: 0;
    left: 0;
    right: 0;
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
        height: 80px;
        background: url("../assets/bin-ui.png") no-repeat 0 0
        background-size: 220px 80px;
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
