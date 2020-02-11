## Carousel 轮播

<template>
    <div class="global-anchor">
      <b-anchor :scroll-offset="100">
        <b-anchor-link href="#ji-chu-yong-fa" title="基础用法"></b-anchor-link>
        <b-anchor-link href="#zi-dong-qie-huan-he-su-du" title="自动切换和速度"></b-anchor-link>
        <b-anchor-link href="#zhi-shi-qi-yang-shi-he-wei-zhi" title="指示器样式和位置"></b-anchor-link>
        <b-anchor-link href="#attributes" title="Attributes"></b-anchor-link>
        <b-anchor-link href="#events" title="Events"></b-anchor-link>
      </b-anchor>
    </div>
</template>

### 基础用法

轮播组件，用于滚动显示图片等

::: demo
```html
<template>
    <b-carousel v-model="value1" loop>
        <b-carousel-item>
            <div class="demo-carousel-panel">1</div>
        </b-carousel-item>
        <b-carousel-item>
            <div class="demo-carousel-panel">2</div>
        </b-carousel-item>
        <b-carousel-item>
            <div class="demo-carousel-panel">3</div>
        </b-carousel-item>
        <b-carousel-item>
            <div class="demo-carousel-panel">4</div>
        </b-carousel-item>
    </b-carousel>
</template>
<script>
    export default {
        data () {
            return {
                value1: 0
            }
        }
    }
</script>
```
:::

### 自动切换和速度

可以设置`autoplay`自动切换，`trigger="hover"`悬停切换

::: demo
```html
<template>
    <b-carousel autoplay 
        :autoplay-speed="2000" v-model="value1" loop>
        <b-carousel-item>
            <div class="demo-carousel-panel">1</div>
        </b-carousel-item>
        <b-carousel-item>
            <div class="demo-carousel-panel">2</div>
        </b-carousel-item>
        <b-carousel-item>
            <div class="demo-carousel-panel">3</div>
        </b-carousel-item>
        <b-carousel-item>
            <div class="demo-carousel-panel">4</div>
        </b-carousel-item>
    </b-carousel>
</template>
<script>
    export default {
        data () {
            return {
                value1: 0
            }
        }
    }
</script>
```
:::

### 指示器样式和位置

`trigger="hover"`可以设置悬停切换

::: demo
```html
<template>
    <b-carousel dots="inside"
                radius-dot
                arrow="always"
                trigger="hover" 
                v-model="value1" loop>
        <b-carousel-item>
            <div class="demo-carousel-panel">1</div>
        </b-carousel-item>
        <b-carousel-item>
            <div class="demo-carousel-panel">2</div>
        </b-carousel-item>
        <b-carousel-item>
            <div class="demo-carousel-panel">3</div>
        </b-carousel-item>
        <b-carousel-item>
            <div class="demo-carousel-panel">4</div>
        </b-carousel-item>
    </b-carousel>
</template>
<script>
    export default {
        data () {
            return {
                value1: 0
            }
        }
    }
</script>
```
:::

### Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value     | 轮播的索引，从 0 开始，可以使用 v-model 双向绑定数据  | Number  |  —   |   0  |
| height   | 走马灯的高度，可填 auto 或具体高度数值，单位 px   | String / Number  |  —   |   auto  |
| loop   | 是否开启循环   | Boolean |  —   |   false  |
| autoplay   | 是否自动切换   | Boolean |  —   |   false  |
| autoplay-speed   | 自动切换的时间间隔，单位为毫秒   | Number |  —   |   2000  |
| dots  | 指示器的位置   | String | inside （内部），outside（外部），none（不显示）  |   inside  |
| radius-dot  | 是否显示圆形指示器   | Boolean |  —   |   false  |
| trigger | 触发方式   | String |  click，hover  |   click  |
| arrow | 切换箭头的显示时机   | String |  hover，always，never |   hover  |
| easing | 动画效果   | String |  —  |   ease  |

### Events

| 事件名      | 说明    | 返回值      |
|---------- |-------- |---------- |
| on-change    | 轮播切换时触发，目前激活的索引，原的索引   | oldValue, value  |
