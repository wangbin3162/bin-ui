## 自定义指令

<template>
    <div class="global-anchor">
      <b-anchor :scroll-offset="100">
        <b-anchor-link href="#shui-bo-wen-zhi-ling" title="水波纹指令"></b-anchor-link>
        <b-anchor-link href="#click-out-side" title="click-out-side"></b-anchor-link>
      </b-anchor>
    </div>
</template>

### 水波纹指令

在标签中追加`v-waves`指令增加水波纹指令,指令可以设置波纹颜色和点击方式

::: demo
```html
<template>
    <div class="demo-button">
      <b-button>默认按钮</b-button>
      <b-button v-waves="{color: 'rgba(122,234,12,0.35)'}">设置颜色</b-button>
      <b-button v-waves="{color: 'rgba(0,0,0,0.45)', type:'center'}">中心扩散</b-button>
    </div>
</template>
```
:::

### clickOutSide

通过添加`v-click-out-side="clickOutSide"`来添加外部点击事件

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
      this.$log.primary('点击外部')
    }
  } 
}
</script>
```
:::
