## Icon 图标

图标这里使用了阿里[iconfont](https://www.iconfont.cn/)图标库，收集了常用的图标。使用简便易于扩展。


### 使用方法

直接通过设置类名为 `iconfont icon-home` 来使用即可。例如：

:::demo
```html
  <div class="demo-icon">
    <i class="iconfont icon-home"></i>
    <i class="iconfont icon-radarchart"></i>
    <i class="iconfont icon-search"></i>
    <b-button type="danger" icon="icon-delete">删除</b-button>
  </div>
```
:::

### 图标集合

<template>
    <ul class="icon-list">
      <li v-for="name in [
        'dashboard','edit-square','export','save','Import','close-square',
        'layout','areachart','linechart','barchart','pointmap','bulb',
        'bell','skin','home','bank','filter','funnelplot',
        'unlock','lock','folder','folder-open','select','cloud-upload',
        'cloud-download','radarchart','qrcode','image','table','idcard',
        'heart','block','error','star','key','indent',
        'outdent','IE','CodeSandbox','chrome','codepen','caret-down',
        'caret-up','caret-right','caret-left','search','insertrowabove','address',
        'bluetoothoff','bluetoothon','camera','course','bluetooth_link','addto',
        'child','audio','delete','DND_mode','edit','child1',
        'settings','bluray','cancel','down','brightness','musiclist',
        'home1','favoriteslist','loop','nextsong','bottom','guarantee',
        'agreement','prevent','privacy','play','brightness1','privac_open',
        'conversation','information','answer','face','protect','close',
        'nosignal','refuse','selection','previous','Privacy','increase',
        'music','save1','singlecycle','prompt','Incoming_call','layered',
        'collection','soundsize','upward','vision','top','history',
        'shopping','turnvoice','locking','restore','night','safety',
        'phone','relationship','next','timeout','video','refresh',
        'visible','telephone','th_internet','callout','withdraw','call',
        'video1','hangup','mute','eye_protection','distance','voice',
        'nickname','return','payment','privacy_closed','movie','wifi',
        'random','problem'
      ]" :key="name">
        <span>
          <i :class="'iconfont icon-' + name"></i>
          <span class="icon-name">{{'icon-' + name}}</span>
        </span>
      </li>
    </ul>
</template>

