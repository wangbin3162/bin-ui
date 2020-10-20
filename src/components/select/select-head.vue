<template>
  <div @click="onHeaderClick" :class="headCls">
      <span :class="[prefixCls + '-prefix']" v-if="$slots.prefix || prefix">
        <slot name="prefix">
            <b-icon :name="prefix" v-if="prefix"/>
        </slot>
      </span>
    <template v-for="(item, index) in selectedMultiple">
      <div class="bin-tag bin-tag-checked" v-if="maxTagCount === undefined || index < maxTagCount" :key="index">
        <span class="bin-tag-text">{{ item.label }}</span>
        <b-icon name="ios-close" @click.native.stop="removeTag(item)"></b-icon>
      </div>
    </template>
    <div class="bin-tag bin-tag-checked" v-if="maxTagCount !== undefined && selectedMultiple.length > maxTagCount">
      <span class="bin-tag-text bin-select-max-tag">
          <template v-if="maxTagPlaceholder">{{ maxTagPlaceholder(selectedMultiple.length - maxTagCount) }}</template>
          <template v-else>+ {{ selectedMultiple.length - maxTagCount }}...</template>
      </span>
    </div>
    <span :class="singleDisplayClasses" v-show="singleDisplayValue">{{ singleDisplayValue }}</span>
    <label>
      <input :id="inputElementId" type="text" v-if="filterable" v-model="query" :disabled="disabled"
             :class="[prefixCls + '-input']" :placeholder="showPlaceholder ? placeholder : ''" :style="inputStyle"
             autocomplete="off" spellcheck="false"
             @keydown="resetInputState"
             @keydown.delete="handleInputDelete"
             @focus="onInputFocus"
             @blur="onInputBlur"
             ref="input">
    </label>
    <b-icon name="ios-close-circle" :class="[prefixCls + '-arrow']" v-if="resetSelect"
            @click.native.stop="onClear"></b-icon>
    <b-icon name="ios-arrow-down" :class="[prefixCls + '-arrow']"
            v-if="!resetSelect && !remote"></b-icon>
  </div>
</template>

<script>
import Emitter from '../../mixins/emitter'

const prefixCls = 'bin-select'

export default {
  name: 'BSelectHead',
  mixins: [Emitter],
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    filterable: {
      type: Boolean,
      default: false
    },
    multiple: {
      type: Boolean,
      default: false
    },
    remote: {
      type: Boolean,
      default: false
    },
    initialLabel: {
      type: [String, Number, Array]
    },
    values: {
      type: Array,
      default: () => []
    },
    clearable: {
      type: [Function, Boolean],
      default: false
    },
    inputElementId: {
      type: String
    },
    placeholder: {
      type: String
    },
    queryProp: {
      type: String,
      default: ''
    },
    prefix: {
      type: String
    },
    maxTagCount: {
      type: Number
    },
    maxTagPlaceholder: {
      type: Function
    }
  },
  data() {
    return {
      prefixCls: prefixCls,
      query: '',
      inputLength: 20,
      remoteInitialLabel: this.initialLabel,
      preventRemoteCall: false
    }
  },
  computed: {
    singleDisplayClasses() {
      const { filterable, multiple, showPlaceholder } = this
      return [{
        [prefixCls + '-placeholder']: showPlaceholder && !filterable,
        [prefixCls + '-selected-value']: !showPlaceholder && !multiple && !filterable
      }]
    },
    singleDisplayValue() {
      if ((this.multiple && this.values.length > 0) || this.filterable) return ''
      return `${this.selectedSingle}` || this.placeholder
    },
    showPlaceholder() {
      let status = false
      if (!this.multiple) {
        const value = this.values[0]
        if (typeof value === 'undefined' || String(value).trim() === '') {
          status = !this.remoteInitialLabel
        }
      } else {
        if (!this.values.length > 0) {
          status = true
        }
      }
      return status
    },
    resetSelect() {
      return !this.showPlaceholder && this.clearable
    },
    inputStyle() {
      let style = {}

      if (this.multiple) {
        if (this.showPlaceholder) {
          style.width = '100%'
        } else {
          style.width = `${this.inputLength}px`
        }
      }

      return style
    },
    selectedSingle() {
      const selected = this.values[0]
      return selected ? selected.label : (this.remoteInitialLabel || '')
    },
    selectedMultiple() {
      return this.multiple ? this.values : []
    },
    // 使用 prefix 时，在 filterable
    headCls() {
      return [
        {
          [`${prefixCls}-head-flex`]: this.filterable && (this.$slots.prefix || this.prefix),
          [prefixCls + '-head-with-prefix']: this.$slots.prefix || this.prefix
        },
        { 'head-multiple-wrap': this.multiple }
      ]
    }
  },
  methods: {
    onInputFocus() {
      this.$emit('input-focus')
    },
    onInputBlur() {
      if (!this.values.length) this.query = '' // #5155
      this.$emit('input-blur')
    },
    removeTag(value) {
      if (this.disabled) return false
      this.dispatch('BSelect', 'select-selected', value)
    },
    resetInputState() {
      this.inputLength = this.$refs.input.value.length * 12 + 20
      this.$emit('keydown')
    },
    handleInputDelete() {
      if (this.multiple && this.selectedMultiple.length && this.query === '') {
        this.removeTag(this.selectedMultiple[this.selectedMultiple.length - 1])
      }
    },
    onHeaderClick(e) {
      if (this.filterable && e.target === this.$el) {
        this.$refs.input.focus()
      }
    },
    onClear() {
      this.$emit('clear')
    }
  },
  watch: {
    values([value]) {
      if (!this.filterable) return
      this.preventRemoteCall = true
      if (this.multiple) {
        this.query = ''
        this.preventRemoteCall = false // this should be after the query change setter above
        return
      }
      // #982
      if (typeof value === 'undefined' || value === '' || value === null) {
        this.query = ''
      } else {
        this.query = value.label
      }
      this.$nextTick(() => {
        this.preventRemoteCall = false
      }) // this should be after the query change setter above
    },
    query(val) {
      if (this.preventRemoteCall) {
        this.preventRemoteCall = false
        return
      }

      this.$emit('query-change', val)
    },
    queryProp(query) {
      if (query !== this.query) this.query = query
    }
  }
}
</script>
