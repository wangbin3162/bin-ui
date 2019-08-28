## DatePicker 日期选择器

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
                },
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
                },
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

### 可以设置快捷方式

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

::: demo `disabledDate` 是函数，参数为当前的日期，需要返回 Boolean 是否禁用这天。
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
<div flex="box:mean" style="width: 500px;">
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
<b-date-picker type="datetime" placeholder="选择日期时间" style="width: 200px"></b-date-picker>
<br>
<b-date-picker type="datetime" format="yyyy-MM-dd HH:mm" placeholder="选择日期时间(忽略秒)" style="width: 200px"></b-date-picker>
<br>
<b-date-picker type="datetimerange" placeholder="选择日期时间" style="width: 300px"></b-date-picker>
<br>
<b-date-picker type="datetimerange" format="yyyy-MM-dd HH:mm" placeholder="选择日期时间(忽略秒)" style="width: 300px"></b-date-picker>
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
