## Lodash

是一个一致性、模块化、高性能的 JavaScript 实用工具库。[官网地址](https://www.lodashjs.com/)

已经添加依赖，不用额外引入,更多使用文档请参考[API](https://www.lodashjs.com/docs/4.17.5.html#constant)

### 引入

```javascript
// Load the full build.
const _ = require('lodash');
// Load the core build.
const _ = require('lodash/core');
// Load the FP build for immutable auto-curried iteratee-first data-last methods.
const fp = require('lodash/fp');
 
// Load method categories.
const array = require('lodash/array');
const object = require('lodash/fp/object');
 
// Cherry-pick methods for smaller browserify/rollup/webpack bundles.
const at = require('lodash/at');
const curryN = require('lodash/fp/curryN');
```

### 使用

:::demo 打开控制台查看输出
```html  
<template>
    <div class="demo-button">
      <b-button v-waves @click="getNow">获取当前时间</b-button>
      <b-button v-waves @click="forDemo">集合遍历</b-button>
      <b-button v-waves @click="lianClick" type="primary">链式操作</b-button>
    </div>
</template>
<script>
var _ = require('lodash');
export default {
  methods:{
    getNow(){
      this.$clog.primary(_.now())
    },
    forDemo(){
      _.forEach([1, 2], (value) =>{
          this.$clog.primary(value)
      });
      // => Logs `1` then `2`.
      _.forEach({ 'a': 1, 'b': 2 }, (value, key) =>{
         this.$clog.capsule(key,value)
      });
    },
    lianClick(){
      // 对字符串数组链式
      let result = _(['a','b','c'])
          .at([0,1])
          .value();
      //[ 'a', 'b' ]
      this.$clog.primary('对字符串数组链式')
      console.log(result);
    }
  }
}
</script>
```
:::

### 链式操作说明

**链式操作需要使用`_()`包裹一个`lodash`对象，然后进行链式操作之后，调用`.value()`方法执行结果**



