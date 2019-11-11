// 核心插件
import corePlugin from './plugin/core'
// 组件
import CollapseTransition from './components/base/collapse-transition'
import Icon from './components/icon'
import Button from './components/button'
import ButtonGroup from './components/button-group'
import ScrollBar from './components/scrollbar'
import BackTop from './components/back-top'
import Card from './components/card'
import Divider from './components/divider'
import Modal from './components/modal'
import Drawer from './components/drawer'
import Tag from './components/tag'
import Circle from './components/circle'
import Progress from './components/progress'
import Alert from './components/alert'
import Loading from './components/loading'
import Collapse from './components/collapse'
import CollapsePanel from './components/collapse-panel'
import Breadcrumb from './components/breadcrumb'
import breadcrumbItem from './components/breadcrumb-item'
import Badge from './components/badge'
import Input from './components/input'
import InputNumber from './components/input-number'
import Rate from './components/rate'
import Switch from './components/switch'
import Checkbox from './components/checkbox'
import CheckboxGroup from './components/checkbox-group'
import Radio from './components/radio'
import RadioGroup from './components/radio-group'
import Tooltip from './components/tooltip'
import Form from './components/form'
import FormItem from './components/form-item'
import Container from './components/container'
import Dropdown from './components/dropdown'
import DropdownItem from './components/dropdown-item'
import DropdownMenu from './components/dropdown-menu'
import Select from './components/select'
import Option from './components/select-option'
import OptionGroup from './components/select-option-group'
import Cascade from './components/cascade'
import Table from './components/table'
import Page from './components/page'
import Tree from './components/tree'
import Menu from './components/menu'
import SubMenu from './components/submenu'
import MenuItem from './components/menu-item'
import MenuItemGroup from './components/menu-group'
import Upload from './components/upload'
import DatePicker from './components/date-picker'
import TimePicker from './components/time-picker'
import Timeline from './components/timeline'
import TimelineItem from './components/timeline-item'
import Affix from './components/affix'
import Anchor from './components/anchor'
import AnchorLink from './components/anchor-link'
import Carousel from './components/carousel'
import CarouselItem from './components/carousel-item'
// 全局注册的实例不需要放入components下
import LoadingBar from './components/loadingbar'
import Message from './components/message'

const components = [
  Icon, Button, ButtonGroup, ScrollBar,
  BackTop, Card, Divider, Modal, Drawer,
  Tag, Progress, Circle, Alert, Loading,
  CollapseTransition, Collapse, CollapsePanel, Badge, Breadcrumb, breadcrumbItem,
  Input, InputNumber, Rate, Switch, Checkbox, CheckboxGroup, Radio, RadioGroup, Tooltip,
  Form, FormItem,
  Container, Dropdown, DropdownItem, DropdownMenu,
  Select, Option, OptionGroup, Table, Page, Tree, Cascade,
  Menu, SubMenu, MenuItem, MenuItemGroup, Upload, DatePicker, TimePicker,
  Timeline, TimelineItem, Affix, Anchor, AnchorLink, Carousel, CarouselItem
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
  Collapse,
  CollapsePanel,
  Breadcrumb,
  breadcrumbItem,
  LoadingBar,
  Message,
  Badge,
  Input,
  InputNumber,
  Rate,
  Switch,
  Checkbox,
  CheckboxGroup,
  Radio,
  RadioGroup,
  Tooltip,
  Form,
  FormItem,
  Container,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Select,
  Option,
  OptionGroup,
  Cascade,
  Table,
  Page,
  Tree,
  Menu,
  SubMenu,
  MenuItem,
  MenuItemGroup,
  Upload,
  DatePicker,
  TimePicker,
  Timeline,
  TimelineItem,
  Affix,
  Anchor,
  AnchorLink,
  Carousel,
  CarouselItem
}
