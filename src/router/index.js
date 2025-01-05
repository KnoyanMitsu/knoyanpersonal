import HelloWorld from '@/components/HelloWorld.vue'
import ErrorNotFound404 from '@/components/Error/ErrorNotFound404.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/',name: 'Home', component: HelloWorld },
    {
      path: '/:catchAll(.*)',
      name: '404',
      component: ErrorNotFound404,
    },
  ],
})

export default router
