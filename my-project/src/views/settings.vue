<template>
  <div>
    <group>
      <cell title="启用个人头像" value="已启用"></cell>
    </group>
    <tip>账单列表中功能是否显示个人头像</tip>

    <group>
      <switch title="绑定手机" :value.sync="phone"></switch>
    </group>
    <tip>绑定手机后可用手机登录</tip>

    <group>
      <cell title="账号安全" is-link></cell>
    </group>
    <tip>设置个人登陆帐号和密码</tip>

    <group>
      <cell title="频道设置" is-link></cell>
    </group>
    <tip>设置频道</tip>
    <x-button type="warn" @click="logout">注销</x-button>
  </div>
</template>

<script>
import { Number, Cell, Group, Tip, Switch, XButton } from 'vux'

export default {
  ready () {
  },
  components: {
    Number,
    Group,
    Tip,
    Switch,
    Cell,
    XButton
  },
  data () {
    return {
      phone: true
    }
  },
  methods: {
    change (value) {
      console.log('change:', value)
    },
    logout () {
      console.info('success')
    }
  }
}
</script>

<style>
</style>
