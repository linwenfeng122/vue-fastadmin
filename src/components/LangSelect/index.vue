<template>
  <el-dropdown trigger="click" class='international' @command="handleSetLanguage">
    <el-button class="el-dropdown-link">
        {{language == 'zh' ? '中文': '英文'}}<i class="el-icon-arrow-down el-icon--right"></i>
    </el-button>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item command="zh" :disabled="language==='zh'">中文</el-dropdown-item>
      <el-dropdown-item command="en" :disabled="language==='en'">English</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
import Cookies from 'js-cookie'
export default {
  data() {
    return {
      language: 'zh'
    }
  },
  mounted() {
     if (Cookies.get('language')) this.language = Cookies.get('language')
  },
  methods: {
    handleSetLanguage(lang) {
      this.$i18n.locale = lang
      this.language = lang;
       Cookies.set('language', lang)
      this.$message({
        message: 'switch language success',
        type: 'success'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
    // .international{
    //  /deep/ .el-button {
    //       padding: 8px 12px;
    //  }
    //  /deep/ .el-button:focus, /deep/ .el-button:hover {
    //     // color: #fff;
    //     border-color: #c6e2ff;
    //     background-color: #ecf5ff;
    //     }
    //  }
        .el-button {
              padding: 8px 12px;
          }
        .el-button:focus,  .el-button:hover {
        // color: #fff;
        border-color: #c6e2ff;
        background-color: #ecf5ff;
        }

</style>


