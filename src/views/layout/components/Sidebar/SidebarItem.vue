<template>
  <div class="menu-warpper">
     <template v-for="item in routes" v-if="item.children">
          <router-link :to="{name:item.children[0].name}" v-if="hasOneShowingChildren(item.children) && !item.children[0].children &&!item.alwaysShow"  :key="item.children[0].name">
                <el-menu-item :index="item.children[0].name" :class="{'submenu-title-noDropdown':!isNest}" class="tree-one">
                  <i class="el-icon-message" v-if="item.children[0].meta&&item.children[0].meta.icon"></i>
                   <span slot="title" v-if="item.children[0].meta&&item.children[0].meta.title">{{generateTitle(item.children[0].meta.title)}}</span>
                </el-menu-item>
          </router-link>
          <el-submenu v-else :index="item.name" :key="item.name">
             <template slot="title">
                <i class="el-icon-menu" v-if="item.meta&&item.meta.icon"></i>
                <span v-if="item.meta&&item.meta.title">{{generateTitle(item.meta.title)}}</span>
              </template>
              <template v-for="child in item.children" v-if="!child.hidden">
                <sidebar-item :routes="[child]" :key="child.name" v-if="child.children&& child.children.length > 0" />

                 <router-link v-else :to="{name: child.name}" :key="child.name">
                  <el-menu-item :index="child.name">
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
    },
    basePath: {
      type: String,
      default: ''
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