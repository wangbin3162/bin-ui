## Icon 图标

图标这里使用了阿里[iconfont](https://www.iconfont.cn/)图标库生成了图标，图标来源于
开源项目 ionicons，结合整理添加了一些其他的图标。


### 使用方法

i 标签可以直接设置样式类名为 `iconfont icon-xxx` 来使用即可。icon组件可以只设置name来实用。

:::demo size和color可以设置字体大小和颜色
```html
  <div class="demo-icon">
    <i class="iconfont icon-logo-dropbox"></i>
    <b-icon name="logo-freebsd-devil" size="20" color="#ff53a5"></b-icon>
    <b-button type="danger" icon="ios-trash" size="mini">删除</b-button>
  </div>
```
:::

### 图标集合

<template>
    <div class="icon-search">
      <input v-model="filter" placeholder="请输入关键词查找图标,如：loading">
    </div>
    <div style="padding: 5px;">共有 <span style="color:#ff53a5;font-size: 20px;">{{ iconList.length }} </span>个icons</div>
    <transition-group name="list-complete" tag="ul" class="icon-list">
      <li v-for="name in iconList" :key="name" class="list-complete-item">
        <span>
          <i :class="['iconfont' , 'icon-'+name]"></i>
          <span class="icon-name">{{ name }}</span>
        </span>
      </li>
    </transition-group>
</template>
<script>
    export default {
      data(){
        return {
          icons: 'loading,logo-dropbox,logo-freebsd-devil,logo-game-controller-a,logo-ionic,logo-github,logo-codepen,logo-chrome,logo-youtube,ios-aperture,ios-arrow-dropdown,ios-arrow-back,ios-archive,ios-arrow-dropleft-circle,ios-arrow-down,ios-apps,ios-arrow-dropdown-circle,ios-arrow-dropleft,ios-arrow-round-back,ios-arrow-dropup,ios-arrow-dropup-circle,ios-arrow-forward,ios-arrow-round-down,ios-arrow-dropright,ios-arrow-round-forward,ios-attach,ios-backspace,ios-basketball,ios-arrow-up,ios-bicycle,ios-battery-dead,ios-baseball,ios-basket,ios-battery-full,ios-body,ios-bookmark,ios-boat,ios-browsers,ios-briefcase,ios-bed,ios-bluetooth,ios-bookmarks,ios-business,ios-bus,ios-arrow-dropright-circle,ios-beer,ios-barcode,ios-car,ios-bonfire,ios-brush,ios-chatboxes,ios-bowtie,ios-cafe,ios-build,ios-call,ios-checkmark,ios-book,ios-bulb,ios-cash,ios-close-circle-outline,ios-cloud-circle,ios-checkbox,ios-checkbox-outline,ios-card,ios-cellular,ios-cloud-upload,ios-bug,ios-code-working,ios-at,ios-color-fill,ios-beaker,ios-cloudy-night,ios-checkmark-circle,ios-color-palette,ios-calculator,ios-calendar,ios-crop,ios-camera,ios-clock,ios-desktop,ios-close,ios-checkmark-circle-outline,ios-color-wand,ios-arrow-round-up,ios-create,ios-contract,ios-cloud-done,ios-contacts,ios-copy,ios-code,ios-cube,ios-contrast,ios-clipboard,ios-cloud,ios-cloud-download,ios-compass,ios-document,ios-battery-charging,ios-cut,ios-download,ios-disc,ios-egg,ios-close-circle,ios-chatbubbles,ios-female,ios-cog,ios-exit,ios-flash,ios-eye,ios-construct,ios-filing,ios-fitness,ios-git-branch,ios-cloud-outline,ios-film,ios-flashlight,ios-expand,ios-glasses,ios-git-merge,ios-funnel,ios-flash-off,ios-heart-empty,ios-git-network,ios-football,ios-globe,ios-headset,ios-contact,ios-cloudy,ios-heart,ios-help-circle,ios-code-download,ios-hammer,ios-done-all,ios-heart-half,ios-easel,ios-eye-off,ios-flame,ios-gift,ios-information,ios-finger-print,ios-help-buoy,ios-color-filter,ios-git-pull-request,ios-grid,ios-flag,ios-jet,ios-heart-dislike,ios-information-circle,ios-key,ios-flask,ios-laptop,ios-folder,ios-hourglass,ios-infinite,ios-images,ios-flower,ios-list,ios-leaf,ios-information-circle-outline,ios-lock,ios-help,ios-help-circle-outline,ios-journal,ios-map,ios-log-in,ios-fastforward,ios-folder-open,ios-medkit,ios-mic,ios-git-commit,ios-keypad,ios-link,ios-mail-open,ios-home,ios-mail,ios-hand,ios-moon,ios-notifications,ios-happy,ios-man,ios-nuclear,ios-locate,ios-medical,ios-mail-unread,ios-megaphone,ios-menu,ios-musical-note,ios-magnet,ios-image,ios-move,ios-pause,ios-pint,ios-ice-cream,ios-paw,ios-open,ios-play,ios-power,ios-person,ios-phone-portrait,ios-log-out,ios-microphone,ios-quote,ios-options,ios-pin,ios-navigate,ios-redo,ios-notifications-outline,ios-planet,ios-reorder,ios-print,ios-qr-scanner,ios-person-add,ios-rocket,ios-paper,ios-podium,ios-save,ios-pricetags,ios-refresh-circle,ios-send,ios-photos,ios-notifications-off,ios-remove,ios-recording,ios-git-compare,ios-medal,ios-radio-button-on,ios-restaurant,ios-remove-circle-outline,ios-radio-button-off,ios-ribbon,ios-return-right,ios-star,ios-resize,ios-stats,ios-share,ios-mic-off,ios-reverse-camera,ios-sad,ios-shuffle,ios-search,ios-skip-backward,ios-share-alt,ios-square-outline,ios-subway,ios-speedometer,ios-thunderstorm,ios-today,ios-snow,ios-time,ios-sunny,ios-refresh,ios-tennisball,ios-sync,ios-thermometer,ios-switch,ios-rainy,ios-trending-down,ios-paper-plane,ios-undo,ios-volume-off,ios-volume-low,ios-train,ios-trophy,ios-thumbs-down,ios-trash,ios-warning,ios-remove-circle,ios-radio,ios-tv,ios-unlock,ios-wine,ios-star-outline,ios-volume-high,ios-add,ios-return-left,ios-add-circle-outline,ios-airplane,ios-wifi,ios-walk,logo-android,ios-rewind,ios-rose,ios-watch,ios-school,ios-musical-notes,ios-alert,ios-outlet,ios-analytics,ios-settings,ios-albums,ios-skip-forward,ios-square,ios-shirt,ios-people,ios-play-circle,ios-star-half,ios-phone-landscape,ios-pie,ios-pizza,ios-pulse,ios-text,ios-repeat,ios-timer,ios-swap,ios-stopwatch,ios-transgender,ios-trending-up,ios-tablet-landscape,ios-videocam,ios-umbrella,ios-volume-mute,ios-thumbs-up,ios-woman,ios-list-box,ios-wallet,ios-more,ios-water,ios-male,ios-add-circle,ios-alarm,ios-american-football,ios-partly-sunny,ios-pricetag,md-arrow-dropleft,md-arrow-dropright-circle,md-arrow-dropleft-circle,md-arrow-dropdown,md-arrow-dropdown-circle,md-arrow-dropright,md-arrow-round-down,md-arrow-round-back,md-arrow-round-up,md-arrow-round-forward,md-arrow-dropup,md-contract,md-copy,md-expand,md-fitness,md-heart,md-heart-empty,md-grid,md-journal,md-link,md-images,md-list,md-planet,md-play,md-shirt,md-star,md-text,md-star-outline,md-trophy,md-search',
          filter:''
        }
      },
      computed:{
          iconList(){
             let list=this.icons.split(',')
             return list.filter(item=>{return item.includes(this.filter)})
          }
      }
    }
</script>
<style>
.list-complete-item {
  transition: all .4s;
  display: inline-block;
  margin-right: 10px;
}
.list-complete-enter, .list-complete-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.list-complete-leave-active {
  position: absolute;
}
</style>

### 获取icon names

打开iconfont下载的demo复制粘贴以下代码到控制台获取所有icon的name集合,注意，样式复制过来是iconfont字体大小默认删除


    console.log('获取所有icon name 并用逗号分隔')
    var list = document.querySelectorAll('.content.font-class .icon_lists .dib .code-name')
    var iconList = []
    for (var i = 0; i < list.length ; i++) {
    iconList.push(list[i].innerHTML.slice(6).trim())// 去除.icon- 只获取name
    }
    console.log(iconList.join(','))

