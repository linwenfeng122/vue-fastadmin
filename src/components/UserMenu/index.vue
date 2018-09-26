<template>
  <el-popover
   width="300"
   popper-class="popover"
   trigger="click">
   
    <div class="user-info-menu" slot="reference">
         <div class="img-left">
            <img :src="avatar">
         </div>
         <div class="user-right">
            <div class="user-title">Admin</div>
         </div>
    </div>
    <div class="user-detail">
      <div class="user-header">
          <img :src="avatar" />
          <p class="user-name">admin</p>
          <p class="date">2018-10-9</p>
      </div>
      <div class="user-body"></div>
      <div class="user-footer">
         <el-button type="info" size="small" icon="el-icon-setting">个人配置</el-button>
         <el-button type="danger" size="small" @click="logout" icon="el-icon-caret-right">注销</el-button>
      </div>
    </div>
  </el-popover>
</template>
<script>
import avatar from '@/assets/user_images/avatar.png'
import {removeToken} from '@/utils/auth'
export default {
  data() {
    return {
      avatar
    }
  },
  computed: {
      
  },
  mounted() {
      
  },
  methods: {
    logout() {
       removeToken()
       location.reload()
    }
  },
}
</script>
<style lang="scss">
    .popover {
      padding:0;
    }
</style>

<style lang="scss" scoped>
  .user-info-menu {
    padding: 0 10px;
    &:hover{
         background: rgba(0,0,0,0.1);
    }
    display: flex;
    align-items:center;
    .img-left {
      width: 25px;
      height: 25px;
      border-radius: 50%;
      overflow: hidden;
      img {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
    .user-right {
       margin-left: 10px;
       .user-title{
         font-weight: 200;
         font-size: 12px;
         color: #fff;
       }
    }
  }
  .user-detail {
    .user-header{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 175px;
      background-color: #18bc9c;
      img {
        width: 90px;
        height: 90px;
        border-radius: 50%;

      }
      .user-name{

      }
    }
    .user-body {

    }
    .user-footer{
      display: flex;
      height: 50px;
      margin:0 10px;
      justify-content: space-between;
      align-items: center;
    }
  }
</style>