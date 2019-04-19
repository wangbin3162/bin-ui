## 控制台优化

使用 `$clog` 可以在控制台输出美观的日志信息

打开控制台查看输出效果

### 胶囊

此方法打印一行“胶囊”样式的信息，即上图前四条

### 参数：

    $clog.capsule( 左侧文字, 右侧文字, 主题样式 )

### 所有实例

::: demo
```html  
<template>
    <div class="demo-button">
      <b-button @click="logCapsule" v-waves>胶囊样式</b-button>
      <b-button @click="logColorful" v-waves>彩色文字</b-button>
      <b-button @click="$clog.default('default style')" type="default" v-waves>default</b-button>
      <b-button @click="$clog.primary('primary style')" type="primary" v-waves>primary</b-button>
      <b-button @click="$clog.success('success style')" type="success" v-waves>success</b-button>
      <b-button @click="$clog.warning('warning style')" type="warning" v-waves>warning</b-button>
      <b-button @click="$clog.danger('danger style')" type="danger" v-waves>danger</b-button>
    </div>
</template>
<script>
  export  default {
    methods:{
      logCapsule(){
        this.$clog.capsule('title', 'primary', 'primary')
        this.$clog.capsule('title', 'success', 'success')
        this.$clog.capsule('title', 'warning', 'warning')
        this.$clog.capsule('title', 'danger', 'danger')
      },
      logColorful(){
        this.$clog.colorful([
          { text: 'H', type: 'default' },
          { text: 'e', type: 'primary' },
          { text: 'l', type: 'success' },
          { text: 'l', type: 'warning' },
          { text: 'o', type: 'danger' }
        ])
      }
    }
  }
</script>
```
:::

