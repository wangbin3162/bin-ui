## Card 卡片

<template>
    <div style="position: absolute;top:20px;right:40px;width:200px;">
      <b-anchor>
        <b-anchor-link href="#ji-chu-yong-fa" title="基础用法"></b-anchor-link>
        <b-anchor-link href="#mo-ren-biao-ti-he-fen-ge-xian" title="默认标题和分割线"></b-anchor-link>
        <b-anchor-link href="#bian-kuang-he-yuan-jiao" title="边框和圆角"></b-anchor-link>
        <b-anchor-link href="#shadow-yong-fa" title="shadow用法"></b-anchor-link>
        <b-anchor-link href="#attributes" title="Attributes"></b-anchor-link>
      </b-anchor>
    </div>
</template>

按照一个区块来展示

### 基础用法

头部可以 开启高亮提示，如不需要头部则不用插入header 可以开启`head-tip`来高亮header的前头

:::demo 
```html
<template>
  <b-card class="box-card" width="480px" head-tip>
      <template v-slot:header>
          <div flex="main:justify cross:center">
            <span>卡片名称</span>
            <b-icon name="ios-qr-scanner" size="20" style="cursor: pointer;"></b-icon>
          </div>
      </template>
      <div v-for="o in 4" :key="o" class="text item">
        {{'这是内容区域 ' + o }}
      </div>
  </b-card>
</template>
```
:::

### 默认标题和分割线

直接传入header可以生成默认标题,配置divider="no"可以消除默认标题和内容的分割线

:::demo 
```html
<template>
  <div style="background: #f8f8f8;padding: 20px;">
    <div flex="main:justify box:mean">
        <div style="padding: 0 10px;">
          <b-card class="box-card" header="卡片标题">
              <div v-for="o in 4" :key="o" class="text item">
                {{'这是内容区域 ' + o }}
              </div>
          </b-card>
        </div>
        <div style="padding: 0 10px;">
          <b-card class="box-card" header="卡片标题" divider="no">
              <div v-for="o in 4" :key="o" class="text item">
                {{'这是内容区域 ' + o }}
              </div>
          </b-card>
        </div>
    </div>
  </div>
</template>
```
:::

### 边框和圆角

无边框适合在有背景的情况下使用

:::demo 
```html
<template>
<div style="background: #f8f8f8;padding: 20px;">
  <div flex="main:justify box:mean">
      <div style="padding: 0 10px; ">
        <b-card class="box-card" header="卡片标题" :bordered="false">
           <div>bordered 设置是否含有边框</div>
        </b-card>
      </div>
      <div style="padding: 0 10px;">
        <b-card class="box-card" header="卡片标题" radius="0">
          <div>radius 设置圆角弧度</div>
        </b-card>
      </div>
  </div>
</div>
</template>
```
:::

### shadow用法

:::demo 
```html
<template>
<div flex="main:justify box:mean">
    <div style="padding: 0 10px; ">
      <b-card class="box-card" shadow="always">
          <div>总是显示</div>
      </b-card>
    </div>
    <div style="padding: 0 10px;">
      <b-card class="box-card">
          <div>默认悬停显示</div>
      </b-card>
    </div>
    <div style="padding: 0 10px;">
      <b-card class="box-card" shadow="never">
          <div>不显示</div>
      </b-card>
    </div>
</div>
</template>
```
:::

### Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| header | 设置 header，也可以已插槽形式插入 | string |  —  |  —  |
| body-style | 设置 body 的样式 | object |  —  |  { padding: '20px' }  |
| shadow | 阴影的显示 | string | always / hover / never  | hover  |
| bordered | 设置是否有边框 | Boolean |  false  | true |
| width | 设置卡片默认宽度 | string |  —  | 100%  |
| radius | 设置圆角值 | string |  0 / 百分比 / 像素  |  4px  |
| divider | header和body之间的分割线 | string |  no / has  |  has  |
| head-tip | 头部的高亮提示 | Boolean |  true / false  |  false  |
| bg-color | 整体的背景色 | string |  —  |  #fff  |
