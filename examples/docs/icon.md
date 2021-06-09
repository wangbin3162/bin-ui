## Icon 图标

图标这里使用了阿里[iconfont](https://www.iconfont.cn/)图标库生成了图标，图标来源于
开源项目 ionicons，结合整理添加了一些其他的图标。

### 使用方法

i 标签可以直接设置样式类名为 `iconfont icon-xxx` 来使用即可。icon组件可以只设置name来实用。 设置`icon-is-rotating`可以开启旋转

:::demo size和color可以设置字体大小和颜色
```html
  <div class="demo-icon">
    <b-icon name="logo-freebsd-devil" size="20" color="#ff53a5"></b-icon>
    <b-button type="danger" icon="ios-trash" size="mini">删除</b-button>
    <b-icon name="loading2" class="icon-is-rotating"></b-icon>
  </div>
```
:::

### 图标选择器

默认提供一个icon图标选择器

::: demo
```html
<template>
<div flex="cross:center">
  <b-icon-select style="width: 200px;" v-model="select"></b-icon-select>&nbsp;&nbsp;
  <b-icon-select style="width: 200px;" 
      v-model="select" placeholder="自定义图标集合"
      :custom-icons="['heart','favorfill','md-star','ios-ribbon','ios-snow']"></b-icon-select>&nbsp;&nbsp;
  <b-icon-select style="width: 230px;" v-model="select" modal></b-icon-select>
  <span style="margin-left: 20px;">已选：<b-icon v-if="select" :name="select"></b-icon></span>
</div>
</template>
<script>
export default {
  data(){
    return{
      select:''
    }
  }
}
</script>
```
:::

### 图标集合

<template>
    <ul class="icon-list">
      <li v-for="name in $icon" :key="name" class="list-complete-item">
        <span>
          <i :class="['iconfont' , 'icon-'+name]"></i>
          <span class="icon-name">{{ name }}</span>
        </span>
      </li>
    </ul>
</template>

### 获取icon names

打开iconfont下载的demo复制粘贴以下代码到控制台获取所有icon的name集合,注意，样式复制过来是iconfont字体大小默认删除

    console.log('获取所有icon name 并用逗号分隔')
    var list = document.querySelectorAll('.content.font-class .icon_lists .dib .code-name')
    var iconList = []
    for (var i = 0; i < list.length ; i++) {
    iconList.push(list[i].innerHTML.slice(6).trim())// 去除.icon- 只获取name
    }
    console.log(iconList.join(','))

### Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value     | 绑定的值，可使用 v-model 双向绑定   | String  |   —   |   —   |
| modal     | 是否用弹框显示   | large、small、default、mini  |   —   |   default  |
| filterable     | 是否可搜索，仅默认模式可用   | Boolean  |   —   |   false   |
| clearable     | 是否显示清空按钮   | Boolean  |   —   |   false   |
| clearable     | 禁用状态   | Boolean  |   —   |   false   |
| placeholder     | 输入提示   | String  |   —   |    —    |
| size     | 弹窗模式选择按钮和输入框大小   | Boolean  |   —   |   false   |
| buttonType  | 弹窗模式选择按钮类型   | Number  |   —   |    —     |
| stopRemoveScroll | 弹窗模式是否停止scroll计算   | String  |   —   |    —     |
| icon     | 输入框尾部图标，仅在 text 类型下有效   | String  |   —   |    —     |
| custom-icons | 自定义图标集合，如不在当前库包含，则需要额外引入自定义的图标后引入 | Array  |  —  |  — |

### events

| 方法名      | 说明    | 返回值      |
|---------- |-------- |---------- |
| change	|数据改变时触发	|event|
