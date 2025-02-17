<template>
  <el-config-provider :locale="locale">
    <div class="app-container">
      <el-header>
        <div class="header-content">
          <h1>{{ $t('survey.title') }}</h1>
          <language-switch />
        </div>
      </el-header>
      
      <el-main>
        <router-view />
      </el-main>
    </div>
  </el-config-provider>
</template>

<script setup>
import { ref } from 'vue'
import LanguageSwitch from '@/components/common/LanguageSwitch.vue'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import en from 'element-plus/lib/locale/lang/en'

const locale = ref(zhCn)
</script>

<style scoped>
.app-container {
  min-height: 100vh;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}
</style> 