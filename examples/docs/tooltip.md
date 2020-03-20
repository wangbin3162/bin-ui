## Tooltip 提示

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

文字提示气泡框，在鼠标悬停时显示，代替了系统的title提示。

### 基础用法

::: demo
```html
<template>
  <b-tooltip  content="这是tooltip悬停文字">这是一段文字，鼠标经过其上时会显示tooltip</b-tooltip>
</template>
```
:::

### 多种悬停位置

::: demo
```html
<template>
    <div class="top">
        <b-tooltip content="Top Left text" placement="top-start">
            <b-button>上左</b-button>&nbsp;&nbsp;
        </b-tooltip>
        <b-tooltip content="Top Center text" placement="top">
            <b-button>上边</b-button>&nbsp;&nbsp;
        </b-tooltip>
        <b-tooltip content="Top Right text" placement="top-end">
            <b-button>上右</b-button>
        </b-tooltip>
    </div>
    <div class="center">
        <div class="center-left">
            <b-tooltip content="Left Top text" placement="left-start">
                <b-button>左上</b-button> 
            </b-tooltip><br><br>
            <b-tooltip content="Left Center text" placement="left">
                <b-button>左边</b-button> 
            </b-tooltip><br><br>
            <b-tooltip content="Left Bottom text" placement="left-end">
                <b-button>左下</b-button>
            </b-tooltip>
        </div>
        <div class="center-right">
            <b-tooltip content="Right Top text" placement="right-start">
                <b-button>右上</b-button>
            </b-tooltip><br><br>
            <b-tooltip content="Right Center text" placement="right">
                <b-button>右边</b-button>
            </b-tooltip><br><br>
            <b-tooltip content="Right Bottom text" placement="right-end">
                <b-button>右下</b-button>
            </b-tooltip>
        </div>
    </div>
    <div class="bottom">
        <b-tooltip content="Bottom Left text" placement="bottom-start">
            <b-button>下左</b-button>&nbsp;&nbsp;
        </b-tooltip>
        <b-tooltip content="Bottom Center text" placement="bottom">
            <b-button>下边</b-button>&nbsp;&nbsp;
        </b-tooltip>
        <b-tooltip content="Bottom Right text" placement="bottom-end">
            <b-button>下右</b-button>
        </b-tooltip>
    </div>
</template>
```
:::

### 不同主题

::: demo
```html
<template>
  <b-tooltip content="light" theme="light" >
     <b-button>light</b-button>&nbsp;&nbsp;
  </b-tooltip>
  <b-tooltip content="Dark" theme="dark">
    <b-button>Dark(default)</b-button>
  </b-tooltip>
</template>
```
:::

### 多行

::: demo
```html
<template>
  <b-tooltip placement="top">
  <b-button>多行</b-button>
    <div slot="content">
      <div>这是多行文字</div>
      <div>这是多行文字</div>
    </div>
  </b-tooltip>
</template>
```
:::

### 长文本

::: demo
```html
<template>
  <b-tooltip placement="top" max-width="200" content="我是一段长文本，我是一段长文本，我是一段长文本，我是一段长文本，我是一段长文本，我是一段长文本">
    <b-button>长文本</b-button>
  </b-tooltip>
</template>
```
:::

### 可以延时和关闭提示

::: demo
```html
<template>
  <b-tooltip  content="延时一秒显示悬停文字" :delay="1000">
   <b-button>延时一秒</b-button>&nbsp;&nbsp;
  </b-tooltip>
   <b-tooltip  content="关闭和隐藏提示" :disabled="disabled">
     <b-button @click="disabled=!disabled">{{ disabled ? '关闭提示':'开启提示'}}</b-button>
   </b-tooltip>
</template>
<script>
    export default {
        data () {
            return {
                disabled: false
            }
        }
    }
</script>
```
:::

### Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| content     | 显示的内容   | string  |  —   |   —   |
| placement     | 提示框出现的位置   | string  |  top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end   |   —   |
| disabled     | 是否禁用提示框   | Boolean  |  —   |   false   |
| delay     | 延迟显示   |  Number	 |  —   |   100   |
| always     | 是否总是可见   |  Boolean  |  —   |   false   |
| theme     | 主题   |  string  |  dark 或 light   |   dark   |
| max-width	     | 最大宽度，超出最大值后，文本将自动换行   |  string/number  | — |   —    |
| offset    | 出现位置的偏移量   |  Number |  — |  	0     |
| appendToBody    | 是否将弹层放置于 body 内   | Boolean  |  —   |   false   |
| options    | 自定义 popper.js 的配置项具体参考popper.js   | Object  |  —   |   —    |

### Events 

| 名称      | 事件名    | 返回值    |
|---------- |-------- |-------- |
| on-popper-show     | 在提示框显示时触发   | 无    |
| on-popper-hide    | 在提示框消失时触发   | 无    |

### Slot

| 名称      | 说明    |
|---------- |-------- |
| content     | 提示框的内容，定义此 slot 时，会覆盖 props content。   |
