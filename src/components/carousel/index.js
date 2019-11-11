import Carousel from './carousel.vue'
import CarouselItem from './carousel-item.vue'

/* istanbul ignore next */
Carousel.install = function (Vue) {
  Vue.component(Carousel.name, Carousel)
}

Carousel.Item = CarouselItem
export default Carousel
