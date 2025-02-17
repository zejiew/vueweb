<template>
  <el-dropdown @command="handleLanguageChange">
    <span class="language-switch">
      {{ currentLanguageLabel }}
      <el-icon class="el-icon--right"><arrow-down /></el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="zh-CN">简体中文</el-dropdown-item>
        <el-dropdown-item command="en-US">English</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { ArrowDown } from '@element-plus/icons-vue'

const { locale } = useI18n()

const currentLanguageLabel = computed(() => {
  return locale.value === 'zh-CN' ? '简体中文' : 'English'
})

const handleLanguageChange = (lang) => {
  locale.value = lang
}
</script>

<style scoped>
.language-switch {
  cursor: pointer;
  display: flex;
  align-items: center;
}
</style> 