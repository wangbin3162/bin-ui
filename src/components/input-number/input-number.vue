<template>
  <div :class="wrapClasses">
    <template v-if="always">
      <a @click="down" :class="minusClasses">
        <b-icon name="ios-remove"></b-icon>
      </a>
      <a @click="up" :class="plusClasses">
        <b-icon name="ios-add"></b-icon>
      </a>
    </template>
    <div v-else :class="handlerClasses">
      <a
          @click="up"
          :class="upClasses">
        <span :class="innerUpClasses" @click="preventDefault"></span>
      </a>
      <a
          @click="down"
          :class="downClasses">
        <span :class="innerDownClasses" @click="preventDefault"></span>
      </a>
    </div>
    <div :class="inputWrapClasses">
      <input
          :id="elementId"
          :class="inputClasses"
          :disabled="disabled"
          autocomplete="off"
          spellcheck="false"
          :autofocus="autofocus"
          @focus="focus"
          @blur="blur"
          @keydown.stop="keyDown"
          @input="change"
          @mouseup="preventDefault"
          @change="change"
          :readonly="readonly || !editable"
          :name="name"
          :value="formatterValue"
          :placeholder="placeholder">
    </div>
  </div>
</template>

<script>
import { oneOf, findComponentUpward } from '../../utils/util'

import Emitter from '../../mixins/emitter'

const prefixCls = 'bin-input-number'

function addNum(num1, num2) {
  let sq1, sq2, m
  try {
    sq1 = num1.toString().split('.')[1].length
  } catch (e) {
    sq1 = 0
  }
  try {
    sq2 = num2.toString().split('.')[1].length
  } catch (e) {
    sq2 = 0
  }
  m = Math.pow(10, Math.max(sq1, sq2))
  return (Math.round(num1 * m) + Math.round(num2 * m)) / m
}

