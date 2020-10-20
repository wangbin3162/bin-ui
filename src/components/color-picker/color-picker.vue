<template>
  <div
      v-click-outside="handleClose"
      :class="classes">
    <div
        ref="reference"
        :class="wrapClasses"
        @click="toggleVisible">
      <input
          :name="name"
          :value="currentValue"
          type="hidden">
      <div
          ref="input"
          :tabindex="itemDisabled ? undefined : 0"
          :class="inputClasses"
          @keydown.tab="onTab"
          @keydown.esc="onEscape"
          @keydown.up="onArrow"
          @keydown.down="onArrow"
      >
        <div :class="[prefixCls + '-color']">
          <div
              v-show="value === '' && !visible"
              :class="[prefixCls + '-color-empty']">
            <b-icon name="ios-close"></b-icon>
          </div>
          <div
              v-show="value || visible"
              :style="displayedColorStyle"></div>
        </div>
      </div>
    </div>
    <transition name="zoom-in-top">
      <drop
          v-transfer-dom
          v-show="visible"
          ref="drop"
          :placement="placement"
          :data-transfer="appendToBody"
          :transfer="appendToBody"
          :class="dropClasses"
      >
        <transition name="fade-in">
          <div
              v-if="visible"
              :class="[prefixCls + '-picker']">
            <div :class="[prefixCls + '-picker-wrapper']">
              <div :class="[prefixCls + '-picker-panel']">
                <Saturation
                    ref="saturation"
                    v-model="saturationColors"
                    :focused="visible"
                    @change="childChange"
                    @keydown.native.tab="handleFirstTab"
                ></Saturation>
              </div>
              <div
                  v-if="hue"
                  :class="[prefixCls + '-picker-hue-slider']">
                <Hue
                    v-model="saturationColors"
                    @change="childChange"></Hue>
              </div>
              <div
                  v-if="alpha"
                  :class="[prefixCls + '-picker-alpha-slider']">
                <Alpha
                    v-model="saturationColors"
                    @change="childChange"></Alpha>
              </div>
              <recommend-colors
                  v-if="colors.length"
                  :list="colors"
                  :class="[prefixCls + '-picker-colors']"
                  @picker-color="handleSelectColor"></recommend-colors>
              <recommend-colors
                  v-if="!colors.length && recommend"
                  :list="recommendedColor"
                  :class="[prefixCls + '-picker-colors']"
                  @picker-color="handleSelectColor"></recommend-colors>
            </div>
            <div :class="[prefixCls + '-confirm']">
                <span :class="confirmColorClasses">
                    <template v-if="editable">
                        <b-input :value="formatColor" size="mini" @enter="handleEditColor"
                                 @blur="handleEditColor"></b-input>
                    </template>
                    <template v-else>{{ formatColor }}</template>
                </span>
              <b-button
                  ref="clear"
                  :tabindex="0"
                  size="mini"
                  @click.native="handleClear"
                  @keydown.enter="handleClear"
                  @keydown.native.esc="closer"
              >清空
              </b-button>
              <b-button
                  ref="ok"
                  :tabindex="0"
                  size="mini"
                  type="primary"
                  @click.native="handleSuccess"
                  @keydown.native.tab="handleLastTab"
                  @keydown.enter="handleSuccess"
                  @keydown.native.esc="closer"
              >确定
              </b-button>
            </div>
          </div>
        </transition>
      </drop>
    </transition>
  </div>
</template>

<script>
import tinycolor from 'tinycolor2'
import ClickOutside from '../../directive/clickoutside'
import TransferDom from '../../directive/transfer-dom'
import Drop from '../../components/select/drop.vue'
import RecommendColors from './recommend-colors.vue'
import Saturation from './saturation.vue'
import Hue from './hue.vue'
import Alpha from './alpha.vue'
import { oneOf } from '../../utils/util'
import Emitter from '../../mixins/emitter'
import Prefixes from './prefixMixin'
import { changeColor, toRGBAString } from './utils'

