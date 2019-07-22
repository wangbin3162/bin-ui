<template>
  <transition name="fade-in-linear">
    <div :class="classes">
      <div class="bin-loading-inner">
        <slot>
          <div v-if="!showIcon">
            <svg class="circular" viewBox="25 25 50 50">
              <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="5" stroke-miterlimit="10"></circle>
            </svg>
          </div>
          <b-icon v-else :name="showIcon" class="loading-icon"></b-icon>
          <div v-if="showText" class="loading-text" :style="textStyle">{{ showText }}</div>
        </slot>
      </div>
    </div>
  </transition>
</template>

<script>
  const prefixCls = 'bin-loading'
  export default {
    name: 'BLoading',
    props: {
      showIcon: String,
      showText: String,
      fix: {
        type: Boolean,
        default: false
      },
      size: String
    },
    computed: {
      classes () {
        return [
          `${prefixCls}`,
          {
            [`${prefixCls}-fix`]: this.fix,
            [`${prefixCls}-show-text`]: this.showText,
            [`${prefixCls}-fullscreen`]: this.fullscreen
          }
        ]
      },
      textStyle () {
        return {
          fontSize: `${this.size}px`
        }
      }
    }
  }
</script>
