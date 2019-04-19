# bin-ui

封装自定义组件库,基础操作等

组件示例请跳转[bin-ui](https://wangbin3162.github.io/bin-ui-doc/)

## 基础组件

- 图标组件
- 滚动条组件
- 按钮组件
- 后期慢慢维护补全如输入框、form、弹窗等

## 功能

- 指令
  - v-waves 水波纹
  - 超出文字显示...
- 帮助工具
  - 打印优化
  - lodash 库
  - velocity 动画库
  - flex.css 布局库


## 发布到npm

1.打包库文件

    "lib": "vue-cli-service build --target lib --name bin-ui --dest lib src/index.js"
    
2.打包样式文件

    gulp build
    
3.添加忽略

   # 以下是新增的
   # 要忽略目录和指定文件
   examples/
   packages/
   src/
   public/
   vue.config.js
   babel.config.js
   *.map
   *.html
   
4.发包 

    npm login 
    npm publish

