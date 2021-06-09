## InputNumber 数字输入

用于输入数字

### 基础用法

::: demo
```html
<template>
    <b-input-number :max="10" :min="1" v-model="value1"></b-input-number>
    <b-input-number :max="10" :min="1" v-model="value1" always></b-input-number>
</template>
<script>
    export default {
        data () {
            return {
                value1: 1
            }
        }
    }
</script>
```
:::

### 小数

::: demo
```html
<template>
    小数步长：<b-input-number :max="10" :min="1" v-model="value2" :step="0.2"></b-input-number>
    精度范围：<b-input-number v-model="value3" :precision="2"></b-input-number>
</template>
<script>
    export default {
        data () {
            return {
                value2: 1,
                value3: null
            }
        }
    }
</script>
```
:::

### 可以格式化

::: demo
```html
<template>
    <div>
        <b-input-number
            :max="10000"
            v-model="value3"
            :formatter="value => `$ ${value}`.replace(/B(?=(d{3})+(?!d))/g, ',')"
            :parser="value => value.replace(/$s?|(,*)/g, '')"></b-input-number>&nbsp;&nbsp;
        <b-input-number
            :max="100"
            v-model="value4"
            :formatter="value => `${value}%`"
            :parser="value => value.replace('%', '')"></b-input-number>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                value3: 1,
                value4: 1
            }
        }
    }
</script>
```
:::

### 不同尺寸

提供三种额外不同尺寸

::: demo
```html
<template>
    <div>
      <b-input-number v-model="value5" size="mini"></b-input-number>&nbsp;
      <b-input-number v-model="value5" size="small"></b-input-number>&nbsp;&nbsp;
      <b-input-number v-model="value5"></b-input-number>&nbsp;&nbsp;
      <b-input-number v-model="value5" size="large"></b-input-number>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                value5: 1
            }
        }
    }
</script>
```
:::

### 多种状态

禁用，只读和不可编辑三种状态

::: demo
```html
<template>
    <div>
      <b-input-number v-model="value6" disabled></b-input-number>&nbsp;&nbsp;
      <b-input-number v-model="value6" readonly></b-input-number>&nbsp;&nbsp;
      <b-input-number v-model="value6" :editable="false"></b-input-number>
    </div>
    <b-divider></b-divider>
    <div>
      <b-input-number v-model="value6" disabled always></b-input-number>&nbsp;&nbsp;
      <b-input-number v-model="value6" readonly always></b-input-number>&nbsp;&nbsp;
      <b-input-number v-model="value6" :editable="false" always></b-input-number>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                value6: 1
            }
        }
    }
</script>
```
:::

### Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
|max|	最大值	|Number	|-  |Infinity|
|min	|最小值|	Number|	- |Infinity|
|value|	当前值，可以使用 v-model 双向绑定数据|	Number| - |	1|
|step|	每次改变的步伐，可以是小数|	Number| - |	1|
|size	|输入框尺寸|String| large、small、default或者不填|	- |
|disabled|	设置禁用状态	|Boolean| - |	false|
|placeholder|	占位文本|	String| -|	- |
|formatter	|指定输入框展示值的格式|	Function| -|	-|
|parser	|指定从 formatter 里转换回数字的方式，和 formatter 搭配使用|	Function| - |	-|
|readonly	|是否设置为只读|	Boolean|-|	false|
|editable	|是否可编辑|	Boolean| |	true|
|precision	|数值精度|	Number| |	-|
|active-change|	是否实时响应数据|	Boolean| |	true|
| always |	是否始终显示控制器 |	Boolean| true |	- |

### Events 

| 事件名      | 说明    | 返回值      |
|---------- |-------- |---------- |
| change |	数值改变时的回调|返回当前值	当前值|
| focus |	聚焦时触发|	event|
| blur |	失焦时触发|	-|
