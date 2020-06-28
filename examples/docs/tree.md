## Tree 树结构

<template>
    <div class="global-anchor">
      <b-anchor :scroll-offset="100">
        <b-anchor-link href="#ji-chu-yong-fa" title="基础用法"></b-anchor-link>
        <b-anchor-link href="#jin-yong-xuan-ze" title="禁用选择"></b-anchor-link>
        <b-anchor-link href="#ke-yi-xuan-ze" title="可以选择"></b-anchor-link>
        <b-anchor-link href="#yi-bu-jia-zai-zi-jie-dian" title="异步加载子节点"></b-anchor-link>
        <b-anchor-link href="#render-han-shu" title="render函数"></b-anchor-link>
        <b-anchor-link href="#attributes" title="Attributes"></b-anchor-link>
        <b-anchor-link href="#events" title="Events"></b-anchor-link>
        <b-anchor-link href="#methods" title="Methods"></b-anchor-link>
        <b-anchor-link href="#children" title="Children"></b-anchor-link>
      </b-anchor>
    </div>
</template>

### 基础用法

::: demo
```html
<template>
<div style="width: 300px;border:1px solid #eeeeee;">
  <b-tree :data="data" show-checkbox></b-tree>
</div>
</template>

<script>
    export default {
        data () {
            return {
                data: [
                 {
                     title: '一级 1',
                     expand: true,
                     children: [
                         {
                             title: '二级 1-1',
                             expand: true,
                             children: [
                                 {
                                     title: '三级 1-1-1这个标题很长这个标题很长',
                                 },
                                 {
                                     title: '三级 1-1-2'
                                 }
                             ]
                         },
                         {
                             title: '二级 1-2',
                             expand: true,
                             children: [
                                {
                                    title: '三级 1-2-1'
                                },
                                {
                                    title: '三级 1-2-2'
                                }
                             ]
                         }
                     ]
                 }
             ]
            }
        }
    }
</script>
```
:::

### 禁用选择

lockSelect 设置可以锁定树的选中事件，这个可以用来控制树菜单在不同情况下的操作

::: demo
```html
<template>
<div flex>
  <div style="width: 200px">
    <b-tree :data="data" :lock-select="lockSelect"></b-tree> 
  </div>
  <div style="width: 80px">
    <b-switch v-model="lockSelect" size="large">
        <span slot="open">锁定</span>
        <span slot="close">解锁</span>
    </b-switch>
  </div>
</div>
</template>

<script>
    export default {
        data () {
            return {
                data: [
                    {
                         title: '一级 1',
                         expand: true,
                         children: [
                             {
                                 title: '二级 1-1',
                                 expand: true,
                                 children: [
                                     {
                                         title: '三级 1-1-1',
                                     },
                                     {
                                         title: '三级 1-1-2'
                                     }
                                 ]
                             },
                             {
                                 title: '二级 1-2',
                                 expand: true,
                                 children: [
                                    {
                                        title: '三级 1-2-1'
                                    },
                                    {
                                        title: '三级 1-2-2'
                                    }
                                 ]
                             }
                         ]
                     }
                ],
                lockSelect:false
            }
        }
    }
</script>
```
:::

### 可以选择

可以设置show-checkbox开启勾选，并可以设置数据格式中的默认选中

expand、selected、checked 和 disabled 可以设置展开，选中，勾选和禁用 multiple 开启多选

::: demo 
```html
<template>
  <b-tree :data="data" show-checkbox multiple></b-tree>
</template>
<script>
    export default {
        data () {
            return {
                data: [
                 {
                     title: '一级 1',
                     expand: true,
                     children: [
                         {
                             title: '二级 1-1',
                             expand: true,
                             children: [
                                 {
                                     title: '三级 1-1-1',
                                 },
                                 {
                                     title: '三级 1-1-2'
                                 }
                             ]
                         },
                         {
                             title: '二级 1-2',
                             expand: true,
                             children: [
                                {
                                    title: '三级 1-2-1'
                                },
                                {
                                    title: '三级 1-2-2'
                                }
                             ]
                         }
                     ]
                 }
             ]
            }
        }
    }
</script>
```
:::

### 异步加载子节点

::: demo
```html
<template>
  <b-tree :data="data3" show-checkbox :load-data="loadData"></b-tree>
</template>
<script>
    export default {
        data () {
            return {
                data3: [
                    {
                        title: 'parent',
                        loading: false,
                        children: []
                    }
                ]
            }
        },
        methods: {
            loadData (item, callback) {
                setTimeout(() => {
                    const data = [
                        {
                            title: 'children',
                            loading: false,
                            children: []
                        },
                        {
                            title: 'children',
                            loading: false,
                            children: []
                        }
                    ];
                    callback(data);
                }, 1000);
            }
        }
    }
</script>
```
:::

### render函数

可以设置show-checkbox开启勾选，并可以设置数据格式中的默认选中

