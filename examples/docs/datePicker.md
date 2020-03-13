## DatePicker 日期选择器

<template>
    <div class="global-anchor">
      <b-anchor :scroll-offset="100">
        <b-anchor-link href="#ji-chu-yong-fa" title="基础用法"></b-anchor-link>
        <b-anchor-link href="#kuai-jie-fang-shi" title="快捷方式"></b-anchor-link>
        <b-anchor-link href="#bu-lian-dong-he-duo-xuan" title="不联动和多选"></b-anchor-link>
        <b-anchor-link href="#xian-shi-xing-qi-shu" title="显示星期数"></b-anchor-link>
        <b-anchor-link href="#qi-shi-ri-qi" title="起始日期"></b-anchor-link>
        <b-anchor-link href="#nian-yue-xuan-ze" title="年月选择"></b-anchor-link>
        <b-anchor-link href="#ri-qi-ge-shi" title="日期格式"></b-anchor-link>
        <b-anchor-link href="#bu-ke-xuan-ri-qi" title="不可选日期"></b-anchor-link>
        <b-anchor-link href="#dai-you-cao-zuo-lan-de-dan-chu" title="带有操作栏的弹出"></b-anchor-link>
        <b-anchor-link href="#shou-dong-cha-ru-xuan-ze-zu-jian" title="手动插入选择组件"></b-anchor-link>
        <b-anchor-link href="#bu-tong-chi-cun" title="不同尺寸"></b-anchor-link>
        <b-anchor-link href="#ri-qi-shi-jian-xuan-ze" title="日期时间选择"></b-anchor-link>
        <b-anchor-link href="#attributes" title="Attributes"></b-anchor-link>
        <b-anchor-link href="#options" title="Options"></b-anchor-link>
        <b-anchor-link href="#events" title="Events"></b-anchor-link>
        <b-anchor-link href="#slot" title="Slot"></b-anchor-link>
      </b-anchor>
    </div>
</template>

### 基础用法

设置type 为 date 或 daterange 分别显示选择单日和选择范围类型。

设置属性 placement 可以更改选择器出现的方向

::: demo
```html
<template>
<div flex="box:mean" style="width: 500px;">
  <div style="padding:0 10px;">
    <b-date-picker type="date" placeholder="Select date"></b-date-picker>
  </div>
  <div style="padding:0 10px;">
    <b-date-picker type="daterange" placement="bottom-start" placeholder="Select date"></b-date-picker>
  </div>
</div>
</template>
```
:::

### 快捷方式

options 对象中的 shortcuts

其中 value 为函数，必须返回一个日期，如果是 daterange 类型，需要返回一个数组。

value 接收任何正确的日期格式，比如 2016-12-24 或 12/24/16 都是正确的。

::: demo
```html
<template>
<div flex="box:mean" style="width: 500px;">
  <div style="padding:0 10px;">
    <b-date-picker type="date" placeholder="Select date" :options="options1" ></b-date-picker>
  </div>
  <div style="padding:0 10px;">
    <b-date-picker type="daterange" placement="bottom-start" placeholder="Select date" :options="options2"></b-date-picker>
  </div>
</div>
</template>
<script>
export default {
    data () {
        return {
            options1: {
                shortcuts: [
                    {
                        text: '今天',
                        value () {
                            return new Date();
                        },
                        onClick: (picker) => {
                            this.$message('Click today');
                        }
                    },
                    {
                        text: '昨天',
                        value () {
                            const date = new Date();
                            date.setTime(date.getTime() - 3600 * 1000 * 24);
                            return date;
                        },
                        onClick: (picker) => {
                            this.$message('Click yesterday');
                        }
                    },
                    {
                        text: '一周',
                        value () {
                            const date = new Date();
                            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                            return date;
                        },
                        onClick: (picker) => {
                            this.$message('Click a week ago');
                        }
                    }
                ]
            },
            options2: {
                shortcuts: [
                    {
                        text: '近一周',
                        value () {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                            return [start, end];
                        }
                    },
                    {
                        text: '最近一个月',
                        value () {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                            return [start, end];
                        }
                    },
                    {
                        text: '最近三个月',
                        value () {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                            return [start, end];
                        }
                    }
                ]
            }
        }
    }
}
</script>
```
:::

### 不联动和多选

设置属性 `daterange` 时 `split-panels` 可以将左右面板联动关闭。`multiple` 后，可以多选。

::: demo
```html
<template>
<div flex="box:mean" style="width: 500px;">
  <div style="padding:0 10px;">
    <b-date-picker type="daterange" split-panels placeholder="Select date"></b-date-picker>
  </div>
  <div style="padding:0 10px;">
    <b-date-picker type="date" multiple placeholder="Select date"></b-date-picker>
  </div>
</div>
</template>
```
:::

