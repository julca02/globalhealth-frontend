import { createRouter, createWebHashHistory } from 'vue-router'
import store from '../store'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/informacion',
    name: 'Informacion',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Info.vue')
  },
  {
    path: '/noticias',
    name: 'Noticias',
    component: () => import(/* webpackChunkName: "new" */'../views/News.vue')
  },

  {
    path: '/covid-noticias',
    name: 'Covid',
    component: () => import(/* webpackChunkName: "covid" */'../views/Covid.vue')
  },
  {
    path: '/ingresa',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */'../views/Login.vue')
  }, 
  {
    path: '/perfil',
    name: 'Perfil',
    component: () => import(/* webpackChunkName: "login" */'../views/auth/Profile.vue'),
    meta: {
      requiresAuth: true
    }
  },

  {
    path: "/:catchAll(.*)",
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "login" */'../components/layout/NotFound.vue'),
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.state.User.LoggedIn) {
      next();
    } else {
      next({ name: "Login" });
    }
  } else {
    next();
  }
});

export default router
