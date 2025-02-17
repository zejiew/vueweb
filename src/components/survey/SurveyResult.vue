<template>
  <div class="survey-result">
    <div class="charts">
      <div class="chart-container">
        <h3>答题地区分布</h3>
        <pie-chart :data="locationData" />
      </div>
      <div class="chart-container">
        <h3>答题时间分布</h3>
        <line-chart :data="timeData" />
      </div>
    </div>
    
    <div class="response-list">
      <!-- 答题详情列表 -->
    </div>
  </div>
</template> 