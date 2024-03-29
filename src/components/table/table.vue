<template>
  <div :class="wrapClasses" :style="styles">
    <div :class="classes">
      <div :class="[prefixCls + '-title']" v-if="showSlotHeader" ref="title">
        <slot name="header"></slot>
      </div>
      <div :class="[prefixCls + '-header']" v-if="showHeader" ref="header" @mousewheel="handleMouseWheel">
        <table-head
            :prefix-cls="prefixCls"
            :styleObject="tableHeaderStyle"
            :columns="cloneColumns"
            :column-rows="columnRows"
            :obj-data="objData"
            :columns-width="columnsWidth"
            :data="rebuildData"></table-head>
      </div>
      <div :class="[prefixCls + '-body']" :style="bodyStyle" ref="body" @scroll="handleBodyScroll"
           v-show="!(!!noDataText && (!data || data.length === 0))">
        <table-body
            ref="tbody"
            :draggable="draggable"
            :prefix-cls="prefixCls"
            :styleObject="tableStyle"
            :columns="cloneColumns"
            :data="rebuildData"
            :row-key="rowKey"
            :columns-width="columnsWidth"
            :obj-data="objData"></table-body>
      </div>
      <div
          :class="[prefixCls + '-tip']" :style="bodyStyle" @scroll="handleBodyScroll"
          v-show="!data || data.length === 0">
        <table cellspacing="0" cellpadding="0" border="0">
          <tbody>
          <tr>
            <td :style="{'height':bodyStyle.height,'width':`${this.headerWidth}px`}">
              <b-empty v-if="!data || data.length === 0">{{ noDataText }}</b-empty>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
      <div :class="[prefixCls + '-fixed']" :style="fixedTableStyle" v-if="isLeftFixed">
        <div :class="fixedHeaderClasses" v-if="showHeader">
          <table-head
              fixed="left"
              :prefix-cls="prefixCls"
              :styleObject="fixedTableStyle"
              :columns="leftFixedColumns"
              :column-rows="columnRows"
              :fixed-column-rows="leftFixedColumnRows"
              :obj-data="objData"
              :columns-width="columnsWidth"
              :data="rebuildData"></table-head>
        </div>
        <div :class="[prefixCls + '-fixed-body']" :style="fixedBodyStyle" ref="fixedBody"
             @mousewheel="handleFixedMousewheel" @DOMMouseScroll="handleFixedMousewheel">
          <table-body
              fixed="left"
              :draggable="draggable"
              :prefix-cls="prefixCls"
              :styleObject="fixedTableStyle"
              :columns="leftFixedColumns"
              :data="rebuildData"
              :row-key="rowKey"
              :columns-width="columnsWidth"
              :obj-data="objData"></table-body>
        </div>
      </div>
      <div :class="[prefixCls + '-fixed-right']" :style="fixedRightTableStyle" v-if="isRightFixed">
        <div :class="fixedHeaderClasses" v-if="showHeader">
          <table-head
              fixed="right"
              :prefix-cls="prefixCls"
              :styleObject="fixedRightTableStyle"
              :columns="rightFixedColumns"
              :column-rows="columnRows"
              :fixed-column-rows="rightFixedColumnRows"
              :obj-data="objData"
              :columns-width="columnsWidth"
              :data="rebuildData"></table-head>
        </div>
        <div :class="[prefixCls + '-fixed-body']" :style="fixedBodyStyle" ref="fixedRightBody"
             @mousewheel="handleFixedMousewheel" @DOMMouseScroll="handleFixedMousewheel">
          <table-body
              fixed="right"
              :draggable="draggable"
              :prefix-cls="prefixCls"
              :styleObject="fixedRightTableStyle"
              :columns="rightFixedColumns"
              :data="rebuildData"
              :row-key="rowKey"
              :columns-width="columnsWidth"
              :obj-data="objData"></table-body>
        </div>
      </div>
      <div :class="[prefixCls + '-fixed-right-header']" :style="fixedRightHeaderStyle" v-if="isRightFixed"></div>
      <div :class="[prefixCls + '-footer']" v-if="showSlotFooter" ref="footer">
        <slot name="footer"></slot>
      </div>
    </div>
    <!--加载中-->
    <b-loading fix size="large" v-if="loading">
      <slot name="loading"></slot>
    </b-loading>
  </div>
