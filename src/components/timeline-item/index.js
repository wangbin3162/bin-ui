import TimelineItem from '../timeline/timeline-item.vue'

/* istanbul ignore next */
TimelineItem.install = function (Vue) {
  Vue.component(TimelineItem.name, TimelineItem)
}

export default TimelineItem
