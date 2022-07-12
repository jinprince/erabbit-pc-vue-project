<template>

 <app-top-nav></app-top-nav>
<app-header></app-header>
  <main>
    <!-- 二级路由 -->
    <router-view></router-view>
  </main>
  <app-footer></app-footer>
</template>

<script>
import AppTopNav from '@/components/app-topnav'
import AppHeader from '@/components/app-header'
import AppFooter from '@/components/app-footer'
import { useStore } from 'vuex'
export default {
  name: 'xtx-layout',
  setup(){
    const store=useStore();
    store.dispatch('category/getList')
  },
  components:{
      AppTopNav,
      AppHeader,
      AppFooter
  }

}
</script>

<style scoped lang='less'></style>