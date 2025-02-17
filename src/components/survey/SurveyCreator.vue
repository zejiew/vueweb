<template>
  <div class="survey-creator">
    <form @submit.prevent="saveSurvey">
      <input v-model="survey.title" placeholder="问卷标题" />
      
      <div v-for="(question, index) in survey.questions" :key="index">
        <select v-model="question.type">
          <option value="single">单选题</option>
          <option value="multiple">多选题</option>
          <option value="text">文本题</option>
        </select>
        <input v-model="question.content" placeholder="问题内容" />
        <!-- 选项编辑区域 -->
      </div>
      
      <button type="submit">保存问卷</button>
    </form>
  </div>
</template> 