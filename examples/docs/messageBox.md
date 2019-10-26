## MessageBox 弹框

弹窗是为了模拟快速创建模态框准备的，基于Modal框生成的窗口实例。


### 模拟alert

只有确定按钮，可以直接使用 `$alert` 也可以个设置type或者直接使用快捷方法

::: demo
```html
<template>
    <b-button type="primary" v-waves size="small" 
    @click="$alert({title: '标题',content: '我是弹窗内容',width:500})">Info</b-button>
    <b-button type="success" v-waves size="small" 
    @click="$alert({type:'success',title: '标题',content: '我是弹窗内容'})">Success</b-button>
    <b-button type="warning" v-waves size="small" 
    @click="$alert.warning({title: '标题',content: '我是弹窗内容'})">Warning</b-button>
    <b-button type="danger" v-waves size="small" @click="showAlert">Danger</b-button>
</template>
<script>
  export default {
    methods:{
      showAlert(){
        this.$alert({type:'danger',title: '标题',content: '我是弹窗内容',
        onOk:()=>{
          this.$message('点击了确定关闭弹窗')
        }})
      }
    }
  }
</script>
```
:::

### 模拟confirm

模拟confirm提交选择

::: demo
```html
<template>
    <b-button type="default" v-waves size="small" 
      @click="$confirm({title: '标题',content: '我是弹窗内容'})">标准</b-button>
    <b-button type="default" v-waves size="small" 
      @click="$confirm({title: '标题',content: '改变按钮文字',okText: 'OK',cancelText: 'Cancel'})">改变按钮文字</b-button>
    <b-button type="default" v-waves size="small" 
      @click="async">确定2s后关闭</b-button>
</template>
<script>
  export default {
    methods:{
       async () {
          this.$confirm({
              title: '标题',
              content: '<p>这个弹窗会在点击2秒后关闭</p>',
              loading: true,
              onOk: () => {
                  setTimeout(() => {
                      this.$modal.remove();
                      this.$message('模态框已经关闭');
                  }, 2000);
              }
          });
      }
    }
  }
</script>
```
:::

### 可以自定义内容

可以使用 `render` 函数自定义内容

::: demo
```html
<template>
    <b-button type="default" v-waves size="small" 
      @click="handleRender">自定义内容</b-button>
</template>
<script>
  export default {
    methods:{
      handleRender () {
          this.$confirm({
              render: (h) => {
                  return h('div', {},'我是render函数渲染的')
              }
          })
      }
    }
  }
</script>
```
:::

### API

通过直接调用以下方法来使用组件：

    this.$alert(config)
    this.$alert.success(config)
    this.$alert.warning(config)
    this.$alert.danger(config)
    this.$confirm(config)
    this.$modal
    
以上方法隐式的创建及维护Vue组件。函数及参数说明如下：

### Attributes

| 函数      | 说明    |  类型      | 默认值      |
|---------- |-------- |---------- |---------|
| title     |  标题   | String /Element String  | —  |
| content  |  内容   | String /Element String  | —  |
| render  |  自定义内容，使用后不再限制类型   | Function  | —  |
| width  |  宽度，单位 px   | Number / String  |  416  |
| okText  |  确定按钮的文字   |   | 确定 |
| cancelText  |  取消按钮的文字，只在$confirm()下有效   | String  |取消  |
| loading  |  显示 loading 状态，需手动调用Modal.remove()来关闭对话框   | Boolean  | false  |
| scrollable  |  页面是否可以滚动   | Boolean  | false  |
| onOk  |  点击确定的回调   |Function  | —  |
| onCancel  |  点击取消的回调，只在Modal.confirm()下有效   | Function  | —  |
