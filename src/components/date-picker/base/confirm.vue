<template>
  <div :class="[prefixCls + '-confirm']" @keydown.tab.capture="handleTab">
    <b-button :class="timeClasses" size="mini" type="text" :disabled="timeDisabled" v-if="showTime"
              @click="handleToggleTime">
      {{ this.isTime ? '选择日期' : '选择时间' }}
    </b-button>
    <b-button size="mini" @click="handleClear" @keydown.enter.native="handleClear">
      清空
    </b-button>
    <b-button size="mini" type="primary" @click="handleSuccess" @keydown.enter.native="handleSuccess">
      确定
    </b-button>
  </div>
</template>
<script>
import BButton from '../../button/button.vue'
import Emitter from '../../../mixins/emitter'

const prefixCls = 'bin-picker'

export default {
  mixins: [Emitter],
  components: { BButton },
  props: {
    showTime: Boolean,
    isTime: Boolean,
    timeDisabled: Boolean
  },
  data() {
    return {
      prefixCls: prefixCls
    }
  },
  computed: {
    timeClasses() {
      return `${prefixCls}-confirm-time`
    }
  },
  methods: {
    handleClear() {
      this.$emit('pick-clear')
    },
    handleSuccess() {
      this.$emit('pick-success')
    },
    handleToggleTime() {
      if (this.timeDisabled) return
      this.$emit('pick-toggle-time')
      this.dispatch('BDatePicker', 'focus-input')
      this.dispatch('BDatePicker', 'update-popper')
    },
    handleTab(e) {
      const tabbables = [...this.$el.children]
      const expectedFocus = tabbables[e.shiftKey ? 'shift' : 'pop']()

      if (document.activeElement === expectedFocus) {
        e.preventDefault()
        e.stopPropagation()
        this.dispatch('BDatePicker', 'focus-input')
      }
    }
  }
}
</script>
