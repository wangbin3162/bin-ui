<script>
  const returnArrayFn = () => []

  export default {
    props: {
      options: {
        type: Array,
        default: returnArrayFn
      },
      slotOptions: {
        type: Array,
        default: returnArrayFn
      },
      slotUpdateHook: {
        type: Function,
        default: () => {
        }
      }
    },
    functional: true,
    render (h, { props, parent }) {
      // 为了检测$slot子/选项中的变化，我们做了这个修改
      // 因此，我们可以触发父计算属性，并使所有内容都处于响应状态
      // 尽管$slot.default不是
      if (props.slotOptions !== parent.$slots.default) props.slotUpdateHook()
      return props.options
    }
  }
</script>
