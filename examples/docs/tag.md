## Tag 标签

<template>
    <div class="global-anchor">
      <b-anchor :scroll-offset="100">
        <b-anchor-link href="#ji-chu-yong-fa" title="基础用法"></b-anchor-link>
        <b-anchor-link href="#duo-chong-yan-se" title="多种颜色"></b-anchor-link>
        <b-anchor-link href="#ke-xuan-ze-biao-qian" title="可选择标签"></b-anchor-link>
        <b-anchor-link href="#ke-yi-chu-biao-qian" title="可移除标签"></b-anchor-link>
        <b-anchor-link href="#dot-mo-shi" title="dot 模式"></b-anchor-link>
        <b-anchor-link href="#zi-ding-yi-yang-shi" title="自定义样式"></b-anchor-link>
        <b-anchor-link href="#attributes" title="Attributes"></b-anchor-link>
        <b-anchor-link href="#events" title="Events"></b-anchor-link>
      </b-anchor>
    </div>
</template>

显示标签

### 基础用法

由`type`属性来选择`tag`的类型，也可以通过`color`属性来自定义背景色。

::: demo 
```html
<template>
<div>
    <b-tag>default</b-tag>
    <b-tag type="primary">primary</b-tag>
    <b-tag type="success">success</b-tag>
    <b-tag type="info">info</b-tag>
    <b-tag type="warning">warning</b-tag>
    <b-tag type="danger">danger</b-tag>
</div>
</template>
```
:::

### 多种颜色

由`dark`属性来设置深色模式,并可以设置更多颜色类型的标签

::: demo 
```html
<template>
<div>
    <b-tag  size="mini">default</b-tag>
    <b-tag type="primary" dark size="mini">primary</b-tag>
    <b-tag type="success" dark size="mini">success</b-tag>
    <b-tag type="info" dark size="mini">info</b-tag>
    <b-tag type="warning" dark size="mini">warning</b-tag>
    <b-tag type="danger" dark size="mini">danger</b-tag>
    <b-tag type="magenta" size="mini">magenta</b-tag>
    <b-tag type="red" size="mini">red</b-tag>
    <b-tag type="volcano" size="mini">volcano</b-tag>
    <b-tag type="orange" size="mini">orange</b-tag>
    <b-tag type="gold" size="mini">gold</b-tag>
    <b-tag type="yellow" size="mini">yellow</b-tag>
    <b-tag type="lime" size="mini">lime</b-tag>
    <b-tag type="green" size="mini">green</b-tag>
    <b-tag type="cyan" size="mini">cyan</b-tag>
    <b-tag type="blue" size="mini">blue</b-tag>
    <b-tag type="geekblue" size="mini">geekblue</b-tag>
    <b-tag type="purple" size="mini">purple</b-tag>
</div>
</template>
```
:::

### 可选择标签

 设置`checkable`属性可以定义一个标签是否可可选择。

::: demo
```html
<template>
    <b-tag type="primary" dark size="mini" checkable><span>primary</span></b-tag>
    <b-tag type="success" dark size="mini" checkable>success</b-tag>
    <b-tag type="info" dark size="mini" checkable>info</b-tag>
    <b-tag type="warning" dark size="mini" checkable>warning</b-tag>
    <b-tag type="danger" dark size="mini" checkable>danger</b-tag>
    <b-tag type="magenta" size="mini" dark checkable>magenta</b-tag>
    <b-tag type="red" size="mini" dark checkable>red</b-tag>
    <b-tag type="volcano" size="mini" dark checkable>volcano</b-tag>
    <b-tag type="orange" size="mini" dark checkable>orange</b-tag>
    <b-tag type="gold" size="mini" dark checkable>gold</b-tag>
    <b-tag type="yellow" size="mini" dark checkable>yellow</b-tag>
    <b-tag type="lime" size="mini" dark checkable>lime</b-tag>
    <b-tag type="green" size="mini" dark checkable>green</b-tag>
    <b-tag type="cyan" size="mini" dark checkable>cyan</b-tag>
    <b-tag type="blue" size="mini" dark checkable>blue</b-tag>
    <b-tag type="geekblue" size="mini" dark checkable>geekblue</b-tag>
    <b-tag type="purple" size="mini" dark checkable>purple</b-tag>
</template>
```
:::

### 可移除标签

 设置`closable`属性可以定义一个标签是否可移除。

::: demo
```html
<template>
    <b-tag type="primary" closable>标签一</b-tag>
    <b-tag type="success" closable>标签二</b-tag>
    <b-tag type="info" closable>标签三</b-tag>
    <b-tag type="warning" closable>标签四</b-tag>
    <b-tag type="danger" closable>标签五</b-tag>
</template>
```
:::

### dot 模式

dot 模式简单显示

::: demo 设置`dot`属性可以定义一个标签是否可移除。
```html
<template>
    <b-tag dot>dot</b-tag>
    <b-tag type="primary" no-border dot>no-border-dot</b-tag>
    <b-tag type="success" dot no-border>type dot</b-tag>
    <b-tag color="#13c2c2" closable dot>color dot</b-tag>
</template>
```
:::

### 动态编辑标签

::: demo 设置`closable`属性可以定义一个标签是否可移除。
```html
<template>
    <div>
      <b-button class="button-new-tag" size="small" @click="addOne">+ New Tag</b-button>
        <p>
            <b-tag
              :key="tag"
              v-for="tag in dynamicTags"
              closable
              @on-close="handleCloseTag(tag)">
              {{tag}}
            </b-tag>
        </p>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                dynamicTags: ['标签一', '标签二', '标签三'],
                count: 0
            }
        },
        methods: {
            handleCloseTag(tag) {
              this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1)
            },
            addOne() {
                this.count++
                this.dynamicTags.push('new tag'+this.count);
            }
        }
    }
</script>
```
:::

### 自定义样式

具有多种自定义样式的方式可供选择

::: demo 
```html
<template>
    <b-tag color="#ffa2d3">Custom Color</b-tag>
    <b-tag type="primary" no-border font-size="14px">No Border</b-tag>
    <b-tag :tag-style="{backgroundColor: '#5AFAFC',color:'#606266'}">Style</b-tag>
    <b-tag closable>Default</b-tag>
    <b-tag size="small" closable>Small</b-tag>
    <b-tag size="mini" closable>Mini</b-tag>
</template>
```
:::

### Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| closable     | 是否可关闭   | boolean  |   —            |    false    |
| type     | 主题   | string  |   success/info/warning/danger     |    —         |
| dot     |  是否显示是小圆点   | boolean  |   —         |    false       |
| no-border     |  是否关闭边框   | boolean  |   —         |    false       |
| color    |  背景颜色(可自定义)   | String  |   —         |    —          |
| size    |  尺寸   | String  |   medium / small / mini       |    —          |
| fontSize    |  字体大小   | String  |    —      |    —          |
| tag-style    |  标签样式(完全控制，尽量不要设置)   | String  |    —      |    —          |
| checkable    |  是否可选中   | Boolean  |    —      |   false       |
| default-value |  默认选中状态   | Boolean  |    —      |   true        |

### Events

| 事件名      | 说明    | 返回值      |
|---------- |-------- |---------- |
| on-close    | 关闭事件回调   | event  |
| on-click    | 点击事件回调   | event  |
| on-change   | 选中事件回调,第二项需要设置name值   | checked,name  |
