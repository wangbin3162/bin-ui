<template>
  <div class="bin-table-wrapper">
    <div class="bin-table">
      <div v-if="data" class="bin-table-body">
        <table>
          <thead>
          <tr>
            <th v-for="(col,colIndex) in columns" :key="colIndex">{{ col.title }}</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(row, rowIndex) in data" :key="rowIndex">
            <td v-for="(col,colIndex) in columns" :key="colIndex">
              <template v-if="col.render">
                <render :row="row" :column="col" :index="rowIndex" :render="col.render"></render>
              </template>
              <template v-else-if="col.slot">
                <slot-scope :row="row" :column="col" :index="rowIndex"></slot-scope>
              </template>
              <template v-else>{{ row[col.key] }}</template>
            </td>
          </tr>
          <tr v-if="data.length===0" class="no-data">
            <td :colspan="columns.length" style="padding: 20px;text-align: center;"> 暂无数据</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  import Render from './render.js'
  import SlotScope from './slot.js'

  export default {
    name: 'BTable',
    components: { Render, SlotScope },
    provide () {
      return {
        tableRoot: this
      }
    },
    props: {
      columns: {
        type: Array,
        default () {
          return []
        }
      },
      data: {
        type: Array,
        default () {
          return []
        }
      }
    }
  }
</script>
