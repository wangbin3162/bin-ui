<template>
  <transition :name="transitionName"
              @enter="handleEnter" @leave="handleLeave" appear>
    <div :class="classes">
      <div :class="[baseClass + '-content',`${baseClass}-${type}`]" ref="content">
        <div :class="[baseClass + '-content-text']" v-if="content">
          <b-icon :name="iconTypes"></b-icon>
          <span>{{content}}</span>
        </div>
        <div :class="[baseClass + '-content-text']">
          <render-cell
              :render="renderFunc"
          ></render-cell>
        </div>
        <a :class="[baseClass + '-close']" @click="close" v-if="closable">
          <i class="iconfont icon-ios-close"></i>
        </a>
      </div>
    </div>
  </transition>
</template>

<script>
  import RenderCell from '../render'

  const prefixCls = 'bin-message'
  export default {
    components: {
      RenderCell
    },
    props: {
      duration: {
        type: Number,
        default: 3
      },
      type: {
        type: String
      },
      content: {
        type: String,
        default: ''
      },
      render: {
        type: Function
      },
      closable: {
        type: Boolean,
        default: false
      },
      name: {
        type: String,
        required: true
      },
      onClose: {
        type: Function
      },
      transitionName: {
        type: String
      }
    },
    computed: {
      classes() {
        return [
          this.baseClass,
          {
            [`${this.className}`]: !!this.className,
            [`${this.baseClass}-closable`]: this.closable
          }
        ]
      },
      baseClass() {
        return `${prefixCls}-notice`
      },
      renderFunc() {
        return this.render || function () {
        }
      },
      iconTypes() {
        const iconMap = {
          'info': 'ios-information-circle',
          'primary': 'ios-information-circle',
          'success': 'ios-checkmark-circle',
          'warning': 'ios-warning',
          'danger': 'ios-close-circle'
        }
        return iconMap[this.type]
      }
    },
    methods: {
      clearCloseTimer() {
        if (this.closeTimer) {
          clearTimeout(this.closeTimer)
          this.closeTimer = null
        }
      },
      close() {
        this.clearCloseTimer()
        this.onClose()
        this.$parent.close(this.name)
      },
      handleEnter(el) {
        el.style.height = el.scrollHeight + 'px'
      },
      handleLeave(el) {
        // 优化一下，如果当前只有一个 Message，则不使用 js 过渡动画，这样更优美
        if (document.getElementsByClassName('bin-message-notice').length !== 1) {
          el.style.height = 0
          el.style.paddingTop = 0
          el.style.paddingBottom = 0
        }
      }
    },
    mounted() {
      this.clearCloseTimer()
      if (this.duration !== 0) {
        this.closeTimer = setTimeout(() => {
          this.close()
        }, this.duration * 1000)
      }
    },
    beforeDestroy() {
      this.clearCloseTimer()
    }
  }
</script>
