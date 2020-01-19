## 快速上手

本节将介绍如何在项目中使用 bin-ui。

### 引入 bin-ui

你可以引入整个 bin-ui，或是根据需要仅引入部分组件。我们先介绍如何引入完整的 bin-ui。

#### 完整引入

在 main.js 中写入以下内容：

```javascript
import Vue from 'vue';
import BinUI from 'bin-ui';
import 'bin-ui/lib/style/index.css';
import App from './App.vue';

Vue.use(BinUI);

new Vue({
  el: '#app',
  render: h => h(App)
});
```

以上代码便完成了 bin-ui 的引入。需要注意的是，样式文件需要单独引入。

#### 按需引入

借助 [babel-plugin-component](https://github.com/ElementUI/babel-plugin-component)，我们可以只引入需要的组件，以达到减小项目体积的目的。

首先，安装 babel-plugin-component：

```shell script
npm install babel-plugin-component -D
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
    [
      'component',
      {
        'libraryName': 'bin-ui',
        'styleLibraryName': 'styles'
      }
    ]
  ]
}
```

如果你只希望引入部分组件，比如 Button 和 Select，那么需要在 main.js 中写入以下内容：

```javascript
import Vue from 'vue';
import { Button, Select } from 'bin-ui';
import App from './App.vue';

Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
/* 或写为
 * Vue.use(Button)
 * Vue.use(Select)
 */

new Vue({
  el: '#app',
  render: h => h(App)
});
```

完整组件列表

```javascript
import {
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
  ColorPicker,
  Timeline,
  TimelineItem,
  Affix,
  Anchor,
  AnchorLink,
  Carousel,
  CarouselItem
} from 'bin-ui';
```

### 开始使用

至此，一个基于 Vue 和 bin-ui 的开发环境已经搭建完毕。各个组件的使用方法请参阅它们各自的文档。

