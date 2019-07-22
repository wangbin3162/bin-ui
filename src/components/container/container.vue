<template>
  <div class="bin-container" :style="wrapStyleBind">
    <!--header-->
    <div class="bin-container-header" v-if="$slots.header && headerFixed" style="position: absolute;">
      <slot name="header">header</slot>
    </div>
    <!--footer-->
    <div class="bin-container-footer" v-if="$slots.footer && footerFixed" style="position: absolute;">
      <slot name="footer">footer</slot>
    </div>
    <div class="wrap" :style="scrollStyle">
      <b-scrollbar style="height:100%;" ref="scroll">
        <!--header-->
        <div class="bin-container-header" v-if="$slots.header && !headerFixed">
          <slot name="header">header</slot>
        </div>
        <slot></slot>
        <!--footer-->
        <div class="bin-container-footer" v-if="$slots.footer && !footerFixed">
          <slot name="footer">footer</slot>
        </div>
        <slot name="backTop">
          <b-back-top v-if="showBackTop"></b-back-top>
        </slot>
      </b-scrollbar>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'BContainer',
    props: {
      bgColor: {
        type: String,
        default: '#fff'
      },
      showBackTop: {
        type: Boolean,
        default: true
      },
      headerFixed: Boolean,
      footerFixed: Boolean,
      fixedHeaderHeight: {
        type: String,
        default: '50px'
      },
      fixedFooterHeight: {
        type: String,
        default: '50px'
      },
      wrapStyle: {}
    },
    data () {
      return {}
    },
    methods: {
      scrollTo: function (to) {
        // 如果父级是自定义滚动则绑定滚动为父级元素dom
        if (!this.domEl) {
          this.domEl = this.$refs.scroll.$el.querySelector('.bin-scrollbar__wrap')
        }
        let sTop = this.domEl.pageYOffset || this.domEl.scrollTop
        this.$scrollTop(this.domEl, sTop, to, 1000)
      }
    },
    computed: {
      wrapStyleBind () {
        return Object.assign({}, {
          backgroundColor: this.bgColor
        }, this.wrapStyle)
      },
      scrollStyle () {
        let top = this.$slots.header && this.headerFixed ? this.fixedHeaderHeight : null
        let bottom = this.$slots.footer && this.footerFixed ? this.fixedFooterHeight : null
        return {
          height: '100%',
          paddingTop: top,
          paddingBottom: bottom
        }
      }
    }
  }
</script>
