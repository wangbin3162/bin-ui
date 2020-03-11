## Input 输入框

<template>
    <div class="global-anchor">
      <b-anchor :scroll-offset="100">
        <b-anchor-link href="#ji-chu-yong-fa" title="基础用法"></b-anchor-link>
        <b-anchor-link href="#tu-biao-he-qing-kong" title="图标和清空"></b-anchor-link>
        <b-anchor-link href="#qian-zhi-hou-zhui" title="前置后缀"></b-anchor-link>
        <b-anchor-link href="#she-zhisearch" title="设置search"></b-anchor-link>
        <b-anchor-link href="#bu-tong-chi-cun" title="不同尺寸"></b-anchor-link>
        <b-anchor-link href="#she-zhitextarea" title="设置textarea"></b-anchor-link>
        <b-anchor-link href="#attributes" title="Attributes"></b-anchor-link>
        <b-anchor-link href="#input-events" title="Input events"></b-anchor-link>
        <b-anchor-link href="#input-slot" title="Input slot"></b-anchor-link>
        <b-anchor-link href="#input-methods" title="Input methods"></b-anchor-link>
      </b-anchor>
    </div>
</template>

基本表单组件，支持 input 和 textarea

### 基础用法

::: demo
```html
<template>
<div>
  <div style="margin-bottom: 10px;">输入的内容：{{value}}</div>
  <b-input v-model="value" placeholder="请输入一些文字..." class="input-item"></b-input>  
</div>
</template>
<script>
 export default {
   data(){
     return{
       value:''
     }
   }
 }
</script>
```
:::

### 图标和清空

设置 `clearable` 可以开启清空按钮,icon设置icon图标名称

::: demo 
```html
<template>
<div>
  <b-input v-model="value" icon="logo-chrome" class="input-item"></b-input>  
  <b-input v-model="value1" clearable  class="input-item"></b-input>  
</div>
</template>
<script>
 export default {
   data(){
     return{
       value:'',
       value1:'我可以被清空',
     }
   }
 }
</script>
```
:::

### 前置后缀

提供两种方式来进行插入图标

::: demo 
```html
<template>
 <div>
        Props：
        <b-input prefix="ios-contact" placeholder="Enter name" style="width: auto" ></b-input>
        <b-input suffix="ios-search" placeholder="Enter text" style="width: auto" ></b-input>
    </div>
    <div style="margin-top: 6px">
        Slots：
        <b-input placeholder="Enter name" style="width: auto">
            <b-icon name="ios-contact" slot="prefix"></b-icon>
        </b-input>
        <b-input placeholder="Enter text" style="width: auto">
            <b-icon name="ios-search" slot="suffix" ></b-icon>
        </b-input>
    </div>
</template>
```
:::

### 设置search

可以设置查询和禁用状态

::: demo 
```html
<template>
<div>
  <b-input search placeholder="Enter something..." class="input-item"></b-input>
  <b-input disabled placeholder="Enter something..." class="input-item"></b-input>
</div>
</template>
```
:::

### 不同尺寸

提供额外3种尺寸进行配置 `large` `small` 或 `mini`三种尺寸

::: demo
```html
<template>
<b-row :gutter="10">
    <b-col span="6"><b-input size="large"  clearable prefix="ios-contact" placeholder="large input"></b-input></b-col>
    <b-col span="6"><b-input clearable prefix="ios-contact" placeholder="default input"></b-input></b-col>
    <b-col span="6"><b-input size="small"  clearable prefix="ios-contact" placeholder="small input"></b-input></b-col>
    <b-col span="6"><b-input size="mini" clearable prefix="ios-contact" placeholder="mini input"></b-input></b-col>
</b-row>
</template>
```
:::

### 设置textarea

可以设置 `type="textarea"`开启文本域模式

::: demo 
```html
<template>
<div class="input-item">
 <b-input type="textarea" :rows="4" placeholder="Enter something..." ></b-input>
</div>
</template>
```
:::

### Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| type     | 输入框类型   | string  |  text、password、textarea、url、email、date、number、tel   |   —   |
| value     | 绑定的值，可使用 v-model 双向绑定   | String / Number  |   —   |   —   |
| size     | 输入框尺寸   | large、small、default、mini  |   —   |   default  |
| placeholder     | 占位文本   | String  |   —   |    —   |
| clearable     | 是否显示清空按钮   | Boolean  |   —   |   false   |
| disabled     | 禁用状态   | Boolean  |   —   |   false   |
| readonly     | 只读模式   | Boolean  |   —   |   false   |
| maxlength     | 最大输入长度   | Number  |   —   |    —     |
| icon     | 输入框尾部图标，仅在 text 类型下有效   | String  |   —   |    —     |
| prefix     | 输入框头部图标   | String  |   —   |    —     |
| suffix     | 输入框尾部图标   | String  |   —   |    —     |
| search     | 是否显示为搜索型输入框   | Boolean  |   —   |    false   |
| rows     | 文本域默认行数，仅在 textarea 类型下有效   | Number	  |   —   |    2   |
| autosize     | 自适应内容高度，仅在 textarea 类型下有效，可传入对象，如 { minRows: 2, maxRows: 6 }   | Boolean/Object		  |   —   |  false  |
| number     | 将用户的输入转换为 Number 类型   | Boolean  |   —   |    false   |
| autofocus     | 自动获取焦点   | Boolean  |   —   |    false   |
| autocomplete     | 原生的自动完成功能，可选值为 off 和 on   | String	  |   —   |    off   |
| element-id     | 给表单元素设置 id，详见 Form 用法。   | String	  |   —   |   —    |
| wrap  | 原生的 wrap 属性，可选值为 hard 和 soft，仅在 textarea 下生效   | String	  |   —   |  	soft   |

### Input events

| 方法名      | 说明    | 返回值      |
|---------- |-------- |---------- |
| on-enter     | 按下回车键时触发   | 无  |
| on-click    | 设置 icon 属性后，点击图标时触发   | 无  |
|on-change	|数据改变时触发	|event|
|on-focus	|输入框聚焦时触发	|无|
|on-blur	|输入框失去焦点时触发|	无|
|on-keyup	|原生的 keyup 事件	|event|
|on-keydown	|原生的 keydown 事件	|event|
|on-keypress|	原生的 keypress 事件	|event|
|on-search	|开启 search 时可用，点击搜索或按下回车键时触发	|value|
|on-clear |开启 clearable 时可用，点击清空按钮时触发|	无|

### Input slot 

| 名称      | 说明    |
|---------- |-------- |
| prepend     | 前置内容，仅在 text 类型下有效   |
| append     | 后置内容，仅在 text 类型下有效   |
| prefix     | 输入框头部图标   |
| suffix     | 输入框尾部图标  |

### Input methods 

| 方法名      | 说明    | 返回值      |
|---------- |-------- |---------- |
| focus     | 手动聚焦输入框   | 无  |
