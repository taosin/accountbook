<template>
  <div>
    <group>
      <cell title="个人头像" link="/index/header"></cell>
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
    <x-button type="warn" @click="logout" v-if="flag">注销</x-button>
    <x-button type="primary" @click="tologin" v-else>登录帐号</x-button>
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
      phone: true,
      flag: false
    }
  },
  methods: {
    change (value) {
      console.log('change:', value)
    },
    logout () {
      this.flag = !this.flag
      window.router.go({
        path: './../login'
      })
    },
    tologin () {
      this.flag = !this.flag
      window.router.go({
        path: './../login'
      })
    }
  }
}
</script>

<style>
</style>