### 显示星期数 

设置属性 `show-week-numbers` 可以显示星期数。

::: demo
```html
<template>
<div flex="box:mean" style="width: 500px;">
  <div style="padding:0 10px;">
    <b-date-picker type="date" show-week-numbers placeholder="Select date"></b-date-picker>
  </div>
  <div style="padding:0 10px;">
    <b-date-picker type="daterange" show-week-numbers placeholder="Select date"></b-date-picker>
  </div>
</div>
</template>
```
:::

### 起始日期 

设置属性 `start-date` 可以将默认显示的日期面板设置为指定日期。

::: demo
```html
<template>
<div flex="box:mean" style="width: 500px;">
  <div style="padding:0 10px;">
    <b-date-picker type="date" :start-date="new Date(1991, 4, 14)" placeholder="Select date"></b-date-picker>
  </div>
  <div style="padding:0 10px;">
    <b-date-picker type="daterange" :start-date="new Date(1991, 4, 14)" placeholder="Select date"></b-date-picker>
  </div>
</div>
</template>
```
:::

### 年月选择

设置属性 `type` 为 `year` 或 `month` 可以使用选择年或月的功能。

::: demo
```html
<template>
<div flex="box:mean" style="width: 500px;">
  <div style="padding:0 10px;">
    <b-date-picker type="year" placeholder="Select year"></b-date-picker>
  </div>
  <div style="padding:0 10px;">
    <b-date-picker type="month" placeholder="Select year"></b-date-picker>
  </div>
</div>
</template>
```
:::

### 日期格式

设置属性 `format` 变日期的显示格式 

::: demo `format` 只是改变显示的格式，并非改变 value 值。
```html
<template>
<div flex="box:mean" style="width: 500px;">
  <div style="padding:0 10px;">
    <b-date-picker type="date" value="2016-01-01" format="yyyy年MM月dd日" placeholder="Select date"></b-date-picker>
  </div>
  <div style="padding:0 10px;">
    <b-date-picker type="daterange" :value="['2016-01-01', '2016-02-15']" format="yyyy/MM/dd" placeholder="Select date"></b-date-picker>
  </div>
</div>
</template>
```
:::

### 不可选日期

设置属性 `options` 对象中的 `disabledDate` 可以设置不可选择的日期。

`disabledDate` 是函数，参数为当前的日期，需要返回 Boolean 是否禁用这天。

::: demo 
```html
<template>
<div flex="box:mean" style="width: 500px;">
  <div style="padding:0 10px;">
    <b-date-picker type="date" :options="options3" placeholder="Select date"></b-date-picker>
  </div>
  <div style="padding:0 10px;">
    <b-date-picker type="date" :options="options4" placeholder="Select date"></b-date-picker>
  </div>
</div>
</template>
<script>
   export default {
       data () {
           return {
               options3: {
                   disabledDate (date) {
                       return date && date.valueOf() < Date.now() - 86400000;
                   }
               },
               options4: {
                   disabledDate (date) {
                       const disabledDay = date.getDate();
                       return disabledDay === 15;
                   }
               }
           }
       }
   }
</script>
```
:::

### 带有操作栏的弹出

设置属性 `confirm` 选择日期后，户确认后才可关闭。

::: demo 
```html
<template>
<div flex="box:mean" style="width: 500px;">
  <div style="padding:0 10px;">
    <b-date-picker type="date" confirm placeholder="Select date"></b-date-picker>
  </div>
  <div style="padding:0 10px;">
    <b-date-picker type="daterange" confirm  placeholder="Select date"></b-date-picker>
  </div>
</div>
</template>
```
:::

### 手动插入选择组件

可以使用 slot 配合参数 open 及事件来手动控制组件的显示状态

::: demo 
```html
<template>
<div style="width: 500px;">
    <b-date-picker
         :open="open"
         :value="value3"
         confirm
         type="date"
         @on-change="handleChange"
         @on-clear="handleClear"
         @on-ok="handleOk">
         <a href="javascript:void(0)" @click="handleClick">
             <template v-if="value3 === ''">Select date</template>
             <template v-else>{{ value3 }}</template>
         </a>
     </b-date-picker>
</div>
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
            handleChange (date) {
                this.value3 = date;
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
    <b-date-picker size="mini" type="date" placeholder="Select date"></b-date-picker>
  </div>
  <div style="padding:0 10px;">
    <b-date-picker size="small" type="date" placeholder="Select date"></b-date-picker>
  </div>
  <div style="padding:0 10px;">
    <b-date-picker type="date" placeholder="Select date"></b-date-picker>
  </div>
  <div style="padding:0 10px;">
    <b-date-picker size="large" type="date" placeholder="Select date"></b-date-picker>
  </div>
</div>
</template>
```
:::

