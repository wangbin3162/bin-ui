<template>
  <tr :class="rowClasses(row._index)">
    <slot></slot>
  </tr>
</template>
<script>
  export default {
    props: {
      row: Object,
      prefixCls: String,
      draggable: Boolean
    },
    computed: {
      objData() {
        return this.$parent.objData
      }
    },
    methods: {
      rowClasses(_index) {
        if (this.draggable) {
          return false
        }
        return [
          `${this.prefixCls}-row`,
          this.rowClsName(_index),
          {
            [`${this.prefixCls}-row-highlight`]: this.objData[_index] && this.objData[_index]._isHighlight,
            [`${this.prefixCls}-row-hover`]: this.objData[_index] && this.objData[_index]._isHover
          }
        ]
      },
      rowClsName(_index) {
        return this.$parent.$parent.rowClassName(this.objData[_index], _index)
      }
    }
  }
</script>
