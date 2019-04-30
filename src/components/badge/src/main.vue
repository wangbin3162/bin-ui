<template>
  <div class="bin-badge">
    <slot></slot>
    <transition name="zoom-in-center">
      <sup
          v-show="!hidden && (content || content === 0 || isDot)"
          v-text="content"
          class="bin-badge__content"
          :class="[
          'bin-badge-is-' + type,
          {
            'is-fixed': $slots.default,
            'is-dot': isDot
          }
        ]">
      </sup>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'BBadge',

    props: {
      value: {},
      max: Number,
      isDot: Boolean,
      hidden: Boolean,
      type: {
        type: String,
        validator (val) {
          return ['primary', 'success', 'warning', 'info', 'danger'].indexOf(val) > -1
        }
      }
    },

    computed: {
      content () {
        if (this.isDot) return

        const value = this.value
        const max = this.max

        if (typeof value === 'number' && typeof max === 'number') {
          return max < value ? `${max}+` : value
        }

        return value
      }
    }
  }
</script>
