import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/stocks'
    },
    {
      path: '/stocks',
      name: 'stocks',
      component: () => import('../views/StocksView.vue')
    },
    {
      path: '/fx',
      name: 'Foreign Exchange',
      component: () => import('../views/ForeignExchange.vue')
    }
  ]
})

export default router
