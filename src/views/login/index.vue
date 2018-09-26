<template>
  <div class="login-con">
     <div class="login-screen">
        <div class="well">
           <div class="user-info">
               <div class="user-icon">
                 <img :src="avatar" />
               </div>
               <div class="user-name">用户名：任意 密码：任意</div>
           </div>
           <div class="login-form">
              <el-input v-model="name" class="login-input">
                 <i slot="prefix" class="el-input__icon el-icon-mobile-phone"></i>
              </el-input>
              <el-input v-model="psw" type="password" class="login-input">
                 <i slot="prefix" class="el-input__icon el-icon-view"></i>
              </el-input>
               <el-button type="primary" :loading="loading" @click="handleLogin">登录</el-button>
           </div>
        </div>
     </div>
  </div>
</template>
<script>
// import { fetchPost } from '@/api/login'

import avatar from '@/assets/user_images/avatar.png'
import { getToken, setToken, removeToken } from '@/utils/auth'
export default {
  data() {
    return {
       name: "",
       psw: "",
       loading: false,
       avatar
    }
  },
  computed: {
      
  },
  mounted() {
  },
  methods: {
    handleLogin() {
      // this.loading = true
      // this.$store.dispatch('LoginByUsername', {"username":this.name,"password": this.psw}).then(() => {
      //       //  console.log("resoved")
      //       this.loading = false
      //       this.$router.push({ path: '/' })
      //       //  console.log("123")
      //     },() => {
      //       this.loading = false
      //       this.$router.push({ path: '/' })
      //       //  console.log("123")
      //     })
      //  this.$router.addRoutes(asyncRouterMap)
       setToken("admin")
       this.$router.push({ path: '/' })
    }
  }
}
</script>
<style lang="scss" scoped>
    .login-con {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background: url('../../assets/login_images/905.jpg') no-repeat;
      background-size: cover;
      .login-screen {
        max-width: 400px;
        .well {
          min-height: 20px;
          padding: 19px;
          margin-bottom: 20px;
          border: 1px solid #e3e3e3;
          border-radius: 3px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          background: rgba(255,255,255, 0.2);
          .user-info {
            .user-icon {
              width: 100px;
              height: 100px;
              margin:  10px auto;
              border-radius: 50%;
              overflow: hidden;
              img {
                width: 100%;
                height: 100%;
              }
            }
            .user-name {
               margin-bottom: 8px;
               font-size: 13px;
               text-align: center;
               color: #fff;
            }
          }
        
          .login-form {
            margin-top: 20px;
            .login-input {
               margin-bottom: 15px;
            }
            .el-button {
              width: 100%;
              margin-top: 10px;
              background-color: #18bc9c;
              border-color: transparent;
              &.el-button--primary:focus,&.el-button--primary:hover {
                  background-color: #128f76;
                  border-color: #11866f;
                  color: #fff;
              }
            }
          }
        }

      }
    }
</style>