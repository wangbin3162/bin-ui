<template>
  <transition :name="transitionName"
              @enter="handleEnter" @leave="handleLeave" appear>
    <template v-if="type === 'notice'">
      <div :class="noticeClasses">
        <div
            :class="['bin-notice-content',this.render !== undefined ? `bin-notice-content-with-render` : '']"
            ref="content" v-html="content"></div>
        <div :class="contentWithIcon">
          <render-cell
              :render="renderFunc"
          ></render-cell>
        </div>
        <a class="bin-notice-close" @click="close" v-if="closable">
          <i class="iconfont icon-ios-close"></i>
        </a>
      </div>
    </template>
    <template v-else>
      <div :class="classes">
        <div :class="[baseClass + '-content',`${baseClass}-${type}`]" ref="content">
          <div :class="[baseClass + '-content-text']" v-if="content">
            <b-icon :name="iconTypes"></b-icon>
            <span>{{ content }}</span>
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
    </template>
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
    withIcon: Boolean,
    hasTitle: Boolean,
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
    noticeClasses() {
      return [
        'bin-notice-notice',
        {
          [`${this.className}`]: !!this.className,
          'bin-notice-closable': this.closable
        }
      ]
    },
    contentWithIcon() {
      return [
        this.withIcon ? `bin-notice-content-with-icon` : '',
        !this.hasTitle && this.withIcon ? `bin-notice-content-with-render-notitle` : ''
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
      if (this.type === 'notice') {
        return
      }
      el.style.height = el.scrollHeight + 'px'
    },
    handleLeave(el) {
      if (this.type === 'notice') {
        return
      }
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
