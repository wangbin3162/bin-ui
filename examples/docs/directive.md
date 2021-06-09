## 自定义指令

### 点击动画指令

在标签中追加`v-click-animation`指令增加点击动画指令，波纹颜色根据border或background颜色创建

::: demo
```html
<template>
    <div class="demo-button">
      <b-button>Default</b-button>
      <b-button type="dashed">Dashed</b-button>
      <b-button type="primary">Primary</b-button>
      <b-button type="success">Success</b-button>
      <b-button type="info">Info</b-button>
      <b-button type="warning">Warning</b-button>
      <b-button type="danger">Danger</b-button>
      <span style="border: 1px solid #ffa2d3; 
            padding: 6px 10px;margin: 0 8px;border-radius: 2px;vertical-align: middle;" 
            v-click-animation>自定义</span>
    </div>
</template>
```
:::

### 水波纹指令

在标签中追加`v-waves`指令增加水波纹指令,指令可以设置波纹颜色和点击方式,
注意，增加水波纹指令会默认覆盖原有的按钮点击效果

::: demo
```html
<template>
    <div class="demo-button">
      <b-button v-waves>默认指令</b-button>
      <b-button v-waves="'rgba(255,162,211,0.3)'">设置颜色</b-button>
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
