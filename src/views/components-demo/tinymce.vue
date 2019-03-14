<template>
  <div class="components-container">
    <code>
      <!-- {{ $t('components.tinymceTips') }}
      <a target="_blank" class="link-type" href="https://panjiachen.github.io/vue-element-admin-site/component/rich-editor.html"> {{ $t('components.documentation') }}</a>
       -->
         code
    </code>
    <div>
      <tinymce :height="400" v-model="content"/>
    </div>
    <div class="editor-content" v-html="content"/>
  </div>
</template>

<script>
import Tinymce from '@/components/Tinymce'

export default {
  name: 'TinymceDemo',
  components: { Tinymce },
  data() {
    return {
      content:'hhh'
    }
  }
}
</script>

<style scoped>
.editor-content{
  margin-top: 20px;
}
</style>

