import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login.vue'
import Disease from '../views/disease.vue'
import TodoList from '../views/todoList.vue'
import UserList from '../views/userList.vue'
import UserContent from '../views/userContent.vue'
import MessageList from '../views/messageList.vue'
import VisitList from '../views/visitList.vue'
import VisitContent from '../views/visitContent.vue'
import VisitRemind from '../views/visitRemind.vue'
import MessageContent from '../views/messageContent.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login,
    meta: {
      keepAlive: false,
      title: "登录"
    },
  },
  // 首页
  {
    path: '/disease',
    name: 'disease',
    component: Disease,
    meta: {
      keepAlive: false,
      title: "慢病管理"
    },
  },
  // 二级
  {
    path: '/todoList',
    name: 'todoList',
    component: TodoList,
    meta: {
      keepAlive: false,
      title: "待办事项"
    },
  },
  {
    path: '/userList',
    name: 'userList',
    component: UserList,
    meta: {
      keepAlive: false,
      title: "服务对象"
    },
  },
  // 三级
    {
      path: '/messageList',
      name: 'messageList',
      component: MessageList,
      meta: {
        keepAlive: false,
        title: "消息"
      },
    },
    {
      path: '/visitList',
      name: 'visitList',
      component: VisitList,
      meta: {
        keepAlive: false,
        title: "随访嘱托"
      },
    },
    {
      path: '/visitRemind',
      name: 'visitRemind',
      component: VisitRemind,
      meta: {
        keepAlive: false,
        title: "随访提醒"
      },
    },
    {
      path: '/userContent',
      name: 'userContent',
      component: UserContent,
      meta: {
        keepAlive: false,
        title: "个人资料"
      },
    },
    // 四级
    {
      path: '/messageContent',
      name: 'messageContent',
      component: MessageContent,
      meta: {
        keepAlive: false,
        title: "消息详情"
      },
    },
    {
      path: '/visitContent',
      name: 'visitContent',
      component: VisitContent,
      meta: {
        keepAlive: false,
        title: "编辑嘱托"
      },
    },

]

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router
