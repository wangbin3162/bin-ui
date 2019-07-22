## Container容器

### 基础用法

::: demo 可以开启返回顶部按钮，这里返回顶部样式和滚动条样式可以使用css样式覆盖
```html   
<template>
  <div style="height:500px;overflow: hidden;border:1px solid #eee;">
    <b-container ref="container" header-fixed>
        <div slot="header">固定头部</div>
        <div class="container-wrap" style="padding:20px;">
          <div class="info">
            <h2>bin-container</h2>
            <p>
              bin-container 是封装的滚动容器组件，这里基于bin-ui的b-scrollbar 标签来实现超出滚动，并可配置是否有返回顶部，并且可以通过指定方法来
              滚动到固定位置
            </p>
            <div>
              <b-button @click="scrollTo300" type="primary">滚动到距离顶部300px</b-button>
              <b-button @click="scrollToDom" type="primary">滚动到第10行内容</b-button>
            </div>
    
            <p>我们还可以使用 `header-fixed` `footer-fixed`两个属性配合slot 的header footer来给容器增加固定的头和底部，或者是只添加插槽来插入可滚动的头和底部</p>
            <div style="padding: 20px; background: #eee;">
              <div v-for="item in 50" :key="item" ref="item">{{item}}:这是用来撑开内容的行...</div>
            </div>
          </div>
        </div>
        <div slot="footer">底部快捷栏(不使用footer-fixed则默认为文档流底部)</div>
    </b-container>
  </div>
</template>
<script>
  export default {
    methods: {
      scrollTo300 () {
        this.$refs.container.scrollTo(300)
      },
      scrollToDom () {
        let items = this.$refs.item
        this.$refs.container.scrollTo(items[9].offsetTop)
      }
    }
  }
</script>
```
:::

### Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| bgColor     |  容器背景颜色   | string  |  —   |   #fff   |
| showBackTop    |  是否开启返回顶部按钮   | boolean  |  —   |   true   |
| headerFixed    |  是否固定头部   | boolean  |  —   |   false   |
| footerFixed    |  是否固定底部   | boolean  |  —   |   false   |
| fixedHeaderHeight    |  头部的高度   | String  |  —   |   50px   |
| fixedFooterHeight    |  底部的高度   | String  |  —   |   50px   |
| wrapStyle    |  容器样式自定义,可以控制间距边框颜色等等   | Object  |  —   |   {}   |

### methods

| 事件名      | 说明    | 返回值      |
|---------- |-------- |---------- |
| scrollTo    | 触发滚动到某个位置   |  -  |

### Slot

| 名称      | 说明    |
|---------- |-------- |
| default     | 滚动内容   |
| header     | 头部的插入内容   |
| footer     | 底部的插入内容   |
| backTop     | 返回顶部的插入内容，这里主要为了插入不同的<b-back-top>组件来自定义返回顶部按钮样式   |
