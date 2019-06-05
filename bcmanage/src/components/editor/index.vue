<template>
  <div>
    <VueUeditorWrap 
      v-model="message" 
      :config="editorConfig" 
      @ready="ready"
      style="width: 1040px;"/>
  </div>
</template>
<script>
import VueUeditorWrap from 'vue-ueditor-wrap'
import evtHub from '@/common/eventHub.js'
export default {
  name: "Editor",
  components: {
    VueUeditorWrap
  },
  props: ["content"],
  data() {
    return {
      evtHub: evtHub,
      message: '',
      editorConfig: {
        // 编辑器不自动被内容撑高
        autoHeightEnabled: false,
        // 初始容器高度
        initialFrameHeight: 300,
        // 初始容器宽度
        initialFrameWidth: '100%',
        // 上传文件接口 功能没问题，报错属于正常，若需要验证可使用http://35.201.165.105:8000/controller.php
        // 调试完毕请切换回/static/UEditor/php/controller.php
        serverUrl: '/static/UEditor/php/controller.php',
      }
    };
  },
  mounted() {
    this.message = this.content;
  },
  methods: {
    ready(editorInstance) {
      this.evtHub.$emit('editor.data', editorInstance);
    }
  }
};
</script>
