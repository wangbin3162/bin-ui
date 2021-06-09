## Affix 图钉

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
    <b-affix :offset-top="200" @change="change">
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
| change    | 在固定状态发生改变时触发   | true/false  |

### Slot

| 名称      | 说明    |
|---------- |-------- |
| default     | 警告提示内容   |
