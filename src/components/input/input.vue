<template>
  <div :class="wrapClasses">
    <label v-if="type !== 'textarea'">
      <span :class="[prefixCls + '-group-prepend']" v-if="prepend" v-show="slotReady">
        <slot name="prepend"></slot>
      </span>
      <!--清空按钮-->
      <i :class="closeClasses"
         v-if="clearable && currentValue && !disabled" @click="handleClear"></i>
      <i class="iconfont" :class="['icon-' + icon, prefixCls + '-icon', prefixCls + '-icon-normal']"
         v-else-if="icon" @click="handleIconClick"></i>
      <i class="iconfont icon-ios-search"
         :class="[prefixCls + '-icon', prefixCls + '-icon-normal', prefixCls + '-search-icon']"
         v-else-if="search" @click="handleSearch"></i>
      <span class="bin-input-suffix" v-else-if="showSuffix">
        <slot name="suffix"><i class="iconfont" :class="['icon-' + suffix]" v-if="suffix"></i></slot></span>
      <input
          :id="elementId"
          :autocomplete="autocomplete"
          ref="input"
          :type="type"
          :class="inputClasses"
          :placeholder="placeholder"
          :disabled="disabled"
          :maxlength="maxlength"
          :readonly="readonly"
          :name="name"
          :value="currentValue"
          :number="number"
          :autofocus="autofocus"
          @keyup.enter="handleEnter"
          @keyup="handleKeyup"
          @keypress="handleKeypress"
          @keydown="handleKeydown"
          @focus="handleFocus"
          @blur="handleBlur"
          @compositionstart="handleComposition"
          @compositionupdate="handleComposition"
          @compositionend="handleComposition"
          @input="handleInput"
          @change="handleChange">
      <span class="bin-input-prefix" v-if="showPrefix">
        <slot name="prefix"><i class="iconfont" :class="['icon-' + prefix]" v-if="prefix"></i></slot>
      </span>
    </label>
    <label v-else>
      <textarea :id="elementId"
                :wrap="wrap"
                :autocomplete="autocomplete"
                :spellcheck="spellcheck"
                ref="textarea"
                :class="textareaClasses"
                :style="textareaStyles"
                :placeholder="placeholder"
                :disabled="disabled"
                :rows="rows"
                :maxlength="maxlength"
                :readonly="readonly"
                :name="name"
                :value="currentValue"
                :autofocus="autofocus"
                @keyup.enter="handleEnter"
                @keyup="handleKeyup"
                @keypress="handleKeypress"
                @keydown="handleKeydown"
                @focus="handleFocus"
                @blur="handleBlur"
                @compositionstart="handleComposition"
                @compositionupdate="handleComposition"
                @compositionend="handleComposition"
                @input="handleInput"></textarea>
    </label>
  </div>
</template>

