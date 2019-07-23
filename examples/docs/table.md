## Table 简表格

暂时只是简单表格，后期继续丰富


### 基础用法

::: demo
```html  
<template>
<b-table :columns="columns" :data="data"></b-table>
</template>

<script>
  export default {
    data () {
      return {
        columns: [
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
          },
          {
            title: '操作',
            key: 'action'
          }
        ],
        columns2: [
          {
            title: '姓名',
            slot: 'name'
          },
          {
            title: '年龄',
            slot: 'age'
          },
          {
            title: '出生日期',
            slot: 'birthday'
          },
          {
            title: '地址',
            slot: 'address'
          },
          {
            title: '操作',
            slot: 'action'
          }
        ],
        data: [
          {
            name: '王小明',
            age: 18,
            birthday: '919526400000',
            address: '北京市朝阳区芍药居'
          },
          {
            name: '张小刚',
            age: 25,
            birthday: '696096000000',
            address: '北京市海淀区西二旗'
          },
          {
            name: '李小红',
            age: 30,
            birthday: '563472000000',
            address: '上海市浦东新区世纪大道'
          },
          {
            name: '周小伟',
            age: 26,
            birthday: '687024000000',
            address: '深圳市南山区深南大道'
          }
        ],
        editName: '', // 第一列输入框
        editAge: '', // 第二列输入框
        editBirthday: '', // 第三列输入框
        editAddress: '', // 第四列输入框
        editIndex: -1 // 当前聚焦的输入框的行数
      }
    },
    methods: {
      handleEdit (row, index) {
        this.editName = row.name
        this.editAge = row.age
        this.editAddress = row.address
        this.editBirthday = row.birthday
        this.editIndex = index
      },
      handleSave (index) {
        this.data[index].name = this.editName
        this.data[index].age = this.editAge
        this.data[index].birthday = this.editBirthday
        this.data[index].address = this.editAddress
        this.editIndex = -1
      },
      getBirthday (birthday) {
        const date = new Date(parseInt(birthday))
        const year = date.getFullYear()
        const month = date.getMonth() + 1
        const day = date.getDate()
        return `${year}-${month}-${day}`
      }
    }
  }
</script>
```
:::

### 基础用法

::: demo
```html  
<template>
<b-table :columns="columns2" :data="data">
    <template v-slot:name="scope">
      <b-input type="text" v-model="editName" v-if="editIndex === scope.index" size="mini"></b-input>
      <span v-else>{{ scope.row.name }}</span>
    </template>
    <template v-slot:age="scope">
      <b-input type="text" v-model="editAge" v-if="editIndex ===  scope.index" size="mini"></b-input>
      <span v-else>{{  scope.row.age }}</span>
    </template>
    <template v-slot:birthday="scope">
      <b-input type="text" v-model="editBirthday" v-if="editIndex ===  scope.index" size="mini"></b-input>
      <span v-else>{{ getBirthday( scope.row.birthday) }}</span>
    </template>
    <template v-slot:address="scope">
      <b-input type="text" v-model="editAddress" v-if="editIndex ===  scope.index" size="mini"></b-input>
      <span v-else>{{  scope.row.address }}</span>
    </template>
    <template v-slot:action="scope">
      <div v-if="editIndex ===  scope.index">
        <b-button @click="handleSave( scope.index)" size="mini">保存</b-button>
        <b-button @click="editIndex = -1" size="mini">取消</b-button>
      </div>
      <div v-else>
        <b-button @click="handleEdit( scope.row,  scope.index)" size="mini">操作</b-button>
      </div>
    </template>
</b-table>
</template>
```
:::



### Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| data     | 显示的结构化数据，字段 cellClassName 用于设置任意单元格的样式名称，因此数据不能使用该字段，详见示例特定样式。   | Array  |  —   |   []   |
| columns     |表格列的配置描述，具体项见后文   | Array  |  —   |   []   |


### Events

| 事件名      | 说明    | 返回值      |
|---------- |-------- |---------- |
| on-close     | 关闭时触发   | event  |

### Slot

| 名称      | 说明    |
|---------- |-------- |
| default     | 警告提示内容   |
