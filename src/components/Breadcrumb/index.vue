<template>
 <el-breadcrumb class="app-breadcrumb" separator="/">
  <transition-group name="breadcrumb">
    <el-breadcrumb-item v-for="(item,index) in levelList" :key="item.path" v-if='item.meta.title'>
       <span v-if='item.redirect==="noredirect"||index==levelList.length-1' class="no-redirect">{{generateTitle(item.meta.title)}}</span>
      <router-link v-else :to="item.path">{{generateTitle(item.meta.title)}}</router-link>
    </el-breadcrumb-item>
  </transition-group>
</el-breadcrumb>
</template>
<script>
import {generateTitle} from '@/utils/i18n'
export default {
  data() {
    return {
      levelList: null
    }
  },
  mounted() {
      this.getBreadcrumb()
  },
  methods: {
    generateTitle,
    getBreadcrumb() {
       let matched = this.$route.matched.filter(item => item.name);
      const first = matched[0];
      if (first && first.name !== 'dashboard') {
        matched = [...[{ path: '/dashboard', meta: { title: 'dashboard' }}],...matched]
      }
      this.levelList = matched
    }
  },
  watch: {
    $route() {
       this.getBreadcrumb()
    }
  }
}
</script>
<style lang="scss" scoped>
  .el-breadcrumb__inner a, .el-breadcrumb__inner.is-link{
    color: #fff;
  }
  .app-breadcrumb.el-breadcrumb {
    display: inline-block;
    font-size: 14px;
    line-height: 50px;
    margin-left: 10px;
    .no-redirect {
      color: #fff;
      cursor: text;
    }
  }
  .breadcrumb-enter-active,
  .breadcrumb-leave-active {
     transition: all .5s;
  }
  .breadcrumb-enter,.breadcrumb-leave-to{
    opacity: 0;
    transform: translateX(20px);
  }
</style>