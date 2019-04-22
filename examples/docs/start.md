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

### 开始使用

至此，一个基于 Vue 和 bin-ui 的开发环境已经搭建完毕。各个组件的使用方法请参阅它们各自的文档。

