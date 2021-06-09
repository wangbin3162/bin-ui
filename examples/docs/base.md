## 基础

### 基础api

暴露了以下几个api用于实现常用功能，log print在专门模块中说明

```javascript
    Vue.prototype.$log = log
    Vue.prototype.$util = util
    Vue.prototype.$open = util.open
    Vue.prototype.$copy = util.copy
    Vue.prototype.$scrollTop = scrollTop
    Vue.prototype.$print = log.print
    Vue.prototype.$resize = { addResizeListener, removeResizeListener }
```

util方法函数

| 方法名     | 说明    | 参数      |
|---------- |-------- |---------- |
| $title | 更新标题   | title  |
| $open | 打开新页面   | url,target  |
| $copy | 复制内容至剪切板 ,返回一个promise用于判断是否复制成功 | content  |
| $parseTime | 时间格式化   | time,cFormat('{y}-{m}-{d} {h}:{i}:{s}'),weekArray：长度为7的显示数组 |
| $rangeTime | 获取日期区间，如如近一周，近三个月，后一个月等   | days, mode='{y}-{m}-{d}' days为负往前追加，为正时表示之后的天数 |
| $throttle | 节流函数（时间间隔内执行多次）   | func, wait , immediate   |
| $debounce | 防抖函数（只执行一次）   | func, wait  |
| $isEqual | 判定相等，可判定任何类型，数组和对象都可以判定是否全部相等  | a, b  |
| $getRandomInt | 在某个区间随机一个整数   | min, max  |
| $typeOf | 精准判断类型   | any  |
| $deepCopy | 深拷贝函数   | obj/arr  |

### 测试日期函数

::: demo
```html
<template>
<div>
    <div flex="box:mean" class="mb-15">
      <div><b-tag type="primary" size="mini">Date</b-tag>{{ show1 }}</div>
      <div><b-tag type="primary" size="mini">时间戳</b-tag>{{ show2 }}</div>
      <div><b-tag type="primary" size="mini">日期字符</b-tag>{{ show3 }}</div>
    </div>
    <div flex="box:mean" class="mb-15">
      <div><b-tag type="primary" size="mini">format</b-tag>{{ show4 }}</div>
      <div><b-tag type="primary" size="mini">周数组</b-tag>{{ show5 }}</div>
      <div><b-tag type="primary" size="mini">自定义</b-tag>{{ show6 }}</div>
    </div>
    <div flex="box:mean">
      <div><b-tag type="primary" size="mini">一周前</b-tag>{{ show7.startDateStr +' ~ '+ show7.endDateStr }}</div>
      <div><b-tag type="primary" size="mini">三个月前</b-tag>{{ show8.startDateStr +' ~ '+ show8.endDateStr }}</div>
      <div><b-tag type="primary" size="mini">10天后</b-tag>{{ show9.endDateStr }}</div>
    </div>
</div>
</template>
<script>
export default {
  data(){
    return{
      show1:this.$util.parseTime(new Date()),
      show2:this.$util.parseTime(1593312574636),
      show3:this.$util.parseTime('2020-06-28'),
      show4:this.$util.parseTime(new Date(),'{y}年{m}月{d}日 {h}:{i}:{s}'),
      show5:this.$util.parseTime('2020-06-28','{y}-{m}-{d} {a}',['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']),
      show6:this.$util.parseTime(new Date(),'{y}-{m} 周{a}'),
      show7:this.$util.rangeTime(-7,'{y}-{m}-{d} 周{a}'),
      show8:this.$util.rangeTime(-90,'{y}-{m}-{d}'),
      show9:this.$util.rangeTime(10,'{y}-{m}-{d}')
    } 
  }
}
</script>
```
:::


扩展函数

| 方法名     | 说明    | 参数      |
|---------- |-------- |---------- |
| $scrollTop | 滚动函数   | el, from = 0, to, duration = 500, endCallback  |
| $resize | 大小重绘函数,用于监听div   | el, fun  |

### 无数据组件

目前表格和tree型结构使用，也可以自己使用

::: demo
```html
<template>
<div style="width: 224px;">
  <b-empty>当前无数据</b-empty>
</div>
</template>
```
:::

### flex.css使用

