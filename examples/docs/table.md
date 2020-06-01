## Table 表格

<template>
    <div class="global-anchor">
      <b-anchor :scroll-offset="100">
        <b-anchor-link href="#ji-chu-yong-fa" title="基础用法"></b-anchor-link>
        <b-anchor-link href="#ban-ma-wen" title="斑马纹"></b-anchor-link>
        <b-anchor-link href="#bian-kuang" title="边框"></b-anchor-link>
        <b-anchor-link href="#chao-chu-yin-cang" title="超出隐藏"></b-anchor-link>
        <b-anchor-link href="#gu-ding-biao-tou" title="固定表头"></b-anchor-link>
        <b-anchor-link href="#gu-ding-biao-tou-he-lie" title="固定表头和列"></b-anchor-link>
        <b-anchor-link href="#dan-xuan-biao-ge" title="单选表格"></b-anchor-link>
        <b-anchor-link href="#duo-xuan-biao-ge" title="多选表格"></b-anchor-link>
        <b-anchor-link href="#ke-cao-zuo-biao-ge" title="可操作表格"></b-anchor-link>
        <b-anchor-link href="#ke-zhan-kai" title="可展开"></b-anchor-link>
        <b-anchor-link href="#xing-lie-he-bing" title="行列合并"></b-anchor-link>
        <b-anchor-link href="#pai-xu-biao-ge" title="排序表格"></b-anchor-link>
        <b-anchor-link href="#loading-zhuang-tai" title="loading状态"></b-anchor-link>
        <b-anchor-link href="#da-xiao-zhuang-tai" title="大小状态"></b-anchor-link>
        <b-anchor-link href="#wu-shu-ju" title="无数据"></b-anchor-link>
        <b-anchor-link href="#dao-chucsv" title="导出csv"></b-anchor-link>
        <b-anchor-link href="#table-props" title="Table props"></b-anchor-link>
        <b-anchor-link href="#table-events" title="Table events"></b-anchor-link>
        <b-anchor-link href="#table-slot" title="Table slot"></b-anchor-link>
        <b-anchor-link href="#table-methods" title="Table methods"></b-anchor-link>
        <b-anchor-link href="#column" title="column"></b-anchor-link>
      </b-anchor>
    </div>
</template>

### 基础用法

基本用法

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
    }
  }
</script>
```
:::

### 斑马纹

通过设置`stripe`来设置斑马纹显示

::: demo
```html
<template>
<b-table :columns="columns" :data="data" stripe></b-table>
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
    }
  }
</script>
```
:::

### 边框

通过设置`border`来设置斑马纹显示

::: demo
```html
<template>
<b-table :columns="columns" :data="data" border></b-table>
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
    }
  }
</script>
```
:::

### 超出隐藏

可以通过给`columns`设置属性`tooltip`来设置超出隐藏并悬停显示, 如仅有一张表格则可以设置`tooltip`皮肤`tooltip-theme`来开启优化样式
（注意：因表格单元格存在超出隐藏样式所以必须将tooltip标签插入至body元素，会成多余标签，如有多个表格缓存则会插入过多标签造成性能问题，所以是否开启需要根据需求确定）

::: demo
```html
<template>
<b-table :columns="columns" :data="data" border tooltip-theme="dark"></b-table>
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
            title: '备注',
            key: 'remark',
            tooltip: true
          }
        ],
        data: [
          {
            name: '王小明',
            age: 18,
            birthday: '1990-04-22',
            address: '北京市朝阳区芍药居',
            remark: '这是一段描述文字，文本长度会超出列宽，设置tooltip属性可以设置不换行显示并开启鼠标悬停显示所有文字。'
          },
          {
            name: '张小刚',
            age: 25,
            birthday: '1990-11-11',
            address: '北京市海淀区西二旗',
            remark: '这是一段描述文字，文本长度会超出列宽，设置tooltip属性可以设置不换行显示并开启鼠标悬停显示所有文字。'
          },
          {
            name: '李小红',
            age: 30,
            birthday: '1985-02-05',
            address: '上海市浦东新区世纪大道',
            remark: '这是一段描述文字，文本长度会超出列宽，设置tooltip属性可以设置不换行显示并开启鼠标悬停显示所有文字。'
          },
          {
            name: '周小伟',
            age: 26,
            birthday: '1993-07-11',
            address: '深圳市南山区深南大道',
            remark: '这是一段描述文字，文本长度会超出列宽，设置tooltip属性可以设置不换行显示并开启鼠标悬停显示所有文字。'
          },
          {
            name: '张小发',
            age: 33,
            birthday: '1999-12-12',
            address: '南京市龙眠大道',
            remark: '这是一段描述文字，文本长度会超出列宽，设置tooltip属性可以设置不换行显示并开启鼠标悬停显示所有文字。'
          }
        ]
      }
    }
  }
