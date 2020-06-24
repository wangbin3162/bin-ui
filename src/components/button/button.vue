<template>
  <button v-if="type!=='text'"
          class="bin-button"
          @click="handleClick"
          :disabled="disabled || loading"
          :type="nativeType"
          :class="['bin-button--' + type , 'bin-button--' + size,
            {
              'is-disabled': disabled,
              'is-loading': loading,
              'is-plain': plain,
              'is-round': round,
              'is-dashed': dashed,
              'is-transparent': transparent
            }
          ]"
          v-click-animation
  >
    <b-icon class="button-loading icon-is-rotating"
            :name="loadingIcon?loadingIcon:'loading'" v-if="loading" :style="iconStyles"/>
    <i :class="['iconfont','icon-'+icon]" v-if="icon && !loading" :style="iconStyles"></i>
    <span v-if="$slots.default" :style="textStyle"><slot></slot></span>
  </button>
  <button v-else
          @click="handleClick"
          :disabled="disabled || loading"
          :type="nativeType"
          class="bin-button"
          :class="['bin-button--' + type, { 'is-disabled': disabled, 'is-loading': loading }
    ]"
  >
    <i :class="['iconfont','icon-'+icon]" v-if="icon && !loading" :style="iconStyles"></i>
    <span v-if="$slots.default" :style="textStyle"><slot></slot></span>
  </button>
</template>

<script>
  import tinycolor from 'tinycolor2'

  export default {
    name: 'BButton',
    props: {
      type: {
        type: String,
        default: 'default'
      },
      size: {
        type: String,
        default: 'default'
      },
      icon: {
        type: String,
        default: ''
      },
      iconStyle: {
        type: Object
      },
      nativeType: {
        type: String,
        default: 'button'
      },
      loading: Boolean,
      loadingIcon: {
        type: String
      },
      disabled: Boolean,
      plain: Boolean,
      round: Boolean,
      dashed: Boolean,
      transparent: Boolean,
      textColor: {
        type: String
      }
    },
    computed: {
      iconStyles() {
        return {
          ...this.textStyle,
          ...this.iconStyle
        }
      },
      textStyle() {
        const colorMap = {
          primary: '#0d85ff',
          success: '#52c41a',
          info: '#35495E',
          warning: '#fea638',
          danger: '#ff4d4f'
        }
        let color = this.textColor ? (colorMap[this.textColor] ? colorMap[this.textColor] : this.textColor) : null
        if (color) {
          return {
            color: this.disabled ? tinycolor(color).lighten(15).toString() : color
          }
        }
        return null
      }
    },
    methods: {
      handleClick(evt) {
        this.$emit('click', evt)
      }
    }
  }
</script>
