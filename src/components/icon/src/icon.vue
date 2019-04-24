<template>
  <i :class="['iconfont','icon-' + name]" :style="iconSize"></i>
</template>

<script>
  export default {
    name: 'BIcon',
    props: {
      name: String,
      size: String
    },
    computed: {
      iconSize () {
        return this.size ? {'fontSize': this.size.indexOf('px') > -1 ? this.size : `${this.size}px`} : {}
      }
    }
  }
</script>
