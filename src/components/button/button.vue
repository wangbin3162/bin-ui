<template>
  <button v-if="type!=='text'"
          class="bin-button"
          @click="handleClick"
          :disabled="disabled || loading"
          :type="nativeType"
          v-waves="{ color: (type==='default'||type==='dashed'||plain||transparent) ? 'rgba(0, 0, 0, 0.25)':'rgba(255, 255, 255, 0.35)' }"
          :class="['bin-button--' + type , 'bin-button--' + size,
      {
        'is-disabled': disabled,
        'is-loading': loading,
        'is-plain': plain,
        'is-round': round,
        'is-transparent': transparent
      }
    ]"
  >
    <b-icon class="button-loading icon-is-rotating"
            :name="loadingIcon?loadingIcon:'loading'" v-if="loading" :style="iconStyles"/>
    <i :class="['iconfont','icon-'+icon]" v-if="icon && !loading" :style="iconStyles"></i>
    <span v-if="$slots.default"><slot></slot></span>
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
          primary: '#1890ff',
          success: '#52c41a',
          info: '#35495E',
          warning: '#fa8c16',
          danger: '#f5222d'
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
