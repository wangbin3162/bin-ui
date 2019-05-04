## Switch 开关

在两种状态间切换时用到的开关选择器。

### 基础用法

::: demo
```html  
<template>
  <b-switch v-model="switch1" @on-change="change"></b-switch>
</template>
<script>
    export default {
        data () {
            return {
                switch1: false,
                disabled: true
            }  
        },
        methods: {
            change (status) {
                this.$message('开关状态：' + status);
            }
        }
    }
</script>
```
:::

### 大小及颜色

::: demo
```html  
<template>
    <b-switch size="large"></b-switch>&nbsp;
    <b-switch></b-switch>&nbsp;
    <b-switch size="small"></b-switch>&nbsp;
    <b-switch active-color="#13ce66" inactive-color="#ff4949"></b-switch>
</template>
```
:::

### 文字或图标

::: demo
```html  
<template>
    <b-switch>
      <span slot="open">开</span>
      <span slot="close">关</span>
    </b-switch>&nbsp;
    <b-switch>
        <b-icon name="ios-checkmark" slot="open"></b-icon>
        <b-icon name="ios-close" slot="close"></b-icon>
    </b-switch>
    <br><br>
    <b-switch size="large">
        <span slot="open">开启</span>
        <span slot="close">关闭</span>
    </b-switch>&nbsp;
    <b-switch size="large">
        <span slot="open">ON</span>
        <span slot="close">OFF</span>
    </b-switch>
</template>
```
:::



### 禁用

::: demo
```html  
<template>
  <b-switch :disabled="disabled"></b-switch>&nbsp;
  <b-button type="primary" @click="disabled = !disabled" size="mini">Toggle Disabled</Button>
</template>
```
:::

### Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value     | 指定当前是否选中，可以使用 v-model 双向绑定数据   | Boolean  |  —   |  false   |
| size     | 开关的尺寸。建议开关如果使用了2个汉字的文字，使用 large。   | String  |  large、small、default   |  default   |
| disabled     | 禁用开关	   | Boolean  |  —   |  false   |
| true-value     | 选中时的值，当使用类似 1 和 0 来判断是否选中时会很有用	   | String, Number, Boolean  |  —   |  true   |
| false-value	 | 没有选中时的值，当使用类似 1 和 0 来判断是否选中时会很有用	   | String, Number, Boolean  |  —   |  false   |
| active-color	 | switch 打开时的背景色	   | string |  —   |   —    |
| inactive-color | switch 关闭时的背景色	   | string |  —   |   —    |

### Switch events

| 事件名      | 说明    | 返回值      |
|---------- |-------- |---------- |
| on-change     | 开关变化时触发，返回当前的状态   | true、false  |

### Switch slot

| 事件名      | 说明    |
|---------- |-------- |
| open  | 自定义显示打开时的内容  |
| close  | 自定义显示关闭时的内容  |
