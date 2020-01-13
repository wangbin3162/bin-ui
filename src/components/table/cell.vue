<template>
  <div :class="classes" ref="cell">
    <template v-if="renderType === 'index'">
      <span>{{ column.indexMethod ? column.indexMethod(row) : (naturalIndex + 1) }}</span>
    </template>
    <template v-if="renderType === 'selection'">
      <b-checkbox :value="checked" @click.native.stop="handleClick" @on-change="toggleSelect"
                  :disabled="disabled"></b-checkbox>
    </template>
    <template v-if="renderType === 'html'"><span v-html="row[column.key]"></span></template>
    <template v-if="renderType === 'normal'">
      <template v-if="column.tooltip && tableRoot.tooltipTheme">
        <b-tooltip append-to-body :content="row[column.key]" :theme="tableRoot.tooltipTheme" :disabled="!showTooltip"
                   :max-width="300" class="bin-table-cell-tooltip">
                <span ref="content" @mouseenter="handleTooltipIn" @mouseleave="handleTooltipOut"
                      class="bin-table-cell-tooltip-content">{{ row[column.key] }}</span>
        </b-tooltip>
      </template>
      <span v-else-if="column.tooltip && !tableRoot.tooltipTheme" class="bin-table-cell-tooltip-content"
            :title="row[column.key]">{{row[column.key]}}
      </span>
      <span v-else>{{row[column.key]}}</span>
    </template>
    <template v-if="renderType === 'expand' && !row._disableExpand">
      <div :class="expandCls" @click="toggleExpand">
        <b-icon name="ios-arrow-forward"></b-icon>
      </div>
    </template>
    <table-expand
        v-if="renderType === 'render'"
        :row="row"
        :column="column"
        :index="index"
        :render="column.render"></table-expand>
    <table-slot
        v-if="renderType === 'slot'"
        :row="row"
        :column="column"
        :index="index"></table-slot>
  </div>
</template>

<script>
  import TableExpand from './main/expand'
  import TableSlot from './main/slot'

  export default {
    name: 'TableCell',
    components: { TableExpand, TableSlot },
    inject: ['tableRoot'],
    props: {
      prefixCls: String,
      row: Object,
      column: Object,
      naturalIndex: Number, // 重建数据索引
      index: Number, // _index of data
      checked: Boolean,
      disabled: Boolean,
      expanded: Boolean,
      fixed: {
        type: [Boolean, String],
        default: false
      }
    },
    data () {
      return {
        renderType: '',
        uid: -1,
        context: this.$parent.$parent.$parent.currentContext,
        showTooltip: false // 鼠标滑过overflow文本时，再检查是否需要显示
      }
    },
    computed: {
      classes () {
        return [
          `${this.prefixCls}-cell`,
          {
            [`${this.prefixCls}-hidden`]: !this.fixed && this.column.fixed && (this.column.fixed === 'left' || this.column.fixed === 'right'),
            [`${this.prefixCls}-cell-ellipsis`]: this.column.ellipsis || false,
            [`${this.prefixCls}-cell-tooltip`]: this.column.tooltip || false,
            [`${this.prefixCls}-cell-with-expand`]: this.renderType === 'expand',
            [`${this.prefixCls}-cell-with-selection`]: this.renderType === 'selection'
          }
        ]
      },
      expandCls () {
        return [
          `${this.prefixCls}-cell-expand`,
          {
            [`${this.prefixCls}-cell-expand-expanded`]: this.expanded
          }
        ]
      }
    },
    methods: {
      toggleSelect () {
        this.$parent.$parent.$parent.toggleSelect(this.index)
      },
      toggleExpand () {
        this.$parent.$parent.$parent.toggleExpand(this.index)
      },
      handleClick () {
        // 放置 Checkbox 冒泡
      },
      handleTooltipIn () {
        const $content = this.$refs.content
        this.showTooltip = $content.scrollWidth > $content.offsetWidth
      },
      handleTooltipOut () {
        this.showTooltip = false
      }
    },
    created () {
      if (this.column.type === 'index') {
        this.renderType = 'index'
      } else if (this.column.type === 'selection') {
        this.renderType = 'selection'
      } else if (this.column.type === 'html') {
        this.renderType = 'html'
      } else if (this.column.type === 'expand') {
        this.renderType = 'expand'
      } else if (this.column.render) {
        this.renderType = 'render'
      } else if (this.column.slot) {
        this.renderType = 'slot'
      } else {
        this.renderType = 'normal'
      }
    }
  }
</script>
