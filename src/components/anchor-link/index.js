import AnchorLink from '../anchor/anchor-link.vue'

/* istanbul ignore next */
AnchorLink.install = function (Vue) {
  Vue.component(AnchorLink.name, AnchorLink)
}

export default AnchorLink
