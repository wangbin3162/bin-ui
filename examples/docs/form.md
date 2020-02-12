## Form 表单

<template>
    <div class="global-anchor">
      <b-anchor :scroll-offset="100">
        <b-anchor-link href="#xing-nei-biao-dan" title="行内表单"></b-anchor-link>
        <b-anchor-link href="#biao-dan-tou-dui-qi-fang-shi" title="表单头对齐方式"></b-anchor-link>
        <b-anchor-link href="#ji-ben-xiao-yan" title="基本校验"></b-anchor-link>
        <b-anchor-link href="#dan-ge-yuan-su-de-xiao-yan" title="单个元素的校验"></b-anchor-link>
        <b-anchor-link href="#attributes" title="Attributes"></b-anchor-link>
        <b-anchor-link href="#methods" title="Methods"></b-anchor-link>
        <b-anchor-link href="#formitem-props" title="FormItem props"></b-anchor-link>
      </b-anchor>
    </div>
</template>

具有校验和提交功能的表单，暂时只包含输入框，单选，多选，文本域 ，开关组件，后期完善。

### 行内表单

::: demo
```html
<template>
  <div style="width:600px;">
      <b-form :model="formInline" ref="form" :rules="ruleValidate" inline>
        <b-form-item prop="name">
          <b-input v-model="formInline.name" placeholder="用户名"></b-input>
        </b-form-item>
        <b-form-item prop="mail">
          <b-input v-model="formInline.mail" placeholder="邮箱"></b-input>
        </b-form-item>
      </b-form>
   </div>
</template>
<script>
  export default {
    data () {
      return {
        formInline: {
          name: '',
          mail: ''
        },
        ruleValidate: {
          name: [{ required: true, message: '用户名不能为空', trigger: 'blur' }],
          mail: [
            { required: true, message: '邮箱不能为空', trigger: 'blur' },
            { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
          ]
        }
      }
    }
  }
</script>
```
:::

### 表单头对齐方式

设置 label-position 可以设置表单头的对齐方式 可选top left right，并可设置label-width宽度

::: demo
```html
<template>
  <div style="width:500px;">  
    <div class="mb-10">表头对其方式：
      <b-radio-group v-model="type" style="display: inline-block;">
        <b-radio label="top">top</b-radio>
        <b-radio label="left">left</b-radio>
        <b-radio label="right">right</b-radio>
      </b-radio-group>
    </div>
      <b-form :model="formInline" ref="form" :label-position="type" :label-width="labelWidth">
        <b-form-item label="用户名" prop="name">
          <b-input v-model="formInline.name" placeholder="用户名"></b-input>
        </b-form-item>
        <b-form-item label="邮箱" prop="mail">
          <b-input v-model="formInline.mail" placeholder="邮箱"></b-input>
        </b-form-item>
      </b-form>
   </div>
</template>
<script>
  export default {
    data () {
      return {
        type: 'top',
        formInline: {
          name: '',
          mail: ''
        }
      }
    },
    computed:{
      labelWidth(){
        return this.type==='top' ? null : 80
      }
    } 
  }
</script>
```
:::

### 基本校验

