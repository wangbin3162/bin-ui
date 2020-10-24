import BigTree from '../tree/big-tree'

/* istanbul ignore next */
BigTree.install = function (Vue) {
  Vue.component(BigTree.name, BigTree)
}

export default BigTree
