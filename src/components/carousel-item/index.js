import CarouselItem from '../carousel/carousel-item.vue'

/* istanbul ignore next */
CarouselItem.install = function (Vue) {
  Vue.component(CarouselItem.name, CarouselItem)
}

export default CarouselItem
