## Desc 描述列表

按照一个区块来展示

### 基础用法

日常显示列表的显示组件

:::demo

```html

<template>
  <b-desc title="用户信息">
    <b-desc-item label="用户名">韩梅梅</b-desc-item>
    <b-desc-item label="手机号">1769239****</b-desc-item>
    <b-desc-item label="居住地">徐州市</b-desc-item>
    <b-desc-item label="备注">
      <b-tag type="primary" size="mini">学校</b-tag>
    </b-desc-item>
    <b-desc-item label="联系地址">江苏省xx市吴中区吴中大道 1245 号</b-desc-item>
  </b-desc>
</template>
```

:::

### 不同尺寸

可以显示不同尺寸的信息

:::demo

```html

<template>
  <b-radio-group v-model="size">
    <b-radio label="large">大号</b-radio>
    <b-radio label="default">默认</b-radio>
    <b-radio label="small">小型</b-radio>
    <b-radio label="mini">超小</b-radio>
  </b-radio-group>
  <b-divider/>
  <b-desc title="带边框列表" :column="3" :size="size" border>
    <b-desc-item label="用户名">韩梅梅</b-desc-item>
    <b-desc-item label="手机号">1769239****</b-desc-item>
    <b-desc-item label="居住地">徐州市</b-desc-item>
    <b-desc-item label="备注">
      <b-tag type="primary" size="mini">学校</b-tag>
    </b-desc-item>
    <b-desc-item label="联系地址">江苏省xx市吴中区吴中大道 1245 号</b-desc-item>
  </b-desc>
  <b-divider/>
  <b-desc title="无边框列表" :column="3" :size="size">
    <b-desc-item label="用户名">韩梅梅</b-desc-item>
    <b-desc-item label="手机号">1769239****</b-desc-item>
    <b-desc-item label="居住地">徐州市</b-desc-item>
    <b-desc-item label="备注">
      <b-tag type="primary" size="mini">学校</b-tag>
    </b-desc-item>
    <b-desc-item label="联系地址">江苏省xx市吴中区吴中大道 1245 号</b-desc-item>
  </b-desc>
</template>
<script>
  export default {
    data() {
      return {
        size: 'default'
      }
    }
  }
</script>
```

:::

### Props

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| border     | 是否带有边框   | Boolean  |    —       |    false   |
| column     | 一行显示几个   | Number  |    —       |    3    |
| label-width     | label的宽度（百分比）   | Number  |  —      |    —     |
| size     | 尺寸   | String  |   large ，default，small，mini      |    default    |
| title     | 标题文本   | String  |   —    |    —    |
| extra     | 操作区文本，显示在右上方，可插槽插入   | String  |   —    |    —    |

### Slot

| 名称      | 说明    |
|---------- |-------- |
| title     | 标题文本插槽   |
| extra     | 操作区域插槽   |

### ItemProps

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| label     | 标签文本   | String  |    —       |    —    |
| span     | 列的数量   | Number  |    —       |    —    |

### ItemSlot

| 名称      | 说明    |
|---------- |-------- |
| label     | 文本插槽   |
