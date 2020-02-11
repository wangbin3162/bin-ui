## b-checkbox 多选框

<template>
    <div class="global-anchor">
      <b-anchor :scroll-offset="100">
        <b-anchor-link href="#ji-chu-yong-fa" title="基础用法"></b-anchor-link>
        <b-anchor-link href="#zu-he-shi-yong" title="组合使用"></b-anchor-link>
        <b-anchor-link href="#jin-yong" title="禁用"></b-anchor-link>
        <b-anchor-link href="#quan-xuan" title="全选"></b-anchor-link>
        <b-anchor-link href="#checkbox-props" title="Checkbox props"></b-anchor-link>
        <b-anchor-link href="#checkbox-events" title="Checkbox events"></b-anchor-link>
        <b-anchor-link href="#checkboxgroup-props" title="CheckboxGroup props"></b-anchor-link>
        <b-anchor-link href="#checkboxgroup-events" title="CheckboxGroup events"></b-anchor-link>
      </b-anchor>
    </div>
</template>

基本组件-多选框。主要用于一组可选项多项选择，或者单独用于标记切换某种状态。

### 基础用法

::: demo
```html
<template>
    <b-checkbox v-model="single">b-checkbox</b-checkbox>&nbsp;&nbsp;
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
   <b-checkbox-group v-model="social">
       <b-checkbox label="twitter">
           <span>Twitter</span>
       </b-checkbox>
       <b-checkbox label="facebook">
           <span>Facebook</span>
       </b-checkbox>
       <b-checkbox label="github">
           <span>Github</span>
       </b-checkbox>
       <b-checkbox label="snapchat">
           <span>Snapchat</span>
       </b-checkbox>
   </b-checkbox-group>
   <p style="color:#ff4511;margin: 5px 0;">{{social}}</p>
   <b-checkbox-group v-model="fruit">
       <b-checkbox label="香蕉"></b-checkbox>
       <b-checkbox label="苹果"></b-checkbox>
       <b-checkbox label="西瓜"></b-checkbox>
   </b-checkbox-group>
   <p style="color:#ff4511;margin: 5px 0;">{{fruit}}</p>
</template>
<script>
export default {
    data () {
        return {
            social: ['facebook', 'github'],
            fruit: ['苹果']
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
    <b-checkbox v-model="disabledSingle" disabled>Checkbox</b-checkbox>
       <b-checkbox-group v-model="disabledGroup">
           <b-checkbox label="香蕉" disabled></b-checkbox>
           <b-checkbox label="苹果" disabled></b-checkbox>
           <b-checkbox label="西瓜"></b-checkbox>
       </b-checkbox-group>
</template>

<script>
export default {
    data () {
        return {
            disabledSingle: true,
            disabledGroup: ['苹果']
        }
    }
}
</script>
```
:::

### 全选

::: demo
```html
<template>
    <div style="border-bottom: 1px solid #e9e9e9;padding-bottom:6px;margin-bottom:6px;">
        <b-checkbox
            :indeterminate="indeterminate"
            :value="checkAll"
            @click.prevent.native="handleCheckAll">全选</b-checkbox>
    </div>
    <b-checkbox-group v-model="checkAllGroup" @on-change="checkAllGroupChange">
        <b-checkbox label="香蕉"></b-checkbox>
        <b-checkbox label="苹果"></b-checkbox>
        <b-checkbox label="西瓜"></b-checkbox>
    </b-checkbox-group>
</template>

<script>
    export default {
         data () {
           return {
               indeterminate: true,
               checkAll: false,
               checkAllGroup: ['香蕉', '西瓜']
           }
       },
       methods: {
           handleCheckAll () {
               if (this.indeterminate) {
                   this.checkAll = false;
               } else {
                   this.checkAll = !this.checkAll;
               }
               this.indeterminate = false;

               if (this.checkAll) {
                   this.checkAllGroup = ['香蕉', '苹果', '西瓜'];
               } else {
                   this.checkAllGroup = [];
               }
           },
           checkAllGroupChange (data) {
               if (data.length === 3) {
                   this.indeterminate = false;
                   this.checkAll = true;
               } else if (data.length > 0) {
                   this.indeterminate = true;
                   this.checkAll = false;
               } else {
                   this.indeterminate = false;
                   this.checkAll = false;
               }
           }
       }
    }
</script>
```
:::

### Checkbox props

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value     | 只在单独使用时有效。可以使用 v-model 双向绑定数据   | Boolean  |  —   |   false  |
| label     | 组合使用时有效。指定当前选项的 value 值，组合会自动判断是否选中   | String/Number/Boolean  |  —   |    —   |
| disabled     | 是否禁用当前项  | Boolean  |  —   |   false  |
| indeterminate     | 设置 indeterminate 状态，只负责样式控制  | Boolean  |  —   |   false  |

### Checkbox events

| 事件名      | 说明    | 返回值  |
|---------- |-------- |---------- |
| on-change     | 只在单独使用时有效。在选项状态发生改变时触发，通过修改外部的数据改变时不会触发  | true/false  |

### CheckboxGroup props

| 属性      | 说明    |类型      | 返回值  |
|---------- |-------- |---------- |--------- |
| value   | 指定选中项目的集合，可以使用 v-model 双向绑定数据  |Array  | []  |
| size   | 多选框组的尺寸，可选值为 large、small、default 或者不设置  |String  | — |

### CheckboxGroup events

| 事件名      | 说明    | 返回值  |
|---------- |-------- |---------- |
| on-change     | 在选项状态发生改变时触发，返回已选中的数组。通过修改外部的数据改变时不会触发 | [...] |
