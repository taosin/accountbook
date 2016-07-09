<!-- 登录页面 -->
<template>
	<div>
	<Group>
		<x-input title="帐号" :value.sync="username"></x-input>
		<x-input title="密码" type="password" :value.sync="password"></x-input>
	</Group>
	<group>
     <x-button type="primary" @click="login">登录</x-button>
    </group>
	</div>
</template>
<script>
  import { XInput, Group, Cell, XButton, Alert } from 'vux'
  import { doLogin } from './../service/accountService'
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
        result: state => state.loginResult
      },
      actions: {
        doLogin
      }
    },
    data () {
      return {
        username: null,
        password: null
      }
    },
    watch: {
      result () {
        if (this.result) {
          window.router.go({
            path: '/index/'
          })
        }
      }
    },
    methods: {
      login () {
        if (this.username && this.password) {
          const data = {}
          data.username = this.username
          data.password = this.password
          this.doLogin(data)
        }
      }
    }
}
</script>