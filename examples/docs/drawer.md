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

### Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value     | 是否显示，可使用 v-model 双向绑定数据。   | Boolean  |    —       |    false    |
| title     | 标题，如果使用 slot 自定义了页头，则 title 无效   | String  |     —       |     —     |
| placement | 方向   | String  |    left/right      |     right    |
| append-to-body    | 是否将对话框放置于 body 内 | Boolean  |      —      |  true  |
| ok-text     | 确定按钮文字 | String  |      —      | 确定 |
| cancel-text     | 取消按钮文字 | String  |      —      | 取消 |
| fullscreen     | 是否全屏显示 | Boolean  |      —      | false |
| width     | 抽屉宽度 | String  |      —      | 300px |
| footer-hide     | 不显示底部 | Boolean  |      —      | false |
| mask-closable    | 是否允许点击遮罩层关闭 | Boolean  |      —      | true |

### Events

| 事件名      | 说明    | 返回值      |
|---------- |-------- |---------- |
| on-ok     | 点击确定的回调   | 无  |
| on-cancel    | 点击取消的回调   | 无  |
| on-visible-change    | 显示状态发生变化时触发   | true / false  |


### Slot

| 名称      | 说明    |
|---------- |-------- |
| header     | 自定义页头   |
| footer     | 自定义页脚内容   |
| close     | 自定义右上角关闭内容   |
