## ScrollBar 滚动

<template>
    <div style="position: absolute;top:20px;right:40px;width:200px;">
      <b-anchor>
        <b-anchor-link href="#yong-fa" title="用法"></b-anchor-link>
        <b-anchor-link href="#shi-yong-tie-shi" title="使用贴士"></b-anchor-link>
        <b-anchor-link href="#attributes" title="Attributes"></b-anchor-link>
      </b-anchor>
    </div>
</template>

由于默认浏览器滚动条极为丑陋切不同浏览器之间样式不统一，故封装一个滚动组件用于实现滚动

### 用法

使用`b-scrollbar`进行包裹，默认`slot`为内容显示区域,如当前示例所包含的滚动结构如下:

```html
<div class="page-container" flex-box="1">
    <b-scrollbar style="height:100%;" ref="componentScrollBar">
      <router-view></router-view>
      <main-footer></main-footer>
    </b-scrollbar>
    <b-back-top :show="showBackToTop" @handleToTop="toTop"></b-back-top>
</div>
```

注意：如果内容区域不超过容器高度则不会生成滚动条

### 使用贴士

    1.b-scrollbar的父层要有固定高度
    2.b-scrollbar的高度要设成100%
    3.如果出现横滚动条，请添加css（.bin-scrollbar__wrap{overflow-x:hidden;}）
    
### Attributes
    
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| normal    | 是否采用原生滚动 (隐藏原生滚动条)  | boolean    | true | false   |
| always    | 是否一直显示(默认悬停显示)  | boolean    | true | false   |
| wrapStyle    | 内联方式 自定义wrap容器的样式  | Object    | - | {}   |
| wrapClass    | 类名方式 自定义wrap容器的样式  | Object    | - | {}   |
| viewClass    | 类名方式 自定义view容器的样式  | Object    | - | {}   |
| viewStyle    | 内联方式 自定义view容器的样式  | Object    | - | {}   |
| barStyle    | 滚动条thumb样式  | Object    | - | {}   |
| barWrapStyle    | 滚动条bar样式  | Object    | - | {}   |
| noresize    | 如果 container 尺寸不会发生变化，最好设置它可以优化性能  | boolean    | true | false   |


