## Message 通知

轻量级的信息反馈组件，在顶部居中显示，并自动消失。有多种不同的提示状态可选择。

### 基础用法

基本用法，默认在 3 秒后关闭

:::demo

```html
 <template>
     <b-button size="small" type="info" v-waves
        @click="$message({type:'info',content:'info 的提示'})">info</b-button>
     <b-button size="small" type="primary" v-waves
        @click="$message({type:'primary',content:'primary 的提示'})">primary</b-button>
     <b-button size="small" type="success" v-waves
        @click="$message({type:'success',content:'success 的提示'})">success</b-button>
     <b-button size="small" type="warning" v-waves
        @click="$message({type:'warning',content:'warning 的提示'})">warning</b-button>
     <b-button size="small" type="danger" v-waves
        @click="$message({type:'danger',content:'danger 的提示'})">danger</b-button>
  </template>
```
:::

### 配置参数

可以设置配置参数来渲染

:::demo

```html
 <template>
     <b-button size="small" type="default" v-waves
        @click="$message({content:'我10秒消失',duration:10})">我10秒消失</b-button>
     <b-button size="small" type="default" v-waves
        @click="$message({content:'我是可关闭的的提示', duration: 10, closable: true})">可关闭的</b-button>
    <b-button size="small" type="default" v-waves
            @click="$message({content:'我永远不会关闭除非手动', duration: 0, closable: true})">不会关闭</b-button>
  </template>
```
:::

### render函数调用

render函数调用

:::demo

```html
 <template>
     <b-button size="small" type="default" v-waves
        @click="renderFunc">render函数调用</b-button>
  </template>
  <script>
      export default {
        methods: {
           renderFunc () {
              this.$message({
                  render: h => {
                      return h('span', [
                          'This is created by ',
                          h('a', 'render'),
                          ' function'
                      ])
                  }
              });
          }
        }
      }
  </script>
```
:::

### API

通过直接调用以下方法来使用组件：

    this.$message('这是一条普通的提示')
    
    this.$message({type:'success',content:'success 的提示'})
        
    this.$message({content:'我10秒消失',duration:10})
    
以上方法隐式的创建及维护Vue组件。函数及参数说明如下：

### Attributes

| 函数      | 说明    |  类型      | 默认值      |
|---------- |-------- |---------- |---------|
| content     |  提示内容   | String  | —  |
| render     |  自定义描述内容，使用 Vue 的 Render 函数   | Function  | —  |
| duration     | 自动关闭的延时，单位秒，不关闭可以写 0 | Number |3  |
| onClose     | 关闭时的回调 | Function	 |  —  |
| closable     | 是否显示关闭按钮 | Boolean	 | false |

