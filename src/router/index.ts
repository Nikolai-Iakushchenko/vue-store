import { createRouter, createWebHistory } from 'vue-router'
import CategoriesView from '@/views/CategoriesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'categories',
      component: CategoriesView
    },
    {
      path: '/cart',
      name: 'cart',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/CartView.vue')
    },
    {
      path: '/category/:categoryId',
      name: 'category',
      component: () => import('@/views/CategoryView.vue'),
      props: true
    },
    {
      path: '/product/:productId',
      component: () => import('@/views/ProductView.vue'),
      props: true
    }
  ]
})

export default router