本项目已集成normalize.css初始化样式，[flex.css](https://github.com/lzxb/flex.css)基本样式和自定义基础样式库common.css

`flex.css` 扩展了换行属性`wrap`

```css
[flex~="wrap:wrap"] {
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}
```

::: demo
```html
<template>
   <!--
     将dist目录下的css文件引入到你的页面中，根据你的需要引入
     flex.css 使用flex属性匹配
     data-flex.css 使用data-flex属性匹配（React使用）
     如果使用了webpack打包，npm安装后，并且配置了ES6编译器的话，
     flex 属性匹配可以直接使用：
       import 'flex.css';
     data-flex 属性匹配可以直接使用(react使用)
       import 'flex.css/dist/data-flex.css';
    -->
   <!-- flex属性匹配，简单的子元素居中例子： -->
     <div flex="main:center cross:center" style="height: 80px; border:1px solid #1089ff">
       <div style="background: #fff;padding: 15px;">看看我是不是居中的</div>
     </div>
</template>
```
:::

### flex属性大全

```
dir：主轴方向
    top：从上到下
    right：从右到左
    bottom：从下到上
    left：从左到右（默认）
```
```
main：主轴对齐方式
    right：从右到左
    left：从左到右（默认）
    justify：两端对齐
    center：居中对齐
```
```
cross：交叉轴对齐方式
    top：从上到下（默认）
    bottom：从上到下
    baseline：基线对齐
    center：居中对齐
    stretch：高度并排铺满
```
```
box：子元素设置
    mean：子元素平分空间
    first：第一个子元素不要多余空间，其他子元素平分多余空间
    last：最后一个子元素不要多余空间，其他子元素平分多余空间
    justify：两端第一个元素不要多余空间，其他子元素平分多余空间
```

### flex-box属性说明

```
取值范围(0-10)，单独设置子元素多余空间的如何分配，设置为0，则子元素不占用多余的多余空间
多余空间分配 = 当前flex-box值/子元素的flex-box值相加之和
```

### common.css

基础的css样式主要有内外边距，文字大小，链接等。具体如下


| 外边距 | 说明 | 内边距 | 说明 | 
|----------|--------|----------|--------|
| m0      | 外边距0  | p0      | 内边距0  | 
| m5      | 外边距5  | p5      | 内边距5  | 
| m10     | 外边距10 | p10     | 内边距10 | 
| m15     | 外边距15 | p15     | 内边距15 | 
| m20     | 外边距20 | p20     | 内边距20 |
| mt-5      | 上外边距5  | pt-5      | 上内边距5  | 
| mt-10     | 上外边距10 | pt-10     | 上内边距10 | 
| mt-15     | 上外边距15 | pt-15     | 上内边距15 | 
| mt-20     | 上外边距20 | pt-20     | 上内边距20 | 
| mr-5      | 右外边距5  | pr-5      | 右内边距5  | 
| mr-10     | 右外边距10 | pr-10     | 右内边距10 | 
| mr-15     | 右外边距15 | pr-15     | 右内边距15 | 
| mr-20     | 右外边距20 | pr-20     | 右内边距20 | 
| mb-5      | 下外边距5  | pb-5      | 下内边距5  | 
| mb-10     | 下外边距10 | pb-10     | 下内边距10 | 
| mb-15     | 下外边距15 | pb-15     | 下内边距15 | 
| mb-20     | 下外边距20 | pb-20     | 下内边距20 | 
| ml-5      | 左外边距5  | pl-5      | 左内边距5  | 
| ml-10     | 左外边距10 | pl-10     | 左内边距10 | 
| ml-15     | 左外边距15 | pl-15     | 左内边距15 | 
| ml-20     | 左外边距20 | pl-20     | 左内边距20 | 

还有文字等其他常用样式

| 类名| 说明 | 
|----------|--------|
| f-s-12   | 字体大小12  | 
| f-s-14   | 字体大小14  | 
| f-s-16   | 字体大小16  | 
| f-s-18   | 字体大小18  | 
| f-s-20   | 字体大小20  | 
| f-s-22   | 字体大小22  | 
| f-s-20   | 字体大小20  | 
| f-color-blue  | 文字颜色#1089ff;  | 
| f-color-red  | 文字颜色#ff4d4f;  | 
| f-color-333  | 文字颜色#333;  | 
| f-color-666  | 文字颜色#666;  | 
| f-color-999  | 文字颜色#999;  | 
| t-center  | 文字居中  | 
| t-right  | 文字居右 | 
| t-right  | 文字居右 | 
| t-ellipsis | 文字超出... | 
| link | 蓝色链接样式 | 
| link-red | 红色链接样式 | 
