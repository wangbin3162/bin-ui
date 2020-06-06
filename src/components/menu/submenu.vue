<template>
  <li :class="classes" @mouseenter="handleMouseenter" @mouseleave="handleMouseleave">
    <div :class="[prefixCls + '-submenu-title']" ref="reference" @click.stop="handleClick" :style="titleStyle">
      <slot name="title"></slot>
      <b-icon :name="arrowName" :class="[prefixCls + '-submenu-title-icon']"/>
    </div>
    <collapse-transition v-if="mode === 'vertical'">
      <ul :class="[prefixCls]" v-show="opened">
        <slot></slot>
      </ul>
    </collapse-transition>
    <transition name="zoom-in-top" v-else>
      <drop v-show="opened"
            :placement="placement"
            :class-name="`bin-menu-horizontal-dropdown ${rootMenu.theme}`"
            ref="drop"
            :style="dropStyle"
            :data-transfer="transfer"
            :transfer="transfer"
            v-transfer-dom
            @mouseenter.native="handleMouseenter" @mouseleave.native="handleMouseleave">
        <ul :class="[prefixCls + '-drop-list']">
          <slot></slot>
        </ul>
      </drop>
    </transition>
  </li>
</template>

<script>
  import CollapseTransition from '../base/collapse-transition'
  import Drop from '../select/drop.vue'
  import { findComponentUpward, findComponentsDownward } from '../../utils/util'
  import { getStyle } from '../../utils/dom'
  import Emitter from '../../mixins/emitter'
  import Mixin from './mixin'
  import TransferDom from '../../directive/transfer-dom'

  const prefixCls = 'bin-menu'

  export default {
    name: 'BSubmenu',
    mixins: [Emitter, Mixin],
    inject: ['rootMenu'],
    directives: { TransferDom },
    components: { Drop, CollapseTransition },
    props: {
      name: {
        type: [String, Number],
        required: true
      },
      disabled: {
        type: Boolean,
        default: false
      },
      transfer: Boolean // 是否移动至body
    },
    data() {
      return {
        prefixCls: prefixCls,
        active: false,
        opened: false,
        dropWidth: parseFloat(getStyle(this.$el, 'width')),
        placement: 'bottom',
        arrowName: 'ios-arrow-down'
      }
    },
    computed: {
      classes() {
        return [
          `${prefixCls}-submenu`,
          {
            [`${prefixCls}-item-active`]: this.active && !this.hasParentSubmenu,
            [`${prefixCls}-opened`]: this.opened,
            [`${prefixCls}-submenu-disabled`]: this.disabled,
            [`${prefixCls}-submenu-has-parent-submenu`]: this.hasParentSubmenu,
            [`${prefixCls}-child-item-active`]: this.active
          }
        ]
      },
      accordion() {
        return this.menu.accordion
      },
      dropStyle() {
        let style = {}

        if (this.dropWidth) style.minWidth = `${this.dropWidth}px`
        return style
      },
      titleStyle() {
        return this.hasParentSubmenu && this.mode !== 'horizontal' ? {
          paddingLeft: 43 + (this.parentSubmenuNum - 1) * 24 + 'px'
        } : {}
      }
    },
    methods: {
      handleMouseenter() {
        if (this.disabled) return
        if (this.mode === 'vertical') return

        clearTimeout(this.timeout)
        this.timeout = setTimeout(() => {
          this.menu.updateOpenKeys(this.name)
          this.opened = true
        }, 250)
      },
      handleMouseleave() {
        if (this.disabled) return
        if (this.mode === 'vertical') return

        clearTimeout(this.timeout)
        this.timeout = setTimeout(() => {
          this.menu.updateOpenKeys(this.name)
          this.opened = false
        }, 150)
      },
      handleClick() {
        if (this.disabled) return
        if (this.mode === 'horizontal') return
        const opened = this.opened
        if (this.accordion) {
          this.$parent.$children.forEach(item => {
            if (item.$options.name === 'BSubmenu') item.opened = false
          })
        }
        this.opened = !opened
        this.menu.updateOpenKeys(this.name)
      }
    },
    watch: {
      mode(val) {
        if (val === 'horizontal') {
          this.$refs.drop.update()
        }
      },
      opened(val) {
        if (this.mode === 'vertical') return
        if (val) {
          // set drop a width to fixed when menu has fixed position
          this.dropWidth = parseFloat(getStyle(this.$el, 'width'))
          this.$refs.drop.update()
        } else {
          this.$refs.drop.destroy()
        }
      }
    },
    mounted() {
      this.$on('on-menu-item-select', (name) => {
        if (this.mode === 'horizontal') this.opened = false
        this.dispatch('BMenu', 'on-menu-item-select', name)
        return true
      })
      this.$on('on-update-active-name', (status) => {
        if (findComponentUpward(this, 'BSubmenu')) {
          this.dispatch('BSubmenu', 'on-update-active-name', status)
        }
        if (findComponentsDownward(this, 'BSubmenu')) {
          findComponentsDownward(this, 'BSubmenu').forEach(item => {
            item.active = false
          })
        }
        this.active = status
      })
      if (this.hasParentSubmenu && this.mode === 'horizontal') {
        this.placement = 'right-start'
        this.arrowName = 'ios-arrow-forward'
      }
    }
  }
</script>
