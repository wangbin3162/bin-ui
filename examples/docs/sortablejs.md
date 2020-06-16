## Draggable 拖拽

<template>
    <div class="global-anchor">
      <b-anchor :scroll-offset="100">
        <b-anchor-link href="#ji-chu-yong-fa" title="基础用法"></b-anchor-link>
      </b-anchor>
    </div>
</template>

表格的拖拽排序，现已采用`sortablejs`进行实现，由于后续拖拽需求可能会日益增多，现已将`sortablejs`内置进入组件库，由于官方示例加载较慢，这里摘取部分内容示例如下

### 拖拽调整顺序

::: demo 
```html
<template>
<div>
  <b-table 
          :columns="columns1" :data="data" 
          row-key draggable drag-handle=".drag-handle"
          @on-drag-drop="handleDragDrop">
          <template #handle="{row}">
            <span class="drag-handle" style="cursor:move;"><b-icon name="ios-move" size="20"/></span>
          </template>
  </b-table>
  <div>{{ data }}</div>
</div>
</template>
<script>
  export default {
    data () {
      return {
        columns1: [
          { slot: 'handle', width: 70 },
          {
            title: '姓名',
            key: 'name'
          },
          {
            title: '年龄',
            key: 'age'
          },
          {
            title: '出生日期',
            key: 'birthday'
          },
          {
            title: '地址',
            key: 'address'
          }
        ],
        data: [
          {
            name: '王小明',
            age: 18,
            birthday: '1990-04-22',
            address: '北京市朝阳区芍药居'
          },
          {
            name: '张小刚',
            age: 25,
            birthday: '1990-11-11',
            address: '北京市海淀区西二旗'
          },
          {
            name: '李小红',
            age: 30,
            birthday: '1985-02-05',
            address: '上海市浦东新区世纪大道'
          },
          {
            name: '周小伟',
            age: 26,
            birthday: '1993-07-11',
            address: '深圳市南山区深南大道'
          },
          {
            name: '张小发',
            age: 33,
            birthday: '1999-12-12',
            address: '南京市龙眠大道'
          }
        ]
      }
    },
    methods:{
      handleDragDrop(newIndex,oldIndex,newData){
        this.data=newData
      }     
    }   
  }
</script>
```
:::
