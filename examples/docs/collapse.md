## Collapse 折叠面板

需要进行分段显示时使用折叠面板

### 基础用法

默认可以同时展开多个面板，可以设置默认展开第几个。

:::demo 
```html
<template>
   <div style="width:500px;">
    <b-collapse v-model="value1">
         <b-collapse-panel title="史蒂夫·罗杰斯" name="1">
           美国队长史蒂夫·罗杰斯由克里斯·埃文斯饰演，复联三巨头之一，是复仇者联盟的精神领袖
         </b-collapse-panel>
         <b-collapse-panel title="托尼斯·塔克" name="2">
           钢铁侠托尼斯·塔克由小罗伯特·唐尼饰演，最大的超能力是有钱。
         </b-collapse-panel>
         <b-collapse-panel title="雷神·托尔" name="3">
           雷神·托尔，阿斯加德神域的王子，逗比一个
         </b-collapse-panel>
   </b-collapse>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                value1: '1'
            }
        }
    }
</script>
```
:::

### 手风琴模式

手风琴模式默认只能开启一个

:::demo 
```html
<template>
   <div style="width:500px;">
    <b-collapse v-model="value2" accordion>
         <b-collapse-panel title="史蒂夫·罗杰斯" name="1">
           美国队长史蒂夫·罗杰斯由克里斯·埃文斯饰演，复联三巨头之一，是复仇者联盟的精神领袖
         </b-collapse-panel>
         <b-collapse-panel title="托尼斯·塔克" name="2">
           钢铁侠托尼斯·塔克由小罗伯特·唐尼饰演，最大的超能力是有钱。
         </b-collapse-panel>
         <b-collapse-panel title="雷神·托尔" name="3">
           雷神·托尔，阿斯加德神域的王子，逗比一个
         </b-collapse-panel>
   </b-collapse>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                value2: '1'
            }
        }
    }
</script>
```
:::

### 简单模式和自定义头

simple 设置简单模式

:::demo 
```html
<template>
   <div style="width:500px;">
    <b-collapse v-model="value3" simple>
         <b-collapse-panel title="史蒂夫·罗杰斯" name="1">
            <span slot="title">
                 史蒂夫·罗杰斯 <b-icon name="ios-disc" size="18"></b-icon>
            </span>
           美国队长史蒂夫·罗杰斯由克里斯·埃文斯饰演，复联三巨头之一，是复仇者联盟的精神领袖
         </b-collapse-panel>
         <b-collapse-panel title="托尼斯·塔克" name="2">
           钢铁侠托尼斯·塔克由小罗伯特·唐尼饰演，最大的超能力是有钱。
         </b-collapse-panel>
         <b-collapse-panel title="雷神·托尔" name="3">
           雷神·托尔，阿斯加德神域的王子，逗比一个
         </b-collapse-panel>
   </b-collapse>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                value3: '1'
            }
        }
    }
</script>
```
:::

### Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value     | 当前激活的面板的 name，可以使用 v-model 双向绑定   | Array/String  |    —       |    —    |
| accordion     | 是否开启手风琴模式，开启后每次至多展开一个面板   | Boolean  |    —       |    false    |
| simple     | 是否开启简洁模式   | Boolean  |    —       |    false    |

### Events

| 事件名      | 说明    | 返回值      |
|---------- |-------- |---------- |
| on-change     | 切换面板时触发，返回当前已展开的面板的 key，格式为数组   | Array[]  |


### Slot

| 名称      | 说明    |
|---------- |-------- |
| title     | 面板头内容   |

