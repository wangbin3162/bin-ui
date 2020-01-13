## Select 选择器

<template>
    <div style="position: absolute;top:20px;right:40px;width:200px;">
      <b-anchor>
        <b-anchor-link href="#ji-chu-yong-fa" title="基础用法"></b-anchor-link>
        <b-anchor-link href="#bu-tong-de-da-xiao" title="不同的大小"></b-anchor-link>
        <b-anchor-link href="#qi-yong-jin-yong" title="启用禁用"></b-anchor-link>
        <b-anchor-link href="#ke-yi-qing-kong-fen-zu-huo-zhe-zi-ding-yi-mo-ban" title="可以清空、分组或者自定义模板"></b-anchor-link>
        <b-anchor-link href="#duo-xuan-he-zhe-die" title="多选和折叠"></b-anchor-link>
        <b-anchor-link href="#qian-zhui-mo-shi" title="前缀模式"></b-anchor-link>
        <b-anchor-link href="#sou-suo-mo-shi" title="搜索模式"></b-anchor-link>
        <b-anchor-link href="#select-props" title="Select props"></b-anchor-link>
        <b-anchor-link href="#select-events" title="Select events"></b-anchor-link>
        <b-anchor-link href="#select-slot" title="Select slot"></b-anchor-link>
        <b-anchor-link href="#option-props" title="Option props"></b-anchor-link>
        <b-anchor-link href="#optiongroup-props" title="OptionGroup props"></b-anchor-link>
      </b-anchor>
    </div>
</template>

### 基础用法

基本用法。可以使用 v-model 双向绑定数据。

单选时，value 只接受字符串和数字类型，多选时，只接受数组类型，组件会自动根据Option的value来返回选中的数据。

可以给Select添加 style 样式，比如宽度。

::: demo
```html
<template>
<div>
  <b-select style="width:200px" v-model="select">
   <b-option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</b-option>
  </b-select>
</div>
</template>
<script>
export default {
  data(){
    return{
      cityList: [
          {
              value: 'New York',
              label: 'New York'
          },
          {
              value: 'London',
              label: 'London'
          },
          {
              value: 'Sydney',
              label: 'Sydney'
          },
          {
              value: 'Ottawa',
              label: 'Ottawa'
          },
          {
              value: 'Paris',
              label: 'Paris'
          },
          {
              value: 'Canberra',
              label: 'Canberra'
          }
      ],
      select:''
    }
  }
}
</script>
```
:::

### 不同的大小

::: demo
```html
<template>
<div>
  <b-select style="width:100px" v-model="select" size="small">
    <b-option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</b-option> 
  </b-select>
  <b-select style="width:100px;margin-left: 20px;" v-model="select">
    <b-option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</b-option> 
  </b-select>
  <b-select style="width:100px;margin-left: 20px;" v-model="select" size="large">
    <b-option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</b-option> 
  </b-select>
</div>
</template>
<script>
export default {
  data(){
    return{
      cityList: [
          {
              value: 'New York',
              label: 'New York'
          },
          {
              value: 'London',
              label: 'London'
          },
          {
              value: 'Sydney',
              label: 'Sydney'
          },
          {
              value: 'Ottawa',
              label: 'Ottawa'
          },
          {
              value: 'Paris',
              label: 'Paris'
          },
          {
              value: 'Canberra',
              label: 'Canberra'
          }
      ],
      select:''
    }
  }
}
</script>
```
:::

### 启用禁用

::: demo
```html
<template>
<div>
  <b-select style="width:200px" disabled>
    <b-option  value="beijing" label="北京"></b-option>
    <b-option  value="shanghai" label="上海"></b-option>
    <b-option  value="xuzhou" label="徐州"></b-option> 
  </b-select>
  <b-select style="width:200px;margin-left: 20px;">
    <b-option  value="beijing" label="北京"></b-option>
    <b-option  value="shanghai" label="上海" disabled></b-option>
    <b-option  value="xuzhou" label="徐州"></b-option> 
  </b-select>
</div>
</template>
```
:::

### 可以清空、分组或者自定义模板

通过设置属性`clearable`可以清空已选项，仅适用于单选模式。

使用`OptionGroup`可将选项进行分组

对于选项显示内容的逻辑：优先显示 slot 内容，如果没有定义 slot，则显示label的值，如果没有设置 label，则显示value的值。

::: demo
```html
<template>
<div>
  <b-select style="width:200px" v-model="select" clearable>
    <b-option value="beijing" label="北京"></b-option>
    <b-option value="shanghai" label="上海"></b-option>
    <b-option value="xuzhou" label="徐州"></b-option> 
  </b-select>
  <b-select style="width:200px;margin-left: 20px;" v-model="select">
   <b-option-group label="直辖市">
     <b-option value="beijing" label="北京"></b-option>
     <b-option value="shanghai" label="上海"></b-option>
   </b-option-group>
   <b-option-group label="热门城市">
     <b-option value="xuzhou" label="徐州"></b-option> 
     <b-option value="xuzhou" label="南京"></b-option> 
   </b-option-group>
  </b-select>
  <b-select style="width:200px;margin-left: 20px;" v-model="select">
    <b-option value="beijing" label="北京">
        <span>北京</span>
        <span style="float:right;color:#ccc">beijing</span>
    </b-option>
    <b-option value="shanghai" label="上海">
        <span>上海</span>
        <span style="float:right;color:#ccc">shanghai</span>
    </b-option>
    <b-option value="xuzhou" label="徐州">
        <span>徐州</span>
        <span style="float:right;color:#ccc">xuzhou</span>
    </b-option> 
  </b-select> 
  &nbsp;&nbsp;
  <span>{{ select }}</span>
</div>
</template>
<script>
export default {
  data(){
    return {
      select:''
    }
  }
}
</script>
```
:::

