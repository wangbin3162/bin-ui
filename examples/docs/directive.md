## 自定义指令

### 水波纹指令

在标签中追加`v-waves`指令增加水波纹指令

::: demo
```html
<template>
    <div class="demo-button">
      <b-button v-waves>默认按钮</b-button>
      <b-button type="primary" v-waves>主要按钮</b-button>
      <b-button type="success" v-waves>成功按钮</b-button>
      <b-button type="info" v-waves>信息按钮</b-button>
      <b-button type="warning" v-waves>警告按钮</b-button>
      <b-button type="danger" v-waves>危险按钮</b-button>
    </div>
</template>
```
:::

**水波纹指令后期打算加上动画时间和水波遮罩的颜色配置**

### 字数指令

用于限制文本字数，超出部分显示...

直接在标签中追加`v-ellipsis`指令开启

::: demo
```html
<template>
     <div class="demo-button">
        <div v-ellipsis="20">这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字</div>
     </div>
</template>
```
:::
