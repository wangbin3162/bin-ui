<template>
  <div :class="classes" @mousedown.prevent>
    <div :class="[prefixCls + '-body']">
      <div :class="[prefixCls + '-content', prefixCls + '-content-left']">
        <div :class="[timePrefixCls + '-header']">
          <template v-if="showDate">{{ leftDatePanelLabel }}</template>
          <template v-else>开始时间</template>
        </div>
        <time-spinner
            ref="timeSpinner"
            :steps="steps"
            :show-seconds="showSeconds"
            :hours="value[0] && dateStart.getHours()"
            :minutes="value[0] && dateStart.getMinutes()"
            :seconds="value[0] && dateStart.getSeconds()"
            :disabled-hours="disabledHours"
            :disabled-minutes="disabledMinutes"
            :disabled-seconds="disabledSeconds"
            :hide-disabled-options="hideDisabledOptions"
            @change="handleStartChange"
            @pick-click="handlePickClick"></time-spinner>
      </div>
      <div :class="[prefixCls + '-content', prefixCls + '-content-right']">
        <div :class="[timePrefixCls + '-header']">
          <template v-if="showDate">{{ rightDatePanelLabel }}</template>
          <template v-else>结束时间</template>
        </div>
        <time-spinner
            ref="timeSpinnerEnd"
            :steps="steps"
            :show-seconds="showSeconds"
            :hours="value[1] && dateEnd.getHours()"
            :minutes="value[1] && dateEnd.getMinutes()"
            :seconds="value[1] && dateEnd.getSeconds()"
            :disabled-hours="disabledHours"
            :disabled-minutes="disabledMinutes"
            :disabled-seconds="disabledSeconds"
            :hide-disabled-options="hideDisabledOptions"
            @change="handleEndChange"
            @pick-click="handlePickClick"></time-spinner>
      </div>
      <Confirm
          v-if="confirm"
          @pick-clear="handlePickClear"
          @pick-success="handlePickSuccess"></Confirm>
    </div>
  </div>
</template>
<script>
import TimeSpinner from '../../base/time-spinner.vue'
import Confirm from '../../base/confirm.vue'
import Options from '../../util/time-mixins'

import Mixin from '../panel-mixin'

import { initTimeDate, formatDateLabels } from '../../util/util'

const prefixCls = 'bin-picker-panel'
const timePrefixCls = 'bin-time-picker'

const capitalize = (str) => str[0].toUpperCase() + str.slice(1)

export default {
  name: 'RangeTimePickerPanel',
  mixins: [Mixin, Options],
  components: { TimeSpinner, Confirm },
  props: {
    steps: {
      type: Array,
      default: () => []
    },
    format: {
      type: String,
      default: 'HH:mm:ss'
    },
    value: {
      type: Array,
      required: true
    }
  },
  data() {
    const [dateStart, dateEnd] = this.value.slice()
    return {
      prefixCls: prefixCls,
      timePrefixCls: timePrefixCls,
      showDate: false,
      dateStart: dateStart || initTimeDate(),
      dateEnd: dateEnd || initTimeDate()
    }
  },
  computed: {
    classes() {
      return [
        `${prefixCls}-body-wrapper`,
        `${timePrefixCls}-with-range`,
        {
          [`${timePrefixCls}-with-seconds`]: this.showSeconds
        }
      ]
    },
    showSeconds() {
      return !(this.format || '').match(/mm$/)
    },
    leftDatePanelLabel() {
      return this.panelLabelConfig(this.date)
    },
    rightDatePanelLabel() {
      return this.panelLabelConfig(this.dateEnd)
    }
  },
  watch: {
    value(dates) {
      const [dateStart, dateEnd] = dates.slice()
      this.dateStart = dateStart || initTimeDate()
      this.dateEnd = dateEnd || initTimeDate()
    }
  },
  methods: {
    panelLabelConfig(date) {
      const locale = 'zh-CN'
      const datePanelLabel = '[yyyy年] [m月]'
      const { labels, separator } = formatDateLabels(locale, datePanelLabel, date || initTimeDate())
      return [labels[0].label, separator, labels[1].label].join('')
    },
    handleChange(start, end, emit = true) {
      const dateStart = new Date(this.dateStart)
      let dateEnd = new Date(this.dateEnd)

      // set dateStart
      Object.keys(start).forEach(type => {
        dateStart[`set${capitalize(type)}`](start[type])
      })

      // set dateEnd
      Object.keys(end).forEach(type => {
        dateEnd[`set${capitalize(type)}`](end[type])
      })

      // judge endTime > startTime?
      if (dateEnd < dateStart) dateEnd = dateStart

      if (emit) this.$emit('pick', [dateStart, dateEnd], 'time')
    },
    handleStartChange(date) {
      this.handleChange(date, {})
    },
    handleEndChange(date) {
      this.handleChange({}, date)
    },
    updateScroll() {
      this.$refs.timeSpinner.updateScroll()
      this.$refs.timeSpinnerEnd.updateScroll()
    }
  },
  mounted() {
    if (this.$parent && this.$parent.$options.name === 'DatePicker') this.showDate = true
  }
}
</script>
