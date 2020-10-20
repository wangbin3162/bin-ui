## Radio 单选框

<template>
    <div class="global-anchor">
      <b-anchor :scroll-offset="100">
        <b-anchor-link href="#ji-chu-yong-fa" title="基础用法"></b-anchor-link>
        <b-anchor-link href="#zu-he-shi-yong" title="组合使用"></b-anchor-link>
        <b-anchor-link href="#an-niu-mo-shi" title="按钮模式"></b-anchor-link>
        <b-anchor-link href="#jin-yong" title="禁用"></b-anchor-link>
        <b-anchor-link href="#attributes" title="Attributes"></b-anchor-link>
        <b-anchor-link href="#radio-events" title="Radio events"></b-anchor-link>
        <b-anchor-link href="#radiogroup-slot" title="RadioGroup slot"></b-anchor-link>
        <b-anchor-link href="#radiogroup-methods" title="RadioGroup methods"></b-anchor-link>
      </b-anchor>
    </div>
</template>

基本组件-单选框。主要用于一组可选项单项选择，或者单独用于切换到选中状态。

### 基础用法

::: demo
```html
<template>
    <b-radio v-model="single">Radio</b-radio>
     <span style="color:#ff4511;">{{single}}</span>
</template>
<script>
export default {
    data () {
        return {
            single: false
        }
    }
}
</script>
```
:::

### 组合使用

::: demo
```html
<template>
    <b-radio-group v-model="social">
       <b-radio label="twitter">
           <span>Twitter</span>
       </b-radio>
       <b-radio label="facebook">
           <span>Facebook</span>
       </b-radio>
       <b-radio label="github">
           <span>Github</span>
       </b-radio>
       <b-radio label="snapchat">
           <span>Snapchat</span>
       </b-radio>
   </b-radio-group>
   <p style="color:#ff4511;margin: 5px 0;">{{social}}</p>
   <b-radio-group v-model="fruit">
       <b-radio label="香蕉"></b-radio>
       <b-radio label="苹果"></b-radio>
       <b-radio label="西瓜"></b-radio>
   </b-radio-group>
   <p style="color:#ff4511;margin: 5px 0;">{{fruit}}</p>
</template>
<script>
export default {
    data () {
        return {
            social: 'facebook',
            fruit: '苹果'
        }
    }
}
</script>
```
:::


### 按钮模式

::: demo
```html
<template>
<div flex>
<div>
   <b-radio-group v-model="fruit" type="button">
       <b-radio label="香蕉"></b-radio>
       <b-radio label="苹果"></b-radio>
       <b-radio label="西瓜"></b-radio>
   </b-radio-group>
<br>
   <b-radio-group v-model="fruit" type="button" size="small">
       <b-radio label="香蕉"></b-radio>
       <b-radio label="苹果"></b-radio>
       <b-radio label="西瓜"></b-radio>
   </b-radio-group>
<br>
   <b-radio-group v-model="fruit" type="button" size="mini">
       <b-radio label="香蕉"></b-radio>
       <b-radio label="苹果"></b-radio>
       <b-radio label="西瓜"></b-radio>
   </b-radio-group>
</div>
<div style="margin-left: 24px;">
   <b-radio-group v-model="fruit" type="button">
       <b-radio label="香蕉" disabled></b-radio>
       <b-radio label="苹果"></b-radio>
       <b-radio label="西瓜"></b-radio>
   </b-radio-group>
<br>
   <b-radio-group v-model="fruit" type="button" disabled>
       <b-radio label="香蕉" disabled></b-radio>
       <b-radio label="苹果"></b-radio>
       <b-radio label="西瓜"></b-radio>
   </b-radio-group>
</div>
</div>


   <span style="color:#ff4511;margin: 5px 0;">{{fruit}}</span>
</template>
<script>
export default {
    data () {
        return {
            fruit: ''
        }
    }
}
</script>
```
:::

### 禁用

::: demo
```html
<template>
    <b-radio v-model="disabledSingle" disabled>Checkbox</b-radio>
       <b-radio-group v-model="disabledGroup">
           <b-radio label="香蕉" disabled></b-radio>
           <b-radio label="苹果" disabled></b-radio>
           <b-radio label="西瓜"></b-radio>
       </b-radio-group>
</template>
<script>
    export default {
        data () {
            return {
                disabledSingle: true,
                disabledGroup: '苹果'
            }
        }
    }
</script>
```
:::

### Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value     | 只在单独使用时有效。可以使用 v-model 双向绑定数据   | Boolean  |  —   |   false  |
| label     | 组合使用时有效。指定当前选项的 value 值，组合会自动判断是否选中   | String/Number/Boolean  |  —   |    —   |
| disabled     | 是否禁用当前项  | Boolean  |  —   |   false  |
| indeterminate     | 设置 indeterminate 状态，只负责样式控制  | Boolean  |  —   |   false  |
| type     | 设置 单选项为按钮模式  | String  | button   |  —   |

### Radio events

| 事件名      | 说明    | 返回值  |
|---------- |-------- |---------- |
| change     | 在选项状态发生改变时触发，返回当前状态。通过修改外部的数据改变时不会触发  | ... |

### RadioGroup  props

| 事件名      | 说明    |类型      | 返回值  |
|---------- |-------- |---------- |--------- |
| value   | 指定选中项目的集合，可以使用 v-model 双向绑定数据  | String/ Number  | ...  |
| size   | 多选框组的尺寸，可选值为 large、small、default 或者不设置  |String  | — |
| disabled     | 是否禁用所有选项  | Boolean  |  —   |   false  |

### RadioGroup  events

| 事件名      | 说明    | 返回值  |
|---------- |-------- |---------- |
| change     | 在选项状态发生改变时触发，返回已选中的数组。通过修改外部的数据改变时不会触发 | ... |

