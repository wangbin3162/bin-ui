## 快速上手

本节将介绍如何在项目中使用 bin-ui。

### 引入 bin-ui

你可以引入整个 bin-ui，或是根据需要仅引入部分组件。我们先介绍如何引入完整的 bin-ui。

#### 完整引入

在 main.js 中写入以下内容：

```javascript
import Vue from 'vue'
import App from './App.vue'
import BinUI from 'bin-ui'
import 'bin-ui/lib/styles/index.css'

Vue.use(BinUI)

new Vue({
  el: '#app',
  render: h => h(App)
})
```

以上代码便完成了 bin-ui 的引入。需要注意的是，样式文件需要单独引入。

#### 按需引入

借助插件 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import)我们可以只引入需要的组件，以达到减小项目体积的目的

```shell script
npm install babel-plugin-import --save-dev
```

然后，将 .babelrc 或 babel.config.js修改为：

```javascript
module.exports = {
  presets: [
    ['@vue/app', {
      useBuiltIns: 'entry'
    }]
  ],
  plugins: [
    ["import", {
     "libraryName": "bin-ui",
     "libraryDirectory": "src/components"
    }]
  ]
}
```

如果你只希望引入部分组件，比如 Button 和 Icon，那么需要在 main.js 中写入以下内容

```javascript
import Vue from 'vue';
import { Button, Message, Icon } from 'bin-ui'
import waves from 'bin-ui/src/directive/waves' // 引入指令

Vue.component(Button.name,Button)
Vue.component(Icon.name,Icon)
Vue.directive('waves', waves)  // 注册全局指令
Vue.prototype.$message = Message.message // 注册全局message方法
/* 或写为
 * Vue.use(Button)
 * Vue.use(Icon)
 */

new Vue({
  el: '#app',
  render: h => h(App)
});
```

**特别提醒:按需引用仍然需要导入样式，即在 main.js 或根组件 import 'bin-ui/lib/styles/index.css';**

完整组件列表

```javascript
import {
    Row,
    Col,
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
    Tabs,
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
    ColorPicker,
    Timeline,
    TimelineItem,
    Affix,
    Anchor,
    AnchorLink,
    Carousel,
    CarouselItem,
    Calendar
} from 'bin-ui';
```

### 开始使用

至此，一个基于 Vue 和 bin-ui 的开发环境已经搭建完毕。各个组件的使用方法请参阅它们各自的文档。

