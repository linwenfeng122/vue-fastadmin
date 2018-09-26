<template>
  <el-autocomplete
  popper-class="my-autocomplete"
  v-model="state"
  :fetch-suggestions="querySearch"
  placeholder="搜索菜单"
  :trigger-on-focus="false"
  @select="handleSelect">
  <i
    class="el-icon-search el-input__icon"
    slot="suffix"
    @click="handleIconClick">
  </i>
  <template slot-scope="{ item }">
    <div class="name">{{ generateTitle(item.name) }}</div>
  </template>
</el-autocomplete>

</template>
<script>
import { constantRouterMap,asyncRouterMap } from '@/router'
import { generateTitle } from '@/utils/i18n'
export default {
  data() {
    return {
      restaurants: [],
        state: ''
    }
  },
  computed: {
      
  },
  mounted() {
      this.restaurants = this.routerFilter([...constantRouterMap,...asyncRouterMap]);
  },
  methods: {
       generateTitle,
        querySearch(queryString, cb) {
        var restaurants = this.restaurants;
        var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
        // 调用 callback 返回建议列表的数据
        cb(results);
      },
        routerFilter(arr) {
           let array = [];
           arr.forEach(item => {
               if (!item.children) {
                   if (item.path != '*')  array.push(item)
               }else{
                  item.children.forEach(item1 => {
                      if (!item1.children) {
                           item1.newPath = item.path + '/' + item1.path;
                           array.push(item1)
                      }else{

                      }
                  })
               }
           });
           return array;
       },
      createFilter(queryString) {
        return (restaurant) => {
          return (this.generateTitle(restaurant.name).indexOf(queryString.toLowerCase()) === 0);
        };
      },
      handleSelect(item) {
        // console.log(item);
        this.$store.dispatch("closeSubMenu");
        if (!item.newPath) this.$router.push({path: item.path})
        else this.$router.push({path: item.newPath})  
      },
      handleIconClick(ev) {
        //  this.state = "";
        // this.restaurants = [];
      }
  },
}
</script>
<style lang="scss" >
  .el-autocomplete{
    .el-input--suffix {
    .el-input__inner{
        width: 210px;
        height: 35px;
        margin:0 0 10px 10px;
        line-height: 35px;
        border: none;
        background-color: #374850;
        &:focus{
          background-color: #fff;
        }
    }

  }
  .el-input__suffix{
     height: 35px;
      .el-input__icon{
      line-height: 35px
    }
  }
  .my-autocomplete {
    li {
        line-height: normal;
        padding: 7px;

        .name {
        text-overflow: ellipsis;
        overflow: hidden;
        }
      }
   }
}

</style>