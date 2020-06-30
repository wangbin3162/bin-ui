<template>
  <ul :class="classes" :style="styles">
    <slot></slot>
  </ul>
</template>
<script>
  import { oneOf, findComponentsDownward, findComponentsUpward } from '../../utils/util'
  import Emitter from '../../mixins/emitter'

  const prefixCls = 'bin-menu'

  export default {
    name: 'BMenu',
    mixins: [Emitter],
    provide() {
      return {
        rootMenu: this
      }
    },
    props: {
      mode: {
        validator(value) {
          return oneOf(value, ['horizontal', 'vertical'])
        },
        default: 'vertical'
      },
      theme: {
        validator(value) {
          return oneOf(value, ['light', 'dark'])
        },
        default: 'light'
      },
      activeName: {
        type: [String, Number]
      },
      openNames: {
        type: Array,
        default() {
          return []
        }
      },
      expandAll: {
        type: Boolean
      },
      accordion: {
        type: Boolean,
        default: false
      },
      width: {
        type: String,
        default: '240px'
      }
    },
    data() {
      return {
        currentActiveName: this.activeName,
        openedNames: []
      }
    },
    computed: {
      classes() {
        let theme = this.theme
        return [
          `${prefixCls}`,
          `${prefixCls}-${theme}`,
          {
            [`${prefixCls}-${this.mode}`]: this.mode
          }
        ]
      },
      styles() {
        let style = {}
        if (this.mode === 'vertical') style.width = this.width
        return style
      }
    },
    methods: {
      updateActiveName() {
        if (this.currentActiveName === undefined) {
          this.currentActiveName = -1
        }
        this.broadcast('BSubmenu', 'on-update-active-name', false)
        this.broadcast('BMenuItem', 'on-update-active-name', this.currentActiveName)
      },
      updateOpenKeys(name) {
        let names = [...this.openedNames]
        const index = names.indexOf(name)
        if (this.accordion) {
          findComponentsDownward(this, 'BSubmenu').forEach(item => {
            item.opened = false
          })
        }
        if (index >= 0) {
          let currentSubmenu = null
          findComponentsDownward(this, 'BSubmenu').forEach(item => {
            if (item.name === name) {
              currentSubmenu = item
              item.opened = false
            }
          })
          findComponentsUpward(currentSubmenu, 'BSubmenu').forEach(item => {
            item.opened = true
          })
          findComponentsDownward(currentSubmenu, 'BSubmenu').forEach(item => {
            item.opened = false
          })
        } else {
          if (this.accordion) {
            let currentSubmenu = null
            findComponentsDownward(this, 'BSubmenu').forEach(item => {
              if (item.name === name) {
                currentSubmenu = item
                item.opened = true
              }
            })
            findComponentsUpward(currentSubmenu, 'BSubmenu').forEach(item => {
              item.opened = true
            })
          } else {
            findComponentsDownward(this, 'BSubmenu').forEach(item => {
              if (item.name === name) item.opened = true
            })
          }
        }
        let openedNames = findComponentsDownward(this, 'BSubmenu').filter(item => item.opened).map(item => item.name)
        this.openedNames = [...openedNames]
        this.$emit('on-open-change', openedNames)
      },
      updateOpened() {
        const items = findComponentsDownward(this, 'BSubmenu')
        // 判断是否展开所有submenu，如展开则全部
        if (items.length) {
          items.forEach(item => {
            item.opened = this.expandAll ? true : this.openedNames.indexOf(item.name) > -1
          })
        }
        // 更新openedNames
        let openedNames = items.filter(item => item.opened).map(item => item.name)
        this.openedNames = [...openedNames]
      },
      handleEmitSelectEvent(name) {
        this.$emit('on-select', name)
      }
    },
    mounted() {
      this.openedNames = [...this.openNames]
      this.updateOpened()
      this.$nextTick(() => this.updateActiveName())
      this.$on('on-menu-item-select', (name) => {
        this.currentActiveName = name
        this.$emit('on-select', name)
      })
    },
    watch: {
      openNames(names) {
        this.openedNames = names
      },
      activeName(val) {
        this.currentActiveName = val
      },
      currentActiveName() {
        this.updateActiveName()
      }
    }
  }
</script>
