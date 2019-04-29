## Notice 通知

在界面右上角显示可关闭的全局通知，常用于以下场景：

通知内容带有描述信息

系统主动推送

### 基础用法

基本用法，默认在 4.5秒后关闭。默认使用仅标题模式。

建议标题言简意赅，例如"删除成功"，更详细的内容可以放在描述信息里。

:::demo

```html
 <template>
     <b-button size="small" type="primary" v-waves>打开提醒</b-button>
  </template>
  <script>
      export default {
        methods: {
        }
      }
  </script>
```
:::
