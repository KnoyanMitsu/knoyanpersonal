import { createRouter, createWebHistory } from 'vue-router'

import ErrorNotFound404 from '@/components/Error/ErrorNotFound404.vue'
import HelloWorld from '@/components/HelloWorld.vue'

const routes = [
  { path: '/',name: 'Home', component: HelloWorld },
  {
    path: '/:catchAll(.*)',
    name: '404',
    component: ErrorNotFound404,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router