<template>
  <div v-if="uiLoading" :class="['bin-skeleton', animation ? 'is-animated' : '', ]" v-bind="$attrs">
    <template v-for="i in count">
      <slot v-if="loading" name="template">
        <b-skeleton-item class="is-first" variant="p" :key="`${i}-first`"/>
        <b-skeleton-item
            v-for="item in rows"
            :key="item"
            :class="{
              'bin-skeleton__paragraph': true,
              'is-last': item === rows && rows > 1,
            }"
            variant="p"
        />
      </slot>
    </template>
  </div>
  <div v-else>
    <slot v-bind="$attrs"></slot>
  </div>
</template>

<script>
import BSkeletonItem from '../skeleton-item'

export default {
  name: 'BSkeleton',
  components: { BSkeletonItem },
  props: {
    animation: {
      type: Boolean,
      default: false
    },
    count: {
      type: Number,
      default: 1
    },
    rows: {
      type: Number,
      default: 3
    },
    loading: {
      type: Boolean,
      default: true
    },
    throttle: {
      type: Number
    }
  },
  data() {
    return {
      throttled: false
    }
  },
  computed: {
    innerLoading() {
      return this.loading
    },
    uiLoading() {
      return this.throttled
    }
  },
  watch: {
    loading(val) {
      if (val) {
        this.dispatchThrottling()
      } else {
        this.throttled = val
      }
    }
  },
  mounted() {
    this.dispatchThrottling()
  },
  methods: {
    dispatchThrottling() {
      if (this.throttle === 0) {
        this.throttled = this.loading
        return
      }
      if (this.timeoutHandle) {
        clearTimeout(this.timeoutHandle)
      }
      this.timeoutHandle = window.setTimeout(() => {
        this.throttled = this.loading
      }, this.throttle)
    }
  }
}
</script>
