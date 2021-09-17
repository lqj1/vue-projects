import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: "/", // 访问 / 重定向
    redirect: "/login"
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../components/Login.vue')
  },
  {
    path: '/home',
    name: 'Home',
    redirect: '/welcome',
    component: () => import('../components/Home.vue'),
    children: [{
        path: '/welcome',
        name: 'Welcome',
        component: () => import('../components/Welcome.vue')
      },
      {
        path: '/users',
        name: 'User',
        component: () => import('../components/user/User.vue')
      }
    ]
  },

]

const router = new VueRouter({
  routes
})
// 挂在路由导航守卫
router.beforeEach((to, from, next) => {
  // 如果用户访问的是登录页，直接放行
  if (to.path === '/login') {
    return next()
  }
  // 从 sessionStorage 中获取保存的token值
  const tokenStr = window.sessionStorage.getItem('token')
  // 没有token，就强制跳转到登录页
  if (!tokenStr) {
    return next('/login')
  }
  // 否则，放行
  next()
})

export default router