<template>
  <ul :class="classes">
    <slot></slot>
  </ul>
</template>
<script>
const prefixCls = 'bin-timeline'

export default {
  name: 'BTimeline',
  props: {
    pending: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      return [
        `${prefixCls}`,
        {
          [`${prefixCls}-pending`]: this.pending
        }
      ]
    }
  }
}
</script>
