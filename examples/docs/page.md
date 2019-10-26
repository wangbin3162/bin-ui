## Page 分页器

### 基础用法

::: demo
```html
<template>
   <b-page :total="100" :current.sync="current"></b-page>
</template>
<script>
export default {
  data(){
    return{
      current:2
    }
  }
}
</script>
```
:::

### 每页数量

::: demo
```html
<template>
   <b-page :total="100" show-sizer></b-page>
</template>
```
:::

### 电梯

::: demo
```html
<template>
   <b-page :total="100" show-elevator></b-page>
</template>
```
:::

### 总数

::: demo
```html
<template>
   <b-page :total="100" show-total></b-page>
</template>
```
:::

### mini型

::: demo
```html
<template>
   <b-page :total="100" size="small" show-elevator show-sizer show-total></b-page>
</template>
```
:::

### 上一页 下一页文字

::: demo
```html
<template>
   <b-page :total="40" prev-text="上一页" next-text="下一页"></b-page>
</template>
```
:::

### 简洁模式

::: demo
```html
<template>
   <b-page :current="2" :total="50" simple></b-page>
</template>
```
:::

### Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| current     |  当前页码 .sync  |  Number	  |  —   |  1   |
| total     |  数据总数  |  Number	  |  —   |  0   |
| page-size  |  每页条数  |  Number	  |  —   |  10   |
| page-size-opts  |  每页条数切换的配置  |  Array	  |  —   |  [10, 20, 30, 40]   |
| placement  |  条数切换弹窗的展开方向  |  string	  | bottom 和 top  |  bottom |
| size  |  可选值为small（迷你版）或不填（默认）  |  string	  | —   | —  |
| simple  | 简洁版 |  Boolean	  | —   |  false  |
| show-total  | 显示总数 |  Boolean	  | —   |  false  |
| show-elevator  | 显示电梯，可以快速切换到某一页 |  Boolean	  | —   |  false  |
| show-sizer | 显示分页，用来改变page-size |  Boolean	  | —   |  false  |
| class-name | 自定义 class 名称 |  String	  | —   |  —  |
| styles | 自定义 style 样式 |  Object	  | —   |  —  |
| prev-text | 替代图标显示的上一页文字 |  String	  | —   |  —  |
| next-text | 替代图标显示的下一页文字 |  String	  | —   |  —  |


### Events

| 事件名      | 说明    | 返回值      |
|---------- |-------- |---------- |
| on-change   | 页码改变的回调，返回改变后的页码   | 页码  |
| on-page-size-change   | 切换每页条数时的回调，返回切换后的每页条数   | page-size  |

### Slot

| 名称      | 说明    |
|---------- |-------- |
| default     | 自定义显示总数的内容   |
