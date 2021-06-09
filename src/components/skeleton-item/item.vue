<template>
  <div :class="['bin-skeleton__item', `bin-skeleton__${variant}`]">
    <img-placeholder v-if="variant === 'image'"/>
  </div>
</template>

<script>
import ImgPlaceholder from './img-placeholder.vue'

export default {
  name: 'BSkeletonItem',
  components: { ImgPlaceholder },
  props: {
    variant: {
      type: String,
      default: 'text'
    }
  }
}
</script>