### 多选和折叠

可以开启属性`multiple`开启多选模式 `max-tag-count` `max-tag-placeholder` 可以对超出的部分做折叠显示

::: demo
```html
<template>
<div>
  <div>{{ cites }}</div>
   <b-select style="width:300px" v-model="cites" multiple :max-tag-count="2">
     <b-option value="beijing" label="北京"></b-option>
     <b-option value="shanghai" label="上海"></b-option>
     <b-option value="xuzhou" label="徐州"></b-option> 
     <b-option value="nanjing" label="南京"></b-option> 
   </b-select>
   <b-select style="width:300px;margin-left: 20px;" v-model="cites" multiple :max-tag-count="2" :max-tag-placeholder="maxTagPlaceholder">
     <b-option value="beijing" label="北京"></b-option>
     <b-option value="shanghai" label="上海"></b-option>
     <b-option value="xuzhou" label="徐州"></b-option> 
     <b-option value="nanjing" label="南京"></b-option> 
   </b-select>
</div>
</template>
<script>
export default {
  data(){
    return {
      cites:[]
    }
  },
  methods: {
       maxTagPlaceholder (num) {
           return 'more '+ num;
       }
  }
}
</script>
```
:::

### 前缀模式

可以开启属性 `prefix` 开启前缀模式

::: demo
```html
<template>
<div>
  <b-select style="width:200px" prefix="ios-home">
    <b-option value="beijing" label="北京"></b-option>
    <b-option value="shanghai" label="上海"></b-option>
    <b-option value="xuzhou" label="徐州"></b-option> 
    <b-option value="nanjing" label="南京"></b-option> 
  </b-select>
</div>
</template>
```
:::

### 搜索模式

通过设置属性`filterable`可以开启搜索模式。单选和多选都支持搜索模式

::: demo
```html
<template>
<div>
  <b-select style="width:200px" filterable>
    <b-option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</b-option>
  </b-select>
  <b-select style="width:300px;margin-left: 20px;" v-model="cites" filterable multiple>
    <b-option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</b-option>
  </b-select>
</div>
</template>
<script>
export default {
  data(){
    return{
      cityList: [
          {
              value: 'New York',
              label: 'New York'
          },
          {
              value: 'London',
              label: 'London'
          },
          {
              value: 'Sydney',
              label: 'Sydney'
          },
          {
              value: 'Ottawa',
              label: 'Ottawa'
          },
          {
              value: 'Paris',
              label: 'Paris'
          },
          {
              value: 'Canberra',
              label: 'Canberra'
          }
      ],
      cites:[]
    }
  }
}
</script>
```
:::

### Select props

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value     | 指定选中项目的 value 值，可以使用 v-model 双向绑定数据。   | string/number  |  —   |   无   |
| multiple | 多选|  Boolean |  —   |  false  |
| disabled | 是否禁用|  Boolean |  —   |  false  |
| clearable | 清空选项，只在单选时有效|  Boolean |  —   |  false  |
| filterable | 是否支持搜索 |  Boolean |  —   |  false  |
| size | 选择框大小 |  string  | large、small、default  |  default  |
| placeholder | 选择框默认文字 |  String  |  —   |  请选择  |
| not-found-text | 没有数据显示 |  String  |  —   |  没有数据  |
| label-in-value | 在返回选项时，是否将 label 和 value 一并返回,默认只返回 value |  Boolean  |  —   |  false  |
| placement | 弹窗的展开方向 |  String  |  top、bottom、top-start、bottom-start、top-end、bottom-end  |  bottom-start  |
| appendToBody | 是否将弹层放置于 body 内 |  Boolean  |  —   |  false  |
| max-tag-count | 多选时最多显示多少个 tag |  Number  |  —   | —    |
| max-tag-placeholder  | 隐藏 tag 时显示的内容，参数是剩余项数量 |  Function  |  —   | —    |

### Select events 

| 事件名      | 说明    | 返回值      |
|---------- |-------- |---------- |
| on-change     | 选中的Option变化时触发，默认返回 value，如需返回 label，详见 label-in-value 属性   | 当前选中项  |
| on-query-change   | 搜索词改变时触发   | query  |
| on-clear   | 点击清空按钮时触发  | 无  |
| on-open-change    | 下拉框展开或收起时触发   | true / false  |

### Select slot

| 名称      | 说明    |
|---------- |-------- |
| prefix      | 自定义 Select 内头部图标   |

### Option props

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value     | 选项值，默认根据此属性值进行筛选，必填   | string/number  |  —   |   无   |
| label | 选项显示的内容，默认会读取 slot，无 slot 时，优先读取该 label 值，无 label 时，读取 value。|  String	 |  —   |  —    |
| disabled | 是否禁用当前项|  Boolean	 |  —   |  false    |

### OptionGroup props

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| label | 分组组名|  String	 |  —   |  —    |

