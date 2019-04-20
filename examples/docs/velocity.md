## Velocity 动画库

[Velocity.js](https://github.com/julianshapiro/velocity/wiki)是一个轻量级的前端js动画库。


### 安装

```
yarn add velocity-animat@beta
```

### Velocity.js功能概览

Velocity.js是一个功能强大的库，它将DOM置于你的指尖！它的动画涵盖：

- CSS动画属性的数值，包括颜色
- Transform（变换）
- SVG属性
- 滚动事件，相对于页面或页面中的容器元素
- 淡入淡出动画

一般来说，`Velocity`一次可以操控一个数值属性值的动画。 
例如，如果要沿X和Y坐标移动元素，则不能使用`translate['10px', '15px']`。 相反，应该将`translate`属性与其相应的轴结合在一起，如：translateX：'10px'，translateY：'15px'。 
Velocity有一个功能称为`forcefeeding`，它可以让你同时指定两个值。 将在本文后面介绍这个功能。

### 配置项

Velocity的配置项在制作动画时给予了相当的灵活性。

以下是本文的demo中将会看到的配置项：

- Durantion：每个动画持续的时间，测量单位为毫秒。
- Easing：Velocity支持大多数的easing类型。ease，ease-in，ease-out, ease-in-out，贝塞尔曲线，甚至是很酷的物理弹簧效果。 
- Loop：动画应该重复的次数。如果将此选项设置为true，它将无限期运行。
- Delay：动画开始之前的延迟时长。

全部的配置项可以在[Velocity](http://velocityjs.org/#duration)的官网查看

### 语法

如果你使用jQuery，Velocity.js可以轻松上手。 事实上，Velocity与jQuery具有相同的API：
下载Velocity，引入你的项目，然后将$.animate()替换成$.velocity()

但是，你也可以不用jQuery来使用Velocity，并且本文中的demo也将不使用jQuery。语法与使用jQuery的方式有所不同：

```
Velocity(element, {property: value}, {option: optionValue});
```

要在同一个元素上链接另一个动画，只需在之前的velocity后再添加一个：

```
Velocity(element1, {property: value}, {option: optionValue});
Velocity(element1, {property: value}, {option: optionValue});
```

要将动画同时应用于多个元素，只需将所有元素存储到变量中，并将Velocity应用于该变量，无需通过循环实现：

```
const elements = document.querySelectorAll('<div>');
Velocity(elements, {property: value}, {option: optionValue});
```

对于选项值单位，你可以使用px，％，rem，em，vw/vh和deg。如果不添加单位，Velocity将提供适当的单位，通常为px。


### 官网的例子
:::demo 
```html
<template>
    <div>
      <button @click="show = !show">
        Toggle
      </button>
      <transition
        v-on:before-enter="beforeEnter"
        v-on:enter="enter"
        v-on:leave="leave"
        v-bind:css="false"
      >
        <p v-if="show">
          Demo
        </p>
      </transition>
    </div>
</template>
<script>
export default {
    data(){
      return{
        show: false
      }
    },
    methods: {
      beforeEnter: function (el) {
        el.style.opacity = 0
        el.style.transformOrigin = 'left'
      },
      enter: function (el, done) {
        Velocity(el, { opacity: 1, fontSize: '1.4em' }, { duration: 300 })
        Velocity(el, { fontSize: '1em' }, { complete: done })
      },
      leave: function (el, done) {
        Velocity(el, { translateX: '15px', rotateZ: '50deg' }, { duration: 600 })
        Velocity(el, { rotateZ: '100deg' }, { loop: 2 })
        Velocity(el, {
          rotateZ: '45deg',
          translateY: '30px',
          translateX: '30px',
          opacity: 0
        }, { complete: done })
      }
    }
}
</script>
```
:::
