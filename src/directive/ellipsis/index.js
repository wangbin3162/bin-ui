export default {
  inserted (el, binding) {
    el.innerHTML = el.innerHTML.substr(0, binding.value) + '...'
  }
}