::: demo
```html
<template>
  <div style="width:600px;">
      <b-form :model="formValidate" ref="form" :rules="ruleValidate" :label-width="80">
        <b-form-item label="用户名" prop="name">
          <b-input v-model="formValidate.name"></b-input>
        </b-form-item>
        <b-form-item label="邮箱" prop="mail">
          <b-input v-model="formValidate.mail"></b-input>
        </b-form-item>
        <b-form-item label="性别" prop="gender">
            <b-radio-group v-model="formValidate.gender">
                <b-radio label="male">男</b-radio>
                <b-radio label="female">女</b-radio>
            </b-radio-group>
        </b-form-item>
        <div flex="box:mean">
          <div>
            <b-form-item label="出生日期" prop="birthday">
               <b-date-picker size="small" type="date" v-model="formValidate.birthday" placeholder="选择出生日期"></b-date-picker>
            </b-form-item>
          </div>
          <div>
            <b-form-item label="时间" prop="time">
               <b-time-picker size="small" v-model="formValidate.time" placeholder="选择时间"></b-time-picker>
            </b-form-item>
          </div>
        </div>
        <div flex="box:mean">
            <b-form-item label="城市" prop="city">
              <b-select v-model="formValidate.city" clearable>
                <b-option value="beijing" label="北京"></b-option>
                <b-option value="shanghai" label="上海"></b-option>
                <b-option value="xuzhou" label="徐州"></b-option> 
              </b-select>
            </b-form-item>
            <b-form-item label="地区" prop="cities">
              <b-cascade :data="cities" v-model="formValidate.cities" size="small"></b-cascade>
            </b-form-item>
        </div>
        <b-form-item label="爱好" prop="interest">
            <b-checkbox-group v-model="formValidate.interest">
                <b-checkbox label="Eat"></b-checkbox>
                <b-checkbox label="Sleep"></b-checkbox>
                <b-checkbox label="Run"></b-checkbox>
                <b-checkbox label="Movie"></b-checkbox>
            </b-checkbox-group>
        </b-form-item>
        <b-form-item label="描述" prop="desc">
            <b-input v-model="formValidate.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></b-input>
        </b-form-item>
        <b-form-item>
            <b-button @click="handleSubmit">提交</b-button>
        </b-form-item>
      </b-form>
   </div>
</template>
<script>
  export default {
    data () {
      return {
        formValidate: {
          name: '',
          mail: '',
          birthday:'',
          time:''
        },
        cities: [
             {
               value: 'nanjing',
               label: '南京',
               children: [
                   {
                       value: 'xuanwu',
                       label: '玄武区'
                   },
                   {
                       value: 'gulou',
                       label: '鼓楼区'
                   },
                   {
                       value: 'jianye',
                       label: '建邺区'
                   }
               ]
             },
             {
               value: 'xuzhou',
               label: '徐州',
               children: [
                   {
                       value: 'tongshan',
                       label: '铜山区'
                   },
                   {
                       value: 'gulou',
                       label: '鼓楼区'
                   },
                   {
                       value: 'yunlong',
                       label: '云龙区'
                   },
                   {
                       value: 'jiawang',
                       label: '贾汪区'
                   }
               ]
             }
         ],
         ruleValidate: {
           name: [{ required: true, message: '用户名不能为空', trigger: 'blur' }],
           mail: [
             { required: true, message: '邮箱不能为空', trigger: 'blur' },
             { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
           ],
           gender: [ { required: true, message: '请选择性别', trigger: 'change' }],
           birthday: [{ required: true, type: 'date', message: '请选择出生日期', trigger: 'change' }],
           time: [{ required: true, type: 'string', message: '选择时间', trigger: 'change' }],
           city: [ { required: true, message: '请选择城市', trigger: 'change' }],
           cities: [ { required: true, type: 'array', message: '请选择所在地区', trigger: 'change' }],
           interest: [
             { required: true, type: 'array', min: 1, message: '请选择爱好', trigger: 'change' },
             { type: 'array', max: 2, message: '最多选择两个爱好', trigger: 'change' }
           ],
           desc: [
             { required: true, message: '描述必填', trigger: 'blur' },
             { type: 'string', min: 20, message: '描述不能少于20个字符', trigger: 'blur' }
           ]
         }
      }
    },
    methods: {
      handleSubmit () {
        this.$refs.form.validate((valid) => {
          if (valid) {
            this.$message({type:'success',content:'表单校验成功'});
          } else {
            this.$message({type:'danger',content:'表单校验失败'});
          }
        })
      }
    }
  }
</script>
```
:::

### 单个元素的校验

::: demo
```html
<template>
  <div style="width:400px;">
      <b-form :model="formValidate2" ref="form2"  :label-width="80">
        <b-form-item label="用户名" prop="name" :rules=" { required: true, message: '用户名不能为空', trigger: 'blur' }">
          <b-input v-model="formValidate2.name"></b-input>
        </b-form-item>
        <b-form-item label="邮箱" prop="mail">
          <b-input v-model="formValidate2.mail"></b-input>
        </b-form-item>
      </b-form>
   </div>
</template>
<script>
  export default {
    data () {
      return {
        formValidate2: {
          name: '',
          mail: ''
        }
      }
    }
  }
</script>
```
:::

### Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| model     | 表单数据对象   | Object  |  —   |   —   |
| rules     | 表单验证规则，具体配置查看 https://github.com/yiminghe/async-validator   | Object  |  —   |   —   |
| inline     | 是否开启行内表单模式   | Boolean  |  —   |  false  |
| label-position     | 表单域标签的位置   | String  |  left、right、top   |  right  |
| label-width    | 表单域标签的宽度   | Number  |   —    |  —   |
| show-message   | 是否显示校验错误信息   | Boolean  |   —    |  false  |

### Methods

| 参数      | 说明    | 返回值   |
|---------- |-------- |---------- |
| validate     | 对整个表单进行校验   | callback  |
| validateField     | 对部分表单字段进行校验的方法，参数1为需校验的 prop，参数2为检验完回调，返回错误信息   | callback  |
| resetFields     | 对整个表单进行重置，将所有字段值重置为空并移除校验结果   | 无  |

### FormItem props

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| prop     | 对应表单域 model 里的字段   | String  |  —   |   —   |
| label     | 标签文本  | String  |  —   |   —   |
| label-width     | 表单域标签的的宽度   | Number  |  —   |  —    |
| required    | 是否必填，如不设置，则会根据校验规则自动生成   | Boolean  |   —   |  —   |
| rules    | 表单验证规则  | Object / Array  |   —    |  —   |
| error   | 表单域验证错误信息, 设置该值会使表单验证状态变为error，并显示该错误信息   | Boolean  |   —    |   —   |
| show-message    | 是否显示校验错误信息  | Boolean	 |   —    |  true  |
