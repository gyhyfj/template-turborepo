import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/pages/index.vue'), // 注意这种行内回调函数import组件的写法
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export { router } // 导出router
