## Drawer 抽屉

<template>
    <div class="global-anchor">
      <b-anchor :scroll-offset="100">
        <b-anchor-link href="#ji-chu-yong-fa" title="基础用法"></b-anchor-link>
        <b-anchor-link href="#zuo-ce-da-kai" title="左侧打开"></b-anchor-link>
        <b-anchor-link href="#inner-mo-shi" title="inner模式"></b-anchor-link>
        <b-anchor-link href="#xin-xi-yu-lan-kuang" title="信息预览框"></b-anchor-link>
        <b-anchor-link href="#bian-ji-chou-ti" title="编辑抽屉"></b-anchor-link>
        <b-anchor-link href="#qian-tao-chou-ti" title="嵌套抽屉"></b-anchor-link>
        <b-anchor-link href="#ke-tuo-zhuai-kuan-du" title="可拖拽宽度"></b-anchor-link>
        <b-anchor-link href="#attributes" title="Attributes"></b-anchor-link>
        <b-anchor-link href="#events" title="Events"></b-anchor-link>
        <b-anchor-link href="#slot" title="Slot"></b-anchor-link>
      </b-anchor>
    </div>
</template>

简易的抽屉用于展示或者快速弹出,可以根据是信息展示还是创建动态插入

### 基础用法

最简单的使用方法，通过控制属性value来显示 / 隐藏对话框。

::: demo
```html
<template>
  <b-button type="primary" @click="value1 = true">open</b-button>
    <b-drawer v-model="value1" title="抽屉标题" append-to-body :closable="false">
      <p>我是抽屉内容</p>
    </b-drawer>
</template>
<script>
    export default {
      data () {
            return {
              value1:false
            }
       }
    }
</script>
```
:::

### 左侧打开

设置 `placement="left"`为左侧打开

::: demo
```html
<template>
  <b-button type="primary" @click="value2 = true">左侧打开</b-button>
    <b-drawer v-model="value2" title="抽屉标题" placement="left" append-to-body width="500px">
      <p>我是左侧的抽屉</p>
    </b-drawer>
</template>
<script>
    export default {
      data () {
            return {
              value2:false
            }
        }
    }
</script>
```
:::

### inner 模式

可以设置inner模式在某个容器内打开

::: demo
```html
<template>
<div style="position:relative;height:400px;background: #eee;border:1px solid #eee;z-index: 2;">
    <b-button type="primary" @click="valueInner = true">内部抽屉</b-button>
    <b-drawer v-model="valueInner" title="内部抽屉" inner :z-index="10">
      <p>我是内部的抽屉</p>
    </b-drawer>
</div>
</template>
<script>
    export default {
      data () {
        return {
          valueInner:false
        }
      }
    }
</script>
```
:::

### 信息预览框

::: demo 
```html
<template>
  <b-button type="primary" @click="value3 = true">信息预览</b-button>
    <b-drawer v-model="value3" :closable="false" append-to-body width="640">
     <p :style="pStyle">用户信息</p>
     <p :style="pStyle">个人信息</p>
     <div class="demo-drawer-profile">
        <p flex="box:mean" class="mb-10">
          <span>名称: wangbin</span><span>手机号: +86 1762516xxxx</span>
        </p>
        <p flex="box:mean" class="mb-10">
          <span>城市: 徐州市</span><span>区: 鼓楼区</span>
        </p>
        <p flex="box:mean" class="mb-10">
          <span>出生年月: 1990-04</span><span>职业: web前端</span>
        </p>
        <p flex="box:mean" class="mb-10">
          个人主页:
          <a href="https://wangbin3162.gitee.io/web-doc/guide/" target="_blank">https://wangbin3162.gitee.io/web-doc/guide/</a>
        </p>
     </div>
     <b-divider></b-divider>
     <p :style="pStyle">公司</p>
     <div class="demo-drawer-profile">
        <p flex="box:mean" class="mb-10">
          <span>名称: xxxx有限公司</span><span>手机号: +86 1762516xxxx</span>
        </p>
        <p flex="box:mean" class="mb-10">
          <span>地址: 徐州市xx区xx街道88号</span><span>电话: +86 1762516xxxx</span>
        </p>
     </div>
     <b-divider></b-divider>
     <p :style="pStyle">联系我们</p>
     <div class="demo-drawer-profile">
        <p flex="box:mean" class="mb-10">
          <span>Email: 316281400@qq.com</span><span>手机号: +86 1762516xxxx</span>
        </p>
        <p class="mb-10">
          GitHub: <a href="https://github.com/wangbin3162/bin-ui" target="_blank">https://github.com/wangbin3162/bin-ui</a>
        </p>
     </div>
    </b-drawer>
</template>
<script>
    export default {
      data () {
        return {
          value3:false,
          pStyle: {
            fontSize: '16px',
            color: 'rgba(0,0,0,0.85)',
            lineHeight: '24px',
            marginBottom: '16px'
          }
        }
        }
    }
</script>
```
:::

### 编辑抽屉

