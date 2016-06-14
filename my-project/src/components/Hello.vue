<template>
  <div>
    <group>
      <cell title="记账" value="add"></cell>
      <cell title="查账" value="sel"></cell>
      <cell title="算账" value="ana"></cell>
      <cell title="销账" value="del"></cell>
    </group>
  </div>
</template>

<script>
import Group from 'vux/dist/components/group'
import Cell from 'vux/dist/components/cell'

export default {
  components: {
    Group,
    Cell
  }
}
</script>

<style>
@import '~vux/dist/vux.css';
</style>