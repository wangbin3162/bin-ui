import Progress from './src/progress.vue';

/* istanbul ignore next */
Progress.install = function (Vue) {
  Vue.component(Progress.name, Progress)
}

export default Progress;
