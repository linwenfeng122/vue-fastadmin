<template>
  <div class="menu-warpper">
     <template v-for="item in routes" v-if="!item.hidden&&item.children">
          <router-link :to="item.path+'/'+item.children[0].path" v-if="hasOneShowingChildren(item.children) && !item.children[0].children &&!item.alwaysShow"  :key="item.children[0].name">
                <el-menu-item :index="item.path+'/'+item.children[0].path" :class="{'submenu-title-noDropdown':!isNest}" class="tree-one">
                  <i class="el-icon-message" v-if="item.children[0].meta&&item.children[0].meta.icon"></i>
                   <span slot="title" v-if="item.children[0].meta&&item.children[0].meta.title">{{generateTitle(item.children[0].meta.title)}}</span>
                </el-menu-item>
          </router-link>
          <el-submenu v-else :index="item.name||item.path" :key="item.name">
             <template slot="title">
                <i class="el-icon-menu" v-if="item.meta&&item.meta.icon"></i>
                <span  v-if="item.meta&&item.meta.title">{{generateTitle(item.meta.title)}}</span>
              </template>
              <template v-for="child in item.children" v-if="!child.hidden">
                <sidebar-item :routes='[child]' :key="child.name" v-if="child.children&& child.children.length > 0" />

                 <router-link v-else :to="item.path+'/'+child.path" :key="child.name">
                  <el-menu-item :index="item.path+'/'+child.path">
                     <i class="el-icon-menu" v-if="child.meta&&child.meta.icon"></i>
                    <span v-if="child.meta&&child.meta.title" slot="title">{{generateTitle(child.meta.title)}}</span>
                  </el-menu-item>
                </router-link>
              </template>
          </el-submenu>
     </template>
  </div>
</template>
<script>
import {generateTitle} from '@/utils/i18n'
export default {
  name: 'SidebarItem',
  props: {
    routes: {
      type: Array
    },
    isNest: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      
    }
  },
  methods: {
    generateTitle,
     hasOneShowingChildren(children) {
      //  console.log(children)
      // const showingChildren = children.filter(item => {
      //   return !item.hidden
      // })
      if (children.length === 1) {
        return true
      }
      return false
    }, 
  }
}
</script>
<style lang="scss" scoped>
</style>