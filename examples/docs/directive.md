## 自定义指令

<template>
    <div style="position: absolute;top:20px;right:40px;width:200px;">
      <b-anchor>
        <b-anchor-link href="#shui-bo-wen-zhi-ling" title="水波纹指令"></b-anchor-link>
        <b-anchor-link href="#click-out-side" title="click-out-side"></b-anchor-link>
      </b-anchor>
    </div>
</template>

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

### clickOutSide

::: demo
```html
<template>
     <div class="demo-button">
        <div v-click-out-side="clickOutSide" flex="main:center cross:center"
          style="width: 200px;height:100px;background: #2a85e4;color:#fff;font-size: 20px;">
          click out side
        </div>
     </div>
</template>
<script>
export default {
  methods:{
    clickOutSide(){ 
      this.$message('点击外部')
    }
  } 
}
</script>
```
:::
