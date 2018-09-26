<template>
  <div class="app-wrapper" :class="classObj">
     <sidebar class="sidebar-container" />
      <div class="main-container" >
         <navbar />
         <tags-view />
          <app-main />
      </div>

    
  </div>
</template>

<script>
import { Navbar, Sidebar, AppMain,TagsView} from "./components"
export default {
  name: 'layout',
  data () {
    return {
      open: {
         width: '230px !important',
        flex: '0 0 230px!important',
      },
      close: {
         width: '36px !important',
        flex: '0 0 36px!important',
      }
    }
  },
  computed: {
    sidebar() {
      return this.$store.state.app.sidebar
    },
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === 'mobile'
      }
    }
  },
  components: {
     Navbar, 
     Sidebar,
     TagsView,
     AppMain
  }
}
</script>
<style lang="scss" scoped>
  //  .warpper-scroll{
  //    height: 100%;
  //    overflow-y: auto;
  //  }
</style>

