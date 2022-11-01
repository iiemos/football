import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/nft-managefinances',
      name: 'nft-managefinances',
      component: () => import('../views/Nft-managefinances.vue')
    },
    {
      path: '/fswap',
      name: 'fswap',
      component: () => import('../views/Fswap.vue')
    },
    {
      path: '/my-nfts',
      name: 'my-nfts',
      component: () => import('../views/My-nfts.vue')
    },
    {
      path: '/Schedule',
      name: 'Schedule',
      component: () => import('../views/Schedule.vue')
    },
  ]
})

export default router
