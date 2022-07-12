// 分类模块
//存储的分类数据
import {topCategory} from '@/api/constants'
import {findAllCategory} from '@/api/category'
export default {
    namespaced: true,
    state () {
      return {
        // 分类信息集合
        list: topCategory.map(item=>({name:item}))
      }
    },
    mutations:{
      setCategory(state,headCategory){
        state.list=headCategory
      },
      show(state,item){
        const category=state.list.find(category=>category.id===item.id)
        category.open=true
      },
      hide(state,item){
        const category=state.list.find(category=>category.id===item.id)
        category.open=false
      },
    },
    actions:{
      async getList({commit}){
        const {result}=await findAllCategory()
        console.log(result)
        result.forEach(item => {
          item.open=false
        });
        commit('setCategory',result)
      }
    }
  }