### 日期时间选择

type 为 `datetime` 或 `datetimerange` 可以选择时间。

::: demo 设置 `format` 并且忽略秒，可以只设置小时和分钟维度。
```html
<template>
<div flex="box:mean">
    <b-date-picker type="datetime" placeholder="选择日期时间" style="padding-right: 20px;"></b-date-picker>
    <b-date-picker type="datetime" format="yyyy-MM-dd HH:mm" placeholder="选择日期时间(忽略秒)" style="padding-right: 20px;"></b-date-picker>
    <b-date-picker type="datetimerange" placeholder="选择日期时间" style="padding-right: 20px;"></b-date-picker>
    <b-date-picker type="datetimerange" format="yyyy-MM-dd HH:mm" placeholder="选择日期时间(忽略秒)"></b-date-picker>
</div>
</template>
```
:::

### Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| type     | 显示类型   | string  |  date、daterange、datetime、datetimerange、year、month  |  date  |
| value    | 日期   | Date  |  JavaScript 的 Date，也可以是标准的日期格式,注意：value 使用 v-model 时，值是 Date 类型，可以配合 @on-change 使用  |  —  |
| format   | 日期的格式化   | Date  |  —  | date/daterange：yyyy-MM-dd, datetime/datetimerange：yyyy-MM-dd HH:mm:ss,year：yyyy,month：yyyy-MM |
| placement| 日期选择器出现的位置   | string  |  top,top-start,top-end,bottom,bottom-start,bottom-end,left,left-start,left-end,right,right-start,right-end  |  bottom-start  |
| placeholder | 提示文本   | string  |  —  |  — |
| options | 选择器额外配置，比如不可选日期与快捷选项，具体项详见下表   | Object  |  —  |  — |
| split-panels | 开启后，左右面板不联动，仅在 daterange 和 datetimerange 下可用。   | Boolean |  —  |false |
| multiple | 开启后，可以选择多个日期，仅在 date 下可用。   | Boolean |  —  |false |
| show-week-numbers | 显示星期数。| Boolean |  —  |false |
| start-date | 默认显示的起始日期。| Date |  —  | —  |
| confirm | 显示底部控制栏，开启后，选择完日期，需确认后关闭。| Boolean |  —  | false  |
| open | 手动控制日期选择器的显示状态，true 为显示，false 为收起。使用该属性后，选择器不会主动关闭。建议配合 slot 及 confirm 和相关事件一起使用。| Boolean |  —  | null  |
| size | 尺寸| string | large、small、default | default  |
| disabled | 是否禁用| Boolean |  —  |false |
| clearable | 是否显示清除按钮| Boolean |  —  |true |
| readonly | 完全只读，开启后不会弹出选择器,只在没有设置 open 属性下生效| Boolean |  —  |false |
| editable | 文本框是否可以输入，只在没有使用 slot 时有效 | Boolean |  —  |true |
| appendToBody | 是否将弹层放置于 body 内 | Boolean |  —  |false |
| element-id | 给表单元素设置 id，详见 Form 用法。 | String |  —  |  —  |
| time-picker-options | 可以在 type 为 datetime 和 datetimerange 下，配置 TimePicker 的属性，比如时间间隔 steps：:time-picker-options="{steps: [1, 10, 10]}"。 | Object	 |  —  |{}  |
| separator | 两个日期间的分隔符 | String |  —  |  —  |

### Options

选择器额外配置

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| shortcuts     | 设置快捷选项，每项内容：   | Array  |  text/String：显示的文案,value /Function：返回指定的日期，如需自己控制逻辑，可不设置，并使用 onClick 回调 onClick /Function：点击时的回调，参数为当前日期选择器的 Vue 实例，当需要自定义复杂操作时，可以使用   |  —  |
| disabledDate     | 设置不可选择的日期，参数为当前的日期，需要返回 Boolean 是否禁用这天   | Function  | —  |  —  |

### Events

| 事件名      | 说明    | 返回值      |
|---------- |-------- |---------- |
|  on-change     | 日期发生变化时触发   | 返回两个值，已经格式化后的日期，比如 2016-01-01，和当前的日期类型，比如 date  |
|  on-open-change| 弹出日历和关闭日历时触发  | true / false  |
|  on-ok     | 在 confirm 模式下有效，点击确定按钮时触发   | —  |
|  on-clear    | 在 confirm 模式或 clearable = true 时有效，在清空日期时触发  | —  |
|  on-clickoutside     | 点击外部关闭下拉菜单时触发   |event  |

### Slot

| 名称      | 说明    |
|---------- |-------- |
| default     | 自定义选择器的显示内容，建议与 open 等参数一起使用，详见示例  |
