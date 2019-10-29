## Affix 图钉

<template>
    <div style="position: absolute;top:20px;right:40px;width:200px;">
      <b-anchor>
        <b-anchor-link href="#ji-chu-yong-fa" title="基础用法"></b-anchor-link>
        <b-anchor-link href="#ding-bu-pian-yi" title="顶部偏移"></b-anchor-link>
        <b-anchor-link href="#gu-ding-zhuang-tai-shi-jian" title="固定状态事件"></b-anchor-link>
        <b-anchor-link href="#attributes" title="Attributes"></b-anchor-link>
        <b-anchor-link href="#events" title="Events"></b-anchor-link>
        <b-anchor-link href="#slot" title="Slot"></b-anchor-link>
      </b-anchor>
    </div>
</template>

### 基础用法

建议配合scrollbar组件已达到良好的显示效果，原生滚动暂未测试存在问题，相对于当前滚动窗口固定图钉

::: demo
```html
<template>
    <b-affix>
        <b-tag type="primary">固定在顶部的位置</b-tag>
    </b-affix>
</template>
```
:::

### 顶部偏移

可以设置偏移量

::: demo
```html
<template>
    <b-affix :offset-top="100">
        <b-tag type="primary">固定在顶部100的位置</b-tag>
    </b-affix>
</template>
```
:::

### 固定状态事件

可以简体固定状态改变事件

::: demo
```html
<template>
    <b-affix :offset-top="150" @on-change="change">
        <b-tag type="primary">固定状态触发事件</b-tag>
    </b-affix>
</template>

<script>
    export default {
        methods: {
            change (status) {
                this.$message(`Status: ${status}`);
            }
        }
    }
</script>
```
:::

### Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| offset-top     | 距离窗口顶部达到指定偏移量后触发   | Number  |  —   |   0  |
| z-index    | 层级   | Number  |  —   |   10  |

### Events

| 事件名      | 说明    | 返回值      |
|---------- |-------- |---------- |
| on-change    | 在固定状态发生改变时触发   | true/false  |

### Slot

| 名称      | 说明    |
|---------- |-------- |
| default     | 警告提示内容   |
