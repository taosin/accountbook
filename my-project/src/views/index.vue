<template>
  <div>
    <tabbar>
      <tabbar-item>
        <img slot="icon" >
        <span slot="label">Wechat</span>
      </tabbar-item>
      <tabbar-item show-dot>
        <img slot="icon" >
        <span slot="label">Message</span>
      </tabbar-item>
      <tabbar-item selected>
        <img slot="icon" >
        <span slot="label">Explore</span>
      </tabbar-item>
      <tabbar-item>
        <img slot="icon" >
        <span slot="label">News</span>
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
  }
}
</script>