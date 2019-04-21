// 核心插件
import corePlugin from './plugin/corePlugin'
import Icon from '../packages/icon/index.js'
import Button from '../packages/button/index.js'
import ButtonGroup from '../packages/button-group/index.js'
import ScrollBar from '../packages/scrollbar/index.js'
import BackTop from '../packages/back-top/index.js'
import Card from '../packages/card/index.js'
import Divider from '../packages/divider/index.js'

const components = [
  Icon, Button, ButtonGroup, ScrollBar, BackTop, Card, Divider
]

const install = function (Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })

  Vue.use(corePlugin)
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  Icon,
  Button,
  ButtonGroup,
  ScrollBar,
  BackTop,
  Card,
  Divider
}
