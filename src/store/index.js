import { createStore } from 'vuex'
import user from './modules/user'
import cart from './modules/cart'
import category from './modules/category'
import createPersistedstate from 'vuex-persistedstate'

export default createStore({
  state: {
   // 数据
  },
  mutations: {
  // 改数据函数
  },
  actions: {
   // 请求数据函数
  },
  modules: {
  // 分模块
  user,
  cart,
  category
  },
  getters:{
  // vuex的计算属性
  },
  plugins:[
    createPersistedstate({
      key: 'erabbit-client-pc-store',
      paths: ['user', 'cart']
    })
  ]
})
