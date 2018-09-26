<template>
  <div class="user-info">
     <slot>
         <div class="img-left">
            <img :src="avatar" />
         </div>
         <div class="user-right">
            <div class="user-title">Admin</div>
            <div class="user-status">
                <i class="success"></i>
                <p>在线</p>
            </div>
         </div>
     </slot>
  </div>
</template>
<script>
import avatar from '@/assets/user_images/avatar.png'
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
       
  },
}
</script>
<style lang="scss" scoped>
  .user-info {
    display: flex;
    align-items:center;
    padding: 10px;
    margin-bottom: 10px;
    .img-left {
      width: 45px;
      height: 45px;
      border-radius: 50%;
      overflow: hidden;
      img {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
    .user-right {
       margin-left: 15px;
       .user-title{
         margin-bottom: 5px;
         font-weight: 200;
         font-size: 16px;
         color: #fff;
       }
       .user-status {
          display: flex;
          align-items: center;
          .success {
             width: 12px;
             height: 12px;
             border-radius: 50%;
             background-color: aqua;
          }
          p {
            margin-left: 4px;
            font-size: 14px;
            color: #fff;
          }
       }
    }
  }
</style>