## 内置过渡动画

<template>
    <div class="global-anchor">
      <b-anchor :scroll-offset="100">
        <b-anchor-link href="#dan-ru-dan-chu" title="淡入淡出"></b-anchor-link>
        <b-anchor-link href="#suo-fang" title="缩放"></b-anchor-link>
        <b-anchor-link href="#yi-dong-jian-bian" title="移动渐变"></b-anchor-link>
        <b-anchor-link href="#zhan-kai-zhe-die" title="展开折叠"></b-anchor-link>
      </b-anchor>
    </div>
</template>

### 淡入淡出

提供 2种 淡入淡出效果`fade-in-linear` 和 `fade-in`

::: demo 
```html
<template>
  <div class="demo-transition">
    <b-button @click="show1= !show1" size="medium" v-waves>查看效果</b-button>
    <div style="display: flex; margin-top: 20px; height: 100px;">
      <transition name="fade-in-linear">
        <div v-show="show1" class="transition-box">fade-in-linear</div>
      </transition>
      <transition name="fade-in">
        <div v-show="show1" class="transition-box">fade-in</div>
      </transition>
    </div>
  </div>
</template>

<script>
    export default {
        data() {
          return {
            show1: true
          }
        }
      }
</script>
```
:::

### 缩放

提供 4种 缩放效果 `zoom-in-center`，`zoom-in-top` ，`zoom-in` 和 `zoom-in-bottom`

::: demo
```html
<template>
  <div class="demo-transition">
    <b-button @click="show2= !show2" size="medium" v-waves>查看效果</b-button>
    <div style="display: flex; margin-top: 20px; height: 100px;">
        <transition name="zoom-in-center">
          <div v-show="show2" class="transition-box">zoom-in-center</div>
        </transition>
        <transition name="zoom-in-top">
          <div v-show="show2" class="transition-box">zoom-in-top</div>
        </transition>
        <transition name="zoom-in">
          <div v-show="show2" class="transition-box">zoom-in</div>
        </transition>
        <transition name="zoom-in-bottom">
          <div v-show="show2" class="transition-box">zoom-in-bottom</div>
        </transition>
    </div>
  </div>
</template>
<script>
    export default {
        data() {
          return {
            show2: true
          }
        }
      }
</script>
```
:::

### 移动渐变

提供 3种 特殊的移动渐变 `fade-transverse` ,`fade-scale` ,`fade-scale-move`

::: demo 
```html
<template>
 <div class="demo-transition">
    <b-button @click="show3= !show3" size="medium" v-waves>查看效果</b-button>
    <div style="display: flex; margin-top: 20px; height: 100px;">
        <transition name="fade-transverse">
          <div v-show="show3" class="transition-box">fade-transverse</div>
        </transition>
        <transition name="fade-scale">
          <div v-show="show3" class="transition-box">fade-scale</div>
        </transition>
        <transition name="fade-scale-move">
          <div v-show="show3" class="transition-box">fade-scale-move</div>
        </transition>
    </div>
   </div>
</template>
<script>
    export default {
        data() {
          return {
            show3: true
          }
        }
      }
</script>
```
:::

### 展开折叠

::: demo
```html
<template>
 <div class="demo-transition">
    <b-button @click="show4= !show4" size="medium" v-waves>查看效果</b-button>
    <div style="margin-top: 20px; height: 200px;">
        <collapse-transition>
          <div v-show="show4">
            <div class="transition-box">collapse-transition</div>
            <div class="transition-box">collapse-transition</div>
          </div>
        </collapse-transition>
      </div>
   </div>
</template>
<script>
    export default {
        data() {
          return {
            show4: true
          }
        }
      }
</script>
```
:::

