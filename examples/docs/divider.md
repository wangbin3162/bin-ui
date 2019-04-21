## Divider 分割线

区隔内容的分割线。

可以对对不同文本段落进行分割。

可以对行内文字/链接进行分割，例如表格的操作列。

### 水平分割线

默认为水平分割线，可在中间加入文字。 可以是虚线

:::demo 
```html 
<template>
<p>这是一段文字...这是一段文字...这是一段文字...这是一段文字...这是一段文字...</p>
<b-divider></b-divider>
<p>这是一段文字...这是一段文字...这是一段文字...这是一段文字...这是一段文字...</p>
<b-divider>With Text</b-divider>
<p>这是一段文字...这是一段文字...这是一段文字...这是一段文字...这是一段文字...</p>
<b-divider dashed></b-divider>
<p>这是一段文字...这是一段文字...这是一段文字...这是一段文字...这是一段文字...</p>
</template>
```
:::

### 垂直分割线

使用 type="vertical" 设置为行内的垂直分割线。

:::demo 使用 type="vertical" 设置为行内的垂直分割线。
```html 
<template>
    Text
    <b-divider type="vertical"></b-divider>
    <a href="#">Link</a>
    <b-divider type="vertical"></b-divider>
    <a href="#">Link</a>
</template>
```
:::

### 修改标题的位置

align属性可以设置标题位置

:::demo 使用 align="left" 设置为行内的垂直分割线。
```html 
<template>
    <b-divider align="left">靠左标题</b-divider>
    <p>这是一段文字...这是一段文字...这是一段文字...这是一段文字...这是一段文字...</p>
    <b-divider align="right">靠右标题</b-divider>
    <p>这是一段文字...这是一段文字...这是一段文字...这是一段文字...这是一段文字...</p>
</template>
```
:::

### Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| type | 水平还是垂直类型 | string | horizontal / vertical  |  horizontal  |
| align | 分割线标题的位置 | string | left / right / center  |  center  |
| dashed | 是否虚线 | Boolean | false / true |  false  |
