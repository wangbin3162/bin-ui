## Slider 滑块组件

<template>
    <div class="global-anchor">
      <b-anchor :scroll-offset="100">
        <b-anchor-link href="#ji-chu-yong-fa" title="基础用法"></b-anchor-link>
        <b-anchor-link href="#bu-chang-he-duan-dian" title="步长和断点"></b-anchor-link>
        <b-anchor-link href="#shu-ru-kuang-he-ti-shi" title="输入框和提示"></b-anchor-link>
        <b-anchor-link href="#dai-biao-ji" title="带标记"></b-anchor-link>
        <b-anchor-link href="#attributes" title="Attributes"></b-anchor-link>
        <b-anchor-link href="#events" title="Events"></b-anchor-link>
        <b-anchor-link href="#slot" title="Slot"></b-anchor-link>
      </b-anchor>
    </div>
</template>

### 基础用法

::: demo
```html
<template>
<div>
    <b-slider v-model="value1"></b-slider>
    <b-slider v-model="value2" range></b-slider>
    <b-slider v-model="value3" range disabled></b-slider>
</div>
</template>
<script>
    export default {
        data () {
            return {
                value1: 25,
                value2: [20, 60],
                value3: [30, 40]
            }
        }
    }
</script>
```
:::

### 步长和断点

::: demo
```html
<template>
<div>
    <b-slider v-model="value4" :step="10"></b-slider>
    <b-slider v-model="value5" :step="10" show-stops></b-slider>
    <b-slider v-model="value6" :step="10" range></b-slider>
    <b-slider v-model="value7" :step="10" range show-stops></b-slider>
</div>
</template>
<script>
    export default {
        data () {
            return {
                value4: 30,
                value5: 30,
                value6: [20, 50],
                value7: [20, 50]
            }
        }
    }
</script>
```
:::

### 输入框和提示

::: demo
```html
<template>
<div>
    <b-slider v-model="value8" show-input></b-slider>
    <br/>
    <b-slider v-model="value9" :tip-format="format"></b-slider>
    <br/>
    <b-slider v-model="value10" :tip-format="hideFormat"></b-slider>
</div>
</template>
<script>
    export default {
        data () {
            return {
                value8: 30,
                value9: 30,
                value10: 30
            }
        },  
        methods: {
           format (val) {
              return '进度: ' + val + '%';
           },
           hideFormat () {
              return null;
           }
        }
    }
</script>
```
:::

### 带标记

::: demo
```html
<template>
<div>
   <b-slider v-model="value11" range :marks="marks"></b-slider>
</div>
</template>
<script>
    export default {
        data () {
            return {
                value11: [15, 65],
                marks: {
                    0: '0°C',
                    12: '12°C',
                    36: '36°C',
                    88: {
                        style: {
                            color: '#ff0000'
                        },
                        label: this.$createElement('strong', '88°C')
                    }
                }
            }
        },  
        methods: {
           format (val) {
              return '进度: ' + val + '%';
           },
           hideFormat () {
              return null;
           }
        }
    }
</script>
```
:::

### Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value | 滑块选定的值，可以使用 v-model 双向绑定数据。   | Number/ Array  |  —   |   0  |
| min  | 最小值   | Number  |  —   |   0  |
| max  | 最大值   | Number  |  —   |   100  |
| step  | 步长，取值建议能被（max - min）整除   | Number  |  —   |   1  |
| disabled  | 是否禁用  | Boolean  |  —   |  false  |
| range  | 范围模式，绑定值为[num,num]  | Boolean  |  —   |  false  |
| show-input  | 显示数字输入框，range模式无效  | Boolean  |  —   |  false  |
| show-stops  | 显示断点,不密集时使用  | Boolean  |  —   |  false  |
| show-tip | 提示的显示控制 | String  |  hover（悬停，默认）、always（总是）、never（不可见）   |  hover  |
| tip-format | tip格式化，函数，返回null隐藏tip | Function  |  -   |  value  |
| input-size | 输入框尺寸 | String |  large,default,small,mini  |  default  |
| marks | 标记点,key 的类型必须为 number 且取值在闭区间 [min, max] 内，每个标记可以单独设置样式 | Object |  -  |  -  |

### Events

| 事件名      | 说明    | 返回值      |
|---------- |-------- |---------- |
| change    | 松开滑动时，当前只改变触发   | value |
| input    |  滑动过程中实时触发  | value |

