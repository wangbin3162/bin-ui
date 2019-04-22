## Drawer 抽屉

简易的抽屉用于展示或者快速弹出,可以根据是信息展示还是创建动态插入

### 基础用法

最简单的使用方法，通过控制属性value来显示 / 隐藏对话框。

::: demo
```html  
<template>
  <b-button type="primary" v-waves size="small" @click="value1 = true">open</b-button>
    <b-drawer v-model="value1" title="抽屉标题">
      <p>我是抽屉内容</p>
    </b-drawer>
</template>
<script>
    export default {
      data () {
            return {
              value1:false,
              value2:false,
              value3:false
            }
       }
    }
</script>
```
:::

### 基础用法

最简单的使用方法，通过控制属性value来显示 / 隐藏对话框。

::: demo
```html  
<template>
  <b-button type="primary" v-waves size="small" @click="value2 = true">左侧打开</b-button>
    <b-drawer v-model="value2" title="抽屉标题" placement="left" width="500px">
      <p>我是左侧的抽屉</p>
    </b-drawer>
</template>
<script>
    export default {
      data () {
            return {
              value2:false
            }
        }
    }
</script>
```
:::

### 全屏

::: demo `fullscreen` 设置全屏
```html  
<template>
  <b-button type="primary" v-waves size="small" @click="value3 = true">全屏设置</b-button>
    <b-drawer v-model="value3" title="抽屉标题" fullscreen>
      <p>我是全屏的</p>
      <div slot="footer">
          <b-button type="error" size="mini" @click="$log.print('delete click','danger')" >Delete</b-button>
      </div>
    </b-drawer>
</template>
<script>
    export default {
      data () {
            return {
              value3:false
            }
        }
    }
</script>
```
:::
