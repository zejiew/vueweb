import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/survey/create',
    name: 'SurveyCreate',
    component: () => import('@/views/survey/Create.vue')
  },
  {
    path: '/survey/fill/:id',
    name: 'SurveyFill',
    component: () => import('@/views/survey/Fill.vue')
  },
  {
    path: '/survey/result/:id',
    name: 'SurveyResult',
    component: () => import('@/views/survey/Result.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router 