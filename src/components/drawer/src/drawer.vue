<template>
  <div class="bin-drawer" v-transfer-dom :data-transfer="appendToBody">
    <transition name="fade">
      <div class="bin-drawer-wrapper" :class="'is-'+placement"
           v-show="visible" :style="mainStyle" @click.self="handleMaskClick">
        <transition name="move">
          <div class="drawer-box" :style="boxStyle" v-show="visible" flex="dir:top">
            <div class="header">
              <slot name="header">
                <div flex="main:justify">
                  <div class="title" flex-box="1">
                    {{ title }}
                  </div>
                  <div class="close" @click.stop="close()">
                    <b-icon name="ios-close" size="22"></b-icon>
                  </div>
                </div>
              </slot>
            </div>
            <div class="body" flex-box="1">
              <b-scrollbar style="height: 100%;">
                <slot>
                </slot>
              </b-scrollbar>
            </div>
            <div class="footer" v-if="!footerHide">
              <slot name="footer">
                <b-button type="default" size="small" plain @click="close()">{{ cancelText}}</b-button>
                <b-button v-waves size="small" type="primary"
                          @click="okClick">
                  {{ okText }}
                </b-button>
              </slot>
            </div>
          </div>
        </transition>
      </div>
    </transition>
  </div>
</template>

<script>
  import TransferDom from '../../../directive/transfer-dom'

  export default {
    name: 'BDrawer',
    directives: {TransferDom},
    props: {
      value: {
        type: Boolean,
        default: false
      },
      title: {
        type: String,
        required: true
      },
      placement: {
        type: String,
        default: 'right'
      },
      appendToBody: {
        type: Boolean,
        default: true
      },
      okText: {
        type: String,
        default: '确定'
      },
      cancelText: {
        type: String,
        default: '取消'
      },
      width: {
        type: String,
        default: '300px'
      },
      fullscreen: {
        type: Boolean,
        default: false
      },
      footerHide: {
        type: Boolean,
        default: false
      },
      maskClosable: {
        type: Boolean,
        default: true
      }
    },
    data () {
      return {
        visible: this.value
      }
    },
    computed: {
      mainStyle () {
        return {
          backgroundColor: !this.fullscreen && this.width !== '100%' ? 'rgba(55, 55, 55, .6)' : 'none'
        }
      },
      boxStyle () {
        return {
          width: this.fullscreen ? '100%' : this.width,
        }
      }
    },
    methods: {
      close () {
        this.visible = false
        this.$emit('input', false)
        this.$emit('on-cancel')
      },
      handleMaskClick () {
        if (this.maskClosable) {
          this.close()
        }
      },
      okClick () {
        this.$emit('on-ok')
      },
    },
    watch: {
      value (val) {
        this.visible = val
      },
      visible (val) {
        this.$emit('on-visible-change', val)
      },
    }
  }
</script>

