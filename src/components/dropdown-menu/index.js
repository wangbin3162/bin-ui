import DropdownMenu from '../dropdown/dropdown-menu.vue'

/* istanbul ignore next */
DropdownMenu.install = function (Vue) {
  Vue.component(DropdownMenu.name, DropdownMenu)
}

export default DropdownMenu
