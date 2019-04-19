## BackTop 返回顶部

滚动时常与backtop返回顶部共同使用，这里也封装了一个返回顶部的按钮，但是使用起来需要手动编写其事件来实现联动

### 用法

首先仍然是HTML的引入，这里需要传入一个是否显示的bool值来开启或隐藏这个按钮

```html  
<div class="page-container" flex-box="1">
    <b-scrollbar style="height:100%;" ref="componentScrollBar">
      <router-view></router-view>
      <main-footer></main-footer>
    </b-scrollbar>
    <b-back-top :show="showBackToTop" @handleToTop="toTop"></b-back-top>
</div>
```

然后一般会在mounted钩子函数中去初始化监听函数

```javascript
  export default {
    name: 'app',
    data () {
      return {
        showBackToTop: false,
        componentScrollBar: null
      }
    },
    watch: {
      '$route.path' () {
        // 触发伪滚动条更新
        this.componentScrollBox.scrollTop = 0
        this.$nextTick(() => {
          this.componentScrollBar.update()
        })
      }
    },
    mounted () {
      this.componentScrollBar = this.$refs.componentScrollBar
      this.componentScrollBox = this.componentScrollBar.$el.querySelector('.bin-scrollbar__wrap')
      // 监听滚动事件 ,这里使用封装好的节流函数
      this.throttledScrollHandler = this.$util.throttle(this.handleScroll, 300)
      this.componentScrollBox.addEventListener('scroll', this.throttledScrollHandler)
    },
    methods: {
      toTop () {
        let timer
        if (timer) {
          cancelAnimationFrame(timer)
          timer = null
        }

        const fn = () => {
          if (this.componentScrollBox.scrollTop > 0) {
            this.componentScrollBox.scrollTop -= 50
            timer = requestAnimationFrame(fn)
          } else {
            cancelAnimationFrame(timer)
            this.showBackToTop = false
          }
        }

        timer = requestAnimationFrame(fn)
      },
      // 滚动监听事件
      handleScroll () {
        // 什么时候显示返回顶部按钮
        this.showBackToTop = this.componentScrollBox.scrollTop >= 150
      }
    },
    beforeDestroy () {
      this.componentScrollBox.removeEventListener('scroll', this.throttledScrollHandler)
    },
  }
```

根据实际需要可以扩展不同区域的滚动返回顶部

如果你对返回顶部的位置有所调整，则可以使用viewStyle来控制显示位置调整如

    <b-back-top :show="showBackToTop" @handleToTop="toTop"
                :view-style="{right:'100px',bottom:'100px'}"></b-back-top>

### Attributes
    
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| show    | 是否显示  | boolean    | true | false   |
| viewStyle    | 内联方式 自定义返回顶部的位置容器的样式  | Object    | - | {}   |

