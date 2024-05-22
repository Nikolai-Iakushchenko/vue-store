import { createRouter, createWebHistory } from 'vue-router'
import CategoriesView from '@/views/CategoriesAndProductsView.vue'

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
