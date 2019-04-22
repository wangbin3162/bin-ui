<template>
  <div :class="classes">
    <span v-if="hasSlot" :class="slotClasses">
        <slot></slot>
    </span>
  </div>
</template>

<script>
  const prefixCls = 'bin-divider'
  export default {
    name: 'BDivider',
    props: {
      type: {
        type: String,
        default: 'horizontal'// 'horizontal', 'vertical'
      },
      align: {
        type: String,
        default: 'center'// 'left', 'right', 'center'
      },
      dashed: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      hasSlot () {
        return !!this.$slots.default
      },
      classes () {
        return [
          `${prefixCls}`,
          `${prefixCls}-${this.type}`,
          {
            [`${prefixCls}-with-text-${this.align}`]: this.hasSlot,
            [`${prefixCls}-dashed`]: !!this.dashed
          }
        ]
      },
      slotClasses () {
        return [
          `${prefixCls}-inner-text`
        ]
      }
    }
  }
</script>
