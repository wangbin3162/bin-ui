## 更新日志

更新日志已使用时间轴实现，根据不同的更新类型来设置颜色和图标，重大更新或重要版本标志为`success`

::: demo 有新增组件使用`primary`样式`ios-leaf`图标，修复优化使用`warning`样式`ios-construct`图标
```html
<template>
<div class="doc-update">
    <b-timeline>
      <b-timeline-item color="primary">
        <b-icon name="ios-leaf" slot="dot" size="20"></b-icon>
        <p class="version">2.1.1</p>
        <p class="time">2019-9-3</p>
        <p class="content">新级联选择框组件</p>
        <p class="content">更新级联选择表单验证示例</p>
        <p class="content">优化message显示圆角问题</p>
      </b-timeline-item>
      <b-timeline-item color="success">
        <b-icon name="ios-trophy" slot="dot" size="20"></b-icon>
        <p class="version">2.1.0 Full 42 Components</p>
        <p class="time">2019-8-29</p>
        <p class="content">新增上传组件</p>
        <p class="content">新增日期选择组件</p>
        <p class="content">新增时间选择组件</p>
        <p class="content">新增时间轴组件</p>
        <p class="content">实现扩展时间和日期选择器的form表单校验，并编写相应的api</p>
        <p class="content">树结构新增一个'lock-select'属性用于锁定树菜单选中</p>
        <p class="content">重构文档更新日志，采用时间轴形式显示</p>
      </b-timeline-item>
      <b-timeline-item color="warning">
        <b-icon name="ios-construct" slot="dot" size="20"></b-icon>
        <p class="version">2.0.4</p>
        <p class="time">2019-8-26</p>
        <p class="content">修复菜单栏下拉后图标的错位问题</p>
      </b-timeline-item>
      <b-timeline-item color="warning">
        <b-icon name="ios-construct" slot="dot" size="20"></b-icon>
        <p class="version">2.0.3</p>
        <p class="time">2019-8-23</p>
        <p class="content">修复tag标签页的背景颜色为透明</p>
        <p class="content">调整文本输入框禁用样式，调整数字输入框的上下箭头显示</p>
        <p class="content">菜单文档和table文档更新api记录</p>
      </b-timeline-item>
      <b-timeline-item color="primary">
        <b-icon name="ios-paper" slot="dot" size="20"></b-icon>
        <p class="version">2.0.2</p>
        <p class="time">2019-7-27</p>
        <p class="content">更新文档api地址</p>
      </b-timeline-item>
      <b-timeline-item color="warning">
        <b-icon name="ios-construct" slot="dot" size="20"></b-icon>
        <p class="version">2.0.1</p>
        <p class="time">2019-7-25</p>
        <p class="content">修复菜单栏下拉框样式</p>
        <p class="content">修改部分文档说明</p>
      </b-timeline-item>
      <b-timeline-item color="primary">
        <b-icon name="ios-leaf" slot="dot" size="20"></b-icon>
        <p class="version">2.0.0 full edition</p>
        <p class="time">2019-7-25</p>
        <p class="content">新增表格组件</p>
        <p class="content">新增菜单组件</p>
        <p class="content">优化部分样式显示</p>
        <p class="content">优化message扩大显示</p>
      </b-timeline-item>
      <b-timeline-item color="primary">
        <b-icon name="ios-leaf" slot="dot" size="20"></b-icon>
        <p class="version">1.5.0</p>
        <p class="time">2019-7-24</p>
        <p class="content">新增滚动容器组件Container</p>
        <p class="content">新增Dropdown下拉菜单</p>
        <p class="content">新增select下拉选择器</p>
        <p class="content">新增page分页组件</p>
        <p class="content">新增Tree树结构菜单</p>
        <p class="content">优化文档、修复部分样式问题</p>
      </b-timeline-item>
      <b-timeline-item color="warning">
        <b-icon name="ios-construct" slot="dot" size="20"></b-icon>
        <p class="version">1.4.6</p>
        <p class="time">2019-7-14</p>
        <p class="content">添加基础form及校验功能</p>
        <p class="content">优化按钮大小</p>
        <p class="content">优化滚动条，增加一直显示和样式修改。</p>
        <p class="content">优化首屏加载，评分组件样式，form-item面包屑等颜色值</p>
      </b-timeline-item>
      <b-timeline-item color="primary">
        <b-icon name="ios-leaf" slot="dot" size="20"></b-icon>
        <p class="version">1.4.3</p>
        <p class="time">2019-5-9</p>
        <p class="content">新增rate评分组件</p>
        <p class="content">新增单选框组件</p>
        <p class="content">新增多选框组件</p>
        <p class="content">新增开关组件</p>
        <p class="content">新增数字输入组件</p>
        <p class="content">新增tooltip提示组件</p>
        <p class="content">优化左侧组件次序，优化打印输出功能</p>
        <p class="content">优化tooltip样式，优化代码和doc结构</p>
      </b-timeline-item>
      <b-timeline-item color="primary">
        <b-icon name="ios-leaf" slot="dot" size="20"></b-icon>
        <p class="version">1.3.8</p>
        <p class="time">2019-4-30</p>
        <p class="content">新增input基础输入框</p>
        <p class="content">新增面包屑</p>
        <p class="content">新增徽标</p>
        <p class="content">新增全局message提示功能</p>
        <p class="content">新增动态模态框</p>
        <p class="content">新增collapse展开伸缩组件</p>
        <p class="content">新增展开伸缩公共样式</p>
      </b-timeline-item>  
      <b-timeline-item color="primary">
        <b-icon name="ios-leaf" slot="dot" size="20"></b-icon>
        <p class="version">1.3.5</p>
        <p class="time">2019-4-26</p>
        <p class="content">新增tag标签</p>
        <p class="content">新增circle进度环组件</p>
        <p class="content">新增alert组件</p>
        <p class="content">新增progressbar组件</p>
        <p class="content">新增loading组件和loadingBar组件</p>
        <p class="content">修改部分样式bug，添加几个图标资源</p>
        <p class="content">编写内置过渡动画的文档</p>
        <p class="content">修复icon-loading加载动画功能</p>
        <p class="content">加入开原协议</p>
        <p class="content">重构图标来源，重新编写引入图标组件，优化返回顶部组件。</p>
      </b-timeline-item>  
      <b-timeline-item color="warning">
        <b-icon name="ios-construct" slot="dot" size="20"></b-icon>
        <p class="version">1.2.3</p>
        <p class="time">2019-4-22</p>
        <p class="content">微调按钮样式</p>
        <p class="content">修复模态框和抽屉的样式前缀</p>
        <p class="content">抽屉组件添加参数说明，按钮样式调整</p>
      </b-timeline-item>  
      <b-timeline-item color="primary">
        <b-icon name="ios-leaf" slot="dot" size="20"></b-icon>
        <p class="version">1.2.0</p>
        <p class="time">2019-4-22</p>
        <p class="content">新增模态框组件</p>
        <p class="content">新增抽屉组件</p>
        <p class="content">重新布局文档样式</p>
      </b-timeline-item>  
      <b-timeline-item color="danger">
        <b-icon name="ios-leaf" slot="dot" size="20"></b-icon>
        <p class="version">1.0.0</p>
        <p class="time">2019-4-12</p>
        <p class="content">项目初始化，配置实例文档生成</p>
        <p class="content">新增一个按钮组件</p>
        <p class="content">新增一个返回组件</p>
        <p class="content">重构一下样式的引用路径问题</p>
        <p class="content">npm发布，添加源码引用</p>
      </b-timeline-item>  
    </b-timeline>
</div>
</template>
```
:::
