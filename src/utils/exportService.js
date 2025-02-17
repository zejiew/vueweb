export const exportSurveyData = (surveyId) => {
  const survey = getSurveyData(surveyId)
  const responses = getResponses(surveyId)
  
  const exportData = {
    survey,
    responses,
    exportTime: new Date().toISOString(),
    summary: generateSummary(responses)
  }
  
  const blob = new Blob([JSON.stringify(exportData, null, 2)], 
    { type: 'application/json' })
  
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = `survey-${surveyId}-export.json`
  link.click()
} 