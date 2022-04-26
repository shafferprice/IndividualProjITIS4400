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
      path: '/aboutMe',
      name: 'aboutMe',
      component: () => import('../views/AboutMeView.vue')
    },
    {
      path: '/academics',
      name: 'academics',
      component: () => import('../views/AcademicsView.vue')
    },
    {
      path: '/connect',
      name: 'connect',
      component: () => import('../views/ConnectView.vue')
    }
  ]
})

export default router
