import type { RouteRecordRaw } from 'vue-router'
import FrontLayout from '@/layouts/front/index.vue'

const FRONT_ROUTES: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: FrontLayout,
    redirect: { name: 'home' },
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/views/front/home/index.vue'),
        meta: { title: '首页' }
      }
    ]
  }
]

export default FRONT_ROUTES
