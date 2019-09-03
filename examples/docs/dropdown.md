## Dropdown 下拉菜单

### 基础用法

::: demo
```html  
<template>
<div>
    <b-dropdown>
       <a href="javascript:void(0)">
          下拉菜单
          <b-icon name="ios-arrow-down"></b-icon>
       </a>
       <b-dropdown-menu slot="list">
          <b-dropdown-item>驴肉火烧</b-dropdown-item>
          <b-dropdown-item disabled>炸酱面</b-dropdown-item>
          <b-dropdown-item>牛肉板面</b-dropdown-item>
          <b-dropdown-item divided>地锅鸡</b-dropdown-item>
          <b-dropdown-item>街边烧烤</b-dropdown-item>
       </b-dropdown-menu>
    </b-dropdown> 
    <b-dropdown style="margin-left: 20px;">
       <b-button type="primary" size="small">
          下拉菜单
          <b-icon name="ios-arrow-down"></b-icon>
       </b-button>
       <b-dropdown-menu slot="list">
          <b-dropdown-item>驴肉火烧</b-dropdown-item>
          <b-dropdown-item disabled>炸酱面</b-dropdown-item>
          <b-dropdown-item>牛肉板面</b-dropdown-item>
          <b-dropdown-item divided>地锅鸡</b-dropdown-item>
          <b-dropdown-item>街边烧烤</b-dropdown-item>
       </b-dropdown-menu>
    </b-dropdown> 
</div>
</template>
```
:::

### 不同触发方式
   
::: demo
```html  
<template>
<div>
   <b-dropdown>
      <a href="javascript:void(0)">
         hover 触发
         <b-icon name="ios-arrow-down"></b-icon>
      </a>
      <b-dropdown-menu slot="list">
         <b-dropdown-item selected>驴肉火烧</b-dropdown-item>
         <b-dropdown-item disabled>炸酱面</b-dropdown-item>
         <b-dropdown-item>牛肉板面</b-dropdown-item>
         <b-dropdown-item divided>地锅鸡</b-dropdown-item>
         <b-dropdown-item>街边烧烤</b-dropdown-item>
      </b-dropdown-menu>
   </b-dropdown> 
   <b-dropdown trigger="click"  style="margin-left: 20px;">
      <a href="javascript:void(0)">
         click 触发
         <b-icon name="ios-arrow-down"></b-icon>
      </a>
      <b-dropdown-menu slot="list">
         <b-dropdown-item selected>驴肉火烧</b-dropdown-item>
         <b-dropdown-item disabled>炸酱面</b-dropdown-item>
         <b-dropdown-item>牛肉板面</b-dropdown-item>
         <b-dropdown-item divided>地锅鸡</b-dropdown-item>
         <b-dropdown-item>街边烧烤</b-dropdown-item>
      </b-dropdown-menu>
   </b-dropdown> 
   <b-dropdown trigger="contextMenu"  style="margin-left: 20px;">
      <a href="javascript:void(0)">
         右键 触发
         <b-icon name="ios-arrow-down"></b-icon>
      </a>
      <b-dropdown-menu slot="list">
         <b-dropdown-item>返回</b-dropdown-item>
         <b-dropdown-item style="color: #ed4014">删除</b-dropdown-item>
      </b-dropdown-menu>
   </b-dropdown> 
   <b-dropdown trigger="custom"  style="margin-left: 20px;" :visible="visible">
      <a href="javascript:void(0)" @click="handleOpen">
         custom 触发
         <b-icon name="ios-arrow-down"></b-icon>
      </a>
      <b-dropdown-menu slot="list">
          <p>常用于各种自定义下拉内容的场景。</p>
           <div style="text-align: right;margin:10px;">
               <b-button type="primary" @click="handleClose">关闭</b-button>
           </div>
      </b-dropdown-menu>
   </b-dropdown> 
</div>
</template>
<script>
    export default {
        data () {
            return {
                visible: false
            }
        },
        methods: {
            handleOpen () {
                this.visible = true;
                console.log('open')
            },
            handleClose () {
                this.visible = false;
            }
        }
    }
</script>
```
:::