export default {
  name: 'BInputNumber',
  mixins: [Emitter],
  props: {
    max: {
      type: Number,
      default: Infinity
    },
    min: {
      type: Number,
      default: -Infinity
    },
    step: {
      type: Number,
      default: 1
    },
    activeChange: {
      type: Boolean,
      default: false
    },
    value: {
      type: Number,
      default: 1
    },
    size: {
      validator(value) {
        return oneOf(value, ['small', 'large', 'default', 'mini'])
      },
      default: 'default'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    editable: {
      type: Boolean,
      default: true
    },
    name: {
      type: String
    },
    precision: {
      type: Number
    },
    elementId: {
      type: String
    },
    formatter: {
      type: Function
    },
    parser: {
      type: Function
    },
    placeholder: {
      type: String,
      default: ''
    },
    always: {
      type: Boolean
    }
  },
  data() {
    return {
      focused: false,
      upDisabled: false,
      downDisabled: false,
      currentValue: this.value
    }
  },
  computed: {
    wrapClasses() {
      return [
        `${prefixCls}`,
        {
          [`${prefixCls}-${this.size}`]: !!this.size,
          [`${prefixCls}-disabled`]: this.disabled,
          [`${prefixCls}-focused`]: this.focused,
          [`${prefixCls}-always`]: this.always
        }
      ]
    },
    handlerClasses() {
      return `${prefixCls}-handler-wrap`
    },
    upClasses() {
      return [
        `${prefixCls}-handler`,
        `${prefixCls}-handler-up`,
        {
          [`${prefixCls}-handler-up-disabled`]: this.upDisabled
        }
      ]
    },
    plusClasses() {
      return [
        `${prefixCls}-handler-plus`,
        {
          [`${prefixCls}-handler-plus-disabled`]: this.upDisabled
        }
      ]
    },
    innerUpClasses() {
      return `${prefixCls}-handler-up-inner iconfont icon-ios-arrow-up`
    },
    downClasses() {
      return [
        `${prefixCls}-handler`,
        `${prefixCls}-handler-down`,
        {
          [`${prefixCls}-handler-down-disabled`]: this.downDisabled
        }
      ]
    },
    minusClasses() {
      return [
        `${prefixCls}-handler-minus`,
        {
          [`${prefixCls}-handler-plus-minus`]: this.downDisabled
        }
      ]
    },
    innerDownClasses() {
      return `${prefixCls}-handler-down-inner iconfont icon-ios-arrow-down`
    },
    inputWrapClasses() {
      return `${prefixCls}-input-wrap`
    },
    inputClasses() {
      return `${prefixCls}-input`
    },
    precisionValue() {
      // can not display 1.0
      if (!this.currentValue) return this.currentValue
      return this.precision ? this.currentValue.toFixed(this.precision) : this.currentValue
    },
    formatterValue() {
      if (this.formatter && this.precisionValue !== null) {
        return this.formatter(this.precisionValue)
      } else {
        return this.precisionValue
      }
    }
  },
  methods: {
    preventDefault(e) {
      e.preventDefault()
    },
    up(e) {
      const targetVal = Number(e.target.value)
      if (this.upDisabled && isNaN(targetVal)) {
        return false
      }
      this.changeStep('up', e)
    },
    down(e) {
      const targetVal = Number(e.target.value)
      if (this.downDisabled && isNaN(targetVal)) {
        return false
      }
      this.changeStep('down', e)
    },
    changeStep(type, e) {
      if (this.disabled || this.readonly) {
        return false
      }

      const targetVal = Number(e.target.value)
      let val = Number(this.currentValue)
      const step = Number(this.step)
      if (isNaN(val)) {
        return false
      }

      // input a number, and key up or down
      if (!isNaN(targetVal)) {
        if (type === 'up') {
          if (addNum(targetVal, step) <= this.max) {
            val = targetVal
          } else {
            return false
          }
        } else if (type === 'down') {
          if (addNum(targetVal, -step) >= this.min) {
            val = targetVal
          } else {
            return false
          }
        }
      }

      if (type === 'up') {
        val = addNum(val, step)
      } else if (type === 'down') {
        val = addNum(val, -step)
      }
      this.setValue(val)
    },
    setValue(val) {
      // 如果 step 是小数，且没有设置 precision，是有问题的
      if (val && !isNaN(this.precision)) val = Number(Number(val).toFixed(this.precision))

      const { min, max } = this
      if (val !== null) {
        if (val > max) {
          val = max
        } else if (val < min) {
          val = min
        }
      }

      this.$nextTick(() => {
        this.currentValue = val
        this.$emit('input', val)
        this.$emit('change', val)
        this.dispatch('BFormItem', 'form-change', val)
      })
    },
    focus(event) {
      this.focused = true
      this.$emit('focus', event)
    },
    blur() {
      this.focused = false
      this.$emit('blur')

      if (!findComponentUpward(this, ['DatePicker', 'TimePicker', 'Cascader', 'Search'])) {
        this.dispatch('BFormItem', 'form-blur', this.currentValue)
      }
    },
    keyDown(e) {
      if (e.keyCode === 38) {
        e.preventDefault()
        this.up(e)
      } else if (e.keyCode === 40) {
        e.preventDefault()
        this.down(e)
      }
    },
    change(event) {
      let val = event.target.value.trim()
      // 需要格式化数据时
      let needFormat = (event.type === 'input' && this.activeChange) || (event.type === 'change' && !this.activeChange)
      if (needFormat) {
        if (event.type === 'input' && !this.activeChange) return
        if (this.parser) {
          val = this.parser(val)
        }

        const isEmptyString = val.length === 0
        if (isEmptyString) {
          this.setValue(null)
          return
        }
        // eslint-disable-next-line no-useless-escape
        if (event.type === 'input' && val.match(/^\-?\.?$|\.$/)) return // prevent fire early if decimal. If no more input the change event will fire later

        val = Number(val)

        if (!isNaN(val)) {
          this.currentValue = val
          this.setValue(val)
        } else {
          event.target.value = this.currentValue
        }
      }
    },
    changeVal(val) {
      val = Number(val)
      if (!isNaN(val)) {
        const step = this.step

        this.upDisabled = val + step > this.max
        this.downDisabled = val - step < this.min
      } else {
        this.upDisabled = true
        this.downDisabled = true
      }
    }
  },
  mounted() {
    this.changeVal(this.currentValue)
  },
  watch: {
    value(val) {
      this.currentValue = val
    },
    currentValue(val) {
      this.changeVal(val)
    },
    min() {
      this.changeVal(this.currentValue)
    },
    max() {
      this.changeVal(this.currentValue)
    }
  }
}
</script>
