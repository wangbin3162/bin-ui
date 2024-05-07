## 介绍

bin-ui 是一款基于 Vue.js 2.0 的前端 UI组件库，是个人在工作中为了更好的学习和使用vue相关技术栈而实现的。

本项目的源码和文档主要参考借鉴了 `element-ui`和
`iView`。分离了常用业务组件并封装，部分组件参考这两个开源库进行了简化实现。所有样式为方便开发已使用stylus进行了重写，现已实现扩展了约 50 个组件可供日常开发。

添加了开源协议，编写本UI库的目的也是为了学习提升，熟悉vue相关技术栈及相关UI控件的实现和开发。

组件库的更新请参考[更新日志]

### 概述

- 基于 Vue 开发的 UI 组件
- 提供了一些常用的字体图标
- 灵活可控的组件，良好的API文档
- 集成了常用的css样式和transition动画
- 封装了常用的指令和工具库

### 最新版本

[![NPM version](https://img.shields.io/npm/v/bin-ui.svg)](https://www.npmjs.com/package/bin-ui)

### 相关链接

[element-ui](https://element.eleme.cn/)

[iView](https://www.iviewui.com/) 

### 相关生态链接

本UI组件库包含对应的生态圈，具体可进入导航栏进行跳转传送，主要有以下几个衍生库

***bin-ui*** 基于vue2.6的UI组件库

<a href="https://github.com/wangbin3162/bin-ui/" target="_blank">Github 仓库</a> | 
<a href="https://github.com/wangbin3162/bin-ui/" target="_blank">码云仓库</a> | 
<a href="https://wangbin3162.github.io/bin-ui/" target="_blank">文档说明</a>

***bin-ace-editor*** 基于vue，代码编辑器

<a href="https://github.com/wangbin3162/bin-ace-editor/" target="_blank">Github 仓库</a> | 
<a href="https://github.com/wangbin3162/bin-ace-editor/" target="_blank">码云仓库</a> | 
<a href="https://wangbin3162.github.io/bin-ace-editor/" target="_blank">文档说明</a>

***bin-tree-org*** 树形组织图组件

<a href="https://github.com/wangbin3162/bin-tree-org/" target="_blank">Github 仓库</a> | 
<a href="https://github.com/wangbin3162/bin-tree-org/" target="_blank">码云仓库</a> | 
<a href="https://wangbin3162.github.io/bin-tree-org" target="_blank">文档说明</a>

***bin-charts*** 基于vue、 echarts的图表封装组件

<a href="https://github.com/wangbin3162/bin-charts/" target="_blank">Github 仓库</a> | 
<a href="https://github.com/wangbin3162/bin-charts/" target="_blank">码云仓库</a> | 
<a href="https://wangbin3162.github.io/bin-charts/" target="_blank">文档说明</a>

***bin-animation*** 基于vue transition钩子函数的css3动画库

<a href="https://github.com/wangbin3162/bin-animation/" target="_blank">Github 仓库</a> | 
<a href="https://github.com/wangbin3162/bin-animation/" target="_blank">码云仓库</a> | 
<a href="https://wangbin3162.github.io/bin-animation/" target="_blank">文档地址</a>

***bin-keyframe-animation*** js关键帧动画库

<a href="https://github.com/wangbin3162/bin-keyframe-animation/" target="_blank">Github 仓库</a> | 
<a href="https://github.com/wangbin3162/bin-keyframe-animation/" target="_blank">码云仓库</a> | 
<a href="https://wangbin3162.github.io/bin-keyframe-animation/" target="_blank">预览地址</a>

***bin-admin*** 基于bin-ui的集成后台管理系统 2.0版本

<a href="https://github.com/wangbin3162/bin-admin/" target="_blank">Github 仓库</a> | 
<a href="https://github.com/wangbin3162/bin-admin/" target="_blank">码云仓库</a> | 
<a href="https://wangbin3162.github.io/bin-admin/" target="_blank">预览地址</a>

***bin-data*** 基于bin-ui的数据可视化系统平台

<a href="https://github.com/wangbin3162/bin-data/" target="_blank">Github 仓库</a> | 
<a href="https://github.com/wangbin3162/bin-data/" target="_blank">码云仓库</a> | 
<a href="https://wangbin3162.github.io/bin-data/" target="_blank">预览地址</a>

***vue-admin*** 后台管理系统1.0版本，无登录和权限验证，基于element-ui和bin-ui

<a href="https://github.com/wangbin3162/vue-admin/" target="_blank">Github 仓库</a> | 
<a href="https://github.com/wangbin3162/vue-admin/" target="_blank">码云仓库</a> | 
<a href="https://wangbin3162.github.io/vue-admin/" target="_blank">预览地址</a>

***bin-static-web*** 静态页面脚手架,可快速拉取编写静态文件，并可打包es6

<a href="https://github.com/wangbin3162/bin-static-web/" target="_blank">Github 仓库</a> | 
<a href="https://github.com/wangbin3162/bin-static-web/" target="_blank">码云仓库</a> | 
<a href="https://wangbin3162.github.io/bin-static-web/" target="_blank">预览地址</a>

***bin-cli*** webpack4脚手架工具，支持IE

<a href="https://github.com/wangbin3162/bin-cli/" target="_blank">Github 仓库</a> | 
<a href="https://github.com/wangbin3162/bin-cli/" target="_blank">码云仓库</a>

***bin-lib*** 库模式打包附带文档脚手架工具

<a href="https://github.com/wangbin3162/bin-lib/" target="_blank">Github 仓库</a> | 
<a href="https://github.com/wangbin3162/bin-lib/" target="_blank">码云仓库</a>

