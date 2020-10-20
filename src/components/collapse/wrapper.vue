<template>
  <div :class="itemClasses">
    <div class="header" :class="{'is-collapse':collapse&&!$slots.right}" @click="toggle">
      <slot name="title">
        <div class="label">
          {{ title }}
        </div>
      </slot>
      <div class="right" :class="{'can-collapse':collapse}" v-if="$slots.right">
        <slot name="right">
          {{ title }}
        </slot>
      </div>
      <div class="arrow" :style="{cursor:$slots.right?'pointer':null}"
           @click="arrowToggle">
        <b-icon name="ios-arrow-down" v-if="collapse"></b-icon>
      </div>
    </div>
    <collapse-transition v-if="mounted">
      <div class="content" v-show="isActive">
        <div class="content-box">
          <slot></slot>
        </div>
      </div>
    </collapse-transition>
  </div>
</template>

<script>
import CollapseTransition from '../base/collapse-transition'

export default {
  name: 'BCollapseWrap',
  components: { CollapseTransition },
  props: {
    value: {
      type: Boolean,
      default: true
    },
    title: String,
    collapse: {
      type: Boolean
    }
  },
  watch: {
    value: {
      handler(val) {
        this.isActive = val
      },
      immediate: true
    }
  },
  data() {
    return {
      isActive: true,
      mounted: false
    }
  },
  mounted() {
    this.mounted = true
  },
  computed: {
    itemClasses() {
      return [
        'bin-collapse-wrap',
        {
          'bin-collapse-wrap-active': this.isActive
        }
      ]
    }
  },
  methods: {
    toggle() {
      // 可以收起且没有右侧功能插入时点击一行展开收起
      if (this.collapse && !this.$slots.right) {
        this.isActive = !this.isActive
        this.$emit('input', this.isActive)
      }
    },
    arrowToggle() {
      // 可以收起且没有右侧功能插入时点击一行展开收起
      if (this.collapse && this.$slots.right) {
        this.isActive = !this.isActive
        this.$emit('input', this.isActive)
      }
    }
  }
}
</script>
