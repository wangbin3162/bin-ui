## Collapse 折叠面板

<template>
    <div class="global-anchor">
      <b-anchor :scroll-offset="100">
        <b-anchor-link href="#ji-chu-yong-fa" title="基础用法"></b-anchor-link>
        <b-anchor-link href="#shou-feng-qin-mo-shi" title="手风琴模式"></b-anchor-link>
        <b-anchor-link href="#jian-dan-mo-shi-he-zi-ding-yi-tou" title="简单模式和自定义头"></b-anchor-link>
        <b-anchor-link href="#rong-qi-zu-jian" title="容器组件"></b-anchor-link>
        <b-anchor-link href="#api" title="API">
            <b-anchor-link href="#attributes" title="Attributes"></b-anchor-link>
            <b-anchor-link href="#events" title="Events"></b-anchor-link>
            <b-anchor-link href="#slot" title="Slot"></b-anchor-link>
        </b-anchor-link>
      </b-anchor>
    </div>
</template>

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

### 容器组件

使用`b-collapse-wrap`组件可以单独使用独立的折叠面板

:::demo 
```html
<template>
   <div>
       <b-collapse-wrap  title="标题栏" collapse>
          <p v-for="i in 10" :key="i">我是内容我是内容...</p>
       </b-collapse-wrap>
       <b-collapse-wrap title="收起附加右侧操作" collapse>
          <div slot="right">
            <b-button type="primary" plain size="small">编辑</b-button>
          </div>
          <p v-for="i in 10" :key="i">我是内容我是内容...</p>
       </b-collapse-wrap>
       <b-collapse-wrap v-model="value4">
          <div slot="title" style="font-size: 16px;padding: 10px;">自定义开关和标题</div>
          <div slot="right">
            <b-button type="text" @click="value4=!value4">{{ value4?'收起':'展开' }}</b-button>
          </div>
          <p v-for="i in 10" :key="i">我是内容我是内容...</p>
       </b-collapse-wrap>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                value4: false
            }
        }
    }
</script>
```
:::

### API

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

### collapse-wrap Props

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value     | 是否展开   | Boolean  |    —       |   true    |
| title     | 标题   | String  |    —       |   —     |
| collapse  | 是否可以展开收起   | Boolean  |    —       |    false    |

### collapse-wrap Slot

| 名称      | 说明    |
|---------- |-------- |
| title     | 面板头内容   |
| right     | 右侧插入内容区域   |

