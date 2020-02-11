## Tabs 标签页

<template>
    <div class="global-anchor">
      <b-anchor :scroll-offset="100">
        <b-anchor-link href="#ji-chu-yong-fa" title="基础用法"></b-anchor-link>
        <b-anchor-link href="#qia-pian-mo-shi" title="卡片模式"></b-anchor-link>
        <b-anchor-link href="#zeng-jia-he-yi-chu" title="增加和移除"></b-anchor-link>
        <b-anchor-link href="#contextmenu" title="ContextMenu右键菜单"></b-anchor-link>
        <b-anchor-link href="#biao-qian-mo-shi" title="标签模式"></b-anchor-link>
        <b-anchor-link href="#attributes" title="Attributes"></b-anchor-link>
        <b-anchor-link href="#events" title="Events"></b-anchor-link>
      </b-anchor>
    </div>
</template>

显示标签,由于标签内容定制化比较多，这里就预留给后续内容判定，这里只做标签的切换功能。内容可根据实际需求自行实现。

### 基础用法

基础的简洁的标签页

::: demo 
```html
<template>
  <b-tabs v-model="activeTab" :data="tabs"></b-tabs>
  <p v-show="activeTab==='tab1'">用户管理</p>
  <p v-show="activeTab==='tab2'">组织管理</p>
  <p v-show="activeTab==='tab3'">系统管理</p>
  <p v-show="activeTab==='tab4'">目录模块配置</p>
</template>
<script>
export default {
  data(){
    return {
      tabs:[
        {key:'tab1',title:'用户管理'},
        {key:'tab2',title:'组织管理'},
        {key:'tab3',title:'系统管理'},
        {key:'tab4',title:'目录模块配置'}
      ],
      activeTab: 'tab1'
    } 
  }
}
</script>
```
:::

### 卡片模式

可以设置基本的卡片模式

::: demo 卡片模式可以给tab项设置icon图标
```html
<template>
  <b-tabs v-model="activeTab" :data="tabs" type="card"></b-tabs>
  <p v-show="activeTab==='tab1'">用户管理</p>
  <p v-show="activeTab==='tab2'">组织管理</p>
  <p v-show="activeTab==='tab3'">系统管理</p>
  <p v-show="activeTab==='tab4'">目录模块配置</p>
</template>
<script>
export default {
  data(){
    return {
      tabs:[
        {key:'tab1',title:'用户管理',icon:'ios-contact'},
        {key:'tab2',title:'组织管理'},
        {key:'tab3',title:'系统管理'},
        {key:'tab4',title:'目录模块配置'}
      ],
      activeTab: 'tab1'
    } 
  }
}
</script>
```
:::

### 增加和移除

可以关闭，同时可以通过自定义事件来增加标签页，关闭按钮只能在card和tag模式下使用,默认超出宽度，可以滚动移动

::: demo `tabs`中的项设置noClose可以排除关闭按钮，主要是为了部分可固定标签设置使用
```html
<template>
  <div class="mb-15"><b-button type="primary" plain v-waves size="small" @click="handleAdd">add tab</b-button></div>
  <b-tabs v-model="activeTab" :data="tabs" type="card" closable
    @on-tab-close="handleTabClose"></b-tabs>
  <p>开启的tab：{{ activeTab }}</p>
</template>
<script>
export default {
  data(){
    return {
      tabs:[
        {key:'tab0',title:'首页',noClose:true},
        {key:'tab1',title:'用户管理'},
        {key:'tab2',title:'组织管理'},
        {key:'tab3',title:'系统管理'},
        {key:'tab4',title:'目录模块配置'}
      ],
      activeTab: 'tab2'
    } 
  },
  methods:{
    handleAdd(){
      // 这里需要保证key值唯一否则会影响渲染显示
      const newTab = { key:`tab${+new Date()}`,title:'New Tab' }
      this.tabs.push(newTab)
      // 增加完毕后通常默认选中这个新的tab，当然，你也可以不设置选中新的tab
      this.activeTab = newTab.key
    },
    handleTabClose(tab){
      this.tabs.splice(this.tabs.findIndex(t => t.key === tab.key), 1)
    }
  }
}
</script>
```
:::

### ContextMenu

配合可以关闭，可以开启右键菜单实现更多的配置信息，开启右键菜单需要手动插入右键菜单的按钮列表标签为`<li>`,并需要配合`on-tab-select`事件

