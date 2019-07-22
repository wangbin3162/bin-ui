<template>
  <div class="bin-message" :style="wrapStyles">
    <notice v-for="notice in notices" :key="notice.name"
            :type="notice.type" :render="notice.render"
            :content="notice.content" :closable="notice.closable"
            :transition-name="notice.transitionName"
            :duration="notice.duration" :name="notice.name"
            :on-close="notice.onClose"></notice>
  </div>
</template>

<script>
  import Notice from '../base/notice/notice.vue'
  import { transferIndex, transferIncrease } from '../../utils/transfer-queue'

  let seed = 0
  const now = Date.now()

  // 用时间戳设置为uuid
  function getUuid () {
    return 'binMessage_' + now + '_' + (seed++)
  }

  export default {
    components: { Notice },
    props: {
      styles: {
        type: Object,
        default: function () {
          return {
            top: '65px',
            left: '50%'
          }
        }
      }
    },
    data () {
      return {
        notices: [],
        tIndex: this.handleGetIndex()
      }
    },
    computed: {
      wrapStyles () {
        let styles = Object.assign({}, this.styles)
        styles['z-index'] = 1010 + this.tIndex
        return styles
      }
    },
    methods: {
      add (notice) {
        const name = notice.name || getUuid()
        let _notice = Object.assign({
          styles: {
            right: '50%'
          },
          name: name
        }, notice)
        this.notices.push(_notice)
        this.tIndex = this.handleGetIndex()
      },
      close (name) {
        const notices = this.notices
        for (let i = 0; i < notices.length; i++) {
          if (notices[i].name === name) {
            this.notices.splice(i, 1)
            break
          }
        }
      },
      closeAll () {
        this.notices = []
      },
      handleGetIndex () {
        transferIncrease()
        return transferIndex
      }
    }
  }
</script>