::: demo
```html
<template>
<div style="width: 300px;">
  <b-tree :data="data4" :render="renderContent"></b-tree>
</div>
</template>
<script>
    export default {
        data () {
            return {
                data4: [
                    {
                        title: 'parent 1',
                        expand: true,
                        render: (h, { root, node, data }) => {
                            return h('span', {
                                style: {
                                    display: 'inline-block',
                                    width: '100%'
                                }
                            }, [
                                h('span', [
                                    h('b-icon', {
                                        props: {
                                            name: 'ios-folder-outline'
                                        },
                                        style: {
                                            marginRight: '8px'
                                        }
                                    }),
                                    h('span', data.title)
                                ]),
                                h('span', {
                                    style: {
                                        display: 'inline-block',
                                        float: 'right',
                                        marginRight: '32px'
                                    }
                                }, [
                                    h('b-button', {
                                        props: Object.assign({}, this.buttonProps, {
                                            icon: 'ios-add',
                                            type: 'primary'
                                        }),
                                        style: {
                                            width: '64px'
                                        },
                                        on: {
                                            click: () => { this.append(data) }
                                        }
                                    })
                                ])
                            ]);
                        },
                        children: [
                            {
                                title: 'child 1-1',
                            },
                            {
                                title: 'child 1-2',
                            }
                        ]
                    }
                ],
                buttonProps: {
                    type: 'default',
                    size: 'mini',
                }
            }
        },
        methods: {
            renderContent (h, { root, node, data }) {
                return h('span', {
                    style: {
                        display: 'inline-block',
                        width: '100%'
                    }
                }, [
                    h('span', [
                        h('b-icon', {
                            props: {
                                name: 'ios-paper-outline'
                            },
                            style: {
                                marginRight: '8px'
                            }
                        }),
                        h('span', data.title)
                    ]),
                    h('span', {
                        style: {
                            display: 'inline-block',
                            float: 'right',
                            marginRight: '32px'
                        }
                    }, [
                        h('b-icon', {
                            props: Object.assign({}, this.buttonProps, {
                                name: 'ios-add',
                            }),
                            style: {
                                marginRight: '8px',cursor:'pointer'
                            },
                            nativeOn: {
                                click: () => { this.append(data) }
                            }
                        }),
                        h('b-icon', {
                            props: Object.assign({}, this.buttonProps, {
                                name: 'ios-remove',
                            }),
                            style: {
                                cursor:'pointer'
                            },
                            nativeOn: {
                                click: () => { this.remove(root, node, data) }
                            }
                        })
                    ])
                ]);
            },
            append (data) {
                const children = data.children || [];
                children.push({
                    title: 'new node',
                    expand: true
                });
                this.$set(data, 'children', children);
            },
            remove (root, node, data) {
                const parentKey = root.find(el => el === node).parent;
                const parent = root.find(el => el.nodeKey === parentKey).node;
                const index = parent.children.indexOf(data);
                parent.children.splice(index, 1);
            }
        }
    }
</script>
```
:::

### Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| data     | 可嵌套的节点属性的数组，生成 tree 的数据   | Array  |  —   |  []   |
| multiple     | 是否支持多选   | Boolean  |  —   |  false  |
| show-checkbox     | 是否显示多选框   | Boolean  |  —   |  false  |
| empty-text     | 没有数据时的提示  | String	  |  —   |  暂无数据  |
| load-data    | 异步加载数据的方法，见示例 | Function	  |  —   |   —    |
| render   | 自定义渲染内容，见示例 | Function	  |  —   |   —    |
| children-key   | 定义子节点键,默认children为子节点key | String	  |  —   |   children   |
| check-strictly   | 复选框的情况下，是否严格的遵循父子不互相关联的做法 | Boolean		  |  —   |   false   |
| check-directly   | 开启后，在 show-checkbox 模式下，select 的交互也将转为 check | Boolean		  |  —   |   false   |
| lock-select    | 锁定树选择，再部分业务中常用，比如开启弹窗后禁用树的选中操作   | Boolean  |  —   |  false  |

### Events

| 事件名      | 说明    | 返回值      |
|---------- |-------- |---------- |
| on-select-change     | 点击树节点时触发   | 当前已选中的节点数组、当前项  |
| on-check-change     | 点击复选框时触发   | 当前已勾选节点的数组、当前项  |
| on-toggle-expand     | 展开和收起子列表时触发   | 当前节点的数据  |

### Methods

| 事件名      | 说明    | 返回值      |
|---------- |-------- |---------- |
| getCheckedNodes     | 获取被勾选的节点   | 无 |
| getSelectedNodes     | 获取被选中的节点   | 无  |
| getCheckedAndIndeterminateNodes     | 获取选中及半选节点   | 无  |

### Children 

| 属性      | 说明    | 类型      | 默认值   |
|---------- |-------- |---------- |-------------  |
| title     | 节点显示标题   | String |  —   |
| expand     | 是否展开直子节点   | Boolean  | false  |
| disabled   | 禁用   | Boolean  | false  |
| disableCheckbox    | 禁用单选框   | Boolean  | false  |
| selected     | 是否选中子节点   | Boolean  | false  |
| checked     | 是否勾选(如果勾选，子节点也会全部勾选)   | Boolean  | false  |
| children     | 子节点属性数组，可以设置tree 组件children-key属性来自定义  | Array  |  —    |
| render     | 自定义当前节点函数   | Function  | —  |
