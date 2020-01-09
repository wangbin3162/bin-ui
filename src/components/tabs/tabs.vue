<template>
  <div class="bin-tabs-wrapper" :class="type">
    <scroll-pane class='nav-wrapper' :class="type" ref='scrollPane'>
      <div class="tab-list">
        <!--下标-->
        <div v-if="type==='default'" class="tabs-active-bar" :style="activeBarStyle"></div>
        <span v-for="(tab,index) in data" :key="tab.key || 'tab-'+index"
              class="tab-item" :id="tab.key"
              ref='tabs' :class="[{'width-icon':tab.icon},{'no-close':tab.noClose},{'active':isActive(tab)}]"
              @click.stop="handleSelectTab(tab)"
              @contextmenu.stop.prevent="openMenu(tab,$event)">
        <b-icon v-if="tab.icon" :name="tab.icon" class="custom-icon"></b-icon>
        {{ tab.title }}
        <i v-if="type!=='default'&&closable && !tab.noClose" class='iconfont icon-ios-close'
           @click.prevent.stop="closeSelectedTab(tab)"></i>
      </span>
      </div>
    </scroll-pane>
    <template v-if="contextMenu">
      <transition name="zoom-in-top">
        <ul class='contextmenu' v-show="visible" :style="{left:left+'px',top:top+'px'}">
          <slot name="menu"><li>自定义插入li标签</li></slot>
        </ul>
      </transition>
    </template>
  </div>
</template>

<script>
  import ScrollPane from './scroll-pane'
  import { deepCopy, oneOf } from '../../utils/util'
  import { on, off } from '../../utils/dom'

  export default {
    name: 'BTabs',
    props: {
      value: {
        type: String
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
          this.calcScrollWidth()
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
        this.$emit('on-tab-select', this.selectedTag)
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
        // 缓存tabs
        let visitedViews = deepCopy(this.data)
        if (this.isActive(view)) {
          this.toLastView(visitedViews, view)
        }
        this.$emit('on-tab-close', view)
      },
      // 移动焦点至后一个view
      toLastView (visitedViews, view) {
        this.selectedTag = { key: '' }
        const currentIndex = visitedViews.findIndex(t => t.key === view.key)
        // 前后的索引缓存
        let prev = currentIndex - 1
        let next = currentIndex + 1
        // 如果下一个索引小于数组长度
        if (next < visitedViews.length) {
          this.selectedTag = { ...visitedViews[next] }
        } else if (next === visitedViews.length) {
          // 如果当前关闭的是最后一个tag，则判断其前一个索引是否存在，如存在则跳至前一个
          if (prev >= 0) {
            this.selectedTag = { ...visitedViews[prev] }
          }
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
      // 计算滚动宽度
      calcScrollWidth () {
        this.$refs.scrollPane && this.$refs.scrollPane.calcWidth()
      },
      // 打开右键菜单选择
      openMenu (tab, e) {
        if (this.contextMenu) {
          this.visible = true
          this.selectedTag = tab
          this.left = e.clientX
          this.top = e.clientY
          this.$emit('on-tab-select', tab)
        }
      },
      closeMenu () {
        this.visible = false
      }
    },
    mounted () {
      this.calcBar()
      this.calcEvent = this.$util.debounce(this.calcScrollWidth, 10)
      on(window, 'resize', this.calcEvent)
      this.$nextTick(() => {
        this.calcScrollWidth()
      })
    },
    beforeDestroy () {
      off(window, 'resize', this.calcEvent)
    },
    components: {
      ScrollPane
    }
  }
</script>
