<template>
  <i :class="['iconfont','icon-' + name]" :style="{'fontSize':size}"></i>
</template>

<script>
  export default {
    name: 'BIcon',

    props: {
      name: String,
      size: String
    }
  }
</script>
