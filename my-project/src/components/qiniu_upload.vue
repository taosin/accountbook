<!-- 七牛上传组件
    Taoxin 2016-05-24
-->
<template>
    <div>
        <div>
            <div id="container">
                <slot name="upload"></slot>
            </div>
        </div>
    </div>
</template>
<script>
  module.exports = {
    props: [ 'uploadurl' ],
    ready () {
      const self = this
      const uploader = Qiniu.uploader({
        runtimes: 'html5,flash,html4',
        browse_button: 'pickfiles',
        container: 'container',
        drop_element: 'container',
        max_file_size: '100mb',
        flash_swf_url: 'js/plupload/Moxie.swf',
        dragdrop: true,
        chunk_size: '4mb',
        uptoken_url: 'http://localhost:8116/admin/getToken',
        domain: 'http://7xrvyq.com1.z0.glb.clouddn.com/',
        get_new_uptoken: false,
        auto_start: true,
        init: {
          FileUploaded (up, file, info) {
            const domain = up.getOption('domain')
            const res = JSON.parse(info)
            const sourceLink = domain + res.key
            self.uploadurl = sourceLink
          },
          Error (up, err, errTip) {
          }
        }
      })
    },
    compiled () {
    },
    methods: {
    }
}
</script>