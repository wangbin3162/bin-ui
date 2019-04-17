## 基础用法

基础的按钮用法

::: demo 使用`type`、`plain`、`round`和`circle`属性来定义 Button 的样式。
```html  
<template>
    <div class="demo-button">
      <b-button v-waves>默认按钮</b-button>
      <b-button type="primary">主要按钮</b-button>
      <b-button type="success">成功按钮</b-button>
      <b-button type="info">信息按钮</b-button>
      <b-button type="warning">警告按钮</b-button>
      <b-button type="danger">危险按钮</b-button>
    </div>
    <div class="demo-button">
       <b-button plain>朴素按钮</b-button>
       <b-button type="primary" plain>主要按钮</b-button>
       <b-button type="success" plain>成功按钮</b-button>
       <b-button type="info" plain>信息按钮</b-button>
       <b-button type="warning" plain>警告按钮</b-button>
       <b-button type="danger" plain>危险按钮</b-button>
    </div>
    <div class="demo-button">
       <b-button round>圆角按钮</b-button>
       <b-button type="primary" round>主要按钮</b-button>
       <b-button type="success" round>成功按钮</b-button>
       <b-button type="info" round>信息按钮</b-button>
       <b-button type="warning" round>警告按钮</b-button>
       <b-button type="danger" round>危险按钮</b-button>
    </div>
</template>
```
:::

## 禁用按钮

按钮不可用状态

::: demo 你可以使用`disabled`属性来定义按钮是否可用，它接受一个`Boolean`值。
```html  
<template>
    <div class="demo-button">
      <b-button disabled>默认按钮</b-button>
      <b-button type="primary" disabled>主要按钮</b-button>
      <b-button type="success" disabled>成功按钮</b-button>
      <b-button type="info" disabled>信息按钮</b-button>
      <b-button type="warning" disabled>警告按钮</b-button>
      <b-button type="danger" disabled>危险按钮</b-button>
    </div>
    <div class="demo-button">
       <b-button plain disabled>朴素按钮</b-button>
       <b-button type="primary" plain disabled>主要按钮</b-button>
       <b-button type="success" plain disabled>成功按钮</b-button>
       <b-button type="info" plain disabled>信息按钮</b-button>
       <b-button type="warning" plain disabled>警告按钮</b-button>
       <b-button type="danger" plain disabled>危险按钮</b-button>
    </div>
</template>
```
:::

## 文字按钮

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


## 按钮组

以按钮组的方式出现，常用于多项类似操作。

::: demo  使用`<b-button-group>`标签来嵌套你的按钮。
```html  
<template>
    <div class="demo-button">
       <b-button-group>
         <b-button type="primary" icon="icon-return">上一页</b-button>
         <b-button type="primary">下一页<i class="iconfont icon-next"></i></b-button>
       </b-button-group>
       <b-button-group>
         <b-button type="success" icon="icon-edit"></b-button>
         <b-button type="info" icon="icon-turnvoice"></b-button>
         <b-button type="danger" icon="icon-delete"></b-button>
       </b-button-group>
    </div>
</template>
```
:::

## 不同尺寸

Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。

::: demo 
```html  
<template>
    <div class="demo-button">
       <b-button>默认按钮</b-button>
       <b-button size="medium">中等按钮</b-button>
       <b-button size="small">小型按钮</b-button>
       <b-button size="mini">超小按钮</b-button>
    </div>
    <div class="demo-button">
       <b-button round>默认按钮</b-button>
       <b-button size="medium" round>中等按钮</b-button>
       <b-button size="small" round>小型按钮</b-button>
       <b-button size="mini" round>超小按钮</b-button>
    </div>
</template>
```
:::

