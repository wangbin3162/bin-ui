## 顶部加载

全局创建一个显示页面加载、异步请求、文件上传等的加载进度条。

### 说明

LoadingBar 只会在全局创建一个，因此在任何位置调用的方法都会控制这同一个组件。
主要使用场景是路由切换和Ajax，因为这两者都不能拿到精确的进度，LoadingBar 会模拟进度，
当然也可以通过update()方法来传入一个精确的进度，比如在文件上传时会很有用，具体见API。

#### 在路由中使用

```javascript        
    import BinUI from '../../src/index'
    Vue.use(BinUI)
    
    router.beforeEach((to, from, next) => {
      BinUI.LoadingBar.start()
      next()
    })
    router.afterEach(() => {
      BinUI.LoadingBar.finish()
    })
```

### 代码实例

点击 Start 开始进度，点击 Done 结束。在调用start()方法后，组件会自动模拟进度，当调用done()或error()时，补全进度并自动消失。

:::demo 点击 `Config` 之后再次查看配置项一般默认即可

```html
 <template>
     <b-button @click="start" size="mini">Start</b-button>
     <b-button @click="update(50)" size="mini">Update 50</b-button>
     <b-button @click="done" size="mini">Done</b-button>
     <b-button @click="error" size="mini">Error</b-button>
     <b-button @click="config" size="mini">Config</b-button>
  </template>
  <script>
      export default {
        methods: {
            start () {
             this.$Loading.start();
            },
            update (val) {
             this.$Loading.update(val);
            },
            done () {
             this.$Loading.done();
            },
            error () {
             this.$Loading.error();
            },
            config() {
              this.$Loading.config({
                  color: '#5cb85c',
                  failedColor: '#f0ad4e',
                  height: 5
              })
            }
        }
      }
  </script>
```
:::

### API

通过直接调用以下方法来使用组件：

    this.$Loading.start()
    
    this.$Loading.finish()
    
    this.$Loading.error()
    
    this.$Loading.update(percent)
    
以上方法隐式的创建及维护Vue组件。函数及参数说明如下：

### Attributes

| 函数      | 说明    | 参数      |
|---------- |-------- |---------- |
| start     |  开始从 0 显示进度条，并自动加载进度   | 无  |
| done     |  结束进度条，自动补全剩余进度   | 无  |
| error     |  以错误的类型结束进度条，自动补全剩余进度   | 无  |
| update     |  精确加载到指定的进度   | percent进度百分比  |
