## Anchor 锚点

<template>
    <div class="global-anchor">
      <b-anchor :scroll-offset="100">
        <b-anchor-link href="#ji-chu-yong-fa" title="基础用法"></b-anchor-link>
        <b-anchor-link href="#zi-ding-yi-tu-biao-he-bu-gu-ding" title="自定义图标和不固定"></b-anchor-link>
      </b-anchor>
    </div>
</template>

### 基础用法

锚点主要应用于滚动导航，这里推荐配合scrollbar使用已达到良好的效果，可以通过设置`icon`来设置小圆点为自定义图标

::: demo 
```html
<template>
  <div style="overflow: hidden;border:1px solid #eee;">
    <b-affix :offset-top="100">
      <b-anchor show-ink style="margin-left:20px;">
        <b-anchor-link href="#ji-chu-yong-fa" title="基础用法"></b-anchor-link>
        <b-anchor-link href="#zi-ding-yi-tu-biao-he-bu-gu-ding" title="自定义图标和不固定"></b-anchor-link>
      </b-anchor>
    </b-affix>
  </div>
</template>
```
:::

### 自定义图标和不固定

可以通过设置`icon`来设置小圆点为自定义图标

::: demo 
```html
<template>
  <div style="overflow: hidden;border:1px solid #eee;">
    <div style="padding: 20px;width:400px;background-color: #fff;">
      <b-anchor icon="ios-heart">
        <b-anchor-link href="#basic_usage" title="基础用法"></b-anchor-link>
        <b-anchor-link href="#static_position" title="静态位置"></b-anchor-link>
        <b-anchor-link href="#API" title="API">
            <b-anchor-link href="#Anchor_props" title="Anchor props"></b-anchor-link>
            <b-anchor-link href="#Anchor_events" title="Anchor events"></b-anchor-link>
            <b-anchor-link href="#AnchorLink_props" title="AnchorLink props"></b-anchor-link>
        </b-anchor-link>
      </b-anchor>
    </div>
  </div>
</template>
```
:::

### Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| icon     | 是否设置自定义图标   | string  |  —   |   —   |
| offsetTop     | 距离窗口顶部达到指定偏移量后触发   | Number  |  —   | 0 |
| bounds     | 锚点区域边界   | Number  |  —   | 5 |
| showInk     | 是否显示小圆点   | Boolean	  |  —   | false |
| scrollOffset     | 点击滚动的额外距离   | Number  |  —   | 0 |


### Events

| 事件名      | 说明    | 返回值      |
|---------- |-------- |---------- |
| on-select    | 点击锚点时触发，返回链接   | href  |

### AnchorLink props 

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| href     | 锚点链接   | String  |  —   |  — |
| title     | 文字内容   | String  |  —   |  — |
