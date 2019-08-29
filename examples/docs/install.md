## 安装

### CDN 安装

通过[unpkg.com/bin-ui](https://unpkg.com/bin-ui/) 可以看到 bin-ui
最新版本的资源，也可以切换版本选择需要的资源，在页面上引入 js 和 css
文件即可开始使用：

```
<!-- import Vue.js -->
<script src="https://cdn.jsdelivr.net/npm/vue"></script>
<!-- import stylesheet -->
<link rel="stylesheet" href="https://unpkg.com/bin-ui@2.1.0/lib/styles/index.css">
<!-- import bin-ui -->
<script src="https://unpkg.com/bin-ui@2.1.0/lib/bin-ui.umd.min.js"></script>
```
    
`@2.1.0` 表示版本号，我们建议锁定版本号来保证代码的稳定性

### npm 安装

推荐使用npm安装，它能更好地和[webpack](https://webpack.js.org/)打包工具配合使用。而且可以更好的和
es6配合使用。并且支持按需引入

```shell
npm i bin-ui -S
# or 
yarn add bin-ui
```

如果您了解node.js、npm安装，并希望配合webpack使用，请阅读下一节：[快速上手](/#/start)。

