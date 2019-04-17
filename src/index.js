// 核心插件
import V2Plugin from './plugin/v2plugin'
import Icon from '../packages/icon/index.js'
import Button from '../packages/button/index.js'
import ButtonGroup from '../packages/button-group/index.js'

const components = [
  Icon, Button, ButtonGroup
]

const install = function (Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })

  Vue.use(V2Plugin)
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  version: '0.1.1',
  install,
  ...components
}
