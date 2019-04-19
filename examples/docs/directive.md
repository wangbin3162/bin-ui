## 自定义指令

### 水波纹指令

用于在按钮点击或者文字点击的时候增加水波纹特效

::: demo 直接在标签中追加`v-waves`指令开启
```html  
<template>
    <div class="demo-button">
       <b-button type="primary" plain v-waves>主要按钮</b-button>
       <b-button type="success" plain v-waves>成功按钮</b-button>
       <b-button type="info" plain v-waves>信息按钮</b-button>
       <b-button type="warning" plain v-waves>警告按钮</b-button>
       <b-button type="danger" plain v-waves>危险按钮</b-button>
    </div>
    
     <div class="demo-button">
        <div style="padding: 15px;user-select: none;border:1px solid #c8c8c8;" v-waves>这是一段文字</h2>
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
