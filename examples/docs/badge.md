## Badge 徽标

用于提示当前条目数量等

### 基础用法

基础的徽标用法

::: demo
```html
<template>
   <b-badge :value="12" class="item">
     <b-button>普通按钮</b-button>
   </b-badge>
   <b-badge :value="3" class="item">
     <b-button>回复</b-button>
   </b-badge>
   <b-badge :value="1" class="item" type="primary">
     <b-button>primary徽标</b-button>
   </b-badge>
   <b-badge :value="2" class="item" type="warning">
     <b-button>warning徽标</b-button>
   </b-badge>
   <b-badge :value="200" :max="99" class="item">
     <b-button>最大数值</b-button>
   </b-badge>
</template>
```
:::

### 自定义提示内容

可以提示非数字的徽标

::: demo
```html
<template>
   <b-badge value="hot" class="item">
     <b-button>热点</b-button>
   </b-badge>
   <b-badge value="new" class="item">
     <b-button>回复</b-button>
   </b-badge>
   <b-badge is-dot class="item">红点模式</b-badge>
</template>
```
:::

### Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value     | 显示值   | string, number  |  —   |    —     |
| max     | 最大值，超过最大值会显示 '{max}+'   |  number  |  —   |    —     |
| is-dot     | 小圆点   |  boolean  |  —   |false|
| hidden     | 隐藏 badge   |  boolean  |  —   |false|
| type     | 类型   |  string  |  primary / success / warning / danger / info  | — |
