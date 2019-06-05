<template>
<div>
  <header v-if="USERINFO.username" class="main-header">
    <ul>
      <li><span>欢迎您：{{USERINFO.username}}</span></li>
      <li><span @click="exitLogin">退出登录</span></li>
    </ul>
  </header>
  <div id="app">
    <router-view/>
  </div>
</div>
</template>

<script>
import Axios from 'axios';
import qs from 'qs';
import store from './vuex/store.js';
import {mapGetters} from 'vuex';
export default {
  name: 'App',
  data() {
    return {
      isHeader: false
    }
  },
  computed: {
      ...mapGetters(['USERINFO'])
  },
  methods: {
    exitLogin() {
      let params = {
          uid: this.USERINFO.uid
      }
      Axios.post('/internal/auth/logout', qs.stringify(params)).then(res => {
          if(res.data.errcode === 200) {
              let ls = window.sessionStorage;
              if (ls.getItem('USERINFO')) {
                  ls.removeItem('USERINFO');
              }
              this.USERINFO.username = '';
              this.$router.push({
                  path: '/',
              })
          }
      });
    },
  },
  store
}
</script>
<style lang="less" scoped>
  .main-header {
    overflow: hidden;
    padding: 0 15px;
    >ul {
      float: right;
      line-height: 40px;
      overflow: hidden;
      >li {
        float: left;
        &:last-child {
          cursor: pointer;
          color: #3790f7;
          text-decoration: underline;
          margin-left: 20px;
        }
      }
    }
    height: 40px;
    background: #f8f8f8;
  }
</style>

