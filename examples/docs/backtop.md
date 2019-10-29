## BackTop 返回顶部

<template>
    <div style="position: absolute;top:20px;right:40px;width:200px;">
      <b-anchor>
        <b-anchor-link href="#yong-fa" title="用法"></b-anchor-link>
        <b-anchor-link href="#zi-ding-yi-yang-shi" title="自定义样式"></b-anchor-link>
        <b-anchor-link href="#attributes" title="Attributes"></b-anchor-link>
        <b-anchor-link href="#events" title="Events"></b-anchor-link>
      </b-anchor>
    </div>
</template>

当页面内容比较长滚动后需要快捷返回顶部时使用，一般放置在页面右下角位置。

注意：如嵌套在自定义滚动组件中使用则需要将 `BackTop` 组件放置于 `Scrollbar` 组件内部

### 用法

默认位置距离页面右部和底部 50px，滚动至距顶端 150px 时显示。可以自定义样式或者按钮触发

```html
<div class="page-container" flex-box="1">
    <b-scrollbar style="height:100%;" ref="componentScrollBar">
      <router-view></router-view>
      <main-footer></main-footer>
      <b-back-top></b-back-top>
    </b-scrollbar>
</div>
```

### 自定义样式

自定义了位置在页面底部 200px,滚动至距顶端 200px 时显示。

```html
<div class="page-container" flex-box="1">
    <b-scrollbar style="height:100%;" ref="componentScrollBar">
      <router-view></router-view>
      <main-footer></main-footer>
      <b-back-top :height="200" :bottom="200">
        <b-button size="mini" type="success">返回顶端</b-button>
      </b-back-top>
    </b-scrollbar>
</div>
```

### Attributes
    
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| height    | 页面滚动高度达到该值时才显示BackTop | Number    | — | 150   |
| bottom    | 组件距离底部的距离  | Number    | — | 50   |
| right    | 组件距离右部的距离  | Number    | — | 50   |
| duration    | 滚动动画持续时间，单位 毫秒  | Number    | — | 1000   |

### Events
    
| 事件名      | 说明    | 返回值      |
|---------- |-------- |---------- |
| on-click    | 点击按钮时触发 | 无    |

