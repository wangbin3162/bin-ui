<template>
  <div class="draggable-wrap">
    <div flex="box:mean">
      <div style="margin-right: 20px;">sortable
        <div id="example1" class="list-group col">
          <div class="list-group-item">Item 1</div>
          <div class="list-group-item">Item 2</div>
          <div class="list-group-item">Item 3</div>
          <div class="list-group-item">Item 4</div>
          <div class="list-group-item">Item 5</div>
          <div class="list-group-item">Item 6</div>
        </div>
      </div>
      <div>draggable
        <draggable :list="list" class="list-group col"
                   v-bind="{ animation: 200, ghostClass:'ghost',handle:'.handle'}">
          <div class="list-group-item" v-for="element in list" :key="element.name">
            <span class="handle"><b-icon name="ios-move"/></span>
            {{ element.name }}
          </div>
        </draggable>
      </div>
    </div>
    <b-divider/>
    <div>
      <a href="https://gitee.com/wangbin3162/bin-ui/blob/master/examples/components/draggable-demo.vue"
         target="_blank">示例代码</a>
    </div>
  </div>
</template>

<script>
  import Sortable, { Swap } from 'sortablejs'
  import Draggable from 'vuedraggable'

  export default {
    name: 'draggable-demo',
    components: { Draggable },
    data() {
      return {
        enabled: true,
        list: [
          { name: 'Item 1', id: 1 },
          { name: 'Item 2', id: 2 },
          { name: 'Item 3', id: 3 },
          { name: 'Item 4', id: 4 },
          { name: 'Item 5', id: 5 },
          { name: 'Item 6', id: 6 }
        ],
        dragging: false
      }
    },
    mounted() {
      // Sortable.mount(new Swap())
      Sortable.create(document.getElementById('example1'), {
        animation: 150,
        ghostClass: 'blue-background-class'
      })
    }
  }
</script>

<style scoped lang="stylus">
  .draggable-wrap {
    border: 1px solid #eeeeee;
    padding: 24px;
    margin-top: 24px;
  }

  .list-group {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0;
    &.col {
      -ms-flex-preferred-size: 0;
      flex-basis: 0;
      -ms-flex-positive: 1;
      flex-grow: 1;
      max-width: 100%;
    }
  }
  .list-group-item {
    position: relative;
    display: block;
    padding: 0 1.25rem;
    line-height: 45px;
    margin-bottom: -1px;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, .125);
    .handle {
      cursor: grabbing;
    }
  }
  .blue-background-class {
    background: #86c2ff;
  }
  .ghost {
    opacity: 0.5;
    background: #a7e3f3;
  }
</style>
