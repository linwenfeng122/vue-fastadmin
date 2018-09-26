<template>
  <el-menu class="navbar" mode="horizontal">
    <hamburger class="hamburger-container" :toggleClick="toggleSideBar" :is-active="sidebar.opened" />
    <breadcrumb class="breadcrumb-container"></breadcrumb>
     <div class="right-menu">
       <el-tooltip effect="dark" :content="$t('navbar.screenfull')" placement="bottom">
        <screenfull class="screenfull right-menu-item"></screenfull>
      </el-tooltip>
       <lang-select  class="right-menu-item" />
       <user-menu class="right-menu-item" />
     </div>
  </el-menu>

</template>
<script>
import Hamburger from '@/components/Hamburger'
import Breadcrumb from '@/components/Breadcrumb'
import LangSelect from '@/components/LangSelect'
import Screenfull from '@/components/Screenfull'
import UserMenu from '@/components/UserMenu'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      
    }
  },
  computed: {
      ...mapGetters([
        'sidebar',
      ])
  },
  methods: {
       toggleSideBar() {
          this.$store.dispatch('toggleSideBar')
       }
  },
  components: {
     Hamburger,
     Breadcrumb,
     LangSelect,
     Screenfull,
     UserMenu
  },
}
</script>
<style lang="scss" scoped>
   .hideSidebar {
     .navbar{
    //  position: fixed;
    //  left: 36px;
    //  top: 0;
    //  width: calc(100% - 36px);
     height: 50px;
     flex: 0 0 50px;
     line-height: 50px;
     border-radius: 0px !important;
     background-color: #18bc9c;
    //  z-index: 999;
     }
   }
   .navbar{
    //  position: fixed;
    //  left: 230px;
    //  top: 0;
    //  width: calc(100% - 230px);
     height: 50px;
     line-height: 50px;
     border-radius: 0px !important;
     background-color: #18bc9c;
    //  z-index: 999;
     .hamburger-container {
       line-height: 58px;
       height: 50px;
       float: left;
       padding: 0 10px;
      }
      .breadcrumb-container{
        float: left;
      }
       .right-menu {
          float: right;
          height: 50px;
          margin-right: 20px;
           .screenfull {
              // vertical-align: middle;
              height: 30px;
           }
           .right-menu-item {
            display: inline-block;
            margin: 0 8px;
          }
           .international{
            vertical-align: top;
          }
       }
   }
</style>