<template>
  <i :class="['iconfont','icon-' + name]" :style="style"></i>
</template>

<script>
  export default {
    name: 'BIcon',
    props: {
      name: String,
      size: [Number, String],
      color: String
    },
    computed: {
      style () {
        let style = {}
        if (this.size) {
          style['font-size'] = `${this.size}px`
        }
        if (this.color) {
          style.color = this.color
        }
        return style
      }
    }
  }
</script>
