## 加载进度

获取数据或加载中时显示，提示用户正在等待中。

### 基础用法

最简单的Loading

:::demo 

```html
<template>
   <b-loading></b-loading>
</template>
```
:::

### 居中固定

可以在父级元素中居中固定

:::demo 
```html
<template>
  <div class="demo-loading">
    <div>我是后面的段落我是后面的段落我是后面的段落我是后面的段落</div>
   <b-loading fix></b-loading>
  </div>
</template>
```
:::

### 自定义内容

可以自定义文字和内容

:::demo 
```html
<template>
  <div class="demo-loading">
   <b-loading fix>加载中</b-loading>
  </div>
  <div class="demo-loading">
   <b-loading fix show-text="loading"></b-loading>
  </div>
  <div class="demo-loading">
   <b-loading fix show-text="loading" show-icon="loading"></b-loading>
  </div>
</template>
```
:::

### 切换显示状态

切换显示状态

:::demo 
```html
<template>
<div class="demo-loading">
 <div>我是后面的段落我是后面的段落我是后面的段落我是后面的段落</div>
 <b-loading fix v-if="spinShow"></b-loading>
</div>
<div>
 <b-button @click="spinShow=true">加载</b-button>
 <b-button type="danger" @click="spinShow=false">停止</b-button>
</div>
</template>
<script>
  export default {
      data () {
          return {
              spinShow: true
          }
      }
  }
</script>
```
:::

### Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| showIcon     |  显示加载图标   | String  |   loading        |   —   |
| showText   |  显示加载的文字   | String  |   loading  |  —    |
| fix   |  是否固定于父级中心   | Boolean  |   —   | false   |
| size  |  文字显示的大小  | Number  |   —   |  —    |
