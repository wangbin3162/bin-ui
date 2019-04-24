import Tag from './src/main'

/* istanbul ignore next */
Tag.install = function (Vue) {
  Vue.component(Tag.name, Tag)
}

export default Tag
