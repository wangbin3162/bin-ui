<template>
  <label :class="wrapClasses" v-if="group&&btnModel" v-click-animation>
    <span :class="radioClasses">
      <span :class="innerClasses"></span>
      <input
          type="radio"
          :class="inputClasses"
          :disabled="(parent&&parent.disabled)||disabled"
          :checked="currentValue"
          :name="groupName"
          @change="change"
          @focus="onFocus"
          @blur="onBlur">
    </span>
    <span><slot>{{ label }}</slot></span>
  </label>
  <label v-else :class="wrapClasses">
    <span :class="radioClasses">
      <span :class="innerClasses"></span>
      <input
          type="radio"
          :class="inputClasses"
          :disabled="(parent&&parent.disabled)||disabled"
          :checked="currentValue"
          :name="groupName"
          @change="change"
          @focus="onFocus"
          @blur="onBlur">
    </span>
    <span><slot>{{ label }}</slot></span>
  </label>
</template>
<script>
import { oneOf, findComponentUpward } from '../../utils/util'

import Emitter from '../../mixins/emitter'

const prefixCls = 'bin-radio'

export default {
  name: 'BRadio',
  mixins: [Emitter],
  props: {
    value: {
      type: [String, Number, Boolean],
      default: false
    },
    trueValue: {
      type: [String, Number, Boolean],
      default: true
    },
    falseValue: {
      type: [String, Number, Boolean],
      default: false
    },
    label: {
      type: [String, Number]
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      validator(value) {
        return oneOf(value, ['small', 'large', 'default'])
      },
      default: 'default'
    },
    name: {
      type: String
    }
  },
  data() {
    return {
      currentValue: this.value,
      group: false,
      btnModel: false,
      groupName: this.name,
      parent: findComponentUpward(this, 'BRadioGroup'),
      focusWrapper: false,
      focusInner: false
    }
  },
  computed: {
    wrapClasses() {
      return [
        `${prefixCls}-wrapper`,
        {
          [`${prefixCls}-group-item`]: this.group,
          [`${prefixCls}-wrapper-checked`]: this.currentValue,
          [`${prefixCls}-wrapper-disabled`]: (this.parent && this.parent.disabled) || this.disabled,
          [`${prefixCls}-${this.size}`]: !!this.size,
          [`${prefixCls}-focus`]: this.focusWrapper
        }
      ]
    },
    radioClasses() {
      return [
        `${prefixCls}`,
        {
          [`${prefixCls}-checked`]: this.currentValue,
          [`${prefixCls}-disabled`]: this.disabled
        }
      ]
    },
    innerClasses() {
      return [
        `${prefixCls}-inner`,
        {
          [`${prefixCls}-focus`]: this.focusInner
        }
      ]
    },
    inputClasses() {
      return `${prefixCls}-input`
    }
  },
  mounted() {
    if (this.parent) {
      this.group = true
      this.btnModel = this.parent.type === 'button'
      if (this.name && this.name !== this.parent.name) {
        /* eslint-disable no-console */
        if (console.warn) {
          console.warn('[bin-ui] Name does not match Radio Group name.')
        }
        /* eslint-enable no-console */
      } else {
        this.groupName = this.parent.name
      }
    }

    if (this.group) {
      this.parent.updateValue()
    } else {
      this.updateValue()
    }
  },
  methods: {
    change(event) {
      if (this.disabled) {
        return false
      }

      const checked = event.target.checked
      this.currentValue = checked

      const value = checked ? this.trueValue : this.falseValue
      this.$emit('input', value)

      if (this.group) {
        if (this.label !== undefined) {
          this.parent.change({
            value: this.label,
            checked: this.value
          })
        }
      } else {
        this.$emit('on-change', value)
        this.dispatch('BFormItem', 'on-form-change', value)
      }
    },
    updateValue() {
      this.currentValue = this.value === this.trueValue
    },
    onBlur() {
      this.focusWrapper = false
      this.focusInner = false
    },
    onFocus() {
      if (this.group && this.parent.type === 'button') {
        this.focusWrapper = true
      } else {
        this.focusInner = true
      }
    }
  },
  watch: {
    value(val) {
      if (val === this.trueValue || val === this.falseValue) {
        this.updateValue()
      } else {
        console.log('Value should be trueValue or falseValue.')
      }
    }
  }
}
</script>
