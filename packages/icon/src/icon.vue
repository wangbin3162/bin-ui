<template>
  <i :class="'icon-' + name"></i>
</template>

<script>
  export default {
    name: 'BIcon',

    props: {
      name: String
    }
  };
</script>
