<template>
  <div>
   <router-view  transition-mode="out-in"></router-view>
    <tabbar>
      <tabbar-item v-link="{path:'/index/add'}" selected>
        <img slot="icon" >
        <span slot="label">记账</span>
      </tabbar-item >
      <tabbar-item show-dot v-link="{path:'/index/list'}">
        <img slot="icon" >
        <span slot="label">查账</span>
      </tabbar-item>
      <tabbar-item >
        <img slot="icon" v-link="{path:'/index/deletes'}">
        <span slot="label">销账</span>
      </tabbar-item>
      <tabbar-item>
        <img slot="icon" v-link="{path:'/index/settings'}">
        <span slot="label">系统</span>
      </tabbar-item>
    </tabbar>

  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vux'
export default {
  components: {
    Tabbar,
    TabbarItem
  },
  methods: {
    test () {
    }
  }
}
</script>
<style type="text/css">
  .weui_tabbar{
    position: fixed;
  }
</style>