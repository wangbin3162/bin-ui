// 核心插件
import corePlugin from './plugin/core'
import CollapseTransition from './components/base/collapse-transition'
import Icon from './components/icon/index.js'
import Button from './components/button/index.js'
import ButtonGroup from './components/button-group/index.js'
import ScrollBar from './components/scrollbar/index.js'
import BackTop from './components/back-top/index.js'
import Card from './components/card/index.js'
import Divider from './components/divider/index.js'
import Modal from './components/modal/index.js'
import Drawer from './components/drawer/index.js'
import Tag from './components/tag/index.js'
import Circle from './components/circle/index.js'
import Progress from './components/progress/index.js'
import Alert from './components/alert/index.js'
import Loading from './components/loading/index.js'
import Collapse from './components/collapse'
import CollapsePanel from './components/collapse/panel'
import Breadcrumb from './components/breadcrumb'
import breadcrumbItem from './components/breadcrumb/item'
import Badge from './components/badge/index.js'
import Input from './components/input/index.js'
import InputNumber from './components/input-number/index.js'
import Rate from './components/rate/index.js'
import Switch from './components/switch/index.js'
import Checkbox from './components/checkbox/index.js'
import CheckboxGroup from './components/checkbox-group/index.js'
// 全局注册的实例不需要放入components下
import LoadingBar from './components/loadingbar/index.js'
import Message from './components/message/index.js'

const components = [
  Icon, Button, ButtonGroup, ScrollBar,
  BackTop, Card, Divider, Modal, Drawer,
  Tag, Progress, Circle, Alert, Loading,
  CollapseTransition, Collapse, CollapsePanel, Badge, Breadcrumb, breadcrumbItem,
  Input, InputNumber, Rate, Switch, Checkbox, CheckboxGroup
]

const install = function (Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
  // 注册全局的组件实例
  Vue.prototype.$loading = LoadingBar
  Vue.prototype.$message = Message.message
  // 模态框实例及快捷方法
  Vue.prototype.$modal = Modal
  Vue.prototype.$alert = Modal.alert
  Vue.prototype.$confirm = Modal.confirm

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
  Divider,
  Modal,
  Drawer,
  Tag,
  Progress,
  Circle,
  Alert,
  Loading,
  CollapseTransition,
  Collapse, CollapsePanel,
  Breadcrumb, breadcrumbItem,
  LoadingBar,
  Message,
  Badge,
  Input,
  InputNumber,
  Rate,
  Switch, Checkbox, CheckboxGroup
}
