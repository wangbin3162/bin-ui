## TimePicker 时间选择器

<template>
    <div class="global-anchor">
      <b-anchor :scroll-offset="100">
        <b-anchor-link href="#ji-chu-yong-fa" title="基础用法"></b-anchor-link>
        <b-anchor-link href="#shi-jian-ge-shi" title="时间格式"></b-anchor-link>
        <b-anchor-link href="#xuan-ze-shi-fen" title="选择时分"></b-anchor-link>
        <b-anchor-link href="#shi-jian-jian-ge" title="时间间隔"></b-anchor-link>
        <b-anchor-link href="#bu-ke-xuan-shi-jian" title="不可选时间"></b-anchor-link>
        <b-anchor-link href="#dai-you-que-ren-cao-zuo" title="带有确认操作"></b-anchor-link>
        <b-anchor-link href="#shou-dong-kong-zhi-zu-jian" title="手动控制组件"></b-anchor-link>
        <b-anchor-link href="#bu-tong-chi-cun" title="不同尺寸"></b-anchor-link>
        <b-anchor-link href="#attributes" title="Attributes"></b-anchor-link>
        <b-anchor-link href="#events" title="Events"></b-anchor-link>
        <b-anchor-link href="#slot" title="Slot"></b-anchor-link>
      </b-anchor>
    </div>
</template>

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
        @change="handleChange"
        @clear="handleClear"
        @ok="handleOk">
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
<div flex="box:mean">
  <div style="padding:0 10px;">
    <b-time-picker size="mini" placeholder="mini date"></b-time-picker>
  </div>
  <div style="padding:0 10px;">
    <b-time-picker size="small" placeholder="small date"></b-time-picker>
  </div>
  <div style="padding:0 10px;">
    <b-time-picker placeholder="default date"></b-time-picker>
  </div>
  <div style="padding:0 10px;">
    <b-time-picker size="large" placeholder="large date"></b-time-picker>
  </div>
</div>
</template>
```
:::

### Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| type     | 显示类型   | string  |  time、timerange |  date  |
| value    | 日期   | Date  |  JavaScript 的 Date，也可以是标准的日期格式,注意：value 使用 v-model 时，值是 Date 类型，可以配合 @change 使用  |  —  |
| format   | 展示的时间格式   | Date  |  —  | HH:mm:ss |
| steps   | 下拉列表的时间间隔，数组的三项分别对应小时、分钟、秒。例如设置为 [1, 15] 时，分钟会显示：00、15、30、45。  | Array  |  —  |[]|
| placement| 日期选择器出现的位置   | string  |  top,top-start,top-end,bottom,bottom-start,bottom-end,left,left-start,left-end,right,right-start,right-end  |  bottom-start  |
| placeholder | 提示文本   | string  |  —  |  — |
| confirm | 显示底部控制栏，开启后，选择完日期，需确认后关闭。| Boolean |  —  | false  |
| open | 手动控制日期选择器的显示状态，true 为显示，false 为收起。使用该属性后，选择器不会主动关闭。建议配合 slot 及 confirm 和相关事件一起使用。| Boolean |  —  | null  |
| size | 尺寸| string | large、small、default | default  |
| disabled | 是否禁用| Boolean |  —  |false |
| clearable | 是否显示清除按钮| Boolean |  —  |true |
| readonly | 完全只读，开启后不会弹出选择器,只在没有设置 open 属性下生效| Boolean |  —  |false |
| editable | 文本框是否可以输入，只在没有使用 slot 时有效 | Boolean |  —  |true |
| appendToBody | 是否将弹层放置于 body 内 | Boolean |  —  |false |
| element-id | 给表单元素设置 id，详见 Form 用法。 | String |  —  |  —  |
| separator | 两个时间间的分隔符 | String |  —  |  —  |

### Events

| 事件名      | 说明    | 返回值      |
|---------- |-------- |---------- |
|  change     | 时间发生变化时触发   | 已经格式化后的时间，比如 09:41:00  |
|  open-change| 弹出浮层和关闭浮层时触发  | true / false  |
|  ok     | 点击确定按钮时触发  | —  |
|  clear    | 清空日期时触发 | —  |

### Slot

| 名称      | 说明    |
|---------- |-------- |
| default     | 自定义选择器的显示内容，建议与 open 等参数一起使用，详见示例  |
