## Button 按钮

<template>
    <div class="global-anchor">
      <b-anchor :scroll-offset="100">
        <b-anchor-link href="#ji-chu-yong-fa" title="基础用法"></b-anchor-link>
        <b-anchor-link href="#jin-yong-an-niu" title="禁用按钮"></b-anchor-link>
        <b-anchor-link href="#wen-zi-an-niu" title="文字按钮"></b-anchor-link>
        <b-anchor-link href="#an-niu-zu" title="按钮组"></b-anchor-link>
        <b-anchor-link href="#bu-tong-chi-cun" title="不同尺寸"></b-anchor-link>
        <b-anchor-link href="#jia-zai-zhuang-tai" title="加载状态"></b-anchor-link>
        <b-anchor-link href="#api" title="API">
            <b-anchor-link href="#attributes" title="Attributes"></b-anchor-link>
        </b-anchor-link>
      </b-anchor>
    </div>
</template>

常用的操作按钮。

### 基础用法

使用`type`、`plain`、`round`和`transparent`属性来定义 Button 的样式。

::: demo
```html
<template>
    <div class="demo-button">
      <b-button v-waves>Default</b-button>
      <b-button v-waves type="dashed">Dashed</b-button>
      <b-button type="primary" v-waves>Primary</b-button>
      <b-button type="success" v-waves>Success</b-button>
      <b-button type="info" v-waves>Info</b-button>
      <b-button type="warning" v-waves>Warning</b-button>
      <b-button type="danger" v-waves>Danger</b-button>
    </div>
    <div class="demo-button">
       <b-button plain>Default</b-button>
       <b-button type="primary" plain>Primary</b-button>
       <b-button type="success" plain>Success</b-button>
       <b-button type="info" plain>Info</b-button>
       <b-button type="warning" plain>Warning</b-button>
       <b-button type="danger" plain>Danger</b-button>
    </div>
    <div class="demo-button">
       <b-button round size="small">Default</b-button>
       <b-button type="primary" round size="small">Primary</b-button>
       <b-button type="success" round size="small">Success</b-button>
       <b-button type="info" round size="small">Info</b-button>
       <b-button type="warning" round size="small">Warning</b-button>
       <b-button type="danger" round size="small">Danger</b-button>
    </div>
    <div class="demo-button" style="background: #cad4d4;padding: 10px;">
       <b-button transparent size="small">Default</b-button>
       <b-button type="primary" transparent size="small">Primary</b-button>
       <b-button type="success" transparent size="small">Success</b-button>
       <b-button type="info" transparent size="small">Info</b-button>
       <b-button type="warning" transparent size="small">Warning</b-button>
       <b-button type="danger" transparent size="small">Danger</b-button>
    </div>
</template>
```
:::

### 禁用按钮

你可以使用`disabled`属性来定义按钮是否可用，它接受一个`Boolean`值。

::: demo
```html
<template>
    <div class="demo-button">
      <b-button disabled>Default</b-button>
      <b-button type="primary" disabled>Primary</b-button>
      <b-button type="success" disabled>Success</b-button>
      <b-button type="info" disabled>Info</b-button>
      <b-button type="warning" disabled>Warning</b-button>
      <b-button type="danger" disabled>Danger</b-button>
    </div>
    <div class="demo-button">
       <b-button plain disabled>Default</b-button>
       <b-button type="primary" plain disabled>Primary</b-button>
       <b-button type="success" plain disabled>Success</b-button>
       <b-button type="info" plain disabled>Info</b-button>
       <b-button type="warning" plain disabled>Warning</b-button>
       <b-button type="danger" plain disabled>Danger</b-button>
    </div>
</template>
```
:::

### 文字按钮

没有边框和背景色的按钮。

::: demo 
```html
<template>
    <div class="demo-button">
       <b-button type="text">文字按钮</b-button>
       <b-button type="text" disabled>文字按钮</b-button>
    </div>
</template>
```
:::

### 按钮组

以按钮组的方式出现，常用于多项类似操作。使用`<b-button-group>`标签来嵌套你的按钮。

::: demo
```html
<template>
    <div class="demo-button">
       <b-button-group>
         <b-button type="primary" icon="ios-arrow-back">上一页</b-button>
         <b-button type="primary">下一页<i class="iconfont icon-ios-arrow-forward"></i></b-button>
       </b-button-group>
       <b-button-group>
         <b-button type="success" icon="ios-basketball"></b-button>
         <b-button type="info" icon="ios-barcode"></b-button>
         <b-button type="danger" icon="favorfill"></b-button>
       </b-button-group>
    </div>
</template>
```
:::

### 不同尺寸

Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。

::: demo
```html
<template>
    <div class="demo-button">
       <b-button size="large">Large</b-button>
       <b-button>Default</b-button>
       <b-button size="small">Small</b-button>
       <b-button size="mini">Mini</b-button>
    </div>
    <div class="demo-button">
       <b-button size="large" round>Large</b-button>
       <b-button round>Default</b-button>
       <b-button size="small" round>Small</b-button>
       <b-button size="mini" round>Mini</b-button>
    </div>
</template>
```
:::

### 加载状态

可以添加加载状态

::: demo
```html
<template>
    <div class="demo-button">
       <b-button loading>default</b-button>
       <b-button type="primary" loading>primary</b-button>
       <b-button type="info" loading loading-icon="loading1">loading1</b-button>
       <b-button type="success" loading loading-icon="loading2">loading2</b-button>
       <b-button type="warning" loading loading-icon="loading3">loading3</b-button>
       <b-button type="danger" loading loading-icon="loading4">loading4</b-button>
    </div>
</template>
```
:::

### API

### Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| size     | 尺寸   | string  |   large / small / mini            |    —     |
| type     | 类型   | string    |   primary / success / warning / danger / info / text |     —    |
| plain     | 是否朴素按钮   | boolean    | — | false   |
| round     | 是否圆角按钮   | boolean    | — | false   |
| transparent | 是否是透明按钮   | boolean    | — | false   |
| loading     | 是否加载中状态   | boolean    | — | false   |
| disabled  | 是否禁用状态    | boolean   | —   | false   |
| icon  | 图标类名 | string   |  —  |  —  |
| autofocus  | 是否默认聚焦 | boolean   |  —  |  false  |
| native-type | 原生 type 属性 | string | button / submit / reset | button |


