## Icon 图标

<template>
    <div class="global-anchor">
      <b-anchor :scroll-offset="100">
        <b-anchor-link href="#shi-yong-fang-fa" title="使用方法"></b-anchor-link>
        <b-anchor-link href="#tu-biao-ji-he" title="图标集合"></b-anchor-link>
        <b-anchor-link href="#huo-quicon-names" title="获取icon names"></b-anchor-link>
      </b-anchor>
    </div>
</template>

图标这里使用了阿里[iconfont](https://www.iconfont.cn/)图标库生成了图标，图标来源于
开源项目 ionicons，结合整理添加了一些其他的图标。


### 使用方法

i 标签可以直接设置样式类名为 `iconfont icon-xxx` 来使用即可。icon组件可以只设置name来实用。 设置`icon-is-rotating`可以开启旋转

:::demo size和color可以设置字体大小和颜色
```html
  <div class="demo-icon">
    <i class="iconfont icon-logo-dropbox"></i>
    <b-icon name="logo-freebsd-devil" size="20" color="#ff53a5"></b-icon>
    <b-button type="danger" icon="ios-trash" size="mini">删除</b-button>
    <b-icon name="loading4" class="icon-is-rotating"></b-icon>
  </div>
```
:::

### 图标集合

<template>
    <ul class="icon-list">
      <li v-for="name in $icon" :key="name" class="list-complete-item">
        <span>
          <i :class="['iconfont' , 'icon-'+name]"></i>
          <span class="icon-name">{{ name }}</span>
        </span>
      </li>
    </ul>
</template>

### 获取icon names

打开iconfont下载的demo复制粘贴以下代码到控制台获取所有icon的name集合,注意，样式复制过来是iconfont字体大小默认删除

    console.log('获取所有icon name 并用逗号分隔')
    var list = document.querySelectorAll('.content.font-class .icon_lists .dib .code-name')
    var iconList = []
    for (var i = 0; i < list.length ; i++) {
    iconList.push(list[i].innerHTML.slice(6).trim())// 去除.icon- 只获取name
    }
    console.log(iconList.join(','))

