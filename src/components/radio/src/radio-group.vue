<template>
  <div :class="classes" :name="name">
    <slot></slot>
  </div>
</template>
<script>
  import { oneOf, findComponentsDownward } from '../../../utils/util'

  const prefixCls = 'bin-radio-group'

  let seed = 0
  const now = Date.now()
  const getUuid = () => `binRadioGroup_${now}_${seed++}`

  export default {
    name: 'BRadioGroup',
    props: {
      value: {
        type: [String, Number],
        default: ''
      },
      size: {
        validator (value) {
          return oneOf(value, ['small', 'large', 'default'])
        },
        default: 'default'
      },
      name: {
        type: String,
        default: getUuid
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
            [`${prefixCls}-${this.size}`]: !!this.size,
            [`bin-radio-${this.size}`]: !!this.size
          }
        ]
      }
    },
    mounted () {
      this.updateValue()
    },
    methods: {
      updateValue () {
        this.childrens = findComponentsDownward(this, 'BRadio')
        if (this.childrens) {
          this.childrens.forEach(child => {
            child.currentValue = this.currentValue === child.label
            child.group = true
          })
        }
      },
      change (data) {
        this.currentValue = data.value
        this.updateValue()
        this.$emit('input', data.value)
        this.$emit('on-change', data.value)
      }
    },
    watch: {
      value () {
        if (this.currentValue !== this.value) {
          this.currentValue = this.value
          this.$nextTick(() => {
            this.updateValue()
          })
        }
      }
    }
  }
</script>
