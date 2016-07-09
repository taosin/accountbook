<template>
  <div>
    <group >
      <x-input title="金额" :value.sync="money"></x-input>
      <x-input title="用途" :value.sync="usey"></x-input>
      <datetime :value.sync="date" format="YYYY-MM-DD HH:mm" title="时间" ></datetime>
      <x-input title="备注" :value.sync="remark"></x-input>
     
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
        date: this.formatDate(new Date(), 'yyyy-MM-dd hh:mm'),
        money: null,
        usey: null,
        remark: null,
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
    watch: {
      result () {
        if (this.result) {
          debugger
          this.show = true
        }
      }
    },
    methods: {
      submit () {
        const data = {}
        if (this.money && this.usey && this.date && this.remark) {
          data.money = this.money
          data.usey = this.usey
          data.date = this.date
          data.remark = this.remark
          this.addAccount(data)
        }
      },
      // 日期格式化
      formatDate (input, format) {
        if (!input || !format) {
          return ''
        }
        input = new Date(new Date(input).getTime() - 8 * 3600 * 1000)
        var date = {
          'M+': input.getMonth() + 1,
          'd+': input.getDate(),
          'h+': input.getHours() + 8,
          'm+': input.getMinutes(),
          's+': input.getSeconds(),
          'q+': Math.floor((input.getMonth() + 3) / 3),
          'S+': input.getMilliseconds()
        }
        if (/(y+)/i.test(format)) {
          format = format.replace(RegExp.$1, (input.getFullYear() + '').substr(4 - RegExp.$1.length))
        }
        for (var k in date) {
          if (new RegExp('(' + k + ')').test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length === 1 ? date[k] : ('00' + date[k]).substr(('' + date[k]).length))
          }
        }
        return format
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