### 对齐方向

::: demo
```html  
<template>
<div>
    <b-dropdown placement="bottom-start">
       <a href="javascript:void(0)">
          菜单(左)
          <b-icon name="ios-arrow-down"></b-icon>
       </a>
       <b-dropdown-menu slot="list">
          <b-dropdown-item>驴肉火烧</b-dropdown-item>
          <b-dropdown-item>牛肉板面</b-dropdown-item>
       </b-dropdown-menu>
    </b-dropdown> 
    <b-dropdown placement="top" style="margin-left: 20px;">
       <a href="javascript:void(0)">
          菜单(上边居中)
          <b-icon name="ios-arrow-down"></b-icon>
       </a>
       <b-dropdown-menu slot="list">
          <b-dropdown-item>驴肉火烧</b-dropdown-item>
          <b-dropdown-item>牛肉板面</b-dropdown-item>
       </b-dropdown-menu>
    </b-dropdown> 
    <b-dropdown placement="bottom-end" style="margin-left: 20px;">
       <a href="javascript:void(0)">
          菜单(右)
          <b-icon name="ios-arrow-down"></b-icon>
       </a>
       <b-dropdown-menu slot="list">
          <b-dropdown-item>驴肉火烧</b-dropdown-item>
          <b-dropdown-item>牛肉板面</b-dropdown-item>
       </b-dropdown-menu>
    </b-dropdown> 
</div>
</template>
```
:::

### 嵌套用法

可嵌套实现级联效果，注意嵌套时候的展开方向

::: demo
```html  
<template>
<div>
    <b-dropdown>
       <a href="javascript:void(0)">
          徐州小吃
          <b-icon name="ios-arrow-down"></b-icon>
       </a>
       <b-dropdown-menu slot="list">
          <b-dropdown-item>驴肉火烧</b-dropdown-item>
          <b-dropdown-item>牛肉板面</b-dropdown-item>
            <b-dropdown placement="right-start">
               <b-dropdown-item>
                  特色菜系
                  <b-icon name="ios-arrow-forward"></b-icon>
               </b-dropdown-item>
               <b-dropdown-menu slot="list">
                  <b-dropdown-item>地锅鸡</b-dropdown-item>
                  <b-dropdown-item>狗肉</b-dropdown-item>
                  <b-dropdown-item>把子肉</b-dropdown-item>
               </b-dropdown-menu>
            </b-dropdown>  
          <b-dropdown-item>过桥米线</b-dropdown-item>
       </b-dropdown-menu>
    </b-dropdown>  
</div>
</template>
```
:::

### Dropdown props

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| trigger     | 触发方式   | string  |  hover（悬停）click（点击）contextMenu（右键）custom（自定义），使用 custom 时，需配合 visible 一起使用  |  hover   |
| visible     | 触发方式   | Boolean  |  手动控制下拉框的显示 |  false   |
| placement     | 下拉菜单出现的位置   |  String	  |  top top-start top-end bottom bottom-start bottom-end left left-start left-end right right-start right-end |  bottom   |
| transfer     | 是否将弹层放置于 body 内, 在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果   |  Boolean		  |   |  false   |
| transfer-class-name     | 开启 transfer 时，给浮层添加额外的 class 名称  |  String		  | -  |  -   |

### Dropdown events 

| 事件名      | 说明    | 返回值      |
|---------- |-------- |---------- |
| on-click     | 点击菜单项时触发   | DropdownItem 的 name 值,需要设置name才可以统一监听  |
| on-visible-change    | 菜单显示状态改变时调用   | visible  |
| on-click-outside     | 点击外部关闭下拉菜单时触发   | event  |

### Dropdown Slot

| 名称      | 说明    |
|---------- |-------- |
| default     | 主体内容   |
| list     | 列表内容，一般由 b-dropdown-menu 填充   |


### Dropdown Item props

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| name     | 用来标识这一项   | String	  |  -  |  -   |
| disabled     | 禁用该项   | Boolean  |  - |  false   |
| divided     | 显示分割线   | Boolean  |  - |  false   |
| selected     | 标记该项为选中状态   | Boolean  |  - |  false   |
