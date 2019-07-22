<template>
  <div :class="itemClasses">
    <div :class="headerClasses" @click="toggle">
      <b-icon name="ios-arrow-forward" v-if="!hideArrow"></b-icon>
      <slot name="title">
        {{ title }}
      </slot>
    </div>
    <collapse-transition v-if="mounted">
      <div :class="contentClasses" v-show="isActive">
        <div :class="boxClasses">
            <slot></slot>
        </div>
      </div>
    </collapse-transition>
  </div>
</template>
<script>
  import CollapseTransition from '../base/collapse-transition'

  const prefixCls = 'bin-collapse'

  export default {
    name: 'BCollapsePanel',
    components: {CollapseTransition},
    props: {
      title: String,
      name: {
        type: String
      },
      hideArrow: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        index: 0, // use index for default when name is null
        isActive: false,
        mounted: false
      }
    },
    computed: {
      itemClasses () {
        return [
          `${prefixCls}-item`,
          {
            [`${prefixCls}-item-active`]: this.isActive
          }
        ]
      },
      headerClasses () {
        return `${prefixCls}-header`
      },
      contentClasses () {
        return `${prefixCls}-content`
      },
      boxClasses () {
        return `${prefixCls}-content-box`
      }
    },
    methods: {
      toggle () {
        this.$parent.toggle({
          name: this.name || this.index,
          isActive: this.isActive
        })
      }
    },
    mounted () {
      this.mounted = true
    }
  }
</script>
