<template>
  <div
      :class="[
      'bin-progress',
      status ? 'progress-' + status : '',
      {
        'bin-progress-text': !showText,
        'bin-progress-text-inside': textInside,
      }
    ]"
      role="progressbar"
      :aria-valuenow="percent"
      aria-valuemin="0"
      aria-valuemax="100"
  >
    <div class="bin-progress-bar" :class="{'is-active': active}">
      <div class="bin-progress-bar__outer" :style="barOutStyle">
        <div class="bin-progress-bar__inner" :style="barStyle">
          <div class="bin-progress-bar__innerText" v-if="showText && textInside">{{ percent }}%</div>
        </div>
      </div>
    </div>
    <div class="bin-progress__text" v-if="showText && !textInside" :style="{fontSize: progressTextSize + 'px'}">
      <template v-if="!status">{{ percent }}%</template>
      <template v-else>
        <slot v-if="status === 'text'"></slot>
        <b-icon v-else :name="iconClass"></b-icon>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  name: 'BProgress',
  props: {
    percent: {
      type: Number,
      default: 0,
      required: true,
      validator: val => val >= 0 && val <= 100
    },
    status: {
      type: String,
      validator: val => ['text', 'success', 'exception'].indexOf(val) > -1
    },
    strokeWidth: Number,
    textInside: {
      type: Boolean,
      default: false
    },
    showText: {
      type: Boolean,
      default: true
    },
    bgColor: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    },
    radius: String,
    active: Boolean
  },
  computed: {
    barOutStyle() {
      return {
        height: this.strokeWidth + 'px',
        borderRadius: this.radius,
        backgroundColor: this.bgColor
      }
    },
    barStyle() {
      const style = {}
      style.width = this.percent + '%'
      style.backgroundColor = this.color
      style.borderRadius = this.radius
      return style
    },
    iconClass() {
      return this.status === 'success' ? 'ios-checkmark-circle' : 'ios-close-circle'
    },
    progressTextSize() {
      let size = 12 + this.strokeWidth * 0.4
      return size > 16 ? 16 : size
    }
  }
}
</script>
