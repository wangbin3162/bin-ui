## Rate 评分

用于显示评分

### 基础用法


::: demo
```html  
<template>
    <div class="block">
      <span class="demonstration">默认不区分颜色</span>
      <b-rate v-model="value1"></b-rate>
    </div>
    <div class="block">
      <span class="demonstration">区分颜色</span>
      <b-rate
        v-model="value2"
        :colors="colors">
      </b-rate>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        value1: null,
        value2: null,
        colors: ['#99A9BF', '#F7BA2A', '#FF9900'] ,
        value: null,
        iconClasses: ['icon-ios-heart-empty', 'icon-ios-heart', 'icon-ios-heart'] 
      }
    }
  }
</script>
```
:::


### 其他的icon

::: demo
```html  
<b-rate
  v-model="value"
  :icon-classes="iconClasses"
  void-icon-class="icon-ios-heart-empty"
  :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
</b-rate>

<script>
  export default {
    data() {
      return {
        value: null,
        iconClasses: ['icon-ios-heart-empty', 'icon-ios-heart', 'icon-ios-heart'] 
      }
    }
  }
</script>
```
:::

### 只读的

::: demo
```html  
<b-rate
  :value="3.7"
  disabled
  show-score
  text-color="#ff9900"
  score-template="3.7">
</b-rate>
```
:::

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value / v-model | 绑定值 | number | — | 0 |
| max | 最大分值 | number | — | 5 |
| disabled | 是否为只读 | boolean | — | false |
| allow-half | 是否允许半选 | boolean | — | false |
| low-threshold | 低分和中等分数的界限值，值本身被划分在低分中 | number | — | 2 |
| high-threshold | 高分和中等分数的界限值，值本身被划分在高分中 | number | — | 4 |
| colors | icon 的颜色数组，共有 3 个元素，为 3 个分段所对应的颜色 | array | — | ['#F7BA2A', '#F7BA2A', '#F7BA2A'] |
| void-color | 未选中 icon 的颜色 | string | — | #C6D1DE |
| disabled-void-color | 只读时未选中 icon 的颜色 | string | — | #EFF2F7 |
| icon-classes | icon 的类名数组，共有 3 个元素，为 3 个分段所对应的类名 | array | — | ['icon-ios-star', 'icon-ios-star', 'icon-ios-star'] |
| void-icon-class | 未选中 icon 的类名 | string | — | icon-ios-star-outline |
| disabled-void-icon-class | 只读时未选中 icon 的类名 | string | — | icon-ios-star |
| show-text | 是否显示辅助文字，若为真，则会从 texts 数组中选取当前分数对应的文字内容 | boolean | — | false |
| show-score | 是否显示当前分数，show-score 和 show-text 不能同时为真 | boolean | — | false |
| text-color | 辅助文字的颜色 | string | — | #1F2D3D |
| texts | 辅助文字数组 | array | — | ['极差', '失望', '一般', '满意', '惊喜'] |
| score-template | 分数显示模板 | string | — | {value} |

### Events
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| change | 分值改变时触发 | 改变后的分值 |
