## Timeline 时间线

<template>
    <div class="global-anchor">
      <b-anchor :scroll-offset="100">
        <b-anchor-link href="#ji-chu-yong-fa" title="基础用法"></b-anchor-link>
        <b-anchor-link href="#ke-yi-she-zhi-bu-tong-lei-xing-huo-zhe-zi-ding-yi-yan-se" title="可以设置不同类型或者自定义颜色"></b-anchor-link>
        <b-anchor-link href="#zui-hou-yi-ge-jie-dian-she-zhi" title="最后一个节点设置"></b-anchor-link>
        <b-anchor-link href="#zi-ding-yi-jie-dian-tu-biao" title="自定义节点图标"></b-anchor-link>
        <b-anchor-link href="#timeline-attributes" title="Timeline Attributes"></b-anchor-link>
        <b-anchor-link href="#timelineitem-attributes" title="TimelineItem Attributes"></b-anchor-link>
        <b-anchor-link href="#timelineitem-slots" title="TimelineItem  Slot"></b-anchor-link>
      </b-anchor>
    </div>
</template>

时间线组件

### 基础用法

简单定义一个时间轴的方法

::: demo
```html
<template>
  <b-timeline>
        <b-timeline-item>
            <p class="time">2019年4月12日</p>
            <p class="content">初始化bin-ui</p>
        </b-timeline-item>
        <b-timeline-item>
            <p class="time">2019年4月21日</p>
            <p class="content">发布1.1.0版本，新增几个基础组件</p>
        </b-timeline-item>
        <b-timeline-item>
            <p class="time">2019年7月24日</p>
            <p class="content">发布1.5.0版本，增加大量表单组件和常用组件</p>
        </b-timeline-item>
        <b-timeline-item>
            <p class="time">2019年8月23日</p>
            <p class="content">发布2.0.0版本，正式实现表格菜单等组件</p>
        </b-timeline-item>
  </b-timeline>
</template>
```
:::

### 可以设置不同类型或者自定义颜色

用各种颜色来标识不同状态，可以使用success、info、warning, danger或自定义的颜色，默认是 primary 。

::: demo
```html
<template>
    <b-timeline>
        <b-timeline-item color="primary">发布1.0版本</b-timeline-item>
        <b-timeline-item color="info">发布1.5版本</b-timeline-item>
        <b-timeline-item color="warning">错误修复</b-timeline-item>
        <b-timeline-item color="danger">严重故障</b-timeline-item>
        <b-timeline-item color="success">发布2.0版本</b-timeline-item>
        <b-timeline-item color="#ff30b5">里程碑发布</b-timeline-item>
    </b-timeline>
</template>
```
:::

### 最后一个节点设置

通过添加pending属性来标记最后一个为节点

::: demo
```html
<template>
    <b-timeline pending>
        <b-timeline-item>发布1.0版本</b-timeline-item>
        <b-timeline-item>发布1.5版本</b-timeline-item>
        <b-timeline-item>发布2.0版本</b-timeline-item>
        <b-timeline-item>持续更新...</b-timeline-item>
    </b-timeline>
</template>
```
:::

### 自定义节点图标

默认是空心远点，可以自定义轴点图标

::: demo
```html
<template>
    <b-timeline>
        <b-timeline-item color="success">
          <b-icon name="ios-star" slot="dot" size="14"></b-icon>
          <span>正式版上线</span>
        </b-timeline-item>
        <b-timeline-item>发布2.0版本</b-timeline-item>
        <b-timeline-item>发布1.5版本</b-timeline-item>
        <b-timeline-item>发布1.0版本</b-timeline-item>
    </b-timeline>
</template>
```
:::

### Timeline Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| pending     | 指定是否最后一个节点 | Boolean  |  —   |  false  |

### TimelineItem Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| color     | 圆圈颜色 | String  |  primary,success,info,warning,danger,或者自定义颜色值  |  primary  |

### TimelineItem  Slot

| 名称      | 说明    |
|---------- |-------- |
| default     | 基本内容   |
| dot     | 自定义时间轴点内容   |
