### 动态加载选项

使用 load-data 属性可以异步加载子选项，需要给数据增加 loading 来标识当前是否在加载中。

::: demo

```html

<template>
  <div flex>
    <b-cascader v-model="selected" :data="data4" change-on-select :load-data="loadData"
                style="width:240px;"></b-cascader>
    <span>{{ selected }}</span>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        data4: [
          {
            value: 'nanjing',
            label: '南京',
            children: [],
            loading: false
          },
          {
            value: 'xuzhou',
            label: '徐州',
            children: [],
            loading: false
          },
          {
            value: 'yangzhou',
            label: '扬州',
            children: [],
            loading: false
          }
        ],
        selected: []
      }
    },
    methods: {
      loadData(item, callback) {
        item.loading = true;
        setTimeout(() => {
          if (item.value === 'nanjing') {
            item.children = [
              {
                value: 'xuanwu',
                label: '玄武区'
              },
              {
                value: 'gulou',
                label: '鼓楼区'
              },
              {
                value: 'jianye',
                label: '建邺区'
              }
            ];
          } else if (item.value === 'xuzhou') {
            item.children = [
              {
                value: 'tongshan',
                label: '铜山区'
              },
              {
                value: 'gulou',
                label: '鼓楼区'
              },
              {
                value: 'yunlong',
                label: '云龙区'
              },
              {
                value: 'jiawang',
                label: '贾汪区'
              }
            ];
          } else if (item.value === 'yangzhou') {
            item.children = [];
          }
          item.loading = false;
          callback();
        }, 1000);
      }
    }
  }
</script>
```

:::
