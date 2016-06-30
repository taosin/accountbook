<template>
  <div>
    <group title="记账开始时间">
      <datetime :value.sync="value" format="YYYY-MM-DD" @on-change="change" title="start time"></datetime>
    </group>
    <group title="总共花费">
    </group>
      <cell v-for="li in lists" is-link>{{li.name}}---{{li.total}}</cell>
    <group>
      <cell title="人均花费">33333</cell>
    </group>
    <group title="计算支出">
      <cell title="陶鑫">33333</cell>
      <cell title="陶鑫">33333</cell>
      <cell title="陶鑫">33333</cell>
      <cell title="陶鑫">33333</cell>
    </group>
  </div>
</template>

<script>
import { Datetime, Group, Cell } from 'vux'

export default {
  components: {
    Datetime,
    Group,
    Cell
  },
  data () {
    return {
      value: '',
      lists: [
        { name: 'taoxin', total: '300' },
        { name: 'taoxin', total: '300' },
        { name: 'taoxin', total: '300' },
        { name: 'taoxin', total: '300' }
      ]
    }
  },
  methods: {
    change (value) {
      console.log('change', value)
    }
  }
}
</script>
