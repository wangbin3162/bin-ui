<template>
  <div class="bin-anchor-wrapper">
    <div class="bin-anchor">
      <div class="bin-anchor-ink">
        <b-icon v-if="icon" :name="icon" :style="iconStyle" :color="activeColorStr"></b-icon>
        <span v-show="!icon&&showInk" class="bin-anchor-ink-ball"
              :style="{borderColor:activeColorStr, top: `${inkTop}px`}"></span>

        <span v-show="!icon&&!showInk" class="bin-anchor-ink-line"
              :style="{backgroundColor:activeColorStr, top: `${inkTop}px`}"></span>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { off, on, scrollTop } from '../../utils/dom'
import { findComponentsDownward, findComponentUpward } from '../../utils/util'

export default {
  name: 'BAnchor',
  provide() {
    return {
      anchorCom: this
    }
  },
  data() {
    return {
      inkTop: 8,
      currentLink: '', // current show link =>  #href -> currentLink = #href
      currentId: '', // current show title id =>  #href -> currentId = href
      titlesOffsetArr: []
    }
  },
  props: {
    icon: String,
    iconSize: Number,
    activeColor: String,
    offsetTop: {
      type: Number,
      default: 0
    },
    bounds: {
      type: Number,
      default: 5
    },
    showInk: {
      type: Boolean,
      default: false
    },
    scrollOffset: {
      type: Number,
      default: 0
    },
    containerId: String
  },
  computed: {
    iconStyle() {
      let size = this.iconSize ? this.iconSize : 14
      return {
        width: `${size}px`,
        height: `${size}px`,
        fontSize: `${size}px`,
        top: `${this.inkTop}px`,
        transform: `translate(-${(size - 2) * 0.5}px, -${(size - 14) / 2}px)`
      }
    },
    activeColorStr() {
      const colorMap = {
        primary: '#1089ff',
        success: '#52c41a',
        info: '#35495E',
        warning: '#fea638',
        danger: '#ff4d4f'
      }
      return this.activeColor ? (colorMap[this.activeColor] ? colorMap[this.activeColor] : this.activeColor) : null
    }
  },
  methods: {
    chooseLink(current) {
      this.currentLink = current
      this.currentId = current.slice(1)
      this.$emit('select', this.currentLink)
      const anchor = document.getElementById(this.currentId)
      if (!anchor) return
      this.handleScrollTo(anchor.offsetTop)
      this.handleSetInkTop()
    },
    handleScrollTo(to) {
      const offsetTop = to - this.scrollOffset
      this.animating = true
      const currentPos = this.domEl.pageYOffset || this.domEl.scrollTop
      scrollTop(this.domEl, currentPos, offsetTop, 1000, () => {
        this.animating = false
      })
    },
    handleSetInkTop() {
      const currentLinkElementA = this.$el.querySelector(`a[data-href="${this.currentLink}"]`)
      if (!currentLinkElementA) return
      const elementATop = currentLinkElementA.offsetTop
      this.inkTop = (elementATop < 0 ? this.offsetTop : elementATop)
    },
    handleScroll() {
      if (this.animating) return
      this.updateTitleOffset()
      const scrollTop = this.domEl.pageYOffset || this.domEl.scrollTop
      this.getCurrentScrollAtTitleId(scrollTop)
    },
    updateTitleOffset() {
      const links = findComponentsDownward(this, 'BAnchorLink').map(link => {
        return link.href
      })
      const idArr = links.map(link => {
        return link.split('#')[1]
      })
      let offsetArr = []
      idArr.forEach(id => {
        const titleEle = document.getElementById(id)
        if (titleEle) {
          offsetArr.push({
            link: `#${id}`,
            offset: titleEle.offsetTop - this.scrollOffset
          })
        }
      })
      this.titlesOffsetArr = offsetArr
    },
    getCurrentScrollAtTitleId(scrollTop) {
      let i = -1
      let len = this.titlesOffsetArr.length
      let titleItem = {
        link: '#',
        offset: 0
      }
      scrollTop += this.bounds
      while (++i < len) {
        let currentEle = this.titlesOffsetArr[i]
        let nextEle = this.titlesOffsetArr[i + 1]
        if (scrollTop >= currentEle.offset && scrollTop < ((nextEle && nextEle.offset) || Infinity)) {
          titleItem = this.titlesOffsetArr[i]
          break
        }
      }
      this.currentLink = titleItem.link
      this.handleSetInkTop()
    }
  },
  mounted() {
    this.domEl = window
    if (this.containerId) {
      this.domEl = document.getElementById(this.containerId) || window
    } else {
      const scroll = findComponentUpward(this, 'BScrollbar')
      this.domEl = scroll ? scroll.$el.querySelector('.bin-scrollbar__wrap') : window
    }

    on(this.domEl, 'scroll', this.handleScroll)
    on(window, 'resize', this.handleScroll)

    this.$nextTick(() => {
      this.handleScroll()
      this.handleSetInkTop()
      this.updateTitleOffset()
    })
  },
  beforeDestroy() {
    off(this.domEl, 'scroll', this.handleScroll)
    off(window, 'resize', this.handleScroll)
  }
}
</script>
