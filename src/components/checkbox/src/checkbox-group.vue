<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>
<script>
  import { oneOf, findComponentsDownward } from '../../../utils/util'

  const prefixCls = 'bin-checkbox-group'

  export default {
    name: 'BCheckboxGroup',
    props: {
      value: {
        type: Array,
        default () {
          return []
        }
      },
      size: {
        validator (value) {
          return oneOf(value, ['small', 'large', 'default'])
        },
        default: 'default'
      }
    },
    data () {
      return {
        currentValue: this.value,
        childrens: []
      }
    },
    computed: {
      classes () {
        return [
          `${prefixCls}`,
          {
            [`bin-checkbox-${this.size}`]: !!this.size
          }
        ]
      }
    },
    mounted () {
      this.updateModel(true)
    },
    methods: {
      updateModel (update) {
        this.childrens = findComponentsDownward(this, 'BCheckbox')
        if (this.childrens) {
          const {value} = this
          this.childrens.forEach(child => {
            child.model = value

            if (update) {
              child.currentValue = value.indexOf(child.label) >= 0
              child.group = true
            }
          })
        }
      },
      change (data) {
        this.currentValue = data
        this.$emit('input', data)
        this.$emit('on-change', data)
      }
    },
    watch: {
      value () {
        this.updateModel(true)
      }
    }
  }
</script>
