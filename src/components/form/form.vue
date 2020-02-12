<template>
  <form :class="classes" :autocomplete="autocomplete">
    <slot></slot>
  </form>
</template>
<script>
  import { oneOf } from '../../utils/util'

  const prefixCls = 'bin-form'

  export default {
    name: 'BForm',
    props: {
      model: {
        type: Object
      },
      rules: {
        type: Object
      },
      labelWidth: {
        type: Number
      },
      labelPosition: {
        validator(value) {
          return oneOf(value, ['left', 'right', 'top'])
        },
        default: 'right'
      },
      inline: {
        type: Boolean,
        default: false
      },
      showMessage: {
        type: Boolean,
        default: true
      },
      autocomplete: {
        validator(value) {
          return oneOf(value, ['on', 'off'])
        },
        default: 'off'
      }
    },
    provide() {
      return { form: this }
    },
    data() {
      return {
        fields: []
      }
    },
    computed: {
      classes() {
        return [
          `${prefixCls}`,
          `${prefixCls}-label-${this.labelPosition}`,
          {
            [`${prefixCls}-inline`]: this.inline
          }
        ]
      }
    },
    methods: {
      resetFields() {
        this.fields.forEach(field => {
          field.resetField()
        })
      },
      validate(callback) {
        return new Promise(resolve => {
          let valid = true
          let count = 0
          this.fields.forEach(field => {
            field.validate('', errors => {
              if (errors) {
                valid = false
              }
              if (++count === this.fields.length) {
                // all finish
                resolve(valid)
                if (typeof callback === 'function') {
                  callback(valid)
                }
              }
            })
          })
        })
      },
      validateField(prop, cb) {
        const field = this.fields.filter(field => field.prop === prop)[0]
        if (!field) {
          throw new Error('[bin-ui warn]: 必须使用有效的 props 字符串调用 validateField !')
        }
        field.validate('', cb)
      }
    },
    watch: {
      rules() {
        this.validate()
      }
    },
    created() {
      this.$on('on-form-item-add', (field) => {
        if (field) this.fields.push(field)
        return false
      })
      this.$on('on-form-item-remove', (field) => {
        if (field.prop) this.fields.splice(this.fields.indexOf(field), 1)
        return false
      })
    }
  }
</script>
