<template>
  <div>
    <group>
    <cell title="店铺门头照片"></cell>
      <div class="header-img"></div>
    </group>
    <group>
    <upload :uploadurl.sync='url'>
    	<div slot="upload">
    		<x-button type="primary"  id="pickfiles">点击上传</x-button>
    	</div>
    </upload>
    
    </group>
  </div>
</template>

<script>
import { Cell, Group, XButton } from 'vux'
import Upload from './../components/qiniu_upload.vue'

export default {
  ready () {
  },
  components: {
    Group,
    Cell,
    XButton,
    Upload
  },
  data () {
    return {
      phone: true,
      url: []
    }
  },
  methods: {
    change (value) {
      console.log('change:', value)
    }
  }
}
</script>

<style>
.header-img {
    height: 200px;
    border: 1px solid #f4f4f4;
    border-left: none;
    border-right: none;
}
</style>
