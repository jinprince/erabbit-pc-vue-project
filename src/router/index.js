import { createRouter, createWebHashHistory } from 'vue-router'
const Layout =()=>import('@/views/Layout')
const Home =()=>import('@/views/home/index')
import TopCategory from '@/views/category'
import SubCategory from '@/views/category/sub'

const routes = [
  {
    path:"/",
    component:Layout,
    children:[
      {
        path:'/',
        component:Home
      },
      {
        path:'/category/:id',
        component:TopCategory
      },
      {
        path:'/category/sub/:id',
        component:SubCategory
      },

    ]
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
