import Vue from 'vue'
import Router from 'vue-router'
import ElementUI from 'element-ui'
import Login from '@/containers/login'
import Register from '@/containers/register'
import StudentNotes from '@/containers/studentnotes'
import 'element-ui/lib/theme-chalk/index.css';
import '@/common/reset.css'
Vue.use(Router)
Vue.use(ElementUI)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/studentnotes',
      name: 'StudentNotes',
      component: StudentNotes
    }
  ]
})
