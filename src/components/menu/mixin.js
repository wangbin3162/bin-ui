import { findComponentUpward, findComponentsUpward } from '../../utils/util'

export default {
  data() {
    return {
      menu: findComponentUpward(this, 'BMenu')
    }
  },
  computed: {
    hasParentSubmenu() {
      return !!findComponentUpward(this, 'BSubmenu')
    },
    parentSubmenuNum() {
      return findComponentsUpward(this, 'BSubmenu').length
    },
    mode() {
      return this.menu.mode
    }
  }
}
