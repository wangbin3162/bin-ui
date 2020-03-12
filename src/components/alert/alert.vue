<template>
  <transition name="fade-in">
    <div v-if="!closed" :class="wrapClasses">
            <span :class="iconClasses" v-if="showIcon">
                <slot name="icon">
                    <b-icon :name="iconType"></b-icon>
                </slot>
            </span>
      <span :class="messageClasses"><slot></slot></span>
      <span :class="descClasses"><slot name="desc"></slot></span>
      <a :class="closeClasses" v-if="closable" @click="close">
        <slot name="close">
          <b-icon name="ios-close"></b-icon>
        </slot>
      </a>
    </div>
  </transition>
</template>
<script>
  import { oneOf } from '../../utils/util'

  const prefixCls = 'bin-alert'

  export default {
    name: 'BAlert',
    props: {
      type: {
        validator (value) {
          return oneOf(value, ['success', 'info', 'warning', 'error'])
        },
        default: 'info'
      },
      closable: {
        type: Boolean,
        default: false
      },
      showIcon: {
        type: Boolean,
        default: false
      },
      banner: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        closed: false,
        desc: false
      }
    },
    computed: {
      wrapClasses () {
        return [
          `${prefixCls}`,
          `${prefixCls}-${this.type}`,
          {
            [`${prefixCls}-with-icon`]: this.showIcon,
            [`${prefixCls}-with-desc`]: this.desc,
            [`${prefixCls}-with-banner`]: this.banner
          }
        ]
      },
      messageClasses () {
        return `${prefixCls}-message`
      },
      descClasses () {
        return `${prefixCls}-desc`
      },
      closeClasses () {
        return `${prefixCls}-close`
      },
      iconClasses () {
        return `${prefixCls}-icon`
      },
      iconType () {
        let type = ''
        switch (this.type) {
          case 'info':
            type = 'ios-information-circle'
            break
          case 'success':
            type = 'ios-checkmark-circle'
            break
          case 'warning':
            type = 'ios-warning'
            break
          case 'error':
            type = 'ios-close-circle-outline'
            break
        }
        return type
      }
    },
    methods: {
      close (e) {
        this.closed = true
        this.$emit('on-close', e)
      }
    },
    mounted () {
      this.desc = this.$slots.desc !== undefined
    }
  }
</script>
