import { createApp } from 'vue'
import { router } from '@/router'
import { pinia } from '@/store'

import '@/assets/css/global.css'
import App from './App.vue'

const app = createApp(App)

app.use(router).use(pinia)

app.mount('#app')
