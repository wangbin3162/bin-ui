## Button 按钮

常用的操作按钮。

### 基础用法

默认按钮，可设置`dashed`虚线和`background`拟物按钮

::: demo

```html

<template>
  <div class="demo-button" flex="cross:center">
    <b-button>Default</b-button>
    <b-button dashed>Dashed</b-button>
    <b-button background>Background</b-button>
  </div>
</template>
```

:::

### 不同状态

使用`type`可以设置不同状态的按钮样式

::: demo

```html

<template>
  <div class="demo-button">
    <b-button type="primary">Primary</b-button>
    <b-button type="success">Success</b-button>
    <b-button type="info">Info</b-button>
    <b-button type="warning">Warning</b-button>
    <b-button type="danger">Danger</b-button>
  </div>
</template>
```

:::

### 不同的按钮效果

可以另外给按钮设置不同的按钮效果，如`plain`简约按钮，`round`圆角按钮，`dashed`虚线按钮和`transparent`透明按钮四种不同种类的按钮

::: demo

```html

<template>
  <b-divider align="left">[plain]简约按钮</b-divider>
  <div class="demo-button">
    <b-button type="primary" plain>Primary</b-button>
    <b-button type="success" plain>Success</b-button>
    <b-button type="info" plain>Info</b-button>
    <b-button type="warning" plain>Warning</b-button>
    <b-button type="danger" plain>Danger</b-button>
  </div>
  <b-divider align="left">[round]圆角按钮</b-divider>
  <div class="demo-button">
    <b-button type="primary" round>Primary</b-button>
    <b-button type="success" round>Success</b-button>
    <b-button type="info" round>Info</b-button>
    <b-button type="warning" round>Warning</b-button>
    <b-button type="danger" round>Danger</b-button>
  </div>
  <b-divider align="left">[round]圆角按钮</b-divider>
  <div class="demo-button">
    <b-button type="primary" dashed>Primary</b-button>
    <b-button type="success" dashed>Success</b-button>
    <b-button type="info" dashed>Info</b-button>
    <b-button type="warning" dashed>Warning</b-button>
    <b-button type="danger" dashed>Danger</b-button>
  </div>
  <b-divider align="left">[transparent]透明按钮</b-divider>
  <div class="demo-button" style="background: #cad4d4;padding: 10px 6px;">
    <b-button type="primary" transparent size="small">Primary</b-button>
    <b-button type="success" transparent size="small">Success</b-button>
    <b-button type="info" transparent size="small">Info</b-button>
    <b-button type="warning" transparent size="small">Warning</b-button>
    <b-button type="danger" transparent size="small">Danger</b-button>
  </div>
</template>
```

:::

### 带图标的按钮

使用`icon`给按钮配置图标

::: demo

```html

<template>
  <div class="demo-button">
    <b-button icon="ios-search">search</b-button>
    <b-button icon="ios-add-circle-outline">create</b-button>
    <b-button icon="ios-checkmark-circle-outline" type="primary">check</b-button>
    <b-button icon="ios-close-circle" type="danger">delete</b-button>
  </div>
</template>
```

:::

### 禁用按钮

你可以使用`disabled`属性来定义按钮是否可用，它接受一个`Boolean`值。

::: demo

```html

<template>
  <div class="demo-button" flex="cross:center">
    <b-button disabled>Default</b-button>
    <b-button dashed disabled>Dashed</b-button>
    <b-button background disabled>Background</b-button>
  </div>
  <div class="demo-button">
    <b-button type="primary" disabled>Primary</b-button>
    <b-button type="success" disabled>Success</b-button>
    <b-button type="info" disabled>Info</b-button>
    <b-button type="warning" disabled>Warning</b-button>
    <b-button type="danger" disabled>Danger</b-button>
  </div>
  <div class="demo-button">
    <b-button type="primary" plain disabled>Primary</b-button>
    <b-button type="success" plain disabled>Success</b-button>
    <b-button type="info" plain disabled>Info</b-button>
    <b-button type="warning" plain disabled>Warning</b-button>
    <b-button type="danger" plain disabled>Danger</b-button>
  </div>
  <div class="demo-button">
    <b-button type="primary" round disabled>Primary</b-button>
    <b-button type="success" round disabled>Success</b-button>
    <b-button type="info" round disabled>Info</b-button>
    <b-button type="warning" round disabled>Warning</b-button>
    <b-button type="danger" round disabled>Danger</b-button>
  </div>
  <div class="demo-button">
    <b-button type="primary" dashed disabled>Primary</b-button>
    <b-button type="success" dashed disabled>Success</b-button>
    <b-button type="info" dashed disabled>Info</b-button>
    <b-button type="warning" dashed disabled>Warning</b-button>
    <b-button type="danger" dashed disabled>Danger</b-button>
  </div>
  <div class="demo-button" style="background: #cad4d4;padding: 10px;">
    <b-button type="primary" transparent size="small" disabled>Primary</b-button>
    <b-button type="success" transparent size="small" disabled>Success</b-button>
    <b-button type="info" transparent size="small" disabled>Info</b-button>
    <b-button type="warning" transparent size="small" disabled>Warning</b-button>
    <b-button type="danger" transparent size="small" disabled>Danger</b-button>
  </div>
</template>
```

:::

### 文字按钮

没有边框和背景色的按钮。

::: demo 注意，文字按钮无法使用样式变量进行覆盖，可自主设置颜色值来改变

