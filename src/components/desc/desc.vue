<template>
  <div class="bin-desc">
    <div v-if="title || extra || $slots.title || $slots.extra" class="bin-desc__header">
      <div class="bin-desc__title">
        <slot name="title">{{ title }}</slot>
      </div>
      <div class="bin-desc__extra">
        <slot name="extra">{{ extra }}</slot>
      </div>
    </div>

    <div class="bin-desc__body">
      <table :class="[{'is-bordered': border}, size ? `bin-desc--${size}` : '']">
        <tbody>
        <template v-for="(row, index) in rows">
          <b-desc-row :row="row" :key="index"/>
        </template>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import DescItem from './description-item'
import BDescRow from './descriptions-row.vue'

export default {
  name: 'BDesc',
  components: {
    BDescRow,
    [DescItem.name]: DescItem
  },
  provide() {
    return { BDesc: this }
  },
  props: {
    border: {
      type: Boolean,
      default: false
    },
    column: {
      type: Number,
      default: 3
    },
    labelWidth: {
      type: Number
    },
    size: {
      type: String,
      validator: (val) => ['large', 'default', 'small', 'mini'].includes(val),
      default: 'default'
    },
    title: {
      type: String,
      default: ''
    },
    extra: {
      type: String,
      default: ''
    }
  },
  computed: {
    rows() {
      const flattedChildren = children => {
        const temp = Array.isArray(children) ? children : [children]
        const res = []
        temp.forEach(child => {
          if (Array.isArray(child.children)) {
            res.push(...flattedChildren(child.children))
          } else {
            res.push(child)
          }
        })
        return res
      }

      const filledNode = (node, span, count, isLast = false) => {
        if (!node.componentOptions.propsData) {
          node.componentOptions.propsData = {}
        }
        if (span > count) {
          node.componentOptions.propsData.span = count
        }
        if (isLast) {
          // set the max span, cause of the last td
          node.componentOptions.propsData.span = this.column
        }
        return node
      }

      const children = flattedChildren(this.$slots.default).filter(node => {
        return node.componentOptions && node.componentOptions.tag === 'b-desc-item'
      })
      const rows = []
      let temp = []
      let count = this.column

      children.forEach((node, index) => {
        const span = (node.componentOptions.propsData && node.componentOptions.propsData.span)
            ? node.componentOptions.propsData.span : 1

        if (index === children.length - 1) {
          temp.push(filledNode(node, span, count, true))
          rows.push(temp)
          return
        }

        if (span < count) {
          count -= span
          temp.push(node)
        } else {
          temp.push(filledNode(node, span, count))
          rows.push(temp)
          count = this.column
          temp = []
        }
      })
      return rows
    }
  }
}
</script>
