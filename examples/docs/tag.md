## Tag 标签

<template>
    <div class="global-anchor">
      <b-anchor :scroll-offset="100">
        <b-anchor-link href="#ji-chu-yong-fa" title="基础用法"></b-anchor-link>
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
    <b-tag type="primary">标签二</b-tag>
    <b-tag type="success">标签二</b-tag>
    <b-tag type="info">标签三</b-tag>
    <b-tag type="warning">标签四</b-tag>
    <b-tag type="danger">标签五</b-tag>
</template>
```
:::

### 可移除标签

 设置`closable`属性可以定义一个标签是否可移除。

::: demo
```html
<template>
    <b-tag type="primary" closable>标签二</b-tag>
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
    <b-tag color="#722ed1" closable dot>color dot</b-tag>
</template>
```
:::

### 动态编辑标签

::: demo 设置`closable`属性可以定义一个标签是否可移除。
```html
<template>
    <b-tag
      :key="tag"
      v-for="tag in dynamicTags"
      closable
      @on-close="handleCloseTag(tag)">
      {{tag}}
    </b-tag>
    <b-button class="button-new-tag" size="small" @click="addOne">+ New Tag</b-button>
</template>
<script>
    export default {
        data () {
            return {
                dynamicTags: ['标签一', '标签二', '标签三'],
            }
        },
        methods: {
            handleCloseTag(tag) {
              this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1)
            },
            addOne() {
                this.dynamicTags.push('new tag');
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
    <b-tag size="medium" closable>中等标签</b-tag>
    <b-tag size="small" closable>小型标签</b-tag>
    <b-tag size="mini" closable>超小标签</b-tag>
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

### Events

| 事件名      | 说明    | 返回值      |
|---------- |-------- |---------- |
| on-close    | 关闭事件回调   | 无  |
| on-click    | 点击事件回调   | 无  |