</template>

<script>
import tableHead from './table-head.vue'
import tableBody from './table-body.vue'
import { oneOf, deepCopy } from '../../utils/util'
import { getStyle, on, off, getScrollBarWidth } from '../../utils/dom'
import Csv from './main/csv'
import ExportCsv from './main/export-csv'
import { getAllColumns, convertToRows, convertColumnOrder, getRandomStr } from './main/util'
import { addResizeListener, removeResizeListener } from '../../utils/resize-event'
import Sortable from 'sortablejs'

const prefixCls = 'bin-table'

let rowKey = 1
let columnKey = 1

export default {
  name: 'BTable',
  components: { tableHead, tableBody },
  provide() {
    return {
      tableRoot: this
    }
  },
  props: {
    data: {
      type: Array,
      default() {
        return []
      }
    },
    columns: {
      type: Array,
      default() {
        return []
      }
    },
    size: {
      validator(value) {
        return oneOf(value, ['small', 'large', 'default'])
      },
      default: 'default'
    },
    width: {
      type: [Number, String]
    },
    height: {
      type: [Number, String]
    },
    maxHeight: {
      type: [Number, String]
    },
    stripe: {
      type: Boolean,
      default: false
    },
    border: {
      type: Boolean,
      default: false
    },
    showHeader: {
      type: Boolean,
      default: true
    },
    highlightRow: {
      type: Boolean,
      default: false
    },
    rowClassName: {
      type: Function,
      default() {
        return ''
      }
    },
    context: {
      type: Object
    },
    noDataText: {
      type: String,
      default: '暂无数据'
    },
    disabledHover: {
      type: Boolean
    },
    loading: {
      type: Boolean,
      default: false
    },
    draggable: {
      type: Boolean,
      default: false
    },
    dragHandle: String,
    tooltipTheme: {
      validator(value) {
        return oneOf(value, ['dark', 'light'])
      }
    },
    rowKey: {
      type: Boolean,
      default: false
    },
    mergeMethod: {
      type: Function
    }
  },
  data() {
    const colsWithId = this.makeColumnsId(this.columns)
    return {
      ready: false,
      tableWidth: 0,
      columnsWidth: {},
      prefixCls: prefixCls,
      compiledUids: [],
      objData: this.makeObjData(), // checkbox or highlight-row
      rebuildData: [], // for sort
      cloneColumns: this.makeColumns(colsWithId),
      columnRows: this.makeColumnRows(false, colsWithId),
      leftFixedColumnRows: this.makeColumnRows('left', colsWithId),
      rightFixedColumnRows: this.makeColumnRows('right', colsWithId),
      allColumns: getAllColumns(colsWithId), // for multiple table-head, get columns that have no children
      showSlotHeader: true,
      showSlotFooter: true,
      bodyHeight: 0,
      scrollBarWidth: getScrollBarWidth(),
      currentContext: this.context,
      cloneData: deepCopy(this.data), // 这里暂时不用异步来判定删除最后一条数据的报错行为
      showVerticalScrollBar: false,
      showHorizontalScrollBar: false,
      headerWidth: 0,
      headerHeight: 0
    }
  },
  computed: {
    wrapClasses() {
      return [
        `${prefixCls}-wrapper`,
        {
          [`${prefixCls}-hide`]: !this.ready,
          [`${prefixCls}-wrapper-with-border`]: this.border,
          [`${prefixCls}-with-header`]: this.showSlotHeader,
          [`${prefixCls}-with-footer`]: this.showSlotFooter
        }
      ]
    },
    classes() {
      return [
        `${prefixCls}`,
        {
          [`${prefixCls}-${this.size}`]: !!this.size,
          [`${prefixCls}-border`]: this.border,
          [`${prefixCls}-stripe`]: this.stripe,
          [`${prefixCls}-with-fixed-top`]: !!this.height
        }
      ]
    },
    fixedHeaderClasses() {
      return [
        `${prefixCls}-fixed-header`,
        {
          [`${prefixCls}-fixed-header-with-empty`]: !this.rebuildData.length
        }
      ]
    },
    styles() {
      let style = {}
      if (this.height) {
        const height = parseInt(this.height)
        style.height = `${height}px`
      }
      if (this.maxHeight) {
        const maxHeight = parseInt(this.maxHeight)
        style.maxHeight = `${maxHeight}px`
      }
      if (this.width) style.width = `${this.width}px`
      return style
    },
    tableStyle() {
      let style = {}
      if (this.tableWidth !== 0) {
        let width = ''
        if (this.bodyHeight === 0) {
          width = this.tableWidth
        } else {
          width = this.tableWidth - (this.showVerticalScrollBar ? this.scrollBarWidth : 0)
        }
        style.width = `${width}px`
      }
      return style
    },
    tableHeaderStyle() {
      let style = {}
      if (this.tableWidth !== 0) {
        let width = ''
        width = this.tableWidth
        style.width = `${width}px`
      }
      return style
    },
    fixedTableStyle() {
      let style = {}
      let width = 0
      this.leftFixedColumns.forEach((col) => {
        if (col.fixed && col.fixed === 'left') width += col._width
      })
      style.width = `${width}px`
      return style
    },
    fixedRightTableStyle() {
      let style = {}
      let width = 0
      this.rightFixedColumns.forEach((col) => {
        if (col.fixed && col.fixed === 'right') width += col._width
      })
      // width += this.scrollBarWidth;
      style.width = `${width}px`
      style.right = `${this.showVerticalScrollBar ? this.scrollBarWidth : 0}px`
      return style
    },
    fixedRightHeaderStyle() {
      let style = {}
      let width = 0
      let height = this.headerHeight + 1
      if (this.showVerticalScrollBar) {
        width = this.scrollBarWidth
      }
      style.width = `${width}px`
      style.height = `${height}px`
      return style
    },
    bodyStyle() {
      let style = {}
      if (this.bodyHeight !== 0) {
        const height = this.bodyHeight
        if (this.height) {
          style.height = `${height}px`
        } else if (this.maxHeight) {
          style.maxHeight = `${height}px`
        }
      }
      return style
    },
    fixedBodyStyle() {
      let style = {}
      if (this.bodyHeight !== 0) {
        let height = this.bodyHeight - (this.showHorizontalScrollBar ? this.scrollBarWidth : 0)
        style.height = this.showHorizontalScrollBar ? `${height}px` : `${height - 1}px`
      }
      return style
    },
    leftFixedColumns() {
      return convertColumnOrder(this.cloneColumns, 'left')
    },
    rightFixedColumns() {
      return convertColumnOrder(this.cloneColumns, 'right')
    },
    isLeftFixed() {
      return this.columns.some(col => col.fixed && col.fixed === 'left')
    },
    isRightFixed() {
      return this.columns.some(col => col.fixed && col.fixed === 'right')
    }
  },
  methods: {
    rowClsName(index) {
      return this.rowClassName(this.data[index], index)
    },
    handleResize() {
      // let tableWidth = parseInt(getStyle(this.$el, 'width')) - 1;
      let tableWidth = this.$el.offsetWidth
      let columnsWidth = {}
      let sumMinWidth = 0
      let hasWidthColumns = []
      let noWidthColumns = []
      let maxWidthColumns = []
      let noMaxWidthColumns = []
      this.cloneColumns.forEach((col) => {
        if (col.width) {
          hasWidthColumns.push(col)
        } else {
          noWidthColumns.push(col)
          if (col.minWidth) {
            sumMinWidth += col.minWidth
          }
          if (col.maxWidth) {
            maxWidthColumns.push(col)
          } else {
            noMaxWidthColumns.push(col)
          }
        }
        col._width = null
      })
      let unUsableWidth = hasWidthColumns.map(cell => cell.width).reduce((a, b) => a + b, 0)
      let usableWidth = tableWidth - unUsableWidth - sumMinWidth - (this.showVerticalScrollBar ? this.scrollBarWidth : 0) - 1
      let usableLength = noWidthColumns.length
      let columnWidth = 0
      if (usableWidth > 0 && usableLength > 0) {
        columnWidth = parseInt(usableWidth / usableLength)
      }
      for (let i = 0; i < this.cloneColumns.length; i++) {
        const column = this.cloneColumns[i]
        let width = columnWidth + (column.minWidth ? column.minWidth : 0)
        if (column.width) {
          width = column.width
        } else {
          if (column._width) {
            width = column._width
          } else {
            if (column.minWidth > width) {
              width = column.minWidth
            } else if (column.maxWidth < width) {
              width = column.maxWidth
            }

            if (usableWidth > 0) {
              usableWidth -= width - (column.minWidth ? column.minWidth : 0)
              usableLength--
              if (usableLength > 0) {
                columnWidth = parseInt(usableWidth / usableLength)
              } else {
                columnWidth = 0
              }
            } else {
              columnWidth = 0
            }
          }
        }

        column._width = width

        columnsWidth[column._index] = {
          width: width
        }
      }
      if (usableWidth > 0) {
        usableLength = noMaxWidthColumns.length
        columnWidth = parseInt(usableWidth / usableLength)
        for (let i = 0; i < noMaxWidthColumns.length; i++) {
          const column = noMaxWidthColumns[i]
          let width = column._width + columnWidth
          if (usableLength > 1) {
            usableLength--
            usableWidth -= columnWidth
            columnWidth = parseInt(usableWidth / usableLength)
          } else {
            columnWidth = 0
          }

          column._width = width

          columnsWidth[column._index] = {
            width: width
          }
        }
      }
      this.tableWidth = this.cloneColumns.map(cell => cell._width).reduce((a, b) => a + b, 0) + (this.showVerticalScrollBar ? this.scrollBarWidth : 0) + 1
      this.columnsWidth = columnsWidth
      this.fixedHeader()
    },
    handleMouseIn(_index) {
      if (this.disabledHover) return
      if (this.objData[_index]._isHover) return
      this.objData[_index]._isHover = true
    },
    handleMouseOut(_index) {
      if (this.disabledHover) return
      this.objData[_index]._isHover = false
    },
    // 通用处理 highlightCurrentRow 和 clearCurrentRow
    handleCurrentRow(type, _index) {
      let oldIndex = -1
      for (let i in this.objData) {
        if (this.objData[i]._isHighlight) {
          oldIndex = parseInt(i)
          this.objData[i]._isHighlight = false
        }
      }
      if (type === 'highlight') this.objData[_index]._isHighlight = true
      const oldData = oldIndex < 0 ? null : JSON.parse(JSON.stringify(this.cloneData[oldIndex]))
      const newData = type === 'highlight' ? JSON.parse(JSON.stringify(this.cloneData[_index])) : null
      this.$emit('current-change', newData, oldData, _index)
    },
    highlightCurrentRow(_index) {
      if (!this.highlightRow || this.objData[_index]._isHighlight) return
      this.handleCurrentRow('highlight', _index)
    },
    clearCurrentRow() {
      if (!this.highlightRow) return
      this.handleCurrentRow('clear')
    },
    clickCurrentRow(_index) {
      if (_index === this.cloneData.length) {
        return
      }
      this.highlightCurrentRow(_index)
      this.$emit('row-click', JSON.parse(JSON.stringify(this.cloneData[_index])), _index)
    },
    dblclickCurrentRow(_index) {
      this.highlightCurrentRow(_index)
      this.$emit('row-dblclick', JSON.parse(JSON.stringify(this.cloneData[_index])), _index)
    },
    getSelection() {
      let selectionIndexes = []
      for (let i in this.objData) {
        if (this.objData[i]._isChecked) selectionIndexes.push(parseInt(i))
      }
      return JSON.parse(JSON.stringify(this.data.filter((data, index) => selectionIndexes.indexOf(index) > -1)))
    },
    toggleSelect(_index) {
      let data = {}

      for (let i in this.objData) {
        if (parseInt(i) === _index) {
          data = this.objData[i]
          break
        }
      }
      const status = !data._isChecked

      this.objData[_index]._isChecked = status

      const selection = this.getSelection()
      this.$emit(status ? 'select' : 'select-cancel', selection, JSON.parse(JSON.stringify(this.data[_index])))
      this.$emit('selection-change', selection)
    },
    toggleExpand(_index) {
      let data = {}

      for (let i in this.objData) {
        if (parseInt(i) === _index) {
          data = this.objData[i]
          break
        }
      }
      const status = !data._isExpanded
      data._isExpanded = status
      this.$emit('expand', JSON.parse(JSON.stringify(this.cloneData[_index])), status)
      if (this.height || this.maxHeight) {
        this.$nextTick(() => this.fixedBody())
      }
    },
    selectAll(status) {
      for (const data of this.rebuildData) {
        if (this.objData[data._index]._isDisabled) {
          continue
        }
        this.objData[data._index]._isChecked = status
      }
      const selection = this.getSelection()
      if (status) {
        this.$emit('select-all', selection)
      } else {
        this.$emit('select-all-cancel', selection)
      }
      this.$emit('selection-change', selection)
    },

    fixedHeader() {
      if (this.height || this.maxHeight) {
        this.$nextTick(() => {
          const titleHeight = parseInt(getStyle(this.$refs.title, 'height')) || 0
          const headerHeight = parseInt(getStyle(this.$refs.header, 'height')) || 0
          const footerHeight = parseInt(getStyle(this.$refs.footer, 'height')) || 0
          if (this.height) {
            this.bodyHeight = this.height - titleHeight - headerHeight - footerHeight
          } else if (this.maxHeight) {
            this.bodyHeight = this.maxHeight - titleHeight - headerHeight - footerHeight
          }
          this.$nextTick(() => this.fixedBody())
        })
      } else {
        this.bodyHeight = 0
        this.$nextTick(() => this.fixedBody())
      }
    },
    fixedBody() {
      if (this.$refs.header) {
        this.headerWidth = this.$refs.header.children[0].offsetWidth
        this.headerHeight = this.$refs.header.children[0].offsetHeight
        // this.showHorizontalScrollBar = this.headerWidth>this.$refs.header.offsetWidth;
      }

      if (!this.$refs.tbody || !this.data || this.data.length === 0) {
        this.showVerticalScrollBar = false
      } else {
        let bodyContentEl = this.$refs.tbody.$el
        let bodyEl = bodyContentEl.parentElement
        let bodyContentHeight = bodyContentEl.offsetHeight
        let bodyHeight = bodyEl.offsetHeight

        this.showHorizontalScrollBar = bodyEl.offsetWidth < bodyContentEl.offsetWidth + (this.showVerticalScrollBar ? this.scrollBarWidth : 0)
        this.showVerticalScrollBar = this.bodyHeight ? bodyHeight - (this.showHorizontalScrollBar ? this.scrollBarWidth : 0) < bodyContentHeight : false

        if (this.showVerticalScrollBar) {
          bodyEl.classList.add(this.prefixCls + '-overflowY')
        } else {
          bodyEl.classList.remove(this.prefixCls + '-overflowY')
        }
        if (this.showHorizontalScrollBar) {
          bodyEl.classList.add(this.prefixCls + '-overflowX')
        } else {
          bodyEl.classList.remove(this.prefixCls + '-overflowX')
        }
      }
    },

    handleBodyScroll(event) {
      if (this.showHeader) this.$refs.header.scrollLeft = event.target.scrollLeft
      if (this.isLeftFixed) this.$refs.fixedBody.scrollTop = event.target.scrollTop
      if (this.isRightFixed) this.$refs.fixedRightBody.scrollTop = event.target.scrollTop
    },
    handleFixedMousewheel(event) {
      let deltaY = event.deltaY
      if (!deltaY && event.detail) {
        deltaY = event.detail * 40
      }
      if (!deltaY && event.wheelDeltaY) {
        deltaY = -event.wheelDeltaY
      }
      if (!deltaY && event.wheelDelta) {
        deltaY = -event.wheelDelta
      }
      if (!deltaY) return
      const body = this.$refs.body
      const currentScrollTop = body.scrollTop
      if (deltaY < 0 && currentScrollTop !== 0) {
        event.preventDefault()
      }
      if (deltaY > 0 && body.scrollHeight - body.clientHeight > currentScrollTop) {
        event.preventDefault()
      }
      // body.scrollTop += deltaY;
      let step = 0
      let timeId = setInterval(() => {
        step += 5
        if (deltaY > 0) {
          body.scrollTop += 2
        } else {
          body.scrollTop -= 2
        }
        if (step >= Math.abs(deltaY)) {
          clearInterval(timeId)
        }
      }, 5)
    },
    handleMouseWheel(event) {
      const deltaX = event.deltaX
      const $body = this.$refs.body

      if (deltaX > 0) {
        $body.scrollLeft = $body.scrollLeft + 10
      } else {
        $body.scrollLeft = $body.scrollLeft - 10
      }
    },
    sortData(data, type, index) {
      const key = this.cloneColumns[index].key
      data.sort((a, b) => {
        if (this.cloneColumns[index].sortMethod) {
          return this.cloneColumns[index].sortMethod(a[key], b[key], type)
        } else {
          if (type === 'asc') {
            return a[key] > b[key] ? 1 : -1
          } else if (type === 'desc') {
            return a[key] < b[key] ? 1 : -1
          }
        }
      })
      return data
    },
    handleSort(_index, type) {
      const index = this.GetOriginalIndex(_index)
      this.cloneColumns.forEach((col) => {
        col._sortType = 'normal'
      })

      const key = this.cloneColumns[index].key
      if (this.cloneColumns[index].sortable !== 'custom') { // custom is for remote sort
        if (type === 'normal') {
          this.rebuildData = this.makeDataWithSort()
        } else {
          this.rebuildData = this.sortData(this.rebuildData, type, index)
        }
      }
      this.cloneColumns[index]._sortType = type

      this.$emit('sort-change', {
        column: JSON.parse(JSON.stringify(this.allColumns[this.cloneColumns[index]._index])),
        key: key,
        order: type
      })
    },
    /**
     * #2832
     * 应该区分当前表头的 column 是左固定还是右固定
     * 否则执行到 $parent 时，方法的 index 与 cloneColumns 的 index 是不对应的
     * 左固定和右固定，要区分对待
     * 所以，此方法用来获取正确的 index
     * */
    GetOriginalIndex(_index) {
      return this.cloneColumns.findIndex(item => item._index === _index)
    },
    makeData() {
      let data = deepCopy(this.data)
      data.forEach((row, index) => {
        row._index = index
        row._rowKey = rowKey++
      })
      return data
    },
    makeDataWithSort() {
      let data = this.makeData()
      let sortType = 'normal'
      let sortIndex = -1
      let isCustom = false

      for (let i = 0; i < this.cloneColumns.length; i++) {
        if (this.cloneColumns[i]._sortType !== 'normal') {
          sortType = this.cloneColumns[i]._sortType
          sortIndex = i
          isCustom = this.cloneColumns[i].sortable === 'custom'
          break
        }
      }
      if (sortType !== 'normal' && !isCustom) data = this.sortData(data, sortType, sortIndex)
      return data
    },
    makeObjData() {
      let data = {}
      this.data.forEach((row, index) => {
        const newRow = deepCopy(row)// todo 直接替换
        newRow._isHover = false
        if (newRow._disabled) {
          newRow._isDisabled = newRow._disabled
        } else {
          newRow._isDisabled = false
        }
        if (newRow._checked) {
          newRow._isChecked = newRow._checked
        } else {
          newRow._isChecked = false
        }
        if (newRow._expanded) {
          newRow._isExpanded = newRow._expanded
        } else {
          newRow._isExpanded = false
        }
        if (newRow._highlight) {
          newRow._isHighlight = newRow._highlight
        } else {
          newRow._isHighlight = false
        }
        data[index] = newRow
      })
      return data
    },
    // 修改列，设置一个隐藏的 id，便于后面的多级表头寻找对应的列，否则找不到
    makeColumnsId(columns) {
      return columns.map(item => {
        if ('children' in item) this.makeColumnsId(item.children)
        item.__id = getRandomStr(6)
        return item
      })
    },
    makeColumns(cols) {
      // 在 data 时，this.allColumns 暂时为 undefined
      let columns = deepCopy(getAllColumns(cols))
      let left = []
      let right = []
      let center = []

      columns.forEach((column, index) => {
        column._index = index
        column._columnKey = columnKey++
        column.width = parseInt(column.width)
        column._width = column.width ? column.width : '' // update in handleResize()
        column._sortType = 'normal'

        if ('sortType' in column) {
          column._sortType = column.sortType
        }

        if (column.fixed && column.fixed === 'left') {
          left.push(column)
        } else if (column.fixed && column.fixed === 'right') {
          right.push(column)
        } else {
          center.push(column)
        }
      })
      return left.concat(center).concat(right)
    },
    // create a multiple table-head
    makeColumnRows(fixedType, cols) {
      return convertToRows(cols, fixedType)
    },
    exportCsv(params) {
      if (params.filename) {
        if (params.filename.indexOf('.csv') === -1) {
          params.filename += '.csv'
        }
      } else {
        params.filename = 'table.csv'
      }

      let columns = []
      let datas = []
      if (params.columns && params.data) {
        columns = params.columns
        datas = params.data
      } else {
        columns = this.allColumns
        if (!('original' in params)) params.original = true
        datas = params.original ? this.data : this.rebuildData
      }

      let noHeader = false
      if ('noHeader' in params) noHeader = params.noHeader

      const data = Csv(columns, datas, params, noHeader)
      if (params.callback) {
        params.callback(data)
      } else {
        ExportCsv.download(params.filename, data)
      }
    },
    dragAndDrop(newIndex, oldIndex, newData) {
      this.$emit('drag-drop', newIndex, oldIndex, newData)
    }
  },
  created() {
    if (!this.context) this.currentContext = this.$parent
    this.showSlotHeader = this.$slots.header !== undefined
    this.showSlotFooter = this.$slots.footer !== undefined
    this.rebuildData = this.makeDataWithSort()
  },
  mounted() {
    this.handleResize()
    this.$nextTick(() => {
      this.ready = true
    })
    on(window, 'resize', this.handleResize)
    addResizeListener(this.$el.parentElement, this.handleResize)
    this.$on('visible-change', (val) => {
      if (val) {
        this.handleResize()
      }
    })

    if (this.draggable) {
      const table = this.$refs.tbody.$el.querySelector('.bin-table-tbody')
      const self = this
      Sortable.create(table, {
        animation: 150,
        ghostClass: 'bin-table-ghost-class',
        handle: this.dragHandle,
        onEnd({ newIndex, oldIndex }) {
          let newData = deepCopy(self.data)
          const targetRow = newData.splice(oldIndex, 1)[0]
          newData.splice(newIndex, 0, targetRow)
          self.dragAndDrop(newIndex, oldIndex, newData)
        }
      })
    }
  },
  beforeDestroy() {
    off(window, 'resize', this.handleResize)
    removeResizeListener(this.$el.parentElement, this.handleResize)
  },
  watch: {
    data: {
      handler() {
        const oldDataLen = this.rebuildData.length
        this.objData = this.makeObjData()
        this.rebuildData = this.makeDataWithSort()
        this.handleResize()
        if (!oldDataLen) {
          this.fixedHeader()
        }
        // 这里暂时不用异步来判定删除最后一条数据的报错行为
        // setTimeout(() => {
        this.cloneData = deepCopy(this.data)
        // }, 0)
      },
      deep: true
    },
    columns: {
      handler() {
        // todo 这里有性能问题，可能是左右固定计算属性影响的
        const colsWithId = this.makeColumnsId(this.columns)
        this.allColumns = getAllColumns(colsWithId)
        this.cloneColumns = this.makeColumns(colsWithId)

        this.columnRows = this.makeColumnRows(false, colsWithId)
        this.leftFixedColumnRows = this.makeColumnRows('left', colsWithId)
        this.rightFixedColumnRows = this.makeColumnRows('right', colsWithId)
        this.rebuildData = this.makeDataWithSort()
        this.handleResize()
      },
      deep: true
    },
    height() {
      this.handleResize()
    },
    maxHeight() {
      this.handleResize()
    },
    showHorizontalScrollBar() {
      this.handleResize()
    },
    showVerticalScrollBar() {
      this.handleResize()
    }
  }
}
</script>
