<template>
  <section class="app-main">
    <transition name="fade" mode="out-in">
      <!-- <keep-alive :include="cachedViews"> -->
        <router-view></router-view>
      <!-- </keep-alive> -->
    </transition>
  </section>
</template>
<script>
export default {
  data() {
    return {
      
    }
  },
  computed: {
      
  },
  mounted() {
      
  },
  methods: {
       
  },
  components: {
     
  },
}
</script>
<style lang="scss" scoped>
</style>