::: demo 
```html
<template>
  <b-tabs v-model="activeTab" :data="tabs" type="card" closable context-menu
    ref="tabs" @on-tab-close="handleTabClose" @on-tab-select="handleSelect">
    <template v-slot:menu>
        <li @click="refreshSelected">刷新</li>
        <li @click="closeSelected">关闭</li>
        <li @click="closeOthers">关闭其他</li>
        <li @click="closeAll">关闭所有</li>
    </template>
  </b-tabs>
  <p>开启的tab：{{ activeTab }}</p>
</template>
<script>
export default {
  data(){
    return {
      tabs:[
        {key:'tab1',title:'用户管理'},
        {key:'tab2',title:'组织管理'},
        {key:'tab3',title:'系统管理'},
        {key:'tab4',title:'目录模块配置'}
      ],
      activeTab: 'tab2'
    } 
  },
  methods:{
    handleTabClose(tab){
      this.tabs.splice(this.tabs.findIndex(t => t.key === tab.key), 1)
    },
    // 缓存右键选中的tab
    handleSelect(tab){
      this.selectTab = {...tab}
    },
    // 刷新当前view
    refreshSelected () {
      this.$message('刷新当前view:'+this.selectTab.title)
    },
    closeSelected(){
      // 这里需要调用组件的关闭选择的tag
      this.$refs.tabs.closeSelectedTab(this.selectTab)
    }, 
    // 关闭其他tags
    closeOthers () {
        this.tabs = [this.selectTab]
        this.activeTab = this.selectTab.key
        this.$refs.tabs.moveToCurrentTab()
    },
    // 关闭所有
    closeAll () {
        this.tabs = []
        this.activeTab = ''
        this.$refs.tabs.moveToCurrentTab()
    }
  }
}
</script>
```
:::

### 标签模式

除了卡片模式也可以设置成tag标签模式，这种模式更独立也更像标签导航。根据需求选择使用

::: demo 
```html
<template>
  <div class="mb-15"><b-button type="primary" plain v-waves size="small" @click="handleAdd">add tab</b-button></div>
  <b-tabs v-model="activeTab" :data="tabs" type="tag" closable context-menu
    ref="tabs" @on-tab-close="handleTabClose" @on-tab-select="handleSelect">
    <template v-slot:menu>
        <li @click="refreshSelected">刷新</li>
        <li @click="closeSelected">关闭</li>
        <li @click="closeOthers">关闭其他</li>
        <li @click="closeAll">关闭所有</li>
    </template>
  </b-tabs>
  <p>开启的tab：{{ activeTab }}</p>
</template>
<script>
export default {
  data(){
    return {
      tabs:[
        {key:'tab0',title:'首页',noClose:true},
        {key:'tab1',title:'用户管理',icon:'ios-contact'},
        {key:'tab2',title:'组织管理'},
        {key:'tab3',title:'系统管理'},
        {key:'tab4',title:'目录模块配置'}
      ],
      activeTab: 'tab2'
    } 
  },
  methods:{
    handleAdd(){
      // 这里需要保证key值唯一否则会影响渲染显示
      const newTab = { key:`tab${+new Date()}`,title:'New Tab' }
      this.tabs.push(newTab)
      // 增加完毕后通常默认选中这个新的tab
      this.activeTab = newTab.key
    },
    handleTabClose(tab){
      this.tabs.splice(this.tabs.findIndex(t => t.key === tab.key), 1)
    },
    // 缓存右键选中的tab
    handleSelect(tab){
      this.selectTab = {...tab}
    },
    // 刷新当前view
    refreshSelected () {
      this.$message('刷新当前view:'+this.selectTab.title)
    },
    closeSelected(){
      // 这里需要调用组件的关闭选择的tag
      this.$refs.tabs.closeSelectedTab(this.selectTab)
    }, 
    // 关闭其他tags
    closeOthers () {
        this.tabs = [this.selectTab]
        this.activeTab = this.selectTab.key
        this.$refs.tabs.moveToCurrentTab()
    },
    // 关闭所有
    closeAll () {
        this.tabs = []
        this.activeTab = ''
        this.$refs.tabs.moveToCurrentTab()
    }
  }
}
</script>
```
:::

### Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| data     | tabs数组结构,必传，切结构遵循{key:'',title:''} key为唯一标识，title为标签生成名称，切可以设置icon来扩展图标  | Array   |   —            |    []    |
| closable     | 是否可关闭   | boolean  |   —            |    false    |
| type     | tab类型   | string  |   'default','card','tag'     |    default       |

### Events

| 事件名      | 说明    | 返回值    |
|---------- |-------- |---------- |
| on-tab-close   | 关闭一个tab事件  | 当前关闭的tab  |
| on-tab-select  | 右键选中事件回调，用于配合右键系统缓存点击的tag   | 右键选中的tab  |
