<!-- 注册页面 -->
<template>
	<div>
	<Group>
		<x-input title="帐号" :value.sync="username"></x-input>
		<x-input title="密码" type="password" :value.sync="password"></x-input>
		<x-input title="确认" type="password" :value.sync="cfmPassword"></x-input>
	</Group>
	<group>
     <x-button type="primary" @click="login">注册</x-button>
      <alert :show.sync="show" title="提示">注册成功！</alert>
    </group>
	</div>
</template>
<script>
  import { XInput, Group, Cell, XButton, Alert } from 'vux'
  import { doRegister } from './../service/accountService'
  export default {
    components: {
      XInput,
      XButton,
      Group,
      Alert,
      Cell
    },
    vuex: {
      getters: {
        result: state => state.regResult
      },
      actions: {
        doRegister
      }
    },
    data () {
      return {
        username: null,
        password: null,
        cfmPassword: null,
        show: false
      }
    },
    watch: {
      result () {
        if (this.result) {
          this.show = true
          window.router.go({
            path: '/login'
          })
        }
      }
    },
    methods: {
      login () {
        if (this.username && this.password && this.cfmPassword) {
          if (this.password === this.cfmPassword) {
            const data = {}
            data.username = this.username
            data.password = this.password
            this.doRegister(data)
          }
        }
      }
    }
}
</script>