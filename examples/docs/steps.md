## b-step 步骤条

<template>
    <div class="global-anchor">
      <b-anchor :scroll-offset="100">
        <b-anchor-link href="#ji-chu-yong-fa" title="基础用法"></b-anchor-link>
        <b-anchor-link href="#xiao-xing-bu-zou-tiao" title="小型步骤条"></b-anchor-link>
        <b-anchor-link href="#zi-ding-yi-tu-biao" title="自定义图标"></b-anchor-link>
        <b-anchor-link href="#shu-xing-bu-zou" title="竖型步骤"></b-anchor-link>
        <b-anchor-link href="#she-zhi-zhuang-tai" title="设置状态"></b-anchor-link>
        <b-anchor-link href="#steps-props" title="Steps Props"></b-anchor-link>
        <b-anchor-link href="#step-props" title="Step Props"></b-anchor-link>
        <b-anchor-link href="#step-slot" title="Step Slot"></b-anchor-link>
      </b-anchor>
    </div>
</template>

提示某个任务的步骤

### 基础用法

基本用法，组件会根据current自动判断各步骤状态。

::: demo
```html
<template>
<b-steps :current="current">
    <b-step title="已完成" content="这里是该步骤的描述信息"></b-step>
    <b-step title="进行中" content="这里是该步骤的描述信息"></b-step>
    <b-step title="待进行" content="这里是该步骤的描述信息"></b-step>
    <b-step title="待进行" content="这里是该步骤的描述信息"></b-step>
</b-steps>
<b-button type="primary" @click="next">下一步</b-button>
</template>
<script>
export default {
    data () {
        return {
            current: 0
        }
    },
    methods: {
        next () {
            if (this.current === 3) {
                this.current = 0;
            } else {
                this.current += 1;
            }
        }
    }
}
</script>
```
:::

### 小型步骤条

设置 `size="small"`开启显示小型步骤条

::: demo
```html
<template>
    <b-steps :current="2" size="small">
        <b-step title="已完成"></b-step>
        <b-step title="进行中"></b-step>
        <b-step title="待进行"></b-step>
        <b-step title="待进行"></b-step>
    </b-steps>
</template>
<script>
export default {

}
</script>
```
:::

### 自定义图标

设置 `icon`自定义设置图标

::: demo
```html
<template>
    <b-steps :current="1">
        <b-step title="已完成" icon="ios-ribbon"></b-step>
        <b-step title="进行中" icon="ios-snow"></b-step>
        <b-step title="待进行" icon="ios-body"></b-step>
    </b-steps>
</template>
<script>
export default {

}
</script>
```
:::

### 竖型步骤

设置`direction="vertical"`可以开启竖向的步骤

::: demo
```html
<template>
<b-steps :current="current" direction="vertical">
    <b-step title="已完成" content="这里是该步骤的描述信息"></b-step>
    <b-step title="进行中" content="这里是该步骤的描述信息"></b-step>
    <b-step title="待进行" content="这里是该步骤的描述信息"></b-step>
    <b-step title="待进行" content="这里是该步骤的描述信息"></b-step>
</b-steps>
<b-button type="primary" @click="next">下一步</b-button>
</template>
<script>
export default {
    data () {
        return {
            current: 0
        }
    },
    methods: {
        next () {
            if (this.current === 3) {
                this.current = 0;
            } else {
                this.current += 1;
            }
        }
    }
}
</script>
```
:::

### 设置状态

基本用法，组件会根据current自动判断各步骤状态。

::: demo
```html
<template>
<b-steps :current="2" status="error">
    <b-step title="已完成" content="这里是该步骤的描述信息"></b-step>
    <b-step title="进行中" content="这里是该步骤的描述信息"></b-step>
    <b-step title="待进行" content="这里是该步骤的描述信息"></b-step>
    <b-step title="待进行" content="这里是该步骤的描述信息"></b-step>
</b-steps>
</template>
<script>
export default {
}
</script>
```
:::

### API

### Steps Props 

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| current     | 当前步骤   | Number  |  —   |  0   |
| status     | 当前步骤的状态   | String  |  wait、process、finish、error、success  |  process   |
| size     | 大小	   | String  | small  |  —    |
| direction     |  方向	   | String  |  horizontal（水平）或vertical（垂直）  |  horizontal   |


### Step Props 

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| title     | 标题   | String  |  —   | —   |
| status     | 当前步骤的状态   | String  |  wait、process、finish、error、success  |  process   |
| content     | 详细内容(可选)| String  | —   |  —    |
| icon     |  自定义图标	   | String  |  —   |  —    |

### Step Slot

| 事件名      | 说明    |
|---------- |-------- |
| title  | 标题  |
| content  | 详细内容  |
| icon  | 自定义图标  |
