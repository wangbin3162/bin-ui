## Affix 图钉

<template>
    <div class="global-anchor">
      <b-anchor :scroll-offset="100">
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

原生滚动相对于window窗口固定，也可以结合scrollbar进行配置

::: demo
```html
<template>
    <b-affix :offset-top="80">
        <b-tag type="primary">固定在顶部80的位置</b-tag>
    </b-affix>
</template>
```
:::

### 顶部偏移

可以设置偏移量

::: demo
```html
<template>
    <b-affix :offset-top="150">
        <b-tag type="primary">固定在顶部150的位置</b-tag>
    </b-affix>
</template>
```
:::

### 固定状态事件

可以简体固定状态改变事件

::: demo
```html
<template>
    <b-affix :offset-top="200" @on-change="change">
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
