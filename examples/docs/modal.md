## Modal 模态框

对话框/弹窗，在浮层中显示，引导用户进行相关操作。

### 基础用法

最简单的使用方法，通过控制属性value来显示 / 隐藏对话框。

::: demo
```html  
<template>
  <b-button type="primary" v-waves size="small" @click="modal1 = true">显示弹窗</b-button>
  <b-modal v-model="modal1" title="普通的模态框标题"
    @on-ok="$log.print('ok click')"  @on-cancel="$log.print('cancel click','success')">
      <p>我是弹窗内容...</p>
      <p>我是弹窗内容...</p>
      <p>我是弹窗内容...</p>
  </b-modal>
</template>
<script>
    export default {
      data () {
            return {
                modal1: false,
                modal2: false,
                modal3: false,
                modal4: false,
                modal5: false,
                modal6: false,
                modal7: false,
                modal8: false,
                modal9: false,
                modal10: false,
                modal11: false,
                modal12: false,
                loading: true
            }
        },
      methods: {
         asyncOK () {
             setTimeout(() => {
                 this.modal5 = false;
             }, 2000);
         }
      }
    }
</script>
```
:::

### 自定义样式

Modal 组件提供了灵活的自定义样式 API 和 Slot，可以自由控制整个 Modal 的各个组成部分，比如页头、页脚、关闭按钮。

::: demo 注：参数内容都包含在第一个示例中
```html  
<template>
  <b-button  v-waves size="small" @click="modal2 = true">自定义页头页脚</b-button>
  <b-button  v-waves size="small" @click="modal3 = true">不带标题栏</b-button>
  <b-button  v-waves size="small" @click="modal4 = true">设置宽</b-button>
  <b-modal v-model="modal2">
     <p slot="header" style="color:#f60;text-align:center">
         <span>自定义页头</span>
      </p>
      <p>我是弹窗内容...</p>
      <p>我是弹窗内容...</p>
      <p>我是弹窗内容...</p>
      <div slot="footer">
          <b-button type="error" size="mini" @click="$log.print('delete click','danger')" >Delete</b-button>
      </div>
  </b-modal>
  <b-modal v-model="modal3">
        <p>我是弹窗内容...</p>
        <p>我是弹窗内容...</p>
        <p>我是弹窗内容...</p>
  </b-modal>
  <b-modal v-model="modal4"
   title="自定义宽度"
          width="300">
        <p> 自定义宽度，单位 px，默认 520px。
           对话框的宽度是响应式的，当屏幕尺寸小于 768px 时，宽度会变为自动auto。</p>
    </b-modal>
</template>
```
:::

### 异步关闭

给Modal添加属性loading后，点击确定按钮对话框不会自动消失，并显示 loading 状态，
需要手动关闭对话框，常用于表单提交。

::: demo
```html  
<template>
  <b-button type="primary" v-waves size="small" @click="modal5 = true">显示弹窗</b-button>
  <b-modal v-model="modal5" title="普通的模态框标题"
          :loading="loading"
          @on-ok="asyncOK">
      <p>点击确定后，对话框将在 2秒 后关闭。</p>
  </b-modal>
</template>
<script>
    export default {
        data () {
            return {
                modal5: false,
                loading: true
            }
        },
         methods: {
            asyncOK () {
                setTimeout(() => {
                    this.modal5 = false;
                }, 2000);
            }
         }
    }
</script>
```
:::

### 禁用关闭

可以禁用关闭和遮罩层关闭。

::: demo
```html  
<template>
    <b-button v-waves size="small" @click="modal6 = true">禁用右上角关闭</b-button>
    <b-button v-waves size="small" @click="modal7 = true">禁用mask关闭</b-button>
    <b-modal v-model="modal6" title="普通的模态框标题" :closable="false">
      <p>禁用右上角关闭</p>
    </b-modal>
    <b-modal v-model="modal7" title="普通的模态框标题"  :mask-closable="false">
      <p>禁用mask关闭</p>
    </b-modal>
</template>
<script>
    export default {
        data () {
            return {
                modal6: false,
                modal7: false
            }
        }
    }
</script>
```
:::

