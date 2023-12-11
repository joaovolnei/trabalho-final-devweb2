import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/filmes',
      name: 'Movies',
      component: () => import('../views/MoviesView.vue')
    },
    {
      path: '/tv',
      name: 'TV',
      component: () => import('../views/TVView.vue')
    }
  ]
})

export default router
