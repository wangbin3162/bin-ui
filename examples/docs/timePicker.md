## TimePicker 时间选择器

### 基础用法

设置属性 type 为 time 或 timerange 分别显示选择单个时间和选择范围时间类型。

::: demo
```html  
<template>
<div flex="box:mean" style="width: 500px;">
  <div style="padding:0 10px;">
    <b-time-picker type="time" placeholder="Select time"></b-time-picker>
  </div>
  <div style="padding:0 10px;">
    <b-time-picker type="timerange" placement="bottom-start" placeholder="Select time"></b-time-picker>
  </div>
</div>
</template>
```
:::

### 时间格式

设置属性 format 可以改变时间的显示格式

::: demo 注意， [format]() 只是改变显示的格式，并非改变 value 值。
```html  
<template>
<div flex="box:mean" style="width: 500px;">
  <div style="padding:0 10px;">
    <b-time-picker type="time" value="09:41:00" format="HH点mm分ss秒" placeholder="Select time"></b-time-picker>
  </div>
  <div style="padding:0 10px;">
    <b-time-picker type="timerange" :value="['09:41:00', '12:00:00']" format="HH’mm’ss" placement="bottom-start" placeholder="Select time"></b-time-picker>
  </div>
</div>
</template>
```
:::

### 选择时分

组件浮层中的列会随着 format 变化，当略去 format 中的秒时，浮层中对应的列也会消失。

::: demo
```html  
<template>
<div flex="box:mean" style="width: 500px;">
  <div style="padding:0 10px;">
    <b-time-picker type="time" format="HH:mm" placeholder="Select time"></b-time-picker>
  </div>
  <div style="padding:0 10px;">
    <b-time-picker type="timerange" format="HH:mm" placement="bottom-start" placeholder="Select time"></b-time-picker>
  </div>
</div>
</template>
```
:::

### 时间间隔

通过属性 `steps` 可以设置时间间隔。数组的三项分别对应小时、分钟、秒。

::: demo
```html  
<template>
  <div style="padding:0 10px; width: 168px;">
    <b-time-picker type="time" :steps="[1, 15, 15]" placeholder="Select time"></b-time-picker>
  </div>
</template>
```
:::

### 不可选时间

可以使用 `disabled-hours` `disabled-minutes` `disabled-seconds` 组合禁止用户选择某个时间。

使用 `hide-disabled-options` 可以直接把不可选择的项隐藏。

::: demo
```html  
<template>
<div flex="box:mean" style="width: 500px;">
  <div style="padding:0 10px;">
    <b-time-picker type="time" :disabled-hours="[1,5,10]" :disabled-minutes="[0,10,20]" placeholder="Select time"></b-time-picker>
  </div>
  <div style="padding:0 10px;">
    <b-time-picker type="timerange"
                hide-disabled-options
                :disabled-hours="[1,5,10]"
                :disabled-minutes="[0,10,20]"
                placement="bottom-start" placeholder="Select time"></b-time-picker>
  </div>
</div>
</template>
```
:::

### 带有确认操作

类似日期选择，可以带有确认操作confirm

::: demo
```html  
<template>
<div flex="box:mean" style="width: 500px;">
  <div style="padding:0 10px;">
    <b-time-picker type="time" confirm  placeholder="Select time"></b-time-picker>
  </div>
  <div style="padding:0 10px;">
    <b-time-picker type="timerange" confirm  placement="bottom-start" placeholder="Select time"></b-time-picker>
  </div>
</div>
</template>
```
:::

### 手动控制组件

类似日期选择，可以定制化组件选择

::: demo
```html  
<template>
  <b-time-picker
        :open="open"
        :value="value3"
        confirm
        @on-change="handleChange"
        @on-clear="handleClear"
        @on-ok="handleOk">
        <a href="javascript:void(0)" @click="handleClick">
            <template v-if="value3 === ''">Select time</template>
            <template v-else>{{ value3 }}</template>
        </a>
    </b-time-picker>
</template>
<script>
    export default {
        data () {
            return {
                open: false,
                value3: ''
            }
        },
        methods: {
            handleClick () {
                this.open = !this.open;
            },
            handleChange (time) {
                this.value3 = time;
            },
            handleClear () {
                this.open = false;
            },
            handleOk () {
                this.open = false;
            }
        }
    }
</script>
```
:::

### 不同尺寸

设置属性 `size` 可以调整输入选择框的尺寸，参考input尺寸

::: demo 
```html  
<template>
<div flex="box:mean" style="width: 500px;">
  <div style="padding:0 10px;">
    <b-time-picker size="small" placeholder="Select date"></b-time-picker>
  </div>
  <div style="padding:0 10px;">
    <b-time-picker placeholder="Select date"></b-time-picker>
  </div>
  <div style="padding:0 10px;">
    <b-time-picker size="large" placeholder="Select date"></b-time-picker>
  </div>
</div>
</template>
```
:::

### Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| Attributes     | 说明   | string  |  —   |   —   |


### Events

| 事件名      | 说明    | 返回值      |
|---------- |-------- |---------- |
| on-close     | 关闭时触发   | event  |

### Slot

| 名称      | 说明    |
|---------- |-------- |
| default     | 警告提示内容   |
