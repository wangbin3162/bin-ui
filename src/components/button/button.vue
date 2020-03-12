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
    <b-icon class="button-loading icon-is-rotating" :name="loadingIcon?loadingIcon:'loading'" v-if="loading"></b-icon>
    <i :class="['iconfont','icon-'+icon]" v-if="icon && !loading"></i>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
  <button v-else
          @click="handleClick"
          :disabled="disabled || loading"
          :type="nativeType"
          class="bin-button"
          :class="['bin-button--' + type, { 'is-disabled': disabled, 'is-loading': loading }
    ]"
  ><span v-if="$slots.default" :style="textStyle"><slot></slot></span></button>
</template>

<script>
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
      textStyle() {
        const colorMap = {
          primary: '#1890ff',
          success: '#52c41a',
          info: '#13c2c2',
          warning: '#fa8c16',
          danger: '#f5222d'
        }
        return this.textColor ? { color: colorMap[this.textColor] ? colorMap[this.textColor] : this.textColor } : null
      }
    },
    methods: {
      handleClick(evt) {
        this.$emit('click', evt)
      }
    }
  }
</script>