### 自定义位置

可以自定义对话框的位置。

::: demo
```html  
<template>
    <b-button v-waves size="small" @click="modal8 = true">距离顶部200px</b-button>
    <b-button v-waves size="small" @click="modal9 = true">垂直居中</b-button>
    <b-modal v-model="modal8" title="距离顶部" :styles="{top: '200px'}">
      <p>距离顶部200px</p>
    </b-modal>
    <b-modal v-model="modal9" title="垂直居中" class-name="vertical-center-modal">
      <p>垂直居中的模态框</p>
    </b-modal>
</template>
<script>
    export default {
        data () {
            return {
                modal8: false,
                modal9: false
            }
        }
    }
</script>
```
:::

### 全屏

设置属性 `fullscreen` 可以全屏显示。属性 `footer-hide` 可以隐藏底部内容。

::: demo
```html  
<template>
    <b-button v-waves size="small" @click="modal10 = true">显示全屏对话框</b-button>
    <b-modal v-model="modal10" title="全屏标题" fullscreen>
      <p style="text-align: center;">我是全屏的内容</p>
    </b-modal>
</template>
<script>
    export default {
        data () {
            return {
                modal10: false
            }
        }
    }
</script>
```
:::

### 可拖拽

设置属性 `draggable` 对话框可以进行拖拽移动。

::: demo
```html  
<template>
    <b-button v-waves size="small" @click="modal11 = true">打开弹窗1</b-button>
    <b-button v-waves size="small" @click="modal12 = true">打开弹窗2</b-button>
    <b-modal v-model="modal11" title="弹窗1" draggable>
      <p>弹窗1内容</p>
    </b-modal>
    <b-modal v-model="modal12" title="弹窗2" draggable>
      <p>弹窗2内容</p>
    </b-modal>
</template>
<script>
    export default {
        data () {
            return {
                modal11: false
                modal12: false
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
| title     | 标题，如果使用 slot 自定义了页头，则 title 无效   | Boolean  |    String      |     —     |
| closable     | 右上角的关闭按钮 | Boolean  |      —      | true |
| mask-closable     | 是否允许点击遮罩层关闭 | Boolean  |      —      | true |
| loading     | 确定按钮时，确定按钮是否显示 loading 状态，开启则需手动设置value来关闭对话框 | Boolean  |      —      | false |
| fullscreen     | 是否全屏显示 | Boolean  |      —      | false |
| draggable     | 是否可以拖拽移动 | Boolean  |      —      | false |
| mask     | 是否显示遮罩层，开启 draggable 时，强制不显示 | Boolean  |      —      | true |
| ok-text     | 确定按钮文字 | String  |      —      | 确定 |
| cancel-text     | 取消按钮文字 | String  |      —      | 取消 |
| width     | 对话框宽度 | Number/ String  |      —      | 520 |
| footer-hide     | 不显示底部 | Boolean  |      —      | false |
| styles    | 设置浮层样式，调整浮层位置等 | Object  |      —      |  —  |
| class-name    | 设置对话框容器的类名 | String  |      —      |  —  |
| z-index    | 层级 | Number  |      —      |  2000  |
| append-to-body    | 是否将对话框放置于 body 内 | Boolean  |      —      |  true  |


### 事件

| 事件名      | 说明    | 返回值      |
|---------- |-------- |---------- |
| on-ok     | 点击确定的回调   | 无  |
| on-cancel    | 点击取消的回调   | 无  |
| on-visible-change    | 显示状态发生变化时触发   | true / false  |


### slot

| 名称      | 说明    |
|---------- |-------- |
| header     | 自定义页头   |
| footer     | 自定义页脚内容   |
| close     | 自定义右上角关闭内容   |
