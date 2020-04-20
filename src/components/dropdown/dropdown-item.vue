<template>
  <li :class="classes" @click="handleClick">
    <slot></slot>
  </li>
</template>

<script>
  import { findComponentUpward } from '../../utils/util'

  const prefixCls = 'bin-dropdown-item'

  export default {
    name: 'BDropdownItem',
    props: {
      name: {
        type: [String, Number]
      },
      disabled: {
        type: Boolean,
        default: false
      },
      selected: {
        type: Boolean,
        default: false
      },
      divided: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      classes() {
        return [
          `${prefixCls}`,
          {
            [`${prefixCls}-disabled`]: this.disabled,
            [`${prefixCls}-selected`]: this.selected,
            [`${prefixCls}-divided`]: this.divided
          }
        ]
      }
    },
    methods: {
      handleClick() {
        const $parent = findComponentUpward(this, 'BDropdown')
        const hasChildren = this.$parent && this.$parent.$options.name === 'BDropdown'
        if (this.disabled) {
          this.$nextTick(() => {
            $parent.currentVisible = true
          })
          return
        } else if (hasChildren) {
          this.$parent.$emit('on-haschild-click')
        } else {
          if ($parent && $parent.$options.name === 'BDropdown') {
            $parent.$emit('on-hover-click')
          }
        }
        $parent.$emit('on-click', this.name)
      }
    }
  }
</script>
