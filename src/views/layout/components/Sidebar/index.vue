<template>
        <el-scrollbar wrapClass="scrollbar-wrapper">
             <el-menu
              :default-active="$route.path"
              :collapse="isCollapse"
               background-color="#222d32"
               text-color="#b8c7ce"
               active-text-color="#fff"
               :default-openeds="opened"
               @select="select"
              >
              <nav class="fast-title">
                 FastAdmin
              </nav>
              <user />
              <search />
              <sidebar-item :routes="constantRouterMap" />
            </el-menu>
        </el-scrollbar>
</template>
<script>
import { constantRouterMap,asyncRouterMap } from '@/router'
import SidebarItem from './SidebarItem'
import User from '@/components/User'
import Search from '@/components/Search'
import { mapGetters } from 'vuex'
export default {
  data() {
      return {
         constantRouterMap: [...constantRouterMap,...asyncRouterMap],
         opened: []
      }
  },
  computed: {
      ...mapGetters([
        'sidebar',
        'isClose'
      ]),
      isCollapse() {
        return !this.sidebar.opened
    }
  },
  methods: {
   select(index,indexPath) {
        // console.log(indexPath)
        this.opened = [...indexPath];
   }
  },
  components: {
     SidebarItem,
     User,
     Search
  },
  watch: {
    isClose(newVal,odlVal) {
         if (!this.$route.meta.search) this.opened = [...this.$route.path]
         else {
            this.$route.matched.forEach(item => {
                this.opened.push(item.path)
            });
         }
    }
  }
}
</script>
