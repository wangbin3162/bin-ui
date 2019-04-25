## Alert 警告提示

静态的展示一些区块，提示或者警告，可以动态的去删除

### 基础用法

基础的按钮用法

::: demo
```html  
<template>
    <b-alert >info alert</b-alert>
    <b-alert type="success">success alert</b-alert>
    <b-alert type="warning">warning alert</b-alert>
    <b-alert type="error">error alert</b-alert>
</template>
```
:::


### 包含描述信息

自定义<slot name="desc">描述内容。

::: demo
```html  
<template>
    <b-alert >info alert
    <template slot="desc">我是描述信息... </template>
    </b-alert>
    <b-alert type="success">success alert
    <template slot="desc">我是描述信息... </template>
    </b-alert>
    <b-alert type="warning">warning alert
    <template slot="desc">我是描述信息... </template>
    </b-alert>
    <b-alert type="error">error alert
    <template slot="desc">我是描述信息... </template>
    </b-alert>
</template>
```
:::

### 图标

根据 `type` 属性自动添加不同图标，或者自定义图标 `slot` 。

::: demo
```html  
<template>
    <b-alert show-icon>info alert</b-alert>
    <b-alert type="success" show-icon>success alert</b-alert>
    <b-alert type="warning" show-icon>warning alert</b-alert>
    <b-alert type="error" show-icon>error alert
      <span slot="desc"> Custom error description copywriting.</span>
    </b-alert>
    <b-alert show-icon>
       自定义icon
        <b-icon name="ios-basketball" slot="icon"></b-icon>
        <template slot="desc">自定义icon描述</template>
    </b-alert>
</template>
```
:::

### 可以关闭

设置属性 `banner` 可以应用顶部公告的样式。

::: demo
```html  
<template>
    <b-alert closable>An info prompt</b-alert>
    <b-alert type="success" show-icon closable>
       A success prompt
       <span slot="desc">Content of prompt. Content of prompt. Content of prompt. Content of prompt. </span>
    </b-alert>
    <b-alert type="warning" closable>
       Custom closing content
       <span slot="close">No longer prompt</span>
    </b-alert>
</template>
```
:::

### 顶部公告样式

设置属性 `banner` 可以应用顶部公告的样式。

::: demo
```html  
<template>
    <b-alert banner >公告样式...</b-alert>
    <b-alert banner closable type="warning">公告样式...</b-alert>
</template>
```
:::
