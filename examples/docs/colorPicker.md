## Color Picker 颜色选择器

### 基础用法

有无默认值的显示状态

::: demo
```html
<template>
<div>
  <b-color-picker v-model="color1"></b-color-picker>
  &nbsp;&nbsp;
  <b-color-picker v-model="color2"></b-color-picker>
</div>
</template>
<script>
export default {
    data () {
        return {
            color1: '#2d8cf0',
            color2: ''
        }
    }
}
</script>
```
:::

### 带透明度

可以设置是否开启透明度`alpha` 

::: demo
```html
<template>
<div>
  <b-color-picker v-model="color" alpha ></b-color-picker>
</div>
</template>
<script>
export default {
    data () {
        return {
            color: 'rgba(45,140,240,0.45)'
        }
    }
}
</script>
```
:::

### 禁用色彩条

可以禁用hue来锁定只在一个颜色区间内选择

::: demo
```html
<template>
<div>
  <b-color-picker v-model="color"  :hue="false" ></b-color-picker>
</div>
</template>
<script>
export default {
    data () {
        return {
            color: '#2d8cf0'
        }
    }
}
</script>
```
:::

### 颜色预设

可以开启默认的和自定义预设颜色用于快速设置

::: demo
```html
<template>
<div>
  <b-color-picker v-model="color1" recommend></b-color-picker>&nbsp;&nbsp;
  <b-color-picker v-model="color2" :colors="colors"></b-color-picker>
</div>
</template>
<script>
export default {
    data () {
        return {
            color1: '#2d8cf0',
            color2: '#2d8cf0',
            colors: ['#311B92', '#512DA8', '#673AB7', '#9575CD', '#D1C4E9']
        }
    }
}
</script>
```
:::

### 尺寸设置

可以设置4种不同尺寸 分别是`large`,`default`,`small`,`mini` 默认是default

::: demo
```html
<template>
<div>
  <b-color-picker v-model="color" size="large"></b-color-picker>&nbsp;&nbsp;
  <b-color-picker v-model="color"></b-color-picker>&nbsp;&nbsp;
  <b-color-picker v-model="color" size="small"></b-color-picker>&nbsp;&nbsp;
  <b-color-picker v-model="color" size="mini"></b-color-picker>&nbsp;&nbsp;
</div>
</template>
<script>
export default {
    data () {
        return {
            color: '#2d8cf0'
        }
    }
}
</script>
```
:::

### Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value     | 绑定的值，可使用 v-model 双向绑定  | String  |  —   |   0  |
| disabled   | 是否禁用   | Boolean  |  —   |  false |
| editable   | 是否可以输入  | Boolean  |  —   |  true |
| alpha   | 是否支持透明度选择   | Boolean  |  —   |  false |
| hue   | 是否支持色彩选择  | Boolean  |  —   |  true |
| recommend   | 是否显示推荐的颜色预设   | Boolean  |  —   |  false |
| colors   | 自定义颜色预设   | Array  |  —   |  [] |
| format   | 颜色的格式  | String  |  hsl、hsv、hex、rgb  |  开启 alpha 时为 rgb，其它为 hex |
| size   | 尺寸  | String  |  large、default 、small、mini |  default  |
| appendToBody   | 是否将弹层放置于body下  | Boolean  |  —   |  false |

### Events

| 事件名      | 说明    | 返回值      |
|---------- |-------- |---------- |
| change    | 当绑定值变化时触发   | 当前值  |
| active-change   | 面板中当前显示的颜色发生改变时触发   | 当前显示的颜色值  |
| open-change   | 下拉框展开或收起时触发   | true / false  |

