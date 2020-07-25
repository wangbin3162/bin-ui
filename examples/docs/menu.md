## Menu导航菜单

<template>
    <div class="global-anchor">
      <b-anchor :scroll-offset="100">
        <b-anchor-link href="#ji-chu-yong-fa" title="基础用法"></b-anchor-link>
        <b-anchor-link href="#shu-xiang-she-zhi" title="竖向设置"></b-anchor-link>
        <b-anchor-link href="#wai-lian" title="外链"></b-anchor-link>
        <b-anchor-link href="#api" title="API">
            <b-anchor-link href="#menu-props" title="Menu props"></b-anchor-link>
            <b-anchor-link href="#menu-events" title="Menu events"></b-anchor-link>
            <b-anchor-link href="#menu-methods" title="Menu methods"></b-anchor-link>
            <b-anchor-link href="#menuitem-props" title="MenuItem props"></b-anchor-link>
            <b-anchor-link href="#submenu-props" title="Submenu props"></b-anchor-link>
            <b-anchor-link href="#submenu-slot" title="Submenu slot"></b-anchor-link>
            <b-anchor-link href="#menugroup" title="MenuGroup"></b-anchor-link>
        </b-anchor-link>
      </b-anchor>
    </div>
</template>

### 基础用法

::: demo
```html
<template>
    <div>
        <b-menu mode="horizontal" :theme="theme1" active-name="1">
           <b-menu-item name="1"><b-icon name="ios-home"></b-icon>首页</b-menu-item>
           <b-submenu name="2">
             <template slot="title"><b-icon name="ios-apps"></b-icon>我的工作台</template>
             <b-menu-item name="2-1"><b-icon name="ios-bowtie"></b-icon>选项1</b-menu-item>
             <b-submenu name="2-2">
                 <template slot="title">
                     <b-icon name="ios-bulb"></b-icon>选项2
                 </template>
                 <b-menu-item name="2-2-1"><b-icon name="ios-color-fill"></b-icon>选项2-2-1</b-menu-item>
                 <b-menu-item name="2-2-2"><b-icon name="ios-calendar"></b-icon>选项2-2-2</b-menu-item>
              </b-submenu>
             <b-menu-item name="2-3"><b-icon name="ios-cloud"></b-icon>选项3</b-menu-item>
           </b-submenu>
           <b-submenu name="3">
                <template slot="title"><b-icon name="ios-bookmarks"></b-icon>统计分析</template>
                <b-menu-group title="使用">
                    <b-menu-item name="3-1">新增和启动</b-menu-item>
                    <b-menu-item name="3-2">活跃分析</b-menu-item>
                    <b-menu-item name="3-3">时段分析</b-menu-item>
                </b-menu-group>
           </b-submenu>
           <b-menu-item name="4"><b-icon name="ios-cog"></b-icon>系统设置</b-menu-item>
        </b-menu>
    </div>
    <br>
     <b-radio-group v-model="theme1">
         <b-radio label="light"></b-radio>
         <b-radio label="dark"></b-radio>
     </b-radio-group>
</template>
<script>
  export default {
    data() {
      return {
        theme1: 'light',  
        theme2: 'light',
        isCollapse: true
      };
    }
  }
</script>
```
:::

### 竖向设置

