<template>
  <div class="bin-card" :class="[shadow ? 'is-' + shadow + '-shadow' : 'is-hover-shadow',
  bordered ? '':'is-no-border']"
       :style="cardStyle">
    <div class="bin-card__header" v-if="$slots.header || header"
         :class="[divider ? divider+'-divider' : 'has-divider',headTip?'has-tip':'']">
      <slot name="header">{{ header }}</slot>
    </div>
    <div class="bin-card__body" :style="bodyStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'BCard',
    props: {
      header: {},
      bodyStyle: {},
      shadow: {
        type: String
      },
      bordered: {
        type: Boolean,
        default: true
      },
      width: {
        type: String
      },
      radius: {
        type: String
      },
      bgColor: {
        type: String
      },
      divider: {
        type: String
      },
      headTip: {
        type: Boolean
      }
    },
    computed: {
      cardStyle () {
        return {
          width: this.width,
          borderRadius: this.radius,
          backgroundColor: this.bgColor
        }
      }
    }
  }
</script>