<script>
  import calcTextareaHeight from '../../utils/calcTextareaHeight'
  import { oneOf, findComponentUpward } from '../../utils/util'
  import Emitter from '../../mixins/emitter'

  const prefixCls = 'bin-input'
  export default {
    mixins: [Emitter],
    name: 'BInput',
    props: {
      type: {
        validator(value) {
          return oneOf(value, ['text', 'textarea', 'password', 'url', 'email', 'date', 'number', 'tel'])
        },
        default: 'text'
      },
      value: {
        type: [String, Number],
        default: ''
      },
      size: {
        validator(value) {
          return oneOf(value, ['small', 'large', 'default', 'mini'])
        },
        default: 'default'
      },
      placeholder: {
        type: String,
        default: ''
      },
      maxlength: {
        type: Number
      },
      disabled: {
        type: Boolean,
        default: false
      },
      icon: String,
      autosize: {
        type: [Boolean, Object],
        default: false
      },
      rows: {
        type: Number,
        default: 2
      },
      readonly: {
        type: Boolean,
        default: false
      },
      name: {
        type: String
      },
      number: {
        type: Boolean,
        default: false
      },
      autofocus: {
        type: Boolean,
        default: false
      },
      spellcheck: {
        type: Boolean,
        default: false
      },
      autocomplete: {
        validator(value) {
          return oneOf(value, ['on', 'off'])
        },
        default: 'off'
      },
      clearable: {
        type: Boolean,
        default: false
      },
      elementId: {
        type: String
      },
      wrap: {
        validator(value) {
          return oneOf(value, ['hard', 'soft'])
        },
        default: 'soft'
      },
      prefix: {
        type: String,
        default: ''
      },
      suffix: {
        type: String,
        default: ''
      },
      search: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        currentValue: this.value,
        prefixCls: prefixCls,
        prepend: true,
        append: true,
        slotReady: false,
        textareaStyles: {},
        showPrefix: false,
        showSuffix: false,
        isOnComposition: false
      }
    },
    watch: {
      value(val) {
        this.setCurrentValue(val)
      }
    },
    methods: {
      handleEnter(event) {
        this.$emit('on-enter', event)
        if (this.search) this.$emit('on-search', this.currentValue)
      },
      handleKeydown(event) {
        this.$emit('on-keydown', event)
      },
      handleKeypress(event) {
        this.$emit('on-keypress', event)
      },
      handleKeyup(event) {
        this.$emit('on-keyup', event)
      },
      handleIconClick(event) {
        this.$emit('on-click', event)
      },
      handleFocus(event) {
        this.$emit('on-focus', event)
      },
      handleBlur(event) {
        this.$emit('on-blur', event)
        // 触发校验
        if (!findComponentUpward(this, ['DatePicker', 'TimePicker', 'Cascader', 'Search'])) {
          this.dispatch('BFormItem', 'on-form-blur', this.currentValue)
        }
      },
      handleComposition(event) {
        if (event.type === 'compositionstart') {
          this.isOnComposition = true
        }
        if (event.type === 'compositionend') {
          this.isOnComposition = false
          this.handleInput(event)
        }
      },
      handleInput(event) {
        if (this.isOnComposition) return

        let value = event.target.value
        if (this.number && value !== '') value = Number.isNaN(Number(value)) ? value : Number(value)
        this.$emit('input', value)
        this.setCurrentValue(value)
        this.$emit('on-change', event)
      },
      handleChange(event) {
        this.$emit('on-input-change', event)
      },
      setCurrentValue(value) {
        if (value === this.currentValue) return
        this.$nextTick(() => {
          this.resizeTextarea()
        })
        this.currentValue = value
        // 触发校验
        if (!findComponentUpward(this, ['DatePicker', 'TimePicker', 'Cascader', 'Search'])) {
          this.dispatch('BFormItem', 'on-form-change', value)
        }
      },
      resizeTextarea() {
        const autosize = this.autosize
        if (!autosize || this.type !== 'textarea') {
          return false
        }

        const minRows = autosize.minRows
        const maxRows = autosize.maxRows

        this.textareaStyles = calcTextareaHeight(this.$refs.textarea, minRows, maxRows)
      },
      focus() {
        if (this.type === 'textarea') {
          this.$refs.textarea.focus()
        } else {
          this.$refs.input.focus()
        }
      },
      blur() {
        if (this.type === 'textarea') {
          this.$refs.textarea.blur()
        } else {
          this.$refs.input.blur()
        }
      },
      handleClear() {
        const e = { target: { value: '' } }
        this.$emit('input', '')
        this.setCurrentValue('')
        this.$emit('on-change', e)
        this.$emit('on-clear')
      },
      handleSearch() {
        if (this.disabled) return false
        this.$refs.input.focus()
        this.$emit('on-search', this.currentValue)
      }
    },
    computed: {
      wrapClasses() {
        return [
          `${prefixCls}-wrapper`,
          {
            [`${prefixCls}-wrapper-${this.size}`]: !!this.size,
            [`${prefixCls}-type`]: this.type,
            [`${prefixCls}-group-with-prepend`]: this.prepend,
            [`${prefixCls}-group-with-append`]: this.append || this.search,
            [`${prefixCls}-hide-icon`]: this.append, // #554
            [`${prefixCls}-with-search`]: this.search
          }
        ]
      },
      inputClasses() {
        return [
          `${prefixCls}`,
          {
            [`${prefixCls}-${this.size}`]: !!this.size,
            [`${prefixCls}-disabled`]: this.disabled,
            [`${prefixCls}-with-prefix`]: this.showPrefix,
            [`${prefixCls}-with-suffix`]: this.showSuffix || this.search
          }
        ]
      },
      closeClasses() {
        return ['iconfont', 'icon-ios-close-circle', prefixCls + '-icon', prefixCls + '-icon-clear', prefixCls + '-icon-normal']
      },
      textareaClasses() {
        return [
          `${prefixCls}`,
          {
            [`${prefixCls}-disabled`]: this.disabled
          }
        ]
      }
    },
    mounted() {
      if (this.type !== 'textarea') {
        this.prepend = this.$slots.prepend !== undefined
        this.append = this.$slots.append !== undefined
        this.showPrefix = this.prefix !== '' || this.$slots.prefix !== undefined
        this.showSuffix = this.suffix !== '' || this.$slots.suffix !== undefined
      } else {
        this.prepend = false
        this.append = false
      }
      this.slotReady = true
      this.resizeTextarea()
    }
  }
</script>
