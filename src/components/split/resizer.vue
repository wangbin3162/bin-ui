<template>
  <div :class="classes"></div>
</template>

<script>
  export default {
    props: {
      split: {
        validator(value) {
          return ['vertical', 'horizontal'].indexOf(value) >= 0
        },
        required: true
      },
      className: String
    },
    computed: {
      classes() {
        const classes = ['bin-splitter-pane-resizer', this.split, this.className]
        return classes.join(' ')
      }
    }
  }
</script>
