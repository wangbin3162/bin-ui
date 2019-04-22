<template>
  <transition name="back-top-fade">
    <div class="bin-back-top-up"
         v-show="show" :style="viewStyle"
         @click="toTop">
      <i class="iconfont icon-caret-up"></i>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'BBackTop',
    props: {
      show: Boolean,
      viewStyle: {}
    },
    methods: {
      toTop () {
        this.$emit('handleToTop')
      }
    }
  }
</script>