</script>
```
:::

### 固定表头

height 和maxHeight可以设置固定表头

::: demo 
```html
<template>
<b-table :columns="columns" :data="data" height="200" border></b-table>
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
    }
  }
</script>
```
:::

### 固定表头和列

可以同时固定表头和列

::: demo 
```html
<template>
<div style="width: 600px;">
  <b-table :columns="columns3" :data="data" height="200" border></b-table>
</div>
</template>
<script>
  export default {
    data () {
      return {
        columns3: [
          {
            title: '姓名',
            key: 'name',
            width: 150
          },
          {
            title: '年龄',
            key: 'age',
            width: 150
          },
          {
            title: '出生日期',
            key: 'birthday',
            width: 150
          },
          {
            title: '地址',
            key: 'address',
            width: 350
          },
          {
            title: '操作',
            fixed: 'right',
            width: 100,
            render: (h, params) => {
                return h('b-button', {
                   props: {
                       type: 'primary',
                       size: 'mini',
                       plain: true
                   }
               }, '编辑');
            }
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
    }
  }
</script>
```
:::

### 单选表格

::: demo 
```html
<template>
<div>
  <b-table :columns="columns" ref="currentRowTable" :data="data" 
      highlight-row @on-current-change="currentRowChange"></b-table>
  <br>
  <b-button @click="$refs.currentRowTable.clearCurrentRow();">清除单选</b-button>
</div>
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
      currentRowChange(currentRow,oldRow,index){
        if(index){
          this.$message(`选中了第${index+1}行`)
        }
      } 
    }
  }
</script>
```
:::

### 多选表格

通过给 columns 数据设置一项，指定 type: 'selection'，即可自动开启多选功能。

给 data 项设置特殊 key _checked: true 可以默认选中当前项。

给 data 项设置特殊 key _disabled: true 可以禁止选择当前项。

@on-select，选中某一项触发，返回值为 selection 和 row，分别为已选项和刚选择的项。@on-select-all，点击全选时触发，返回值为 selection，已选项。 @on-selection-change，只要选中项发生变化时就会触发，返回值为 selection，已选项。

::: demo  
```html
<template>
<div>
  <b-table :columns="columns4" ref="selection" :data="data" highlight-row></b-table>
  <br>
    <b-button @click="$refs.selection.selectAll(true);">设置全选</b-button>
    <b-button @click="$refs.selection.selectAll(false);">取消全选</b-button>
</div>
</template>
<script>
  export default {
    data () {
      return {
        columns4: [
            {
                type: 'selection',
                width: 60,
                align: 'center'
            },
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
    }
  }
</script>
```
:::

### 可操作表格

::: demo
```html
<template>
<b-table :columns="columns2" :data="data">
    <template v-slot:name="scope">
      <b-input type="text" v-model="editName" v-if="editIndex === scope.index" size="small"></b-input>
      <span v-else>{{ scope.row.name }}</span>
    </template>
    <template v-slot:age="scope">
      <b-input type="text" v-model="editAge" v-if="editIndex ===  scope.index" size="small"></b-input>
      <span v-else>{{  scope.row.age }}</span>
    </template>
    <template v-slot:birthday="scope">
      <b-input type="text" v-model="editBirthday" v-if="editIndex ===  scope.index" size="small"></b-input>
      <span v-else>{{ scope.row.birthday }}</span>
    </template>
    <template v-slot:address="scope">
      <b-input type="text" v-model="editAddress" v-if="editIndex ===  scope.index" size="small"></b-input>
      <span v-else>{{  scope.row.address }}</span>
    </template>
    <template v-slot:action="scope">
      <div v-if="editIndex ===  scope.index">
        <b-button @click="handleSave( scope.index)" size="small">保存</b-button>
        <b-button @click="editIndex = -1" size="small">取消</b-button>
      </div>
      <div v-else>
        <b-button @click="handleEdit( scope.row,  scope.index)" size="small">操作</b-button>
      </div>
    </template>
</b-table>
</template>
<script>
  export default {
    data () {
      return {
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
      }
    }
  }
</script>
```
:::

### 可展开

通过给`columns` 数据设置一项，指定 `type: 'expand'`，即可开启扩展功能。

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
                type: 'expand',
                width: 50,
                render: (h, params) => {
                    return h('div', '详细地址：'+ params.row.address)
                }
            },
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
    }
  }
</script>
```
:::

### 行列合并

可以设置属性`mergeMethod`制定合并行或者列的算法，方法参数为四个对象`row`，`column`，`rowIndex`，`columnIndex`，
该方法返回一个包含两个元素的数组，第一个表示rowspan，第二个为colspan，用于合并单元格 合并表格最好是使用border模式

::: demo
```html
<template>
<b-table :columns="columns" :data="data" border :merge-method="handleSpan"></b-table>
</template>

<script>
  export default {
    data () {
      return {
        columns: [
          { title: '姓名',key: 'name'},
          { title: '年龄',key: 'age'},
          { title: '出生日期',key: 'birthday'},
          { title: '地址',key: 'address'}
        ],
        data: [
          {
            name: '王小明',
            age: 18,
            birthday: '1990-04-22',
            address: '北京市朝阳区芍药居'
          },
          {
            name: '王小明',
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
    methods: {
      handleSpan ({ row, column, rowIndex, columnIndex }) {
        // 获取相同姓名的行是，0，1
        if (rowIndex === 0 && columnIndex === 0) {
            return {
                rowspan: 2,
                colspan: 1
            };
        } else if (rowIndex === 1 && columnIndex === 0) {
            return {
                rowspan: 0,
                colspan: 1
            };
        }
        // 合并列，这里将第三行，周小伟的日期和地址合并
        if (rowIndex === 3 && columnIndex === 2) {
            return [1, 2];
        } else if (rowIndex === 3 && columnIndex === 3) {
            return [0,0];
        }
      } 
    }
  }
</script>
```
:::

### 排序表格

::: demo 
```html
<template>
<div>
  <b-table :columns="columns1"  :data="data"></b-table>
</div>
</template>
<script>
  export default {
    data () {
      return {
        columns1: [
          {
            title: '姓名',
            key: 'name'
          },
          {
            title: '年龄',
            key: 'age',
            sortable: true
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
    }
  }
</script>
```
:::

### loading状态

::: demo 
```html
<template>
<div>
  <b-table :columns="columns"  :data="data" :loading="loading" ></b-table>
  <br>
  <b-switch v-model="loading"></b-switch>
</div>
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
            key: 'age',
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
        loading:false,
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
    }
  }
</script>
```
:::

### 大小状态

通过设置属性 `size` 为 `large` 或 `small` 可以调整表格尺寸为大或小，默认不填或填写 default 为中。

::: demo 
```html
<template>
<div>
    <div style="display:flex;justify-content: flex-end;">
       <b-dropdown trigger="click" style="margin-bottom: 20px;">
          <a href="javascript:void(0)">
             表格密度 <b-icon name="ios-apps"></b-icon>
          </a>
          <b-dropdown-menu slot="list">
             <b-dropdown-item @click.native="tableSize='large'">松散</b-dropdown-item>
             <b-dropdown-item @click.native="tableSize='default'">默认</b-dropdown-item>
             <b-dropdown-item @click.native="tableSize='small'">紧凑</b-dropdown-item>
          </b-dropdown-menu>
       </b-dropdown> 
    </div>
  <b-table :columns="columns"  :data="data" :size="tableSize" ></b-table>
</div>
</template>
<script>
  export default {
    data () {
      return {
        tableSize: 'default',
        columns: [
          {
            title: '姓名',
            key: 'name'
          },
          {
            title: '年龄',
            key: 'age',
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
    }
  }
</script>
```
:::

### 无数据

noDataText可以设置无数据状态

::: demo 
```html
<template>
<div>
  <b-table :columns="columns"  :data="data" no-data-text="No Data"></b-table>
</div>
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
            key: 'age',
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
        data: []
      }
    }
  }
</script>
```
:::

### 导出csv

通过调用 exportCsv() 方法，可以将数据导出为 .csv 的表格文件，详见 API。

::: demo 
```html
<template>
<div>
  <b-table :columns="columns" :data="data" size="small" ref="table"></b-table>
  <br>
  <b-button type="primary" size="small" 
     @click="$refs.table.exportCsv({filename: 'The original data' });">
     导出csv
     </b-button>                                                          
</div>
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
            key: 'age',
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
    }
  }
</script>
```
:::

### Table props

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| data     | 显示的结构化数据，字段 cellClassName 用于设置任意单元格的样式名称，因此数据不能使用该字段，详见示例特定样式。   | Array  |  —   |   []   |
| columns     |表格列的配置描述，具体项见后文   | Array  |  —   |   []   |
| stripe     | 间隔斑马纹 | Boolean  | false/true   |   false   |
| border     | 纵向边框 | Boolean  | false/true   |   false   |
| show-header     | 是否显示表头 | Boolean  | false/true   |   false   |
| width     | 表格宽度，单位 px | Number/String  | —     |   auto   |
| height | 表格高度，单位 px，设置后，如果表格内容大于此值，会固定表头 | Number/String  | —     |   —     |
| max-height |  最大表格高度 | Number/String  | —     |   —     |
| loading |  表格加载状态 | Boolean	  | —     |  false    |
| disabled-hover |  禁用悬停高亮 | Boolean	  | —     |  false    |
| highlight-row |  是否支持高亮选中的行，即单选 | Boolean	  | —     |  false    |
| size |  表格尺寸 | string	  |  large / small    |  default    |
| no-data-text |  空数据内容 | string	  |   —     |  暂无数据    |
| draggable  | 开启拖拽调整行顺序，需配合 @on-drag-drop 事件使用 | Boolean	  |   —     | 	false |
| merge-method  | 表格合并行列的方法函数 | Function	  |   —     | 	false |

### Table events

| 事件名      | 说明    | 返回值      |
|---------- |-------- |---------- |
| on-current-change     | 开启 highlight-row 后有效，当表格的当前行发生变化的时候会触   | currentRow, oldCurrentRow,index  |
| on-select     | 在多选模式下有效，选中某一项时触发   | 已选项, 刚选择  |
| on-select-cancel    | 在多选模式下有效，取消选中某一项时触发  | 已选项, 取消选择 |
| on-select-all    | 全选时触发	 | 已选项 |
| on-select-all-cancel    | 取消全选时触发		 | 已选项 |
| on-selection-change    | 选中项发生变化时就会触发	 | 已选项 |
| on-sort-change  | 排序时有效，当点击排序时触发		 | column：当前列数据  key：排序依据的指标 order(值为 asc 或 desc)|
| on-row-click    | 单击某一行时触发	 | 当前行的数据,index |
| on-row-dblclick   | 双击某一行时触发		 | 当前行的数据,index |
| on-expand   | 展开或收起某一行时触		 | row：当前行的数据,status：当前的状态 |
| on-drag-drop    | 拖拽排序松开时触发		 | 置换的两行数据索引	index1, index2 |

### Table slot

| 名称      | 说明    |
|---------- |-------- |
| header     | 表头  |
| footer     | 页脚   |
| loading     | 警告提加载中示内容   |

### Table methods

| 方法名      | 说明    | 参数      |
|---------- |-------- |---------- |
| exportCsv     | 将数据导出为 .csv   | params(Object)|
| clearCurrentRow     | 清除高亮项，仅在开启  | 无 |
| handleResize     | 刷新表格的宽高  | 无 |
| getSelection     | 获取已经选中的行  | 无 |

### column 

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| type     | 列类型   | String  | index、selection、expand、html	String   |  -   |
| title     | 列头显示文字   | String  | -  |  #  |
| key     | 对应列内容的字段名   | String  | -  |   -  |
| width     | 列宽   | Number  | -  |   -  |
| minWidth     | 最小列宽   | Number  | -  |   -  |
| maxWidth     | 最大列宽   | Number  | -  |   -  |
| align     | 对齐方式   | String  | right,center |   left |
| className     | 列的样式名称   | String  | - |   - |
| fixed     | 列是否固定在左侧或者右侧   | String  | left,right |   -  |
| ellipsis     | 开启后，文本将不换行   | Boolean  |  -  |   false |
| tooltip     | 开启后，文本将不换行,并用 Tooltip 组件显示完整内容   | Boolean  |  -  |   false |
| render     | 自定义渲染列 ,第一个是 h，第二个为对象，包含 row、column 和 index | Function  |  -  |   - |
| indexMethod     | type 为 index 时可用，自定义序号 ,参数 row 为当前行内容| Function  |  -  |   - |
| sortable     | 对应列是否可以排序 | Boolean ,'custom' |  -  |  false|
| sortMethod     | 自定义排序使用的方法,三个参数 a 、 b 和 type | Function  |  -  |    - |
| sortType     | 设置初始化排序。值为 asc 和 desc | String  |  -  |    - |