::: demo 
```html
<template>
  <b-button type="primary" @click="value4 = true">编辑抽屉</b-button>
    <b-drawer v-model="value4" title="编辑对象" width="720" append-to-body :mask-closable="false">
      <b-form :model="formInline" ref="form" label-position="top">
        <div flex="box:mean">
            <b-form-item label="用户名" prop="name" class="mr-15">
              <b-input v-model="formInline.name" placeholder="用户名"></b-input>
            </b-form-item>
            <b-form-item label="邮箱" prop="mail">
              <b-input v-model="formInline.mail" placeholder="邮箱"></b-input>
            </b-form-item>
        </div>
        <div flex="box:mean">
            <b-form-item label="用户名" prop="name" class="mr-15">
              <b-input v-model="formInline.name" placeholder="用户名"></b-input>
            </b-form-item>
            <b-form-item label="邮箱" prop="mail">
              <b-input v-model="formInline.mail" placeholder="邮箱"></b-input>
            </b-form-item>
        </div>
        <div flex="box:mean">
            <b-form-item label="出生日期" prop="birthday" class="mr-15">
               <b-date-picker type="date" v-model="formInline.birthday" placeholder="选择出生日期"></b-date-picker>
            </b-form-item>
            <b-form-item label="时间" prop="time">
               <b-time-picker v-model="formInline.time" placeholder="选择时间"></b-time-picker>
            </b-form-item>
        </div>
        <div flex="box:mean">
            <b-form-item label="城市" prop="city" class="mr-15">
              <b-select v-model="formInline.city" clearable>
                <b-option value="beijing" label="北京"></b-option>
                <b-option value="shanghai" label="上海"></b-option>
                <b-option value="xuzhou" label="徐州"></b-option> 
              </b-select>
            </b-form-item>
            <b-form-item label="地址" prop="mail">
              <b-input v-model="formInline.address" placeholder="地址"></b-input>
            </b-form-item>
        </div>
        <b-form-item label="描述" prop="desc">
            <b-input v-model="formInline.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></b-input>
        </b-form-item>
      </b-form>
      <div slot="footer">
        <b-button @click="value4 = false">取 消</b-button>
        <b-button type="primary" @click="value4 = false">提 交</b-button>
      </div>
    </b-drawer>
</template>
<script>
    export default {
      data () {
        return {
          value4:false,
          formInline: {
            name: '',
            mail: '',
            birthday:'',
            time:'',
            city:'',
            address:'',
            desc:''
          }
        }
      }
    }
</script>
```
:::

### 嵌套抽屉

抽屉可以互相嵌套，但一般不推荐这么使用避免层级过多影响用户交互

::: demo 
```html
<template>
    <b-button type="primary" @click="value5 = true">打开抽屉</b-button>
    <b-drawer title="一级抽屉" width="512" append-to-body :closable="false" v-model="value5">
        <b-button @click="value6 = true" type="primary">打开二层抽屉</b-button>
    </b-drawer>
    <b-drawer title="二级抽屉" :closable="false" v-model="value6" append-to-body >
        这是第二层抽屉
    </b-drawer>
</template>
<script>
    export default {
      data () {
        return {
          value5:false,
          value6:false
        }
      }
    }
</script>
```
:::

### 可拖拽宽度

可以设置拖拽抽屉

::: demo
```html
<template>
    <b-button type="primary" @click="value7 = true">open</b-button>
    <b-drawer v-model="value7" title="抽屉标题" append-to-body draggable>
      <p>我是抽屉内容</p>
    </b-drawer>
</template>
<script>
    export default {
      data () {
        return {
          value7:false
        }
       }
    }
</script>
```
:::

### Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value     | 是否显示，可使用 v-model 双向绑定数据。   | Boolean  |    —       |    false    |
| title     | 标题，如果使用 slot 自定义了页头，则 title 无效   | String  |     —       |     —     |
| placement | 方向   | String  |    left/right      |     right    |
| append-to-body    | 是否将对话框放置于 body 内 | Boolean  |      —      |  false  |
| width     | 抽屉宽度 | Number  |      —      | 300 |
| footer-hide     | 不显示底部 | Boolean  |      —      | false |
| mask-closable    | 是否允许点击遮罩层关闭 | Boolean  |      —      | true |
| mask  | 是否有mask遮罩 | Boolean  |      —      | true |
| styles  | 抽屉中间层的样式 | Object  |      —      |  — |
| inner  | 是否设置抽屉在某个元素内打开，开启此属性时，应当关闭 append-to-body 属性 | Boolean  |      —      | false |
| draggable  | 是否开启拖拽调整宽度 | Boolean  |      —      |  false |
| before-close  | 关闭前事件,返回 Promise 可以阻止关闭 | Function  |      —      |  — |

### Events

| 事件名      | 说明    | 返回值      |
|---------- |-------- |---------- |
| on-close     | 关闭抽屉触发   | 无  |
| on-resize-width   | 调整宽度   | 无  |
| on-visible-change    | 显示状态发生变化时触发   | true / false  |

### Slot

| 名称      | 说明    |
|---------- |-------- |
| header    | 自定义页头 |
| close     | 关闭按钮   |
| default     | 抽屉主体内容   |
