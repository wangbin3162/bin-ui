import SkeletonItem from './item.vue'

SkeletonItem.install = (app) => {
  app.component(SkeletonItem.name, SkeletonItem)
}

export default SkeletonItem
