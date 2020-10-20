const prefixCls = 'bin-picker-panel'
const datePrefixCls = 'bin-date-picker'

export default {
  props: {
    confirm: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    iconBtnCls(direction, type = '') {
      return [
        `${prefixCls}-icon-btn`,
        `${datePrefixCls}-${direction}-btn`,
        `${datePrefixCls}-${direction}-btn-arrow${type}`
      ]
    },
    handleShortcutClick(shortcut) {
      if (shortcut.value) this.$emit('pick', shortcut.value())
      if (shortcut.onClick) shortcut.onClick(this)
    },
    handlePickClear() {
      this.resetView()
      this.$emit('pick-clear')
    },
    handlePickSuccess() {
      this.resetView()
      this.$emit('pick-success')
    },
    handlePickClick() {
      this.$emit('pick-click')
    },
    resetView() {
      setTimeout(() => {
        this.currentView = this.selectionMode
      }, 500) // 500ms so the dropdown can close before changing
    },
    handleClear() {
      this.dates = this.dates.map(() => null)
      this.rangeState = {}
      this.$emit('pick', this.dates)
      this.handleConfirm()
    },
    handleConfirm(visible, type) {
      this.$emit('pick', this.dates, visible, type || this.type)
    },
    onToggleVisibility(open) {
      const { timeSpinner, timeSpinnerEnd } = this.$refs
      if (open && timeSpinner) timeSpinner.updateScroll()
      if (open && timeSpinnerEnd) timeSpinnerEnd.updateScroll()
    }
  }
}
