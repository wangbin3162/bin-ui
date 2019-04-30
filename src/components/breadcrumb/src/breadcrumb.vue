<template>
  <div class="bin-breadcrumb" aria-label="Breadcrumb" role="navigation">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'BBreadcrumb',
    props: {
      separator: {
        type: String,
        default: '/'
      },
      separatorIcon: {
        type: String,
        default: ''
      }
    },
    provide () {
      return {
        elBreadcrumb: this
      }
    },
    mounted () {
      const items = this.$el.querySelectorAll('.bin-breadcrumb__item')
      if (items.length) {
        items[items.length - 1].setAttribute('aria-current', 'page')
      }
    }
  }
</script>
