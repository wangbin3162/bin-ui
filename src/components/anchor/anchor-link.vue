<template>
  <div :class="anchorLinkClasses">
    <a :class="linkTitleClasses" :href="href" :data-href="href" :style="activeColor"
       @click.prevent="goAnchor" :title="title">{{ title }}</a>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'BAnchorLink',
  inject: ['anchorCom'],
  props: {
    href: String,
    title: String,
    scrollOffset: {
      type: Number,
      default() {
        return this.anchorCom.scrollOffset
      }
    }
  },
  data() {
    return {
      prefix: 'bin-anchor-link'
    }
  },
  computed: {
    anchorLinkClasses() {
      return [
        this.prefix,
        this.anchorCom.currentLink === this.href ? `${this.prefix}-active` : ''
      ]
    },
    linkTitleClasses() {
      return [
        `${this.prefix}-title`
      ]
    },
    activeColor() {
      return {
        color: this.anchorCom.currentLink === this.href ? this.anchorCom.activeColorStr : null
      }
    }
  },
  methods: {
    goAnchor() {
      this.currentLink = this.href
      this.anchorCom.chooseLink(this.currentLink)
    }
  }
}
</script>
