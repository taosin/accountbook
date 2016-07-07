<template>
  <div>
    <group >
      <x-input title="金额" v-model="money"></x-input>
      <x-input title="用途" v-model="usey"></x-input>
      <datetime :value.sync="date" format="YYYY-MM-DD HH:mm" title="时间" ></datetime>
      <x-input title="备注" v-model="remark"></x-input>
     
    </group>
    <group>
     <x-button type="primary" @click="submit">添加</x-button>
      <alert :show.sync="show" title="提示">添加成功！</alert>
    </group>
  </div>
</template>

<script>
  import { XInput, Group, Cell, XButton, Datetime, Alert } from 'vux'
  import { addAccount } from './../service/accountService'
  export default {
    components: {
      XInput,
      XButton,
      Group,
      Datetime,
      Alert,
      Cell
    },
    data () {
      return {
        date: '1231',
        money: '333',
        usey: '111',
        remark: '打的',
        show: false
      }
    },
    vuex: {
      getters: {
        result: state => state.addResult
      },
      actions: {
        addAccount
      }
    },
    methods: {
      submit () {
        // this.show = true
        const data = {}
        data.money = this.money
        data.usey = this.usey
        data.date = this.date
        data.remark = this.remark
        // debugger
        this.addAccount(data)
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
