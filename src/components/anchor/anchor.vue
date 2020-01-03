<template>
  <div class="bin-anchor-wrapper">
    <div class="bin-anchor">
      <div class="bin-anchor-ink">
        <b-icon v-if="icon" :name="icon" :style="{top: `${inkTop}px`}"></b-icon>
        <span v-show="!icon&&showInk" class="bin-anchor-ink-ball" :style="{top: `${inkTop}px`}"></span>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import { scrollTop, on, off } from '../../utils/dom'
  import { findComponentUpward, findComponentsDownward } from '../../utils/util'

  export default {
    name: 'BAnchor',
    provide () {
      return {
        anchorCom: this
      }
    },
    data () {
      return {
        inkTop: 8,
        currentLink: '', // current show link =>  #href -> currentLink = #href
        currentId: '', // current show title id =>  #href -> currentId = href
        titlesOffsetArr: []
      }
    },
    props: {
      icon: String,
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
        default: true
      },
      scrollOffset: {
        type: Number,
        default: 0
      }
    },
    methods: {
      chooseLink (current) {
        this.currentLink = current
        this.currentId = current.slice(1)
        this.$emit('on-select', this.currentLink)
        const anchor = document.getElementById(this.currentId)
        if (!anchor) return
        this.handleScrollTo(anchor.offsetTop)
        this.handleSetInkTop()
      },
      handleScrollTo (to) {
        const offsetTop = to - this.scrollOffset
        this.animating = true
        scrollTop(this.domEl, this.domEl.scrollTop, offsetTop, 1000, () => {
          this.animating = false
        })
      },
      handleSetInkTop () {
        const currentLinkElementA = document.querySelector(`a[data-href="${this.currentLink}"]`)
        if (!currentLinkElementA) return
        const elementATop = currentLinkElementA.offsetTop
        this.inkTop = (elementATop < 0 ? this.offsetTop : elementATop)
      },
      handleScroll () {
        if (this.animating) return
        this.updateTitleOffset()
        const scrollTop = this.domEl.pageYOffset || this.domEl.scrollTop
        this.getCurrentScrollAtTitleId(scrollTop)
      },
      updateTitleOffset () {
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
              offset: titleEle.offsetTop
            })
          }
        })
        this.titlesOffsetArr = offsetArr
      },
      getCurrentScrollAtTitleId (scrollTop) {
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
    mounted () {
      this.scroll = findComponentUpward(this, 'BScrollbar')
      this.domEl = this.scroll ? this.scroll.$el.querySelector('.bin-scrollbar__wrap') : window

      this.scrollEvent = this.$util.debounce(this.handleScroll, 10)
      on(this.domEl, 'scroll', this.scrollEvent)
      on(window, 'resize', this.scrollEvent)

      this.$nextTick(() => {
        this.handleScroll()
        this.handleSetInkTop()
        this.updateTitleOffset()
      })
    },
    beforeDestroy () {
      off(this.domEl, 'scroll', this.scrollEvent)
      off(window, 'resize', this.scrollEvent)
    }
  }
</script>
