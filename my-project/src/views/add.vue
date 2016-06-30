<template>
  <div>
    <group >
      <x-input title="金额" v-model="money"></x-input>
      <x-input title="用途" v-model="usey"></x-input>
      <datetime :value.sync="date" format="YYYY-MM-DD HH:mm" @on-change="change" title="时间" ></datetime>
      <x-input title="备注" v-model="remark"></x-input>
      <x-button type="primary" @click="submit">添加</x-button>
      <alert :show.sync="show" title="提示">添加成功！</alert>
    </group>
  </div>
</template>

<script>
  import { XInput, Group, XButton, Cell, Datetime, Alert } from 'vux'

  export default {
    components: {
      XInput,
      XButton,
      Group,
      Cell,
      Datetime,
      Alert
    },
    data () {
      return {
        date: '',
        money: '',
        usey: '',
        remark: '',
        show: false
      }
    },
    methods: {
      change (val) {
        console.log(val)
      },
      submit () {
        this.show = true
      }
    }
  }
</script>
<style >
  .weui_cell_ft .weui_btn {
    margin-left: 5px;
    vertical-align: middle;
    display: inline-block;
  }
</style>