export default {
  name: 'BColorPicker',
  components: { Drop, RecommendColors, Saturation, Hue, Alpha },
  directives: { ClickOutside, TransferDom },
  mixins: [Emitter, Prefixes],
  inject: {
    FormInstance: {
      default: ''
    }
  },
  props: {
    value: {
      type: String,
      default: undefined
    },
    hue: {
      type: Boolean,
      default: true
    },
    alpha: {
      type: Boolean,
      default: false
    },
    recommend: {
      type: Boolean,
      default: false
    },
    format: {
      type: String,
      validator(value) {
        return oneOf(value, ['hsl', 'hsv', 'hex', 'rgb'])
      },
      default: undefined
    },
    colors: {
      type: Array,
      default() {
        return []
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      validator(value) {
        return oneOf(value, ['small', 'large', 'default', 'mini'])
      },
      default: 'default'
    },
    hideDropDown: {
      type: Boolean,
      default: false
    },
    placement: {
      type: String,
      validator(value) {
        return oneOf(value, [
          'top',
          'top-start',
          'top-end',
          'bottom',
          'bottom-start',
          'bottom-end',
          'left',
          'left-start',
          'left-end',
          'right',
          'right-start',
          'right-end'
        ])
      },
      default: 'bottom'
    },
    appendToBody: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: undefined
    },
    editable: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      val: changeColor(this.value),
      currentValue: this.value,
      dragging: false,
      visible: false,
      recommendedColor: [
        '#1089ff',
        '#52c41a',
        '#fea638',
        '#ff4d4f',
        '#2f54eb',
        '#faad14',
        '#722ed1',
        '#eb2f96',
        '#13c2c2',
        '#fadb14',
        '#a0d911',
        '#fa541c',
        '#eaff8f',
        '#bae7ff',
        '#efdbff',
        '#ffd6e7',
        '#ff1885',
        '#fff506',
        '#00bcd4',
        '#f06292',
        '#cb6c00',
        '#607d8b',
        '#000000',
        '#ffffff'
      ]
    }
  },
  computed: {
    transition() {
      return oneOf(this.placement, ['bottom-start', 'bottom', 'bottom-end']) ? 'slide-up' : 'fade'
    },
    saturationColors: {
      get() {
        return this.val
      },
      set(newVal) {
        this.val = newVal
        this.$emit('active-change', this.formatColor)
      }
    },
    classes() {
      return [
        `${this.prefixCls}`,
        {
          [`${this.prefixCls}-transfer`]: this.appendToBody
        }
      ]
    },
    wrapClasses() {
      return [
        `${this.prefixCls}-rel`,
        `${this.prefixCls}-${this.size}`,
        `${this.inputPrefixCls}-wrapper`,
        `${this.inputPrefixCls}-wrapper-${this.size}`,
        {
          [`${this.prefixCls}-disabled`]: this.itemDisabled
        }
      ]
    },
    inputClasses() {
      return [
        `${this.prefixCls}-input`,
        `${this.inputPrefixCls}`,
        `${this.inputPrefixCls}-${this.size}`,
        {
          [`${this.prefixCls}-focused`]: this.visible,
          [`${this.prefixCls}-disabled`]: this.itemDisabled
        }
      ]
    },
    dropClasses() {
      return [
        `${this.transferPrefixCls}-no-max-height`,
        {
          [`${this.prefixCls}-transfer`]: this.appendToBody,
          [`${this.prefixCls}-hide-drop`]: this.hideDropDown
        }
      ]
    },
    displayedColorStyle() {
      return { backgroundColor: toRGBAString(this.visible ? this.saturationColors.rgba : tinycolor(this.value).toRgb()) }
    },
    formatColor() {
      const { format, saturationColors } = this

      if (format) {
        if (format === 'hsl') {
          return tinycolor(saturationColors.hsl).toHslString()
        }

        if (format === 'hsv') {
          return tinycolor(saturationColors.hsv).toHsvString()
        }

        if (format === 'hex') {
          return saturationColors.hex
        }

        if (format === 'rgb') {
          return toRGBAString(saturationColors.rgba)
        }
      } else if (this.alpha) {
        return toRGBAString(saturationColors.rgba)
      }

      return saturationColors.hex
    },
    confirmColorClasses() {
      return [
        `${this.prefixCls}-confirm-color`,
        {
          [`${this.prefixCls}-confirm-color-editable`]: this.editable
        }
      ]
    },
    itemDisabled() {
      let state = this.disabled
      if (!state && this.FormInstance) state = this.FormInstance.disabled
      return state
    }
  },
  watch: {
    value(newVal) {
      this.val = changeColor(newVal)
    },
    visible(val) {
      this.val = changeColor(this.value)
      this.$refs.drop[val ? 'update' : 'destroy']()
      this.$emit('open-change', Boolean(val))
    }
  },
  mounted() {
    this.$on('escape-keydown', this.closer)
    this.$on('dragging', this.setDragging)
  },
  methods: {
    setDragging(value) {
      this.dragging = value
    },
    handleClose(event) {
      if (this.visible) {
        if (this.dragging || (event && event.type === 'mousedown')) {
          event.preventDefault()
          return
        }
        if (this.appendToBody) {
          this.visible = false
          return
        }
        this.closer(event)
        return
      }
      this.visible = false
    },
    toggleVisible() {
      if (this.itemDisabled) {
        return
      }
      this.visible = !this.visible
      this.$refs.input.focus()
    },
    childChange(data) {
      this.colorChange(data)
    },
    colorChange(data, oldHue) {
      this.oldHue = this.saturationColors.hsl.h
      this.saturationColors = changeColor(data, oldHue || this.oldHue)
    },
    closer(event) {
      if (event) {
        event.preventDefault()
        event.stopPropagation()
      }

      this.visible = false
      this.$refs.input.focus()
    },
    handleButtons(event, value) {
      this.currentValue = value
      this.$emit('input', value)
      this.$emit('change', value)
      this.dispatch('BFormItem', 'form-change', value)
      this.closer(event)
    },
    handleSuccess(event) {
      this.handleButtons(event, this.formatColor)
      this.$emit('pick-success')
    },
    handleClear(event) {
      this.handleButtons(event, '')
      this.$emit('pick-clear')
    },
    handleSelectColor(color) {
      this.val = changeColor(color)
      this.$emit('active-change', this.formatColor)
    },
    handleEditColor(event) {
      const value = event.target.value
      this.handleSelectColor(value)
    },
    handleFirstTab(event) {
      if (event.shiftKey) {
        event.preventDefault()
        event.stopPropagation()
        this.$refs.ok.$el.focus()
      }
    },
    handleLastTab(event) {
      if (!event.shiftKey) {
        event.preventDefault()
        event.stopPropagation()
        this.$refs.saturation.$el.focus()
      }
    },
    onTab(event) {
      if (this.visible) {
        event.preventDefault()
      }
    },
    onEscape(event) {
      if (this.visible) {
        this.closer(event)
      }
    },
    onArrow(event) {
      if (!this.visible) {
        event.preventDefault()
        event.stopPropagation()
        this.visible = true
      }
    }
  }
}
</script>
