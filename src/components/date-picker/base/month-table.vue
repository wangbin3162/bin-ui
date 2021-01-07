<template>
  <div :class="classes">
        <span
            :class="getCellCls(cell)"
            v-for="(cell,index) in cells"
            :key="index"
            @click.stop="handleClick(cell)"
            @mouseenter="handleMouseMove(cell)"
        >
            <em>{{ cell.text }}</em>
        </span>
  </div>
</template>
<script>
import { clearHours } from '../util/util'
import { deepCopy } from '../../../utils/util'
import mixin from './mixin'

const prefixCls = 'bin-date-picker-cells'

export default {
  mixins: [mixin],
  computed: {
    classes() {
      return [
        `${prefixCls}`,
        `${prefixCls}-month`
      ]
    },
    cells() {
      let cells = []
      const cellTmpl = {
        text: '',
        selected: false,
        disabled: false
      }

      const tableYear = this.tableDate.getFullYear()
      const selectedDays = this.dates.filter(Boolean).map(date => clearHours(new Date(date.getFullYear(), date.getMonth(), 1)))
      const focusedDate = clearHours(new Date(this.focusedDate.getFullYear(), this.focusedDate.getMonth(), 1))

      for (let i = 0; i < 12; i++) {
        const cell = deepCopy(cellTmpl)
        cell.date = new Date(tableYear, i, 1)
        cell.text = this.tCell(i + 1)
        const day = clearHours(cell.date)
        cell.disabled = typeof this.disabledDate === 'function' && this.disabledDate(cell.date) && this.selectionMode === 'month'
        cell.selected = selectedDays.includes(day)
        cell.focused = day === focusedDate
        cells.push(cell)
      }

      return cells
    }
  },
  methods: {
    getCellCls(cell) {
      return [
        `${prefixCls}-cell`,
        {
          [`${prefixCls}-cell-selected`]: cell.selected,
          [`${prefixCls}-cell-disabled`]: cell.disabled,
          [`${prefixCls}-cell-focused`]: cell.focused,
          [`${prefixCls}-cell-range`]: cell.range && !cell.start && !cell.end
        }
      ]
    },
    tCell(nr) {
      return `${nr}月`
    }
  }
}
</script>
