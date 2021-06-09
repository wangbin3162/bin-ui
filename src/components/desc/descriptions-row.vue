<template>
  <tr>
    <template v-for="(cell, index) in row">
      <template v-if="BDesc.border">
        <b-desc-cell :cell="cell" tag="td" type="label" :key="`tr3-${index}-label`"></b-desc-cell>
        <b-desc-cell :cell="cell" tag="td" type="content" :key="`tr3-${index}-content`"></b-desc-cell>
      </template>
      <b-desc-cell v-else :cell="cell" tag="td" type="both" :key="`tr3-${index}-both`"></b-desc-cell>
    </template>
  </tr>
</template>

<script>
import BDescCell from './descriptions-cell'

export default {
  name: 'BDescRow',
  inject: ['BDesc'],
  components: { BDescCell },
  props: {
    row: {
      type: Array
    }
  }
}
</script>
