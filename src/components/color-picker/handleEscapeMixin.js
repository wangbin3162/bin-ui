export default {
  methods: {
    handleEscape (e) {
      this.dispatch('ColorPicker', 'escape-keydown', e)
    }
  }
}
