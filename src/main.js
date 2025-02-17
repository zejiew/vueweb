import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import i18n from './plugins/i18n'
import 'element-plus/dist/index.css'

const app = createApp(App)
const pinia = createPinia()

app.use(router)
   .use(pinia)
   .use(ElementPlus)
   .use(i18n)
   .mount('#app') 