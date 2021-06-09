## Form 表单

具有校验和提交功能的表单

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
    data() {
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
    <div class="mb-10">表单尺寸：
      <b-radio-group v-model="size" style="display: inline-block;">
        <b-radio label="large">large</b-radio>
        <b-radio label="default">default</b-radio>
        <b-radio label="small">small</b-radio>
        <b-radio label="mini">mini</b-radio>
      </b-radio-group>
    </div>
    <b-form :model="formInline" ref="form"
            :label-position="type"
            :label-width="labelWidth"
            :size="size">
      <b-form-item label="用户名" prop="name">
        <b-input v-model="formInline.name" placeholder="用户名" :size="size"></b-input>
      </b-form-item>
      <b-form-item label="邮箱" prop="mail">
        <b-input v-model="formInline.mail" placeholder="邮箱" :size="size"></b-input>
      </b-form-item>
    </b-form>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        type: 'top',
        size: 'default',
        formInline: {
          name: '',
          mail: ''
        }
      }
    },
    computed: {
      labelWidth() {
        return this.type === 'top' ? null : 80
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
    <b-form :model="formValidate" ref="form" :rules="ruleValidate" :label-width="100">
      <b-form-item label="用户名" prop="name">
        <b-input v-model="formValidate.name"></b-input>
      </b-form-item>
      <b-form-item label="邮箱" prop="mail">
        <b-input v-model="formValidate.mail"></b-input>
      </b-form-item>
      <b-form-item label="年龄" prop="age">
        <b-input-number v-model="formValidate.age"></b-input-number>
      </b-form-item>
      <b-form-item label="进度" prop="jindu">
        <b-slider v-model="formValidate.jindu"></b-slider>
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
            <b-date-picker type="date" v-model="formValidate.birthday" placeholder="选择出生日期"></b-date-picker>
          </b-form-item>
        </div>
        <div>
          <b-form-item label="时间" prop="time">
            <b-time-picker v-model="formValidate.time" placeholder="选择时间"></b-time-picker>
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
          <b-cascader :data="cities" v-model="formValidate.cities"></b-cascader>
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
        <b-input v-model="formValidate.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}"
                 placeholder="Enter something..."></b-input>
      </b-form-item>
      <b-form-item>
        <b-button @click="handleSubmit" type="primary">提 交</b-button>
        <b-button @click="handleReset">重 置</b-button>
      </b-form-item>
    </b-form>
  </div>
</template>
<script>
  export default {
    data() {
      const descValidate = (rule, value, callback) => {
        if (value.length > 10 || value.length === 0) {
          callback()
        } else {
          callback(new Error('描述必须大于10个字'))
        }
      }
      return {
        formValidate: {
          name: '',
          mail: '',
          age: 0,
          jindu: 30,
          gender: '',
          birthday: '',
          time: '',
          city: '',
          cities: [],
          interest: ["Movie", "Sleep"],
          desc: ''
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
          age: [{ required: true, type: 'number', message: '年龄必填', trigger: 'change' },
            { min: 18, max: 35, type: 'number', message: '年龄必须满18周岁，不大于35岁', trigger: 'change' }],
          jindu: [{ min: 40, type: 'number', message: '进度范围不能低于40%', trigger: 'change' }],
          gender: [{ required: true, message: '请选择性别', trigger: 'change' }],
          birthday: [{ required: true, type: 'date', message: '请选择出生日期', trigger: 'change' }],
          time: [{ required: true, type: 'string', message: '选择时间', trigger: 'change' }],
          city: [{ required: true, message: '请选择城市', trigger: 'change' }],
          cities: [{ required: true, type: 'array', message: '请选择所在地区', trigger: 'change' }],
          interest: [
            { required: true, type: 'array', min: 1, message: '请选择爱好', trigger: 'change' },
            { type: 'array', max: 2, message: '最多选择两个爱好', trigger: 'change' }
          ],
          desc: [{ validator: descValidate, trigger: 'blur' }]
        }
      }
    },
    methods: {
      handleSubmit() {
        this.$refs.form.validate((valid) => {
          if (valid) {
            this.$message({ type: 'success', content: '表单校验成功' });
          } else {
            this.$message({ type: 'danger', content: '表单校验失败' });
          }
        })
      },
      handleReset() {
        this.$refs.form.resetFields();
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
    <b-form :model="formValidate2" ref="form2" :label-width="80">
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
    data() {
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
| rules     | 表单验证规则，具体配置查看 [async-validator](https://github.com/yiminghe/async-validator)   | Object  |  —   |   —   |
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
| show-message    | 是否显示校验错误信息  | Boolean     |   —    |  true  |