```html

<template>
  <div class="demo-button">
    <div>
      <b-button type="text">文字按钮</b-button>
      <b-button type="text" text-color="primary">Primary</b-button>
      <b-button type="text" text-color="success">Success</b-button>
      <b-button type="text" text-color="info">Info</b-button>
      <b-button type="text" text-color="warning">Warning</b-button>
      <b-button type="text" text-color="danger">Danger</b-button>
      <b-button type="text" text-color="#b37feb">多彩按钮</b-button>
      <b-button type="text" text-color="#f759ab">多彩按钮2</b-button>
    </div>
    <div>
      <b-button type="text" disabled>禁用按钮</b-button>
      <b-button type="text" text-color="primary" disabled>Primary</b-button>
      <b-button type="text" text-color="success" disabled>Success</b-button>
      <b-button type="text" text-color="info" disabled>Info</b-button>
      <b-button type="text" text-color="warning" disabled>Warning</b-button>
      <b-button type="text" text-color="danger" disabled>Danger</b-button>
      <b-button type="text" text-color="#f759ab" disabled>多彩按钮</b-button>
      <b-button type="text" text-color="#f759ab" disabled>多彩按钮2</b-button>
    </div>
    <div>
      <b-button type="text" icon="heart" :icon-style="{fontSize:'20px'}"/>
      <b-button type="text" icon="ios-create" text-color="success" :icon-style="{fontSize:'20px'}"/>
      <b-button type="text" icon="ios-warning" text-color="warning" :icon-style="{fontSize:'20px'}"/>
      <b-button type="text" icon="ios-close-circle-outline" text-color="danger" :icon-style="{fontSize:'20px'}"/>
      <b-divider type="vertical"></b-divider>
      <b-button type="text" icon="heart" :icon-style="{fontSize:'20px'}" disabled/>
      <b-button type="text" icon="ios-create" text-color="success" :icon-style="{fontSize:'20px'}" disabled/>
      <b-button type="text" icon="ios-warning" text-color="warning" :icon-style="{fontSize:'20px'}" disabled/>
      <b-button type="text" icon="ios-close-circle-outline" text-color="danger" :icon-style="{fontSize:'20px'}"
                disabled/>
    </div>
  </div>
</template>
```

:::

### 按钮组

以按钮组的方式出现，常用于多项类似操作。使用`<b-button-group>`标签来嵌套你的按钮。

::: demo

```html

<template>
  <div class="demo-button">
    <b-button-group>
      <b-button type="primary" icon="ios-arrow-back">上一页</b-button>
      <b-button type="primary">下一页<i class="iconfont icon-ios-arrow-forward"></i></b-button>
    </b-button-group>
    <b-button-group>
      <b-button type="success" icon="ios-basketball"></b-button>
      <b-button type="info" icon="ios-barcode"></b-button>
      <b-button type="danger" icon="favorfill"></b-button>
    </b-button-group>
  </div>
</template>
```

:::

### 不同尺寸

Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。

::: demo

```html

<template>
  <div class="demo-button">
    <b-button size="large">Large</b-button>
    <b-button>Default</b-button>
    <b-button size="small">Small</b-button>
    <b-button size="mini">Mini</b-button>
  </div>
  <div class="demo-button">
    <b-button size="large" round>Large</b-button>
    <b-button round>Default</b-button>
    <b-button size="small" round>Small</b-button>
    <b-button size="mini" round>Mini</b-button>
  </div>
</template>
```

:::

### 加载状态

可以添加加载状态

::: demo

```html

<template>
  <div class="demo-button">
    <b-button loading>default</b-button>
    <b-button type="primary" :loading="loading" icon="ios-checkmark-circle-outline"
              @click="loading=true">Click me!
    </b-button>
    <b-button type="primary" :loading="loading1" loading-icon="loading1"
              @click="loading1=true">Click me!
    </b-button>
    <b-button type="primary" :loading="loading2" loading-icon="loading2"
              @click="loading2=true">Click me!
    </b-button>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        loading: false,
        loading1: false,
        loading2: false
      }
    }
  }
</script>
```

:::

### 点击动画

可以设置两种不同的点击动画['click','waves'] ,默认为click

::: demo

```html

<template>
  <div class="demo-button">
    <b-button>Click me!</b-button>
    <b-button type="danger">Click me!</b-button>
    <b-button animation-type="waves">Wave Click!</b-button>
    <b-button type="success" animation-type="waves">Wave Click!</b-button>
  </div>
</template>
```

:::

### Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| size | 尺寸 | string | large / small / mini | — |
| type | 类型 | string | primary / success / warning / danger / info / text | — |
| plain | 是否朴素按钮 | boolean | — | false |
| round | 是否圆角按钮 | boolean | — | false |
| transparent | 是否是透明按钮 | boolean | — | false |
| background | 默认按钮是否带有拟物背景 | boolean | — | false |
| loading | 是否加载中状态 | boolean | — | false |
| disabled | 是否禁用状态 | boolean | — | false |
| icon | 图标类名 | string | — | — |
| text-color | 文字按钮颜色，默认禁用文字颜色增加亮度区分 | string | primary / success / warning / danger / info / text / 自定义色值 | — |
| icon-style | 图标样式,可设置图标大小，字体对其等，可依托 text-color 设置颜色，也可以自定义 | Object | — | — |
| autofocus | 是否默认聚焦 | boolean | — | false |
| native-type | 原生 type 属性 | string | button / submit / reset | button |
| animation-type | 点击动画 | string | click / waves | click |
