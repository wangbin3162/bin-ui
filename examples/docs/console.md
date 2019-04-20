## 控制台优化

使用 `$log` 可以在控制台输出颜色信息

打开控制台查看输出效果

### 参数：

    $log.print( 文字, 样式/颜色, 是否是背景模式 )

### 所有实例

::: demo
```html  
<template>
    <div class="demo-button">
      <b-button @click="$log.print('default print','#df85ff')" v-waves>custom</b-button>
      <b-button @click="$log.print('default print')" v-waves>default</b-button>
      <b-button @click="$log.print('primary print','primary')" type="primary" v-waves>primary</b-button>
      <b-button @click="$log.print('success print','success')" type="success" v-waves>success</b-button>
      <b-button @click="$log.print('info print','info')" type="info" v-waves>info</b-button>
      <b-button @click="$log.print('warning print','warning')" type="warning" v-waves>warning</b-button>
      <b-button @click="$log.print('danger print','danger')" type="danger" v-waves>danger</b-button>
    </div>
    <div class="demo-button">
      <b-button @click="$log.print('primary print','primary',true)" type="primary" v-waves>primary-back</b-button>
      <b-button @click="$log.print('success print','success',true)" type="success" v-waves>primary-back</b-button>
      <b-button @click="$log.print('info print','info',true)" type="info" v-waves>primary-back</b-button>
      <b-button @click="$log.print('warning print','warning',true)" type="warning" v-waves>primary-back</b-button>
      <b-button @click="$log.print('danger print','danger',true)" type="danger" v-waves>primary-back</b-button>
      
    </div>
</template>
```
:::

