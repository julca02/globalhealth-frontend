import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: "/:catchAll(.*)",
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "login" */'../components/layout/NotFound.vue'),
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
    path: '/auth/',
    name: 'Auth',
    component: () => import(/* webpackChunkName: "Auth" */'../views/auth/Auth.vue'),
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: 'medical-history',
        name: 'MedicalHistory',
        component: () => import(/* webpackChunkName: "MedicalHistory" */ '../views/auth/MedicalHistory.vue'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'register-user',
        name: 'RegisterUser',
        component: () => import(/* webpackChunkName: "MedicalHistory" */ '../views/auth/Register.vue'),
        meta: {
          requiresAuth: true
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.state.User.LoggedIn) {
      if (store.state.User.user && store.state.User.user.rol.name === 'Admin') {
        next();
      } else if (store.state.User.user && store.state.User.user.rol.name === 'Doctor') {
        next();
      } else {
        next({ name: "Home" });
      }
    } else {
      next({ name: "Login" });
    }
  } else {
    next();
  }
});

export default router