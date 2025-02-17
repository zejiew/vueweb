import { faker } from '@faker-js/faker'

export const generateMockResponse = (survey) => {
  return {
    id: faker.string.uuid(),
    surveyId: survey.id,
    ip: faker.internet.ip(),
    userAgent: faker.internet.userAgent(),
    location: {
      country: faker.location.country(),
      city: faker.location.city(),
      latitude: faker.location.latitude(),
      longitude: faker.location.longitude()
    },
    submitTime: faker.date.recent(),
    answers: generateMockAnswers(survey.questions)
  }
}

const generateMockAnswers = (questions) => {
  // 根据问题类型生成随机答案
  // ...
} 