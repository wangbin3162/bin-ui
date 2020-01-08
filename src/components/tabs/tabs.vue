<template>
  <div class="bin-tabs-wrapper" :class="type">
    <scroll-pane class='nav-wrapper' :class="type" ref='scrollPane'>
      <div class="tab-list">
        <!--下标-->
        <div v-if="type==='default'" class="tabs-active-bar" :style="activeBarStyle"></div>
        <span v-for="(tab,index) in data" :key="tab.key || 'tab-'+index"
              class="tab-item" :id="tab.key"
              ref='tabs' :class="{'active':isActive(tab)}"
              @click.stop="handleSelectTab(tab)"
              @contextmenu.stop.prevent="openMenu(tab,$event)">
        <b-icon v-if="tab.icon" :name="tab.icon" size="16"></b-icon>
        {{ tab.title }}
        <i v-if="type!=='default'&&closable" class='iconfont icon-ios-close'
           @click.prevent.stop="closeSelectedTab(tab)"></i>
      </span>
      </div>
    </scroll-pane>
    <template v-if="contextMenu">
      <transition name="zoom-in-top">
        <ul class='contextmenu' v-show="visible" :style="{left:left+'px',top:top+'px'}">
          <slot name="menu"></slot>
        </ul>
      </transition>
    </template>
  </div>
</template>

<script>
  import ScrollPane from './scroll-pane'
  import { deepCopy, oneOf } from '../../utils/util'

  export default {
    name: 'BTabs',
    props: {
      value: {
        type: String,
        required: true
      },
      data: {
        type: Array,
        required: true
      },
      type: {
        validator (value) {
          return oneOf(value, ['default', 'card', 'tag'])
        },
        default: 'default'
      },
      closable: {
        type: Boolean,
        default: false
      },
      contextMenu: Boolean
    },
    data () {
      return {
        visible: false, // 选中面板弹出
        top: 0, // 选中面板top
        left: 0, // 选中面板left
        selectedTag: {}, // 选中的tag
        activeBarStyle: {}
      }
    },
    watch: {
      visible (value) {
        if (value) {
          document.body.addEventListener('click', this.closeMenu)
        } else {
          document.body.removeEventListener('click', this.closeMenu)
        }
      },
      value: {
        handler () {
          // 根据key值改变来设置移动至当前位置
          this.moveToCurrentTab()
        }
      },
      data () {
        this.$nextTick(() => {
          this.$refs.scrollPane.calcWidth()
        })
      }
    },
    methods: {
      // 选择当前tab
      handleSelectTab (tab) {
        this.selectedTag = { ...tab }
        this.emitInput()
        this.$nextTick(() => {
            // 计算bar位置
            this.calcBar()
          }
        )
      },
      // 更新选中active
      emitInput () {
        this.$emit('input', this.selectedTag.key)
      },
      // 是否是启用状态
      isActive (tab) {
        return this.value === tab.key
      },
      // 移动到当前的tag
      moveToCurrentTab () {
        const tabs = this.$refs.tabs
        this.$nextTick(() => {
          for (const tab of tabs) {
            // 找到切换到的目标path和路由匹配的
            if (tab.id === this.value) {
              this.$refs.scrollPane.moveToTarget(tab)
              break
            }
          }
        })
      },
      // 关闭当前的tab页签
      closeSelectedTab (view) {
        // 如果关闭的是当前开启的view则移动焦点到上一个view
        // 缓存tabs
        let visitedViews = deepCopy(this.data)
        if (this.isActive(view)) {
          this.toLastView(visitedViews, view)
        }
        this.$emit('on-close-tab', view)
      },
      // 移动焦点至后一个view
      toLastView (visitedViews, view) {
        this.selectedTag = { key: '' }
        const currentIndex = visitedViews.findIndex(t => t.key === view.key)
        let lastIndex = currentIndex + 1
        if (lastIndex < visitedViews.length) {
          this.selectedTag = { ...visitedViews[lastIndex] }
        }
        this.emitInput()
      },
      // 计算导航条样式属性
      calcBar () {
        let style = {}
        let width = 0
        let offset = 0
        let tabsLength = this.data.length
        // 获取选中的el的宽度
        this.data.every(tab => {
          let tabs = this.$refs.tabs || []
          let $el = tabs.find(t => t.id === tab.key)
          if (!$el) {
            return false
          }
          let isActive = $el.classList.contains('active')
          if (!isActive) {
            offset += $el['clientWidth']
            return true
          } else {
            width = $el['clientWidth']
            return false
          }
        })
        const transform = `translateX(${offset}px)`
        style.width = `${width}px`
        style.transform = transform
        style.msTransform = transform
        style.webkitTransform = transform
        this.activeBarStyle = style
      },
      // 打开右键菜单选择
      openMenu (tab, e) {
        if (this.contextMenu) {
          this.visible = true
          this.selectedTag = tab
          this.left = e.clientX
          this.top = e.clientY
          this.$emit('on-select-tab', tab)
        }
      },
      closeMenu () {
        this.visible = false
      }
    },
    mounted () {
      this.calcBar()
    },
    components: {
      ScrollPane
    }
  }
</script>
