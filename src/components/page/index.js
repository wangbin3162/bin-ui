import Page from './page.vue'

/* istanbul ignore next */
Page.install = function (Vue) {
  Vue.component(Page.name, Page)
}

export default Page
