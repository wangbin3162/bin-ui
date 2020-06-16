## 更新日志

3.0版本来啦，现经过多个版本迭代，组件库已更新约50个组件，3.0版本前经过多个小版本测试，现已基本实现大部分组件样式重绘，规范参考阿里设计规范。

版本更新日志

<template>
<div class="doc-update">
    <b-timeline>
      <b-timeline-item color="warning">
        <b-icon name="ios-construct" slot="dot" size="20"></b-icon>
        <p class="version">3.3.3</p>
        <p class="time">2020-06-16</p>
        <p class="content">编写Draggable基础模块api，新增sortable.js依赖，新增文档说明和示例</p>
        <p class="content">表格拖拽排序，采用sortablejs实现，优化代码和效果</p>
        <p class="content">优化tag标签，tree树形结构样式，多选下拉样式</p>
      </b-timeline-item>
      <b-timeline-item color="warning">
        <b-icon name="ios-construct" slot="dot" size="20"></b-icon>
        <p class="version">3.3.2</p>
        <p class="time">2020-06-09</p>
        <p class="content">更新table组件，优化默认选中操作。</p>
      </b-timeline-item>
      <b-timeline-item color="warning">
        <b-icon name="ios-construct" slot="dot" size="20"></b-icon>
        <p class="version">3.3.1</p>
        <p class="time">2020-06-06</p>
        <p class="content">修改菜单组件，新增横向滚动扩展</p>
        <p class="content">新增折叠容器组件，可单独设置独立的容器，可以配置折叠模式，方便分组</p>
        <p class="content">修改部分样式代码</p>
      </b-timeline-item>
      <b-timeline-item color="success">
        <b-icon name="ios-trophy" slot="dot" size="20"></b-icon>
        <p class="version">3.3.0</p>
        <p class="time">2020-06-01</p>
        <p class="content">修改主色调，更新默认色板值</p>
        <p class="content">按钮组件，默认去除wave水波纹效果以提升性能，默认添加shadow效果为点击效果</p>
        <p class="content">数字输入框，修改判定条件，默认blur时进行格式校验和精度补齐，可设置实时改变</p>
        <p class="content">添加颜色文档，包含基础色号和中性色号值</p>
        <p class="content">扩展表格组件，增加合并行列函数props，可传入合并函数来进行合并行列</p>
      </b-timeline-item>
      <b-timeline-item color="warning">
        <b-icon name="ios-construct" slot="dot" size="20"></b-icon>
        <p class="version">3.2.0</p>
        <p class="time">2020-04-20</p>
        <p class="content">修改下拉菜单，禁用选项点击事件冒泡</p>
        <p class="content">修改按钮禁用样式，多彩按钮可禁用</p>
        <p class="content">扩充按钮设置图标模式，并可扩展图标样式</p>
      </b-timeline-item>
      <b-timeline-item color="warning">
        <b-icon name="ios-construct" slot="dot" size="20"></b-icon>
        <p class="version">3.1.9</p>
        <p class="time">2020-04-09</p>
        <p class="content">修改tag组件行高，修改notice文字格式</p>
        <p class="content">修改数值输入框form错误样式</p>
        <p class="content">修改form-item组件样式错位问题</p>
        <p class="content">修改表格单选选中样式，行改变事件参数传入选中行数</p>
        <p class="content">提供modal窗动画完成事件回调</p>
        <p class="content">修复下拉菜单隐藏销毁默认位置的问题</p>
        <p class="content">修复modal框超出屏幕返回没有滚动问题</p>
        <p class="content">去除多余包引用，修改文档，增加生态连接bin-charts插件导航</p>
      </b-timeline-item>
      <b-timeline-item color="success">
        <b-icon name="ios-trophy" slot="dot" size="20"></b-icon>
        <p class="version">3.1.0</p>
        <p class="time">2020-03-21</p>
        <p class="content">新增分割面板split组件，新增slider滑块组件</p>
        <p class="content">更新生态连接，新增code-editor插件</p>
        <p class="content">popover取消确定字间距删除</p>
        <p class="content">tooltip文档主题修复</p>
        <p class="content">通知，popover，tooltip基础层级设置为2000+</p>
      </b-timeline-item>
      <b-timeline-item color="warning">
        <b-icon name="ios-construct" slot="dot" size="20"></b-icon>
        <p class="version">3.0.1</p>
        <p class="time">2020-03-16</p>
        <p class="content">修复modal窗确认点击事件不响应问题</p>
        <p class="content">优化表单标题显示高度，优化按钮间隔</p>
      </b-timeline-item>
      <b-timeline-item color="success">
        <b-icon name="ios-trophy" slot="dot" size="20"></b-icon>
        <p class="version">3.0.0</p>
        <p class="time">2020-03-14</p>
        <p class="content">调整全局主色调颜色，基础字号统一为14px，圆角值默认设置为2px</p>
        <p class="content">表单各类组件四个标准高度，40px，32px，28px，24px</p>
        <p class="content">优化各组件样式引用，支持主题定制配色</p>
        <p class="content">扩展popover组件，扩展notice通知组件</p>
        <p class="content">按钮扩展多彩文字设置</p>
        <p class="content">去除normalize引用，使用reset重置样式</p>
        <p class="content">级联选择器重命名为cascader</p>
        <p class="content">各个组件下拉框组件选中默认为主色混合白色85%</p>
        <p class="content">优化各个组件</p>
      </b-timeline-item>
      <b-timeline-item color="primary">
        <b-icon name="ios-leaf" slot="dot" size="20"></b-icon>
        <p class="version">2.7.14</p>
        <p class="time">2020-03-10</p>
        <p class="content">优化图标,button文字大小,修复模态窗和部分样式问题</p>
        <p class="content">优化table和tree树形组件无数据显示状态</p>
        <p class="content">修复table边框border的错位bug</p>
        <p class="content">扩展message提示显示zIndex可设置</p>
        <p class="content">固定图钉优化滚动监听</p>
        <p class="content">datePicker新增mini大小</p>
        <p class="content">优化table可以选择复制,优化tabs页签背景色</p>
        <p class="content">借助resize组件,使table模块默认跟随父级元素大小改变而改变,保证宽度统一</p>
      </b-timeline-item>
      <b-timeline-item color="primary">
        <b-icon name="ios-leaf" slot="dot" size="20"></b-icon>
        <p class="version">2.7.7</p>
        <p class="time">2020-02-22</p>
        <p class="content">修改菜单组件高度</p>
        <p class="content">修改返回顶部计算值</p>
        <p class="content">修改page选择框大小</p>
        <p class="content">修改按钮文字样式</p>
      </b-timeline-item>
      <b-timeline-item color="success">
        <b-icon name="ios-trophy" slot="dot" size="20"></b-icon>
        <p class="version">2.7.4</p>
        <p class="time">2020-02-14</p>
        <p class="content">更新打包资源,更换按需引入文档</p>
        <p class="content">增加栅格组件</p>
        <p class="content">增加日历组件</p>
        <p class="content">优化按钮样式</p>
        <p class="content">优化文本域输入文字大小，优化datepicker清空功能。</p>
      </b-timeline-item>
      <b-timeline-item color="primary">
        <b-icon name="ios-leaf" slot="dot" size="20"></b-icon>
        <p class="version">2.7.2</p>
        <p class="time">2020-02-13</p>
        <p class="content">修改模态窗弹窗样式</p>
        <p class="content">修改表格滚动自适应</p>
      </b-timeline-item>
      <b-timeline-item color="primary">
        <b-icon name="ios-leaf" slot="dot" size="20"></b-icon>
        <p class="version">2.7.1</p>
        <p class="time">2020-02-12</p>
        <p class="content">修改文档样式，左侧导航栏更紧凑</p>
        <p class="content">模态窗和抽屉遮罩优化，抽屉层级配置</p>
        <p class="content">表单控件统一高度，统一size为四个大小</p>
        <p class="content">修复部分样式错位问题</p>
      </b-timeline-item>
      <b-timeline-item color="primary">
        <b-icon name="ios-leaf" slot="dot" size="20"></b-icon>
        <p class="version">2.7.0</p>
        <p class="time">2020-02-12</p>
        <p class="content">修改文档布局</p>
        <p class="content">修改滚动锚点，默认使用原生滚动，不优先使用scrollbar</p>
        <p class="content">去除container容器组件，属于业务的布局需自行实现</p>
        <p class="content">重构了抽屉组件，修复message大小</p>
        <p class="content">修改form，modal弹窗，默认弹窗后更新body滚动条</p>
      </b-timeline-item>
      <b-timeline-item color="primary">
        <b-icon name="ios-leaf" slot="dot" size="20"></b-icon>
        <p class="version">2.6.6</p>
        <p class="time">2020-01-19</p>
        <p class="content">优化打包路径，增加按需加载模块</p>
        <p class="content">优化按钮组按钮间隔</p>
      </b-timeline-item>
      <b-timeline-item color="warning">
        <b-icon name="ios-construct" slot="dot" size="20"></b-icon>
        <p class="version">2.6.4</p>
        <p class="time">2020-01-13</p>
        <p class="content">给scrollbar添加window(resize)事件用于计算bar的位置和大小</p>
        <p class="content">统一transfer-dom增加解除绑定事件，添加至body中的dom元素会在解绑时remove</p>
        <p class="content">修复tooltip和modal 不采用transfer模式，默认在显示时再去添加至body，并做优化操作，已移动至body中的元素不做重复移动</p>
        <p class="content">picker,select,dropdown等组件默认修改transfer为appendToBody属性，方便理解</p>
        <p class="content">修复部分样式bug</p>
      </b-timeline-item>
      <b-timeline-item color="primary">
        <b-icon name="ios-leaf" slot="dot" size="20"></b-icon>
        <p class="version">2.6.2</p>
        <p class="time">2020-01-9</p>
        <p class="content">优化tabs标签页，修复部分样式</p>
        <p class="content">优化标签页滚动效果，窗口变化时同时计算容器宽度</p>
      </b-timeline-item>
      <b-timeline-item color="primary">
        <b-icon name="ios-leaf" slot="dot" size="20"></b-icon>
        <p class="version">2.6.1</p>
        <p class="time">2020-01-8</p>
        <p class="content">新增tabs标签页组件</p>
        <p class="content">优化util防抖函数，去除部分log日志</p>
      </b-timeline-item>
      <b-timeline-item color="success">
        <b-icon name="ios-trophy" slot="dot" size="20"></b-icon>
        <p class="version">2.5.0</p>
        <p class="time">2020-01-06</p>
        <p class="content">优化switch显示样式，使之更加饱满符合移动端开关样式，增加confirm切换前确认操作，确认后才调用真正切换</p>
        <p class="content">优化下拉框组件选中样式</p>
        <p class="content">优化按钮显示状态和样式，增加透明按钮功能</p>
        <p class="content">去除省略号...指令，增加点击外部指令</p>
        <p class="content">增加基础样式类名</p>
        <p class="content">优化util中的防抖函数，优化返回顶部，图钉和锚点的滚动计算频率</p>
        <p class="content">模态窗和抽屉窗默认不添加至body中去</p>
        <p class="content">模态框优化，默认不预插入body模式，appendToBody时默认也只有在开启时将元素插入至body下面，优化显示</p>
        <p class="content">优化表格样式，tooltip默认不开启控件模式，优化表格展开key值，编写table可展开文档</p>
        <p class="content">menu菜单可以设置展开所有，文档左侧导航栏使用menu菜单重写，滚动优化</p>
        <p class="content">更新字体库，增加几种常用loading，删除冷门图标</p>
      </b-timeline-item>
      <b-timeline-item color="primary">
        <b-icon name="ios-leaf" slot="dot" size="20"></b-icon>
        <p class="version">2.3.8</p>
        <p class="time">2019-12-10</p>
        <p class="content">小版本更新，更新文档连接地址</p>
      </b-timeline-item>
      <b-timeline-item color="success">
        <b-icon name="ios-trophy" slot="dot" size="20"></b-icon>
        <p class="version">2.3.5</p>
        <p class="time">2019-11-22</p>
        <p class="content">新增ColorPicker颜色选择组件</p>
        <p class="content">新增一个轮播组件</p>
        <p class="content">新增图钉固定组件</p>
        <p class="content">新增锚点导航组件</p>
        <p class="content">新增级联选择框组件</p>
        <p class="content">更新级联选择表单验证示例</p>
        <p class="content">优化输入框清除图标的垂直居中显示</p>
        <p class="content">文档新增查询组件搜索下拉框，以便于实现快速搜索组件</p>
        <p class="content">优化级联选择器缝隙问题</p>
        <p class="content">优化选择框组件样式</p>
        <p class="content">返回顶部滚动组件，支持普通div盒子</p>
        <p class="content">重构项目构建工具，重新打包整理文档</p>
      </b-timeline-item>
      <b-timeline-item color="warning">
        <b-icon name="ios-construct" slot="dot" size="20"></b-icon>
        <p class="version">2.1 ~ 2.0</p>
        <p class="time">2019-8-29 ~ 2019-11-22</p>
        <p class="content">小版本迭代，修复部分bug等</p>
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
        <p class="version">1.0 ~ 2.0</p>
        <p class="time">2019-4-12 ~ 2019-8-28</p>
        <p class="content">小版本迭代，基础打包模块修改，文档地址修改等</p>
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
