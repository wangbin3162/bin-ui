// 核心插件
import corePlugin from './plugin/corePlugin'
import Icon from './components/icon/index.js'
import Button from './components/button/index.js'
import ButtonGroup from './components/button-group/index.js'
import ScrollBar from './components/scrollbar/index.js'
import BackTop from './components/back-top/index.js'
import Card from './components/card/index.js'
import Divider from './components/divider/index.js'

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
