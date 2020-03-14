## Popover 气泡弹窗

<template>
    <div class="global-anchor">
      <b-anchor :scroll-offset="100">
        <b-anchor-link href="#ji-chu-yong-fa" title="基础用法"></b-anchor-link>
        <b-anchor-link href="#duo-chong-xuan-ting-wei-zhi" title="多种悬停位置"></b-anchor-link>
        <b-anchor-link href="#bu-tong-zhu-ti" title="不同主题"></b-anchor-link>
        <b-anchor-link href="#duo-xing" title="多行"></b-anchor-link>
        <b-anchor-link href="#chang-wen-ben" title="长文本"></b-anchor-link>
        <b-anchor-link href="#ke-yi-yan-shi-he-guan-bi-ti-shi" title="可以延时和关闭提示"></b-anchor-link>
        <b-anchor-link href="#attributes" title="Attributes"></b-anchor-link>
        <b-anchor-link href="#events" title="Events"></b-anchor-link>
        <b-anchor-link href="#slot" title="Slot"></b-anchor-link>
      </b-anchor>
    </div>
</template>

气泡类型的弹窗,用于放置更多信息或询问流程等

### 基础用法

::: demo
```html
<template>
<div>
  <b-popover trigger="hover" title="Title" content="content">
      <b-button>Hover</b-button>
  </b-popover>
  <b-popover trigger="click" title="Title" content="content">
      <b-button>Click</b-button>
  </b-popover>
  <b-popover trigger="focus" title="Title" content="content">
      <b-button>Focus</b-button>
  </b-popover>
</div>
</template>
```
:::

### 多种悬停位置

::: demo
```html
<template>
    <div class="top">
        <b-popover title="Title" content="Top Left text" placement="top-start">
            <b-button>上左</b-button>&nbsp;&nbsp;
        </b-popover>
        <b-popover title="Title" content="Top Center text" placement="top">
            <b-button>上边</b-button>&nbsp;&nbsp;
        </b-popover>
        <b-popover title="Title" content="Top Right text" placement="top-end">
            <b-button>上右</b-button>
        </b-popover>
    </div>
    <div class="center">
        <div class="center-left">
            <b-popover title="Title" content="Left Top text" placement="left-start">
                <b-button>左上</b-button> 
            </b-popover><br><br>
            <b-popover title="Title" content="Left Center text" placement="left">
                <b-button>左边</b-button> 
            </b-popover><br><br>
            <b-popover title="Title" content="Left Bottom text" placement="left-end">
                <b-button>左下</b-button>
            </b-popover>
        </div>
        <div class="center-right">
            <b-popover title="Title" content="Right Top text" placement="right-start">
                <b-button>右上</b-button>
            </b-popover><br><br>
            <b-popover title="Title" content="Right Center text" placement="right">
                <b-button>右边</b-button>
            </b-popover><br><br>
            <b-popover title="Title" content="Right Bottom text" placement="right-end">
                <b-button>右下</b-button>
            </b-popover>
        </div>
    </div>
    <div class="bottom">
        <b-popover title="Title" content="Bottom Left text" placement="bottom-start">
            <b-button>下左</b-button>&nbsp;&nbsp;
        </b-popover>
        <b-popover title="Title" content="Bottom Center text" placement="bottom">
            <b-button>下边</b-button>&nbsp;&nbsp;
        </b-popover>
        <b-popover title="Title" content="Bottom Right text" placement="bottom-end">
            <b-button>下右</b-button>
        </b-popover>
    </div>
</template>
```
:::

### 浮层内关闭

::: demo
```html
<template>   
<b-popover v-model="visible">
  <a style="margin-left: 30px;">Click</a>
  <div slot="title">标题slot</div>
  <div slot="content">
      <a @click="close">关闭</a>
  </div>
</b-popover>
</template>
<script>
    export default {
        data () {
            return {
                visible: false
            }
        },
        methods: {
            close () {
                this.visible = false;
            }
        }
    }
</script>
```
:::

### 更多内容

::: demo
```html
<template>
<div>
  <b-popover placement="top" width="200" word-wrap>
    <b-button>长文本</b-button>
    <div slot="content">
      <div>这是一段很长很长很长很长很长很长很长很长很长很长很长很长很长很长的描述</div>
    </div>
  </b-popover>
  <b-popover placement="right" width="300">
    <b-button>更多内容</b-button>
    <div slot="content">
      <div>这是自定义内容~这是自定义内容~这是自定义内容~这是自定义内容~</div>
      <div>这是自定义内容~这是自定义内容~这是自定义内容~这是自定义内容~</div>
    </div>
  </b-popover>
</div>
</template>
```
:::

### 确认气泡框

通过设置属性confirm开启确认框模式。确认框只会以 click 的形式激活，并且只会显示 title 的内容，忽略 content。

::: demo
```html
<template>
<div style="padding-left:50px;">
   <b-popover
      confirm
      title="确认删除此项吗?"
      @on-ok="ok"
      @on-cancel="cancel">
      <b-button type="danger" plain>删 除</b-button>
  </b-popover>&nbsp;&nbsp;
   <b-popover
      confirm
      title="Are you sure delete this item?"
      ok-text="Yes" cancel-text="No"
      @on-ok="ok"
      @on-cancel="cancel">
      <b-button type="danger" plain>自定义文字</b-button>
  </b-popover>&nbsp;&nbsp;
   <b-popover
      confirm icon-name="ios-trash" :icon-styles="{color:'#f5222d'}"
      title="Are you sure delete this item?"
      @on-ok="ok"
      @on-cancel="cancel">
      <b-button type="danger" plain>自定义图标</b-button>
  </b-popover>
</div>
</template>
<script>
    export default {
       methods: {
           ok () {
               this.$message('点击了确定');
           },
           cancel () {
               this.$message('点击了取消');
           }
       }
   }
</script>
```
:::

### Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| trigger     | 触发方式   | string  | hover（悬停）click（点击）focus（聚焦） |  click  |
| title     | 标题   | string  |  —   |   —   |
| content     | 显示的内容   | string  |  —   |   —   |
| placement     | 提示框出现的位置   | string  |  top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end   |   —   |
| disabled     | 是否禁用提示框   | Boolean  |  —   |   false   |
| width	     | 宽度  |  string/number  | — |   —    |
| confirm    | 是否开启对话框模式   |  Boolean |  — |  	false     |
| appendToBody    | 是否将弹层放置于 body 内   | Boolean  |  —   |   false   |
| ok-text    | 确定按钮文字   | string  |  —   |   确 定    |
| cancel-text    | 取消按钮文字 | string  |  —   |   取 消    |
| popper-class   | 给 Popover 设置 class-name，在使用 transfer appendToBody  | string  |  —   |   —    |
| padding	   | 自定义间距值 | string  |  —   |  8px 16px     |
| icon-name	   | 自定义图标名称 | string  |  —   |   —      |
| icon-styles    | 自定义图标样式 | Object  |  —   |   —    |

### Events 

| 名称      | 事件名    | 返回值    |
|---------- |-------- |-------- |
| on-popper-show     | 在提示框显示时触发   | 无    |
| on-popper-hide    | 在提示框消失时触发   | 无    |
| on-ok	 | 点击确定的回调 ,只在 confirm 模式下有效  | 无    |
| on-cancel   | 点击取消的回调,只在 confirm 模式下有效   | 无    |

### Slot

| 名称      | 说明    |
|---------- |-------- |
| title     | 提示框标题，定义此 slot 时，会覆盖 props title。   |
| content     | 提示框的内容，定义此 slot 时，会覆盖 props content。   |
