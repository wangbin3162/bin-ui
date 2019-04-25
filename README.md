# bin-ui

封装自定义组件库,基础操作等

组件示例请跳转[bin-ui](https://wangbin3162.github.io/bin-ui-doc/)

## 所有组件

### 基础

| 组件名 | 说明 | 备注 |
|----------|----------|----------|
| Icon | 图标 | 完成 |
| Button | 按钮 | 完成 |
| Transition | 过渡 | 完成 |

### 布局

| 组件名 | 说明 | 备注 |
|----------|----------|----------|
| Layout | 布局 | 添加row，col |
| Card | 卡片 | 完成 |
| ScrollBar | 滚动 | 完成 |
| BackTop | 返回顶部 | 完成 |
| Divider | 分割线 | 完成 |
| Collapse | 折叠面板 | — |
| Drager | 拖拽区域 | — |

### 数据

| 组件名 | 说明 | 备注 |
|----------|----------|----------|
| Table | 表格 | — |
| Page | 分页 | — |
| Tree | 树结构 | — |


### 视图

| 组件名 | 说明 | 备注 |
|----------|----------|----------|
| Modal | 模态框 | 完成 |
| Drawer | 抽屉 | 完成 |
| alert | 警告 | 完成 |
| message | 全局提示 | — |
| notice | 通知提醒 | — |
| tag | 标签 | 完成 |
| Tooltip | 文字提示 | — |
| Carousel | 走马灯 | — |

### 表单

| 组件名 | 说明 | 备注 |
|----------|----------|----------|
| Input	| 输入框 | — | | — |
| Radio	| 单选框 | — |
| Checkbox	| 多选框 | — |
| Switch| 开关 | — |
| Select| 	选择器 | — |
| Slider| 	滑块 | — |
| DatePicker| 日期选择 | — |
| TimePicker| 	时间选择 | — |
| Cascader| 级联选择 | — |
| InputNumber| 数字输入 | — |
| Rate| 评分 | — |
| Upload| 上传 | — |
| Form| 表单 | — |


### 导航

| 组件名 | 说明 | 备注 |
|----------|----------|----------|
| Menu	| 导航菜单 | — |
| Tabs	| 标签页 | — |
| Dropdown	| 下拉菜单 | — | 
| Breadcrumb| 	面包屑 | — |
| Badge	| 徽标 | — |
| LoadingBar| 	加载进度 | — |


### 其他

| 组件名 | 说明 | 备注 |
|----------|----------|----------|
| Directive |指令 | 	完成 | 
| Console | 控制台 | 完成 | 
| Velocity | 动画 | 完成 | 
| Lodash | 工具库 |	完成 | 




## 发布到npm

1.打包库文件

    "lib": "vue-cli-service build --target lib --name bin-ui --dest lib src/index.js"
    
2.打包样式文件

    gulp build
   
3.发包 

    npm login 
    npm publish