::: demo
```html
<template>
<b-menu :theme="theme2" active-name="1" accordion>
   <b-menu-item name="1"><b-icon name="ios-home"></b-icon>首页</b-menu-item>
   <b-submenu name="2">
     <template slot="title"><b-icon name="ios-apps"></b-icon>我的工作台</template>
     <b-menu-item name="2-1"><b-icon name="ios-bowtie"></b-icon>选项1</b-menu-item>
     <b-submenu name="2-2">
         <template slot="title">
             <b-icon name="ios-bulb"></b-icon>选项2
         </template>
         <b-menu-item name="2-2-1"><b-icon name="ios-color-fill"></b-icon>选项2-2-1</b-menu-item>
         <b-menu-item name="2-2-2"><b-icon name="ios-calendar"></b-icon>选项2-2-2</b-menu-item>
      </b-submenu>
     <b-menu-item name="2-3"><b-icon name="ios-cloud"></b-icon>选项3</b-menu-item>
   </b-submenu>
   <b-submenu name="3">
        <template slot="title"><b-icon name="ios-bookmarks"></b-icon>统计分析 </template>
        <b-menu-group title="使用">
            <b-menu-item name="3-1">新增和启动</b-menu-item>
            <b-menu-item name="3-2">活跃分析</b-menu-item>
            <b-menu-item name="3-3">时段分析</b-menu-item>
        </b-menu-group>
   </b-submenu>
   <b-menu-item name="4"><b-icon name="ios-cog"></b-icon>系统设置</b-menu-item>
</b-menu>
<br>
<b-radio-group v-model="theme2">
  <b-radio label="light"></b-radio>
  <b-radio label="dark"></b-radio>
</b-radio-group>
</template>
<script>
  export default {
    data() {
      return {
        theme2: 'light'
      };
    }
  }
</script>
```
:::


### 外链

::: demo
```html
<template>
<b-menu :theme="theme2" active-name="1" accordion>
   <b-menu-item name="1"><b-icon name="ios-home"></b-icon>首页</b-menu-item>
   <b-menu-item name="2" to="https://wangbin3162.gitee.io/bin-ace-editor/#/guide" target="_blank">
      <b-icon name="ios-bookmarks"></b-icon>编辑器
   </b-menu-item>
   <b-menu-item name="3" to="https://wangbin3162.gitee.io/bin-ace-editor/#/guide" target="_blank">
      <b-icon name="ios-analytics"></b-icon>图表组件
   </b-menu-item>
</b-menu>
</template>
```
:::

### API

### Menu props

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| mode     | 菜单类型   | string  |  horizontal（水平） 和 vertical（垂直）  |   vertical  |
| theme     | 主题   | string  |  light、dark  |  light  |
| active-name  | 激活菜单的 name 值   | String/ Number  | -  |  -  |
| open-names  | 展开的 Submenu 的 name 集合  | Array  | -  |  [] |
| expand-all  | 展开所有的 Submenu 的  | Boolean  | -  |  false |
| accordion  | 是否开启手风琴模式  | Boolean	  | -  |  false |
| width  | 导航菜单的宽度，只在 mode="vertical" 时有效  | String  | -  |  240px |

### Menu events

| 事件名      | 说明    | 返回值      |
|---------- |-------- |---------- |
| on-select    | 选择菜单（MenuItem）时触发   | name  |
| on-open-change    |  展开/收起 子菜单时触发  | 当前展开的 Submenu 的 name 值数组  |

### Menu methods

| 方法名      | 说明    | 参数      |
|---------- |-------- |---------- |
| updateOpened   | 手动更新展开的子目录，注意要在 $nextTick 里调用 | 无  |
| updateActiveName   |  手动更新当前选择项，注意要在 $nextTick 里调用  | 无 |

### MenuItem props

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| name     | 菜单项的唯一标识，必填   | String/Number  | -  |   -  |
| to     | 跳转的链接，支持 vue-router 对象  | String / Object  | -  |   -  |
| replace     | 路由跳转时，开启 replace 将不会向 history 添加新记录  | Boolean	  | -  |  false |
| target     | 相当于 a 链接的 target 属性  | String	 | -  |  	_self |

### Submenu props 

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| name     | 子菜单的唯一标识，必填   | String/Number  | -  |   -  |
| transfer | 子菜单是否移动至body ,需配合menu的scrollable属性使用  | Boolean  | -  |   -  |

### Submenu slot

| 名称      | 说明    |
|---------- |-------- |
| 无     | 菜单项  |
| title     | 子菜单标题  |

### MenuGroup

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| title     | 分组标题  | String  | -  | 空 |
