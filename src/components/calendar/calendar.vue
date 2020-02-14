<template>
  <div class="bin-calendar" :class="{'card':mini}">
    <div class="bin-calendar-header">
      <template v-if="mini">
        <span>{{headerTitle}}</span>
        <b-button-group>
          <b-button size="mini" @click="handlePrevMonth" icon="doubleleft"></b-button>
          <b-button size="mini" @click="handleToday">今天</b-button>
          <b-button size="mini" @click="handleNextMonth" icon="doubleright"></b-button>
        </b-button-group>
      </template>
      <template v-else>
        <div class="bin-calendar-header-title">
          {{headerTitle}}
        </div>
        <b-button-group>
          <b-button size="mini" @click="handlePrevMonth">上个月</b-button>
          <b-button size="mini" @click="handleToday">今天</b-button>
          <b-button size="mini" @click="handleNextMonth">下个月</b-button>
        </b-button-group>
      </template>
    </div>
    <ul class="bin-calendar-week">
      <li v-for="(item, index) in calendarTitleArr" :key="index" class="bin-calendar-week-item">{{item}}</li>
    </ul>
    <ul class="bin-calendar-body" :style="bodyStyle">
      <li v-for="(item, index) in visibleCalendar" :key="index"
          class="bin-calendar-date-view" :style="dateViewStyle"
          :class="[item.monthFlag,{'is-current-day': item.isCurrentDay},{'is-selected': item.selected}]"
          @click="handleSelectDay(item)">
          <span>
              {{ item.day }}
          </span>
      </li>
    </ul>
  </div>
</template>

<script>
  import * as utils from './util'

  export default {
    name: 'BCalendar',
    props: {
      gridHeight: {
        type: String
      },
      textAlign: {
        type: String
      },
      mini: {
        type: Boolean
      },
      bodyStyle: {
        type: Object
      },
      dayStyle: {
        type: Object
      }
    },
    data() {
      return {
        time: null,
        calendarTitleArr: ['一', '二', '三', '四', '五', '六', '日'],
        visibleCalendar: []
      }
    },
    created() {
      let { year, month, day } = utils.getNewDate(new Date())
      this.time = { year, month, day }
      this.initVisibleCalendar()
    },
    computed: {
      dateViewStyle() {
        if (this.dayStyle) {
          return this.dayStyle
        }
        return {
          height: this.gridHeight,
          textAlign: this.textAlign
        }
      },
      headerTitle() {
        return this.time ? `${this.time.year} 年 ${this.time.month + 1} 月` : ''
      }
    },
    methods: {
      // 初始化日期列表
      initVisibleCalendar() {
        let calendarArr = []
        let { year, month } = utils.getNewDate(utils.getDate(this.time.year, this.time.month, 1))
        let { year: currentYear, month: currentMonth } = utils.getNewDate(new Date())
        // 获取当月的第一天
        let currentFirstDay = utils.getDate(year, month, 1)
        // 获取第一天是星期几
        let weekDay = currentFirstDay.getDay()
        if (weekDay === 0) {
          weekDay = 7
        }
        let isCurrentMonth = currentYear === year && currentMonth === month
        let startTime = currentFirstDay - (weekDay - 1) * 24 * 60 * 60 * 1000
        for (let i = 0; i < 42; i++) {
          const tempDate = new Date(startTime + i * 24 * 60 * 60 * 1000)
          let monthFlag = this.isPrevOrNextMonth(tempDate)
          let isCurrentDay = this.isCurrentDay(tempDate)
          let yearTemp = year
          let monthTemp = monthFlag === 'prev' ? month : (monthFlag === 'next') ? month + 2 : month + 1
          if (monthTemp === 0) {
            monthTemp = 12
            yearTemp -= 1
          }
          if (monthTemp === 13) {
            monthTemp = 1
            yearTemp += 1
          }
          const day = {
            date: tempDate,
            year: yearTemp,
            month: monthTemp,
            day: tempDate.getDate(),
            monthFlag: monthFlag,
            isCurrentDay: isCurrentDay,
            selected: isCurrentMonth ? isCurrentDay : i === weekDay - 1
          }
          calendarArr.push(day)
          if (day.selected) {
            this.$emit('on-select-day', day)
          }
        }
        this.visibleCalendar = calendarArr
      },
      // 是否是当前月
      isPrevOrNextMonth(date) {
        let { year: currentYear, month: currentMonth } = utils.getNewDate(utils.getDate(this.time.year, this.time.month, 1))
        let { year, month } = utils.getNewDate(date)
        if (currentYear === year && currentMonth === month) {
          return null
        }
        if (currentMonth === 0 && month === 11) return 'prev'
        if (currentMonth === 11 && month === 0) return 'next'
        if (currentMonth > month) return 'prev'
        if (currentMonth < month) return 'next'
        return null
      },
      // 是否是今天
      isCurrentDay(date) {
        let { year: currentYear, month: currentMonth, day: currentDay } = utils.getNewDate(new Date())
        let { year, month, day } = utils.getNewDate(date)
        return currentYear === year && currentMonth === month && currentDay === day
      },
      // 上一个月
      handlePrevMonth() {
        let prevMonth = utils.getDate(this.time.year, this.time.month, 1)
        prevMonth.setMonth(prevMonth.getMonth() - 1)
        this.time = utils.getNewDate(prevMonth)
        this.initVisibleCalendar()
        this.$emit('handlePrevMonth')
      },
      // 下一个月
      handleNextMonth() {
        let nextMonth = utils.getDate(this.time.year, this.time.month, 1)
        nextMonth.setMonth(nextMonth.getMonth() + 1)
        this.time = utils.getNewDate(nextMonth)
        this.initVisibleCalendar()
        this.$emit('handleNextMonth')
      },
      // 点击回到今天
      handleToday() {
        this.time = utils.getNewDate(new Date())
        this.initVisibleCalendar()
        this.$emit('handleToday')
      },
      // 点击某一天
      handleSelectDay(item) {
        if (!item.monthFlag) {
          this.setSelected(item)
          return
        }
        if (item.monthFlag === 'prev') {
          this.handlePrevMonth()
          // 获取新数组的当前天
          let select = this.visibleCalendar.find(day => {
            return day.year === item.year && day.month === item.month && day.day === item.day
          })
          select && this.setSelected(select)
        }
        if (item.monthFlag === 'next') {
          this.handleNextMonth()
          // 获取新数组的当前天
          let select = this.visibleCalendar.find(day => {
            return day.year === item.year && day.month === item.month && day.day === item.day
          })
          select && this.setSelected(select)
        }
      },
      setSelected(day) {
        this.visibleCalendar.map(x => {
          x.selected = false
        })
        this.$set(day, 'selected', true)
        this.$emit('on-select-day', day)
      }
    }
  }
</script>
