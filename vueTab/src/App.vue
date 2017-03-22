<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
import tab from './components/tab.vue';
export default {
  name: 'app',
  data(){
    return{}

  },
  components:{
    tab
  }
}
</script>
<style>
</style>
