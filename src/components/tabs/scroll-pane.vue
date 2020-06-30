<template>
  <div class="nav-wrap" :class="{'is-scrollable':isScrollable}">
    <template v-if="!hideArrow&&isScrollable">
      <span class="nav-prev" @click="handlePrev" v-if="!hidePrev">
        <b-icon name="ios-arrow-back"/>
      </span>
      <span class="nav-next" @click="handleNext" v-if="!hideNext">
         <b-icon name="ios-arrow-forward"/>
      </span>
    </template>
    <div class="scroll-container"
         ref="scrollContainer" @wheel.prevent="handleScroll">
      <div class="scroll-wrapper" ref="scrollWrapper" :style="{ transform: `translateX(${left}px)`} ">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
  const padding = 16 // tag's padding
  export default {
    name: 'ScrollPane',
    props: {
      hideArrow: {
        type: Boolean
      }
    },
    data() {
      return {
        left: 0,
        isScrollable: false
      }
    },
    mounted() {
      this.calcWidth()
    },
    computed: {
      hidePrev() {
        return this.left === 0
      },
      hideNext() {
        const $container = this.$refs.scrollContainer
        const $containerWidth = $container.offsetWidth
        const $wrapper = this.$refs.scrollWrapper
        const $wrapperWidth = $wrapper.offsetWidth
        return this.left === $containerWidth - $wrapperWidth - padding
      }
    },
    methods: {
      handleScroll(e) {
        const eventDelta = e.wheelDelta * 0.5 || -e.deltaY * 3
        const $container = this.$refs.scrollContainer
        const $containerWidth = $container.offsetWidth
        const $wrapper = this.$refs.scrollWrapper
        const $wrapperWidth = $wrapper.offsetWidth
        this.moveStep(eventDelta, $containerWidth, $wrapperWidth)
      },
      calcWidth() {
        const $container = this.$refs.scrollContainer
        const $containerWidth = $container.offsetWidth
        const $wrapper = this.$refs.scrollWrapper
        const $wrapperWidth = $wrapper.offsetWidth
        this.isScrollable = $wrapperWidth > ($containerWidth - padding)
        if (!this.isScrollable) {
          this.left = 0
        }
      },
      moveToTarget($target) {
        const $container = this.$refs.scrollContainer
        const $containerWidth = $container.offsetWidth
        const $wrapper = this.$refs.scrollWrapper
        const $wrapperWidth = $wrapper.offsetWidth
        const $targetLeft = $target.offsetLeft
        const $targetWidth = $target.offsetWidth
        this.isScrollable = $wrapperWidth > ($containerWidth - padding)

        if ($targetLeft < -this.left) {
          // tag in the left
          this.left = -$targetLeft + padding
        } else if ($targetLeft + padding > -this.left && $targetLeft + $targetWidth < -this.left + $containerWidth - padding) {
          // tag in the current view
          // eslint-disable-line
        } else {
          // tag in the right
          this.left = $containerWidth - $wrapperWidth - padding
        }
        if (!this.isScrollable) {
          this.left = 0
        }
      },
      moveStep(step, containerWidth, wrapperWidth) {
        if (step > 0) {
          this.left = Math.min(0, this.left + step)
        } else {
          if (containerWidth - padding < wrapperWidth) {
            if (this.left < -(wrapperWidth - containerWidth + padding)) {
              // this.left = this.left
            } else {
              this.left = Math.max(this.left + step, containerWidth - wrapperWidth - padding)
            }
          } else {
            this.left = 0
          }
        }
      },
      handlePrev() {
        const $container = this.$refs.scrollContainer
        const $containerWidth = $container.offsetWidth
        const $wrapper = this.$refs.scrollWrapper
        const $wrapperWidth = $wrapper.offsetWidth
        // 缓存容器宽度
        let moveWidth = $containerWidth - padding * 0.5
        this.moveStep(moveWidth, $containerWidth, $wrapperWidth)
      },
      handleNext() {
        const $container = this.$refs.scrollContainer
        const $containerWidth = $container.offsetWidth
        const $wrapper = this.$refs.scrollWrapper
        const $wrapperWidth = $wrapper.offsetWidth
        // 缓存容器宽度
        let moveWidth = $containerWidth - padding * 0.5
        this.moveStep(-moveWidth, $containerWidth, $wrapperWidth)
      }
    }
  }
</script